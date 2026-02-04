import Image from "./Image";

export default function Hero({
  name,
  position,
  company,
  heroImageSrc
}: {
  name: string;
  position: string;
  company: string;
  heroImageSrc: string;
}) {
  return (
    <section
      id="hero"
      className="pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
    >

      <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">

        <div className="flex justify-center lg:justify-start w-full lg:w-auto">
          <Image
            src={heroImageSrc}
            tailwind="object-contain h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72"
          />
        </div>

        {/* Text */}
        <div className="text-center lg:text-left max-w-xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight md:leading-tight text-slate-900 dark:text-slate-100">
            Hey, I&apos;m{" "}
            <span className="text-pink-900 dark:text-pink-400">{name}</span>
          </h1>

          <p className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
            <span className="text-pink-900 dark:text-pink-400">{position}</span>{" "}
            at
          </p>

          <p className="mt-1 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
            {company}.
          </p>
        </div>

      </div>
    </section>
  );
}
