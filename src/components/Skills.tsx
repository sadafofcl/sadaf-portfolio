import { Code2, Server, Wrench } from "lucide-react";

export default function SkillsSection({
  skills,
}: {
  skills: {
    title: string;
    icon: typeof Code2 | typeof Server | typeof Wrench;
    items: string[];
    gradient: string;
  }[];
}) {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-center lg:text-left text-slate-900 dark:text-slate-100">
          My Skills
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl italic mb-8 sm:mb-10 max-w-xl text-center lg:text-left text-slate-600 dark:text-slate-400">
          Here are some of the technologies and tools I have experience with...
        </p>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items, gradient }) => (
            <div
              key={title}
              className={`
                group relative overflow-hidden rounded-3xl p-5 sm:p-6 md:p-8
                bg-linear-to-br ${gradient}
                border border-slate-200/60 dark:border-white/10
                backdrop-blur-lg
                shadow-sm hover:shadow-xl
                transition-all duration-300 hover:-translate-y-1
              `}
            >
              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0
                group-hover:opacity-100 transition
                bg-linear-to-br from-white/10 to-transparent
                dark:from-white/5" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-4 sm:mb-6 relative z-10">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl
                  bg-white/80 dark:bg-white/10
                  backdrop-blur shadow">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-700 dark:text-pink-400" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 relative z-10">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-sm sm:text-base font-medium
                      bg-white/70 dark:bg-white/10
                      text-slate-800 dark:text-slate-200
                      shadow-sm
                      transition-transform group-hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
