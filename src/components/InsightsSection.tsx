import Image from 'next/image'

export default function InsightsSection() {
  const insights = [
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/insight1.jpg',
    },
    {
      title: 'Ut enim ad minim veniam',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/insight2.jpg',
    },
    {
      title: 'Duis aute irure dolor',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '/insight3.jpg',
    },
  ]

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src={insight.image}
                alt={insight.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                <p className="text-gray-600">{insight.description}</p>
                <a href="#" className="text-blue-600 font-semibold mt-4 inline-block">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}