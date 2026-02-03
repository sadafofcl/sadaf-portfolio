import Image from './Image.tsx';

export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-8 md:px-12"
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between py-6 lg:py-12 gap-6 lg:gap-12">

        {/* Text */}
        <div className="text-center lg:text-left max-w-xl order-1 lg:order-1">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100">
            A bit <span className="text-pink-900 dark:text-pink-400">about me</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-lg sm:text-xl italic text-gray-600 dark:text-gray-400">
            Hi, I{"'"}m{" "}
            <span className="text-gray-900 dark:text-gray-100 font-bold">
              Sadaf
            </span>
            , a{" "}
            <span className="text-gray-900 dark:text-gray-100 font-bold">
              software developer intern
            </span>{" "}
            passionate about building efficient, scalable, and maintainable
            applications. I enjoy tackling complex problems, learning new
            technologies, and turning ideas into functional, high-quality
            solutions.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center relative mb-6 lg:mb-0 order-2 lg:order-2">
          <Image
            src="./aboutImg.png"
            width={300} 
            height={300}
            tailwind="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
