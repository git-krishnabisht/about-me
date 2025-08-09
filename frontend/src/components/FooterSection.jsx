export function Footer({ theme }) {
  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        border: "border-green-400/20",
        gradient: "bg-gradient-to-r from-green-400 to-emerald-300",
        text: "text-green-300/70",
        smallText: "text-green-300/60"
      };
    } else {
      return {
        border: "border-blue-400/20",
        gradient: "bg-gradient-to-r from-blue-400 to-indigo-300",
        text: "text-blue-300/70",
        smallText: "text-blue-300/60"
      };
    }
  };

  const classes = getThemeClasses();

  return (
    <footer className={`relative z-10 bg-gradient-to-t from-black via-gray-950 to-transparent border-t ${classes.border} backdrop-blur-sm py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <p className={`text-lg sm:text-xl font-bold ${classes.gradient} bg-clip-text text-transparent`}>
              Krishna S. Bisht
            </p>
            <p className={`text-xs sm:text-sm ${classes.text}`}>upcoming CEO of meta</p>
          </div>
          <div className={`text-xs sm:text-sm ${classes.smallText}`}>
            © {new Date().getFullYear()} Krishna S. Bisht. No rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}



