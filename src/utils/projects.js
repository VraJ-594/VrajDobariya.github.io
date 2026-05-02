import osp from "../assets/images/osp.webp";
import lrucache from "../assets/images/lrucache.webp";
import apigateway from "../assets/images/api-gateway-go.webp";
import vidhyadhan from "../assets/images/vidhyadhan.webp";
import infinitode from "../assets/images/infinitodeautobot.webp";

const data = [
  {
    name: "Online Scholarship Portal",
    type: "WebApp",
    github: "https://github.com/VraJ-594/OSP",
    image: osp,
    slug: "online-scholarship-portal",
    description:
      "Directed a 12-person team to build a full-stack platform using React.js, Node.js, Express.js, and PostgreSQL.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    name: "Concurrent API Gateway",
    type: "Systems Engineering",
    github: "https://github.com/VraJ-594/api-gateway-go",
    image: apigateway,
    slug: "api-gateway",
    description:
      "A high-performance, concurrent API Gateway built from scratch in Go, featuring dynamic routing, token-bucket rate limiting, and self-healing round-robin load balancing.",
    tech: ["Go", "Concurrency", "Load Balancing", "Microservices"],
  },
    {
    name: "LRU Cache System Design",
    type: "System Design",
    github: "https://github.com/VraJ-594/LRU_Cache_Java",
    image: lrucache,
    slug: "lru-cache",
    description:
      "Constructed a scalable, thread-safe LRU Cache in Java using HashMap + Doubly Linked List with O(1) operations.",
    tech: ["Java", "OOPS", "Concurrency"],
  },
  {
    name: "VidhyaDhan",
    type: "Scholarship Management System",
    github: "https://github.com/VraJ-594/Vidhyadhan_DBMS_Project",
    image: vidhyadhan,
    slug: "vidhyadhan",
    description:
      "Modeled a normalized relational database in PostgreSQL for a scholarship platform; enforced BCNF using SQL.",
    tech: ["PostgreSQL", "PG Admin"],
  },
  {
    name: "Infinitode Auto Bot Stage 6.3",
    type: "Automating Game Bot",
    github: "https://github.com/VraJ-594/Infinitode-Automation",
    image: infinitode,
    slug: "infinitode-auto-bot",
    description:
      "An automated game bot for Infinitode 2 game stage 6.3, designed to automate the resources gaining process.",
    tech: ["Python", "Game Automation"],
  },
];

export function getData() {
  return data;
}