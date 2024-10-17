import Image from "next/image";
import dynamic from "next/dynamic";

export default function HeroSection() {
  const NavBar = dynamic(() => import("./Navbar"));

  return (
    <div className="relative h-screen">
      <NavBar />
      <Image
        src="/MainIMG.png"
        alt="Graduates taking selfie"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0"
      />

      <div className="absolute inset-0 flex items-end justify-start px-4 md:px-24 mb-28">
        <div className="text-left text-white max-w-6xl w-full">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-12 leading-tight">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-base md:text-xl mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec mattis velit
            nulla. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </div>
  );
}
