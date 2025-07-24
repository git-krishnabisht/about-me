export function FooterSection() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 md:px-20 lg:px-40">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col mb-4 md:mb-0 text-center md:text-left">
          <p className="text-lg font-bold">Krishna Singh Bisht</p>
          <p className="text-sm text-blue-200">upcoming CEO of meta</p>
        </div>
        {/* <div className="flex flex-row gap-4">
          <a
            href="http://github.com/krishnaasx/"
            className="text-white hover:text-blue-200"
          >
            <div className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200"
          >
            <div className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </a>
          <a href="#contact" className="text-white hover:text-blue-200">
            <div className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
          </a>
        </div> */}
      </div>
      <div className="mt-6 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} Krishna Singh Bisht. All rights reserved.
      </div>
    </footer>
  );
}
