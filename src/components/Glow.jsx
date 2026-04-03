import { useState, useEffect } from "react";

const Glow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInViewport, setIsMouseInViewport] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsMouseInViewport(true);
    };

    const handleMouseEnter = () => setIsMouseInViewport(true);
    const handleMouseLeave = () => setIsMouseInViewport(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const glowStyle = {
    position: "fixed",
    top: mousePosition.y,
    left: mousePosition.x,
    width: "500px",
    height: "500px",
    background:
      "radial-gradient(circle, rgba(120, 120, 140, 0.18) 0%, rgba(80, 80, 100, 0.08) 45%, transparent 70%)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    opacity: isMouseInViewport ? 1 : 0,
    transition: "opacity 0.4s ease",
    pointerEvents: "none",
  };

  return <div className="pointer-events-none -z-30" style={glowStyle} />;
};

export default Glow;