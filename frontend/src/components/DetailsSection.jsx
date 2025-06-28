import profileimage from "../assets/profile_image.png";

export function DetailsSection() {
  return (
    <div className="pb-6 pt-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* left side */}
        <div className="flex flex-col md:pl-20 lg:pl-40 mt-4 md:mt-0 text-center md:text-left">
          <p className="text-2xl md:text-5xl lg:text-6xl font-semibold">
            Krishna Singh Bisht
          </p>
          <p className="text-sm md:text-base text-gray-600 mt-2 ">
            Backend heavy fullstack web developer 
            <br />
            integrating AI and concepts of system design
          </p>
          <div className="flex flex-row gap-4 mt-4 justify-center md:justify-start">
            <a
              href="https://github.com/krishnaasx"
              className="hover:text-blue-600"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://x.com/narendramodi"
              className="hover:text-blue-600"
            >
              <div className="w-6 h-5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M714 594.4L1176.6 0H1071L663.8 528.1 309.4 0H0l496.2 722.9L23.5 1227h115.7l428.1-558.4L901.4 1227h309.4L714 594.4z" />
                </svg>
              </div>
            </a>
            {/* <a
              href="https://linkedin.com/in/krishnaasinghbisht"
              className="hover:text-blue-600"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </a> */}
            <a
              href="https://x.com/MIT_CSAIL/status/1363172815315214336"
              className="hover:text-blue-600"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="md:pr-20 lg:pr-40">
          <img
            src={profileimage}
            alt="Krishna's Profile"
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover rounded-full border-2 border-black shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}