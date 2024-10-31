import {
  IconHome,
  IconClock,
  IconMail,
  IconComponents,
  IconListCheck,
  IconDownload,
} from "@tabler/icons-react";

export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "home",
  },

  {
    title: "Experience",
    icon: (
      <IconClock className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "experience",
  },
  {
    title: "Projects",
    icon: (
      <IconComponents className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "projects",
  },
  {
    title: "skills",
    icon: (
      <IconListCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "skills",
  },

  {
    title: "Contact-me",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "contactme",
  },
  {
    title: "CV",
    icon: (
      <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
];
