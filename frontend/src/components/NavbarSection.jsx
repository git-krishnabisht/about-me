import { useState } from "react";

export function NavBarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-10 w-full border-t-2 border-b-2 border-black bg-blue-100 py-2 md:py-4 text-base md:text-xl font-medium px-5">
      <div className="flex flex-row justify-between items-center">
        {/* Navigation Links */}
        <div className="hidden md:flex flex-row gap-6">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About me
          </a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>
          {/* <a
            href="#experience"
            className="hover:text-blue-600 transition-colors"
          >
            Experience
          </a> */}
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
          <a href="#blog" className="hover:text-blue-600 transition-colors">
            Blogs
          </a>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div className="text-xl font-bold">K.S.B</div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
          <a href="#about" className="hover:text-blue-600" onClick={toggleMenu}>
            About me
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a href="#blog" className="hover:text-blue-600" onClick={toggleMenu}>
            Blog
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
