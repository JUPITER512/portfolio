import { project_cards } from "@data/Data.json";

export const cards = project_cards.map((item) => ({
  title: item.title,
  tech: item.description,
  src: item.src,
  content: item.content,
  link: item.ctaLink || null,
  isPrivate: !item.ctaLink,
}));
