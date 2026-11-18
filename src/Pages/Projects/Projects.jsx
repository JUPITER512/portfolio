import { ProjectCards } from "@components/ProjectsCards";
import { Section } from "@components/Section";

const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      subtitle="Full-stack apps, dashboards and tools I've designed and built. Click a card for details."
    >
      <ProjectCards />
    </Section>
  );
};

export default Projects;
