import { useState } from "react"; 
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent shadow-sm relative w-full z-10">
      <div className="flex items-center justify-between w-[90%] mx-auto py-4">
        <div className="flex-shrink-0">
          <Image src="/Logo.png" alt="DEMO" width={100} height={40} priority />
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8 text-white">
          <Link href="#" className="text-white text-sm md:text-base hover:text-gray-300">
            About Us
          </Link>
          <Link href="#" className="text-white text-sm md:text-base hover:text-gray-300">
            How We Help
          </Link>
          <Link href="#" className="text-white text-sm md:text-base hover:text-gray-300">
            Pricing
          </Link>
          <Link href="#" className="text-white text-sm md:text-base hover:text-gray-300">
            Portfolios
          </Link>
          <Link href="#" className="text-white text-sm md:text-base hover:text-gray-300">
            Testimonials
          </Link>
          <Link href="#" className="text-white text-sm md:text-base hover:text-gray-300">
            Insights
          </Link>
        </nav>

        <div className="hidden md:flex flex-shrink-0">
          <button className="bg-white text-black-600 border px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-20 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed left-0 top-0 w-64 h-full bg-gray-900 text-white transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <Link href="#" className="hover:text-gray-300 text-sm md:text-base">
              About Us
            </Link>
            <Link href="#" className="hover:text-gray-300 text-sm md:text-base">
              How We Help
            </Link>
            <Link href="#" className="hover:text-gray-300 text-sm md:text-base">
              Pricing
            </Link>
            <Link href="#" className="hover:text-gray-300 text-sm md:text-base">
              Portfolios
            </Link>
            <Link href="#" className="hover:text-gray-300 text-sm md:text-base">
              Testimonials
            </Link>
            <Link href="#" className="hover:text-gray-300 text-sm md:text-base">
              Insights
            </Link>
            <Link href="#" className="hover:text-gray-300 text-sm md:text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
