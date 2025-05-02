import { useState } from "react";
import "./App.css";
import profileimage from "./assets/profile_image.png";

function QuoteSection() {
  return (
    <div className="w-full overflow-hidden border-b-2 border-black bg-blue-100">
      <div className="w-max animate-marquee text-base md:text-2xl px-6 py-2 font-medium text-gray-800">
      "Behind it all is surely an idea so simple, so beautiful, that when we grasp it – in a decade, a century,
       or a millennium – we will all say to each other, how could it have been otherwise?" - John Archibald Wheeler, Annals of the New York Academy of Sciences, 480 (1986)
      </div>
    </div>
  );
}

function DetailsSection() {
  return (
    <div className="pb-6 pt-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* left side */}
        <div className="flex flex-col md:pl-20 lg:pl-40 mt-4 md:mt-0 text-center md:text-left">
          <p className="text-2xl md:text-5xl lg:text-6xl font-semibold">
            Krishna Singh Bisht
          </p>
          <p className="text-sm md:text-base text-gray-600 mt-2 ">
            Backend heavy fullstack web developer drastically leaning towards AI and distributed system
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

function NavBarSection() {
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
          <a
            href="#blog"
            className="hover:text-blue-600"
            onClick={toggleMenu}
          >
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

function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 md:px-20 lg:px-40 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
        About me
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="text-gray-700 mb-4">
            Hey! Welcome.
            <br/>
            <div>
              <p>
              I learn and make my head-hot over some 0's and 1's and like to shoot my arrow at multiple bits. like -
              </p>
              <ul className="pl-4">
                <li>Engineering fault tolerent to any kind, high performative, secure Full-stack Web Application in order to make anon life better.</li>
                <li>Pondering how Machine Learning actually works to get the idea of it's potential effect on the future of humanity.</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Sometimes i let my CPU ( cuz me ain't got no GPU ) work overtime to help my ML model become stronger, so it can score above 98% in inference, just as my ML models is becoming stronger minute-by-minute i am also getting to know the ML world better day-by-day, my knowledge about its world it not that strong yet but yeah ATLEAST I KNOW SOMETING, unlike some wonderer here.
            <br/>
             woah woah, i was just kidding.
          </p>
          <p className="text-gray-700 mb-4">
            If i am not doing either of those things you'll find my horses running through the lines of github repos, stack of research papers, injesting algorithms and galloping through leetcodes or sometime codeforces and diving into some other kind of literatures. 
          </p>
        </div>

        <div className="md:w-1/3 bg-blue-100 p-6 rounded-lg border-2 border-black">
          {" "}
          <h3 className="text-xl font-semibold mb-4">📜 Currently doing . . . </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2" ></span>
                Exporing rust 🦀 to grab the idea of type safety and rigid memory managmenet which is important for every software that gets engineered.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span> 
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2" ></span>
                On a marathon 🏃‍♂️ of ML <span className="text-xl">→</span> DL <span className="text-xl">→</span> LLMs <span className="text-xl">→</span> AGI <span className="text-xl">→</span> ASI
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span> 
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2" ></span>
                Listening 🎧 to - in my solitude by Billie Holiday
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span> 
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2" ></span>
                Making a exact copy of whatsapp with the same exact functionality to learn how functions like end-to-end encrpytion, complex real time communication with websockets, etc works . . .  ( will push it to github after completing 80%. )
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span> 
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2" ></span>
              Fact ⚖️ to know about me - At this present moment I don't comprehend some s**t doesn't mean I'd never will.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="bg-white p-6 rounded-lg border-2 border-black shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={link} className="text-blue-600 hover:underline font-medium">
        View Project →
      </a>
    </div>
  );
}


function ProjectsSection() {
  const projects = [
    {
      title: "Hostel Outing Application using .NETcore",
      description: "Application made as my minor project assessment for my university, that suggests a digitized solution to the legacy way of taking permits from the warden on a diary, that is a tedious process for both warden and students. This solution promises to cut the time taken by both warden and students to 40% in comparison to the previous procedure",
      tags: ["Angular", "Asp.Netcore", "SQL"],
      link: "https://github.com/krishnaasx/HostelOutingApplication",
    },
    {
      title: "Real-Time Chat Application using PERN",
      description:
      "Application that I built for the purpose of learning ReactJs and Socket.io which is an implementation of websocket that facilitates different clients to communicate with each other simultaneously via websocket server.", 
      tags: ["ReactJs", "NodeJs", "PostgreSQL", "Socket.io"],
      link: "https://github.com/krishnaasx/chat-app",
    },
    {
      title: "Dating Appplication using .NETcore",
      description:"Made this application as my side-project for the purpose of learning how MVC architecture works with ASP.NETcore and how to introduce real-time communication to an application via SignalR websocket",
      tags: ["Angular", "Asp.Netcore", "SQL", "SignalR"],
      link: "https://github.com/krishnaasx/DatingApp_Dotnet-8"
    },
    {
      title: "Sentimental analysis NLP model using BERT",
      description:
      "Another side project, which is a Natural processing machine learning model that classifies the sentiments of the set of texts or a corpus by leveraging the BERT classifier, which is trained on ~18k distinct parameters with inference of ~91% that could be used in websites such as those who uses reviews to analyze the public opinion about their product.",
      tags: ["Python", "torch", "pandas", "transforms such as BERT", "sklearn", "joblib"],
      link: "https://github.com/krishnaasx/sentiment_analysis",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-20 lg:px-40">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}


function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C++", "Python", "Javascript", "Rust", "C#"],
    },
    {
      category: "Frontend Frameworks and libraries",
      items: ["ReactJs", "Zustand", "Redux", "WebSocket clients", "Angular", "SignalR", "Tailwindcss"],
    },
    {
      category: "Backend Frameworks and libraries",
      items: ["Nodejs", "Express", "WebSocket servers", "Actix web", "Asp.Netcore", "MVC"],
    },
    {
      category: "Databases and ORMs",
      items: ["Postgresql", "SQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "AWS", "Redis", "Postman", "Linux distro - ubuntu"],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 md:px-20 lg:px-40 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border-2 border-black"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({ period, title, company, description }) {
  return (
    <div className="mb-8 relative pl-8 border-l-2 border-blue-300">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
      <p className="text-sm text-gray-500 mb-1">{period}</p>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-blue-600 font-medium mb-2">{company}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function BlogSection() {
  return(
    <section id="blog" className="py-16 px-4 md:px-20 lg:px-40 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
        Blogs
      </h2>
      <div>
        <h3>Cooking 🍲 . . . .</h3>
      </div>
    </section>
  );
}

// function ExperienceSection() {
//   const experiences = [
//     {
//       period: "2020 - Present",
//       title: "CEO & CFO",
//       company: "finishup.com",
//       description:
//         "Leading strategic direction and financial operations of the company. Grew revenue by 30000000% in 3 years and expanded the team from 5 to 50 employees.",
//     },
//     {
//       period: "2016 - 2020",
//       title: "Lead Engineer for LLM Development",
//       company: "Meta",
//       description:
//         "Lead team of 24 capable engineer to develop LLMs like LLAMA69.420, DALL-E",
//     },
//   ];

//   return (
//     <section id="experience" className="py-16 px-4 md:px-20 lg:px-40">
//       <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
//         Experience
//       </h2>
//       <div className="mt-12">
//         {experiences.map((exp, index) => (
//           <ExperienceItem key={index} {...exp} />
//         ))}
//       </div>
//     </section>
//   );
// }

function ContactSection() {
  const baseUrl = "http://localhost:8000";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (req.ok) {
        console.log("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
        return;
      } else {
        console.error("Failed to send the message");
        return;
      }
    } catch (err) {
      console.log("Unexpected error occurred:", err);
    }
  };
  

  return (
    <section id="contact" className="py-16 px-4 md:px-20 lg:px-40 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
        Get In Touch
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-6">
            Contact me if you think we can do better.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <a
                href="mailto:krishnaasinghbisht@gmail.com"
                className="text-blue-600 hover:underline"
              >
                krishnaasinghbisht@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <a
                href="https://linkedin.com/in/krishnaasinghbisht"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/krishnaasinghbisht
              </a>
            </div> */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <a
                href="https://github.com/krishnaasx"
                className="text-blue-600 hover:underline"
              >
                github.com/krishnaasx
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full p-2 border-2 border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full p-2 border-2 border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleFormChange}
                className="w-full p-2 border-2 border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <QuoteSection />
      <DetailsSection />
      <NavBarSection />
      <main>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <ExperienceSection /> */}
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
