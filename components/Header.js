import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="flex justify-center p-6">
        <ul className="flex space-x-10">
          <li>
            <Link
              href="#home"
              className="text-amber-700 hover:text-fuchsia-600 text-xl md:text-3xl transition-colors duration-600"
            >
              /\ Home <sup className="text-sm">01</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-amber-700 hover:text-fuchsia-600 text-xl md:text-3xl transition-colors duration-600"
            >
              /\ Expertise <sup className="text-sm">02</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-amber-700 hover:text-fuchsia-600 text-xl md:text-3xl transition-colors duration-600"
            >
              /\ Work <sup className="text-sm">03</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-amber-700 hover:text-fuchsia-600 text-xl md:text-3xl transition-colors duration-600"
            >
              /\ Experience <sup className="text-sm">04</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-amber-700 hover:text-fuchsia-600 text-xl md:text-3xl transition-colors duration-600"
            >
              /\ Contact <sup className="text-sm">05</sup>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
