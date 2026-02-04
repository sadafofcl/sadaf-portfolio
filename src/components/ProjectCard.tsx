interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  cta?: string;
  reverse?: boolean;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  image,
  cta,
  reverse = false,
  link,
}: ProjectCardProps) {
  return (
    <div
      className={`
        flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}
        items-center gap-8 sm:gap-10 rounded-3xl p-6 sm:p-8
        bg-linear-to-br
        from-pink-500/10 via-purple-500/10 to-indigo-500/10
        dark:from-pink-500/20 dark:via-purple-500/15 dark:to-indigo-500/15
        backdrop-blur-sm
        border border-slate-200/60 dark:border-white/10
        shadow-md hover:shadow-lg
        transition-shadow duration-300
      `}
    >

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="
            w-3/4 sm:w-2/3
            md:w-[85%]
            lg:w-[70%]
            xl:w-[60%]
            max-w-sm
            rounded-3xl
            object-contain
          "
        />
      </div>


      <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
        <p className="uppercase tracking-widest text-sm mb-2 text-slate-500 dark:text-slate-400">
          {category}
        </p>

        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 leading-snug text-slate-900 dark:text-slate-100">
          {title}
        </h3>

        <p className="mb-6 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          {description}
        </p>

        {cta && link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-2 rounded-full
              bg-pink-900 dark:bg-pink-600
              text-white
              transition-transform duration-300
              hover:scale-[1.03]
            "
          >
            {cta}
            <span>→</span>
          </a>
        )}
      </div>
    </div>
  );
}
