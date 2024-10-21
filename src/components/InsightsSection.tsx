import Image from "next/image";
import Reveal from "./Animation";

export default function InsightsSection() {
  const insights = [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/card1.png",
      width: 336,
      height: 384,
    },
    {
      title: "Ut enim ad minim veniam",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/card2.png",
      width: 336,
      height: 384,
    },
    {
      title: "Duis aute irure dolor",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/card3.png",
      width: 336,
      height: 384,
    },
  ];

  return (
    <Reveal>
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-left">Latest Insights</h2>

          <div className="flex space-x-4">
            <div
              className="text-white w-12 h-12 flex items-center justify-center rounded-full"
              style={{ backgroundColor: "#EDEDED" }}
            >
              <Image
                src="/Arrow left.png"
                alt="previous"
                width={24}
                height={24}
              />
            </div>
            <div
              className="bg-gray-400 text-white w-12 h-12 flex items-center justify-center rounded-full"
              style={{ backgroundColor: "#EDEDED" }}
            >
              <Image src="/Arrow RIght.png" alt="next" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                backgroundImage: `url(${insight.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: `${insight.width}px`,
                height: `${insight.height}px`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-40"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {insight.title}
                </h3>
                <p className="text-gray-300">{insight.description}</p>
                <a
                  href="#"
                  className="text-blue-400 font-semibold mt-4 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     </Reveal>
  );
}
