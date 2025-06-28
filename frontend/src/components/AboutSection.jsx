import { useEffect, useRef, useState } from "react";

export function AboutSection() {
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

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tooltipRef]);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <section id="about" className="py-16 px-4 md:px-20 lg:px-40 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
        About me
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="text-gray-700 mb-4">
            Hey! Welcome.
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam in, sed repudiandae minus quam tenetur dolorum necessitatibus esse nobis.
            </div>
            {/* <div>
              <p>
                I learn and make my head-hot over some 0's and 1's and like to
                shoot my arrow at multiple bits. like -
              </p>
              <ul className="pl-4">
                <li>
                  Engineering fault tolerent to any kind, high performative,
                  secure Full-stack Web Application in order to make anon life
                  better.
                </li>
                <li>
                  Pondering how Machine Learning actually works to get the idea
                  of it's potential effect on the future of humanity.
                </li>
              </ul>
            </div> */}
          </div>
          {/* <p className="text-gray-700 mb-4">
            Sometimes i let my CPU ( cuz me ain't got no GPU ) work overtime to
            help my ML model become stronger, so it can score above 98% in
            inference, just as my ML models is becoming stronger
            minute-by-minute i am also getting to know the ML world better
            day-by-day, my knowledge about its world it not that strong yet but
            yeah ATLEAST I KNOW SOMETING, unlike some wonderer here.
            <br />
            woah woah, i was just kidding.
          </p>
          <p className="text-gray-700 mb-4">
            If i am not doing either of those things you'll find my horses
            running through the lines of github repos, stack of research papers,
            injesting algorithms and galloping through leetcodes or sometime
            codeforces and diving into some other kind of literatures.
          </p> */}
        </div>

        <div className="md:w-1/3 bg-blue-100 p-6 rounded-lg border-2 border-black">
          {" "}
          <h3 className="text-xl font-semibold mb-4">
            📜 Currently doing . . .{" "}
          </h3>
          <ul className="space-y-2">
            <li>
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2 mt-2"></span>
              <span>Nothing</span>
            </li>
            {/* <li className="flex items-center gap-2 relative">
              <span className="flex items-start flex-wrap">
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2 mt-2"></span>
                Exploring C++ while building a
                <span
                  ref={textRef}
                  className={`ml-1 relative cursor-pointer text-blue-600 underline-offset-2 ${
                    isMobile ? "underline" : "hover:underline"
                  }`}
                  onClick={toggleTooltip}
                  onMouseEnter={() => !isMobile && setShowTooltip(true)}
                  onMouseLeave={() => !isMobile && setShowTooltip(false)}
                >
                  POSIX compliant shell.
                </span>
                {showTooltip && (
                  <div
                    ref={tooltipRef}
                    className={`absolute z-50 bg-blue-200 text-black p-3 border border-black rounded-md shadow-lg max-w-xs text-sm ${
                      isMobile
                        ? "top-full left-0 mt-2"
                        : "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
                    }`}
                  >
                    <div className="relative">
                      <p>
                        A POSIX-compliant shell is a command-line interpreter
                        that follows the POSIX standard (IEEE Std 1003.1) for
                        shell behavior and syntax, ensuring portability and
                        compatibility across Unix-like systems.
                      </p>
                      {isMobile && (
                        <button
                          onClick={() => setShowTooltip(false)}
                          className="absolute -top-2 -right-2 bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          ×
                        </button>
                      )}
                      {!isMobile && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                      )}
                    </div>
                  </div>
                )}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2"></span>
                On a marathon 🏃‍♂️ of ML <span className="text-3xl">→</span> DL{" "}
                <span className="text-3xl">→</span> LLMs{" "}
                <span className="text-3xl">→</span> AGI{" "}
                <span className="text-3xl">→</span> ASI
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2"></span>
                Listening 🎧 to - in my solitude by Billie Holiday
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2"></span>
                Rigidifying web and communication by making copy of
                web.whatsapp.com encapsulating end-to-end encrpytion, handling
                multiple clients, etc from scratch.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2"></span>
                Fact ⚖️ to know about me - At this present moment I don't
                comprehend some s**t doesn't mean I'd never will.
              </span>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
