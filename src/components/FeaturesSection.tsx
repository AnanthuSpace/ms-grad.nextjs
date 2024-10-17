import Image from "next/image"

export default function FeaturesSection() {
  const images = [
    { src: '/placeholder.svg?height=400&width=600', alt: 'Image 1' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Image 2' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Image 3' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Image 4' },
  ]

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-left text-gray-800">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
        <div className="w-4/5 h-4/5 mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-xl font-bold text-white mb-2">Consectetur adipiscing elit</h2>
                  <p className="text-white text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
