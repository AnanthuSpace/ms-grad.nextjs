import Image from "next/image";
import Reveal from "./Animation";

export default function FeaturesSection() {
  const images = [
    { src: "/Rectangle1.png?height=400&width=600", alt: "Image 1" },
    { src: "/Rectangle4.png?height=400&width=600", alt: "Image 2" },
    { src: "/Rectangle2.png?height=400&width=600", alt: "Image 3" },
    { src: "/Rectangle3.png?height=400&width=600", alt: "Image 4" },
  ];

  return (
    <div className="min-h-screen bg-gray-200 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-left text-gray-800">
          Lorem ipsum dolor sit amet, <br className="hidden sm:block" /> consectetur
        </h1>
        <div className="h-auto mx-auto mb-6">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video overflow-hidden rounded-lg shadow-md"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Consectetur adipiscing elit
                    </h2>
                    <p className="text-xs sm:text-sm text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis velit nulla. In hac habitasse platea dictumst.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
