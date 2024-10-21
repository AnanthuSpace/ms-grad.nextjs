import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export function Footer() {
  const icons = ["/footer1.png", "/footer2.png", "/footer3.png"];

  return (
    <footer className="bg-[#002A3A] text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center md:gap-6">
          <h2 className="text-xl font-semibold mb-4 md:mb-0">Quick Links</h2>
          <nav className="flex flex-wrap gap-4">
            {["Home", "About Us", "Pricing", "Portfolios", "Insights"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
        <hr className="mb-8 border-gray-600" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-r border-gray-600 pr-4 md:pr-0">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex items-center mb-4 p-3 rounded justify-start"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
              >
                <Image
                  src={icon}
                  alt={`icon ${index + 1}`}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <p className="text-gray-300">Lorem ipsum dolor sit amet</p>
              </div>
            ))}
          </div>

          <div className="border-r border-gray-600 pr-4 md:pr-0">
            {["Lorem", "Ipsum", "Consectetur", "Efficitur"].map((item) => (
              <div
                key={item}
                className="mb-4 p-3 rounded justify-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
              >
                <p className="text-center text-gray-300">{item}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2 text-gray-300">
              Lorem ipsum, Iso lorem,
              <br />
              Iso Lorem Posum
            </p>
            <p className="mb-2 text-gray-300">+91 00000 00000</p>
            <p className="mb-4 text-gray-300">info@demo.com</p>
            <p className="mb-2">Follow us on</p>
            <div className="flex flex-wrap space-x-4">
              {[Facebook, Twitter, Linkedin, Youtube, Instagram].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Icon size={20} />
                    <span className="sr-only">{Icon.name}</span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            ©2024 Demo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
