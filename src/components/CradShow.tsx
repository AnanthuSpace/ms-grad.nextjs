export default function CradShow() {
  const cards = [
    {
      number: '01',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.',
    },
    {
      number: '02',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.',
    },
    {
      number: '03',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="relative mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Lorem Ipsum</h1>
        <p className="text-gray-600 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
          habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae
          mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum.
        </p>
      </div>
      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] p-6 rounded-lg ${
              index === 2 ? 'bg-sky-950 text-white' : 'bg-cyan-50 text-gray-800'
            }`}
          >
            <div className="text-2xl font-bold mb-4">{card.number}</div>
            <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
            <p className={index === 2 ? 'text-gray-100' : 'text-gray-600'}>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}