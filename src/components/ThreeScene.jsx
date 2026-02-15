import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(false);

  useEffect(() => {
    hoverRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    // --- 1. SETUP ---
    const scene = new THREE.Scene();
    
    // No Fog needed here as the container is small and specific
    
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // High pixel ratio for sharp edges on the small circle
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
    
    // --- 2. LIGHTING (Adjusted for Grey Background) ---
    // We need strong lights to make the "Silver" material pop against the grey background
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Brighter ambient
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);
    
    const backLight = new THREE.DirectionalLight(0xaaccff, 1); // Blueish rim light
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    // --- 3. OBJECTS ---
    
    // INNER CORE: CHANGED to "Polished Silver"
    // Use clear/white color with high metalness to reflect light. 
    // This makes it look bright against the dark grey background.
    const geometryCore = new THREE.IcosahedronGeometry(1.4, 0); 
    const materialCore = new THREE.MeshStandardMaterial({ 
      color: 0X000fff, // White base
      roughness: 0,       // Very smooth (shiny)
      metalness: 0.2,       // Metallic look
      flatShading: true     // Faceted diamond look
    });
    const core = new THREE.Mesh(geometryCore, materialCore);
    scene.add(core);

    // OUTER SHELL: CHANGED to "Dark Graphite"
    // Since the background is grey, a dark wireframe provides the best contrast.
    const geometryShell = new THREE.IcosahedronGeometry(1.45, 1); 
    const materialShell = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,      // Dark grey/Black lines
      wireframe: true,
      transparent: true,
      opacity: 0.6          // Visible but not overpowering
    });
    const shell = new THREE.Mesh(geometryShell, materialShell);
    scene.add(shell);

    // SIZE HANDLER
    const updateSize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight || width;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    updateSize();
    mountRef.current.appendChild(renderer.domElement);
    camera.position.z = 3.5; // Zoomed in slightly to fill the circle

    // --- 4. ANIMATION LOOP ---
    let animationId;
    let currentScale = 1;
    let targetScale = 1;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const hovered = hoverRef.current;

      // Hover Logic
      if (hovered) {
        targetScale = 1.25; 
      } else {
        targetScale = 1; 
      }

      // Smooth Animation (Lerp)
      currentScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);
      shell.scale.set(currentScale, currentScale, currentScale);

      // Rotation
      core.rotation.y += 0.005;
      core.rotation.x += 0.002;
      
      // Shell rotates opposite for "mechanical" feel
      shell.rotation.y -= 0.005;
      shell.rotation.x -= 0.002;

      renderer.render(scene, camera);
    };
    
    animate();

    // --- 5. CLEANUP ---
    const handleResize = () => updateSize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometryCore.dispose();
      materialCore.dispose();
      geometryShell.dispose();
      materialShell.dispose();
      renderer.dispose();
    };
  }, []); 

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full cursor-pointer" // Uses parent size (h-60 w-60)
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    />
  );
};

export default ThreeScene;