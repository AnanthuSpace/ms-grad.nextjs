import Image from "next/image";
import { Play } from "lucide-react";
import Reveal from "./Animation";

export default function GraduateShowcase() {
  return (
    <Reveal>
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/Collage.png?height=1080&width=1920"
          alt="Aerial view of campus"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>

        <div className="relative z-20 container mx-auto px-4 flex flex-col md:flex-row justify-between w-full max-w-[80rem] h-[400px] md:h-auto">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lorem Ipsum
              <br />
              dolor sit consectetur
            </h1>
            <p className="text-gray-700 max-w-lg pt-5 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
              velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
              velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
              iaculis elit lorem, et varius ipsum dictum.
            </p>
          </div>
          <div className="md:w-2/6 flex justify-end">
            <div className="bg-white rounded-lg shadow-xl p-2 max-w-md relative">
              <h2 className="absolute text-2xl font-semibold text-gray-900 z-20">
                Lorem Ipsum?
              </h2>
              <div className="relative aspect-video rounded-lg overflow-hidden h-full md:h-[20rem] w-full top-8">
                <Image
                  src="/collageSutudentCard.png"
                  alt="Graduate in cap and gown"
                  width={430}
                  height={450}
                  objectFit="cover"
                  className="object-cover"
                />
                <h2 className="absolute bottom-10 text-xl font-semibold text-black p-2 rounded z-20">
                  Lorem Ipsum?
                </h2>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full hover:bg-gray-200 transition-colors z-20"
                  aria-label="Play video"
                >
                  <Play size={24} />
                </button>
              </div>
              <p className="absolute bottom-4 text-sm text-gray-700 p-2 rounded z-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
