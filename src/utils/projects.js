import osp from "../assets/images/osp.webp";
import lrucache from "../assets/images/lrucache.webp";
import vidhyadhan from "../assets/images/vidhyadhan.webp";
const data = [
  {
    name: "Online Scholarship Portal",
    type: "WebApp",
    url: "#",
    github: "https://github.com/VraJ-594/OSP",
    image: osp,
    slug: "online-scholarship-portal",
    description:
      "Directed a 12-person team to build a full-stack platform using React.js, Node.js, Express.js, and PostgreSQL.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    name: "LRU Cache System Design",
    type: "System Design",
    url: "#",
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
    url: "#",
    github: "https://github.com/VraJ-594/Vidhyadhan_DBMS_Project",
    image: vidhyadhan,
    slug: "vidhyadhan",
    description:
      "Modeled a normalized relational database in PostgreSQL for a scholarship platform; enforced BCNF using SQL.",
    tech: ["PostgreSQL", "PG Admin"],
  },
];

export function getData() {
  return data;
}
