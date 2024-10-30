import { ProjectCards } from "@components/ProjectsCards";
const Projects = () => {
  return (
    <div id="projects" className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Projects Highlight.
          </h2>
      <ProjectCards />
    </div>
  );
};

export default Projects;
