import { contentData } from "@data/Data.json";

const { systemsLimited, upwork, bitbash } = contentData;

// Newest first
export const experience = [
  {
    ...systemsLimited,
    highlights: [],
    tags: systemsLimited.projects,
  },
  {
    ...upwork,
    highlights: [],
    tags: ["Python", "Selenium", "Pycord", "API Integration", "Data Mining"],
  },
  {
    ...bitbash,
    highlights: bitbash.achievements,
    tags: ["Python", "JavaScript", "React", "Selenium", "APIs"],
  },
];
