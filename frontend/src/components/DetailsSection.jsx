//import profileimage from "../assets/profile_image.png";

export function DetailsSection({ theme }) {
  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        gradient: "bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400",
        text: "text-green-200/80",
        icon: "text-green-300 hover:text-green-100",
        circle: "bg-gradient-to-br from-green-400/20 to-emerald-500/20",
        border: "border-green-400/30",
        shadow: "shadow-green-400/20",
        innerCircle: "bg-green-400/10",
        innerText: "text-green-300"
      };
    } else {
      return {
        gradient: "bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400",
        text: "text-blue-200/80",
        icon: "text-blue-300 hover:text-blue-100",
        circle: "bg-gradient-to-br from-blue-400/20 to-indigo-500/20",
        border: "border-blue-400/30",
        shadow: "shadow-blue-400/20",
        innerCircle: "bg-blue-400/10",
        innerText: "text-blue-300"
      };
    }
  };

  const classes = getThemeClasses();

  return (
    <div className="relative z-10 pb-6 pt-6 sm:pt-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
      <div className="flex flex-col-reverse gap-8 md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* left side */}
        <div className="flex flex-col text-center md:text-left">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${classes.gradient} bg-clip-text text-transparent leading-tight`}>
            Krishna S. Bisht
          </h1>
          <p className={`text-sm sm:text-base md:text-lg ${classes.text} mt-3 sm:mt-4 leading-relaxed`}>
            Fullstack web developer, etc.
          </p>
          <div className="flex flex-row gap-4 sm:gap-6 mt-6 justify-center md:justify-start">
            <a href="https://github.com/git-krishnabisht" className="group">
              <div className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center ${classes.icon} transition-all duration-300 group-hover:scale-110`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-lg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>
            <a href="https://x.com/narendramodi" className="group">
              <div className={`w-6 h-5 sm:w-7 sm:h-6 flex items-center justify-center ${classes.icon} transition-all duration-300 group-hover:scale-110`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-full h-full drop-shadow-lg">
                  <path d="M714 594.4L1176.6 0H1071L663.8 528.1 309.4 0H0l496.2 722.9L23.5 1227h115.7l428.1-558.4L901.4 1227h309.4L714 594.4z" />
                </svg>
              </div>
            </a>
            <a href="https://x.com/MIT_CSAIL/status/1363172815315214336" className="group">
              <div className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center ${classes.icon} transition-all duration-300 group-hover:scale-110`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-lg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* right side */}
        {/* <div className=""> */}
        {/*   <div className={`w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] ${classes.circle} rounded-full border ${classes.border} shadow-2xl ${classes.shadow} backdrop-blur-sm flex items-center justify-center`}> */}
        {/*     <div className={`w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] lg:w-[190px] lg:h-[190px] ${classes.innerCircle} rounded-full flex items-center justify-center ${classes.innerText} text-xl sm:text-2xl md:text-3xl font-bold`}> */}
        {/*       KSB */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
