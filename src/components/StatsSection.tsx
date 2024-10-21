import Reveal from "./Animation";

export default function StatsSection() {
  return (
    <Reveal>
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Lorem ipsum dolor sit amet, consectetur
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
              congue non sem et efficitur. Donec in dolor nec tellus iaculis
              sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non
              convallis accumsan, nibh odio gravida felis, vitae mollis massa
              lectus a neque. Mauris mollis elit quis iaculis iaculis.
              Vestibulum molestie nisl eget aliquet scelerisque. Vivamus
              efficitur dui eget velit interdum, non dapibus nisi fringilla.
              Mauris fermentum venenatis volutpat. Quisque efficitur ultricies
              erat eget rutrum. Phasellus feugiat quam eget est dapibus, non
              eleifend justo fermentum. Sed et commodo arcu, id euismod dui.
            </p>
          </div>
          <div className="md:w-1/3 md:border-l md:border-gray-300 md:pl-8">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Lorem ipsum</h2>
              <p className="text-gray-600 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Fusce non
                venenatis velit. Proin luctus malesuada mauris vitae mattis.
                Pellentesque iaculis elit lorem.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Lorem ipsum</h2>
              <p className="text-gray-600 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Fusce non
                venenatis velit. Proin luctus malesuada mauris vitae mattis.
                Pellentesque iaculis elit lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
