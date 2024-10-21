import Image from "next/image";
import Reveal from "./Animation";

export default function CareerSection() {
  return (
    <Reveal>
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px] w-full overflow-hidden">
        <Image
          src="/Last.png?height=600&width=800"
          alt="People working together"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 z-10"></div>
        <div className="relative z-20 h-full flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start text-center sm:text-left sm:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
              Let’s work together
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-8 max-w-xl sm:max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare
              tristique euismod arcu tristique nisi id nibh. Viverra feugiat viverra.
            </p>
          </div>

          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
              View Vacancies
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
