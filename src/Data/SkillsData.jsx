import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDocker,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiRecoil,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiReacthookform,
  SiReactquery,
  SiGraphql,
} from "react-icons/si";

import { skillsIconColors } from "@data/Data.json";
export const iconColors = skillsIconColors;

export const icons = [
  { Icon: FaHtml5, name: "html" },
  { Icon: FaCss3Alt, name: "css" },
  { Icon: FaJs, name: "js" },
  { Icon: FaReact, name: "react" },
  { Icon: SiRecoil, name: "recoil" },
  { Icon: FaDocker, name: "docker" },
  { Icon: FaGithub, name: "github" },
  { Icon: FaNodeJs, name: "nodejs" },
  { Icon: SiExpress, name: "express" },
  { Icon: SiMongodb, name: "mongodb" },
  { Icon: SiMysql, name: "sql" },
  { Icon: SiReacthookform, name: "reactHookForm" },
  { Icon: SiReactquery, name: "reactQuery" },
  { Icon: SiGraphql, name: "graphql" },
];
