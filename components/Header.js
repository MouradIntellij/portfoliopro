import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="flex justify-center p-6">
        <ul className="flex space-x-10">
          <li>
            <Link
              href="#home"
              className="text-gray-200 hover:text-white text-xl md:text-2xl transition-colors duration-300"
            >
              // home <sup className="text-sm">01</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-gray-200 hover:text-white text-xl md:text-2xl transition-colors duration-300"
            >
              // expertise <sup className="text-sm">02</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-gray-200 hover:text-white text-xl md:text-2xl transition-colors duration-300"
            >
              // work <sup className="text-sm">03</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-gray-200 hover:text-white text-xl md:text-2xl transition-colors duration-300"
            >
              // experience <sup className="text-sm">04</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-gray-200 hover:text-white text-xl md:text-2xl transition-colors duration-300"
            >
              // contact <sup className="text-sm">05</sup>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
