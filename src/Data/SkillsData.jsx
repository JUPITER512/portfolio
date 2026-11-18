import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRecoil,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiReacthookform,
  SiReactquery,
  SiGraphql,
  SiTailwindcss,
  SiSelenium,
} from "react-icons/si";
import { skillsIconColors } from "@data/Data.json";

const color = (key, fallback) => skillsIconColors[key] ?? fallback;

export const skillGroups = [
  {
    title: "Frontend",
    description: "Responsive, accessible interfaces and solid client state.",
    skills: [
      { Icon: FaReact, name: "React", color: color("react") },
      { Icon: FaJs, name: "JavaScript", color: color("js") },
      { Icon: FaHtml5, name: "HTML5", color: color("html") },
      { Icon: FaCss3Alt, name: "CSS3", color: color("css") },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: color("tailwindcss") },
      { Icon: SiRecoil, name: "Recoil", color: color("recoil") },
      { Icon: SiReactquery, name: "React Query", color: color("reactQuery") },
      { Icon: SiReacthookform, name: "React Hook Form", color: color("reactHookForm") },
    ],
  },
  {
    title: "Backend & Data",
    description: "APIs, databases and pipelines that handle real-world data.",
    skills: [
      { Icon: FaNodeJs, name: "Node.js", color: color("nodejs") },
      { Icon: SiExpress, name: "Express", color: "#e4e4e7" },
      { Icon: SiGraphql, name: "GraphQL", color: color("graphql") },
      { Icon: SiMongodb, name: "MongoDB", color: color("mongodb") },
      { Icon: SiMysql, name: "SQL", color: color("sql") },
      { Icon: FaPython, name: "Python", color: color("python") },
    ],
  },
  {
    title: "Tools & Automation",
    description: "Shipping, containerising and automating workflows.",
    skills: [
      { Icon: FaDocker, name: "Docker", color: color("docker") },
      { Icon: FaGitAlt, name: "Git", color: color("git") },
      { Icon: FaGithub, name: "GitHub", color: "#e4e4e7" },
      { Icon: SiSelenium, name: "Selenium", color: "#43B02A" },
    ],
  },
];
