import ProjectCard from "./ProjectCard";

export default function Projects({
  projects,
}: {
  projects: {
    title: string;
    description: string;
    category: string;
    image: string;
    cta?: string;
    reverse?: boolean;
    link?: string;
  }[];
}) {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 text-center lg:text-left
          text-slate-900 dark:text-slate-100">
          Projects
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl italic mb-8 sm:mb-10 max-w-xl text-center lg:text-left text-slate-600 dark:text-slate-400">
          Here are some of the projects I&apos;ve worked on—each one tells a story of learning and creativity.
        </p>

        {/* Project Cards */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
