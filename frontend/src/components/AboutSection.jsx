import { useEffect, useRef } from "react";
import { useState } from "react";

export function AboutSection({ theme }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tooltipRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target) &&
        textRef.current &&
        !textRef.current.contains(event.target)
      ) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        gradient: "bg-gradient-to-r from-green-400 to-emerald-300",
        border: "border-green-400/30",
        text: "text-green-200/90",
        dot: "bg-green-400 shadow-green-400/50",
        cardBg: "bg-white/5 border-green-400/20",
        cardText: "text-green-300",
        tooltip: "bg-green-900/90 border-green-400/30 text-green-100",
        link: "text-green-400",
        button: "bg-green-600"
      };
    } else {
      return {
        gradient: "bg-gradient-to-r from-blue-400 to-indigo-300",
        border: "border-blue-400/30",
        text: "text-blue-200/90",
        dot: "bg-blue-400 shadow-blue-400/50",
        cardBg: "bg-white/5 border-blue-400/20",
        cardText: "text-blue-300",
        tooltip: "bg-blue-900/90 border-blue-400/30 text-blue-100",
        link: "text-blue-400",
        button: "bg-blue-600"
      };
    }
  };

  const classes = getThemeClasses();

  return (
    <section id="about" className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 border-b-2 ${classes.border} pb-3 sm:pb-4 ${classes.gradient} bg-clip-text text-transparent`}>
          About me
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="lg:w-2/3">
            <div className={`${classes.text} mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed`}>
              <p className="mb-4">Hey! Welcome.</p>
              <p className="mb-4">
                I’m Krish - a freshly minted computer science graduate.
              </p>
            </div>
            <p className={`${classes.text} mb-4 text-sm sm:text-base leading-relaxed`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam in, sed repudiandae minus quam tenetur dolorum necessitatibus esse nobis.
            </p>
          </div>

          <div className="lg:w-1/3">
            <div className={`backdrop-blur-md ${classes.cardBg} border p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl`}>
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${classes.cardText}`}>
                📜 Currently doing . . .
              </h3>
              <ul className={`space-y-3 sm:space-y-4 text-xs sm:text-sm ${classes.text}`}>
                <li className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 ${classes.dot} rounded-full mt-1.5 flex-shrink-0 shadow-lg`}></div>
                  <span>
                    JOB search for Backend engineer, Fullstack-web developer or DevOps engineer
                  </span>
                </li>

                <li className="flex items-start gap-2 relative">
                  <div className={`w-1.5 h-1.5 ${classes.dot} rounded-full mt-1.5 flex-shrink-0 shadow-lg`}></div>
                  <span className="flex items-start flex-wrap">
                    Exploring C++, going through beej's guide to network programming to learn how ackshually
                    <span
                      ref={textRef}
                      className={`ml-1 relative cursor-pointer ${classes.link} underline-offset-2 ${isMobile ? "underline" : "hover:underline"
                        }`}
                      onClick={toggleTooltip}
                      onMouseEnter={() => !isMobile && setShowTooltip(true)}
                      onMouseLeave={() => !isMobile && setShowTooltip(false)}
                    >
                      HTTP protocol over TCP/IP with raw kernel syscalls work.
                    </span>
                    {showTooltip && (
                      <div
                        ref={tooltipRef}
                        className={`absolute z-50 backdrop-blur-md ${classes.tooltip} p-3 rounded-lg shadow-2xl max-w-xs text-xs ${isMobile
                          ? "top-full left-0 mt-2"
                          : "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
                          }`}
                      >
                        <div className="relative">
                          <p>
                            Implementing the HTTP application-layer protocol directly on top of the TCP/IP stack by manually using OS-level networking syscalls (socket(), bind(), listen(), accept(), read(), write()) without high-level HTTP libraries.
                          </p>
                          {isMobile && (
                            <button
                              onClick={() => setShowTooltip(false)}
                              className={`absolute -top-2 -right-2 ${classes.button} text-white rounded-full w-5 h-5 flex items-center justify-center text-xs`}
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 ${classes.dot} rounded-full mt-1.5 flex-shrink-0 shadow-lg`}></div>
                  <span className="line-through">
                    On a marathon 🏃‍♂️ of ML → DL → LLMs → AGI → ASI
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 ${classes.dot} rounded-full mt-1.5 flex-shrink-0 shadow-lg`}></div>
                  <span>
                    Listening 🎧 to - in my solitude by Billie Holiday
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 ${classes.dot} rounded-full mt-1.5 flex-shrink-0 shadow-lg`}></div>
                  <span>
                    Learing and building todo apps for web. . . seriously.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 ${classes.dot} rounded-full mt-1.5 flex-shrink-0 shadow-lg`}></div>
                  <span>
                    Making decisions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

