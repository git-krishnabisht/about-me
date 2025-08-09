import { useState } from "react";


export function NavBarSection({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        border: "border-green-400/20",
        text: "text-green-200",
        hover: "hover:text-green-100",
        gradient: "bg-gradient-to-r from-green-400 to-emerald-300"
      };
    } else {
      return {
        border: "border-blue-400/20",
        text: "text-blue-200",
        hover: "hover:text-blue-100",
        gradient: "bg-gradient-to-r from-blue-400 to-indigo-300"
      };
    }
  };

  const classes = getThemeClasses();

  return (
    <div className={`sticky top-0 z-50 w-full border-t border-b ${classes.border} backdrop-blur-md bg-black/50 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40`}>
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="hidden md:flex flex-row gap-4 lg:gap-8">
          <a href="#about" className={`${classes.text} ${classes.hover} transition-colors duration-300`}>
            About me
          </a>
          <a href="#projects" className={`${classes.text} ${classes.hover} transition-colors duration-300`}>
            Projects
          </a>
          <a href="#skills" className={`${classes.text} ${classes.hover} transition-colors duration-300`}>
            Skills
          </a>
          <a href="#contact" className={`${classes.text} ${classes.hover} transition-colors duration-300`}>
            Contact
          </a>
          <a href="#blog" className={`${classes.text} ${classes.hover} transition-colors duration-300`}>
            Blogs
          </a>
        </div>

        <button className={`md:hidden ${classes.text}`} onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${theme === 'green' ? 'bg-green-500/20 border border-green-400/30 text-green-300 hover:bg-green-500/30' : 'bg-blue-500/20 border border-blue-400/30 text-blue-300 hover:bg-blue-500/30'}`}
            title="Toggle Theme"
          >
            {theme === 'green' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <div className={`text-lg sm:text-xl font-bold ${classes.gradient} bg-clip-text text-transparent`}>K.S.B</div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden mt-4 flex flex-col gap-4 pb-4 border-t ${classes.border} pt-4`}>
          <a href="#about" className={`${classes.text} ${classes.hover} transition-colors`} onClick={toggleMenu}>
            About me
          </a>
          <a href="#projects" className={`${classes.text} ${classes.hover} transition-colors`} onClick={toggleMenu}>
            Projects
          </a>
          <a href="#skills" className={`${classes.text} ${classes.hover} transition-colors`} onClick={toggleMenu}>
            Skills
          </a>
          <a href="#blog" className={`${classes.text} ${classes.hover} transition-colors`} onClick={toggleMenu}>
            Blog
          </a>
          <a href="#contact" className={`${classes.text} ${classes.hover} transition-colors`} onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
}



