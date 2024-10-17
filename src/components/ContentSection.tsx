import Image from 'next/image';

export default function ContentSection() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-xl shadow-lg">
        <div className="relative w-full h-96"> 
          <Image
            src="/SecondIMG.png"
            alt="Graduates celebrating"
            layout="fill"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
