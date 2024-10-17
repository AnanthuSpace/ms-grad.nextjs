import Image from 'next/image'
import { Play } from 'lucide-react'

export default function GraduateShowcase() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Aerial view of campus"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lorem Ipsum<br />dolor sit consectetur
          </h1>
          <p className="text-gray-700 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit
            nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin
            luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et
            varius ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
            iaculis elit lorem, et varius ipsum dictum.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lorem Ipsum?</h2>
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Graduate in cap and gown"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lorem Ipsum</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis velit nulla. In hac habitasse platea
              dictumst. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <button
              className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Play video"
            >
              <Play size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}