import Image from 'next/image';
import Reveal from './Animation';

export default function ContentSection() {
  return (
    <div className="flex items-center justify-center h-[100vh] px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-xl shadow-lg">
        <Reveal>
          <div className="relative w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/SecondIMG.png"
              alt="Graduates celebrating"
              layout="fill"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
