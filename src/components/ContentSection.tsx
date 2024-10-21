import Image from "next/image";
import Reveal from "./Animation";

export default function ContentSection() {
  return (
    <div className="flex items-center justify-center h-[100vh] px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-xl shadow-lg">
        <Reveal>
          <div className="relative w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/SecondIMG.png"
              alt="Graduates celebrating"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 text-white">
              <div className="flex flex-col items-start space-y-2 p-20">
                <button className="w-14 h-14 rounded-full bg-white overflow-hidden shadow-lg flex items-center justify-center mb-5">
                  <Image
                    src="/Arrow RIght.png"
                    alt="Play"
                    width={60}
                    height={60}
                  />
                </button>
                <div className="text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-5">
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <p className="text-xl md:text-2xl font-semibold mb-2">
                    Sanchez Alexis
                  </p>
                  <p className="text-base md:text-lg text-gray-300">
                    CEO & Founder of Demo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
