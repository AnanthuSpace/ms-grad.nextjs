export default function InsightsSection() {
  const insights = [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/card1.png",
      width: "w-84", // Custom width (Tailwind class)
      height: "h-96", // Custom height (Tailwind class)
    },
    {
      title: "Ut enim ad minim veniam",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/card2.png",
      width: "w-84",
      height: "h-96",
    },
    {
      title: "Duis aute irure dolor",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/card3.png",
      width: "w-84",
      height: "h-96",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-lg overflow-hidden shadow-md ${insight.width} ${insight.height}`}
              style={{
                backgroundImage: `url(${insight.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Text content */}
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
  );
}
