import Reveal from "./Animation";

export default function StatisticsBar() {
  const stats = [
    { value: "8Years", label: "of Success" },
    { value: "200+", label: "Members" },
    { value: "155+", label: "All Over The USA" },
    { value: "200k", label: "Satisfied Clients" },
  ];

  return (
    <Reveal>
      <div className="w-full max-w-6xl mx-auto bg-white p-6 mt-3 mb-3">
        <div className="flex flex-wrap justify-between items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center text-center px-4 py-2 relative mt-5"
            >
              <span className="text-2xl md:text-3xl font-bold text-gray-800">
                {stat.value}
              </span>
              <span className="text-lg md:text-2xl text-black-600 mt-1">
                {stat.label}
              </span>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-px h-12 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
