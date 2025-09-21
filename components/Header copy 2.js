import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="flex justify-center p-4">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="#home"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
               home <sup className="text-xs">01</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
               expertise <sup className="text-xs">02</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
               work <sup className="text-xs">03</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
               experience <sup className="text-xs">04</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
               contact <sup className="text-xs">05</sup>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
