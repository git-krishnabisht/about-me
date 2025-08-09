function ProjectCard({ title, description, tags, link, theme }) {
  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        cardBg: "bg-white/5 border-green-400/20",
        hover: "hover:shadow-green-400/10",
        title: "text-green-300 group-hover:text-green-200",
        text: "text-green-200/80",
        tag: "bg-green-500/20 border-green-400/30 text-green-300",
        link: "text-green-400 hover:text-green-300"
      };
    } else {
      return {
        cardBg: "bg-white/5 border-blue-400/20",
        hover: "hover:shadow-blue-400/10",
        title: "text-blue-300 group-hover:text-blue-200",
        text: "text-blue-200/80",
        tag: "bg-blue-500/20 border-blue-400/30 text-blue-300",
        link: "text-blue-400 hover:text-blue-300"
      };
    }
  };

  const classes = getThemeClasses();

  return (
    <div className={`backdrop-blur-md ${classes.cardBg} border p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl ${classes.hover} hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}>
      <h3 className={`text-lg sm:text-xl font-bold mb-3 ${classes.title} transition-colors`}>{title}</h3>
      <p className={`${classes.text} mb-4 text-xs sm:text-sm leading-relaxed`}>{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`${classes.tag} text-xs px-2 py-1 rounded-lg`}
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={link} className={`${classes.link} font-medium text-sm sm:text-base transition-colors`}>
        View Project →
      </a>
    </div>
  );
}

export function ProjectsSection({ theme }) {
  const projects = [
    {
      title: "Real-Time Chat Application using PERN",
      description:
        "A real-time chat application built using ReactJS and Socket.io, enabling multiple clients to communicate simultaneously through a WebSocket server. Built with the PERN stack for full-stack functionality.",
      tags: ["Reactjs", "Nodejs", "Expressjs", "PostgreSQL", "Socket.io", "Oauth2.0"],
      link: "https://github.com/git-krishnabisht/chat-app",
    },
    {
      title: "File-distributor using Nodejs",
      description:
        "A centralized service component for distributing file leads among agents using round-robin algorithm.",
      tags: ["ReactJs", "NodeJs", "Expressjs", "MongoDB", "Redis"],
      link: "https://github.com/git-krishnabisht/file-distributor",
    },
    {
      title: "Hostel Outing Application using .NETcore",
      description:
        "A digital solution to replace the traditional method of obtaining outing permits from the warden using a physical diary. This application streamlines the process for both students and wardens, reducing the time required by up to 40% compared to the manual procedure.",
      tags: ["Angular", "Asp.Netcore", "SQL"],
      link: "https://github.com/git-krishnabisht/hostel-outing-application",
    },
  ];

  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        gradient: "bg-gradient-to-r from-green-400 to-emerald-300",
        border: "border-green-400/30"
      };
    } else {
      return {
        gradient: "bg-gradient-to-r from-blue-400 to-indigo-300",
        border: "border-blue-400/30"
      };
    }
  };

  const classes = getThemeClasses();

  return (
    <section id="projects" className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 border-b-2 ${classes.border} pb-3 sm:pb-4 ${classes.gradient} bg-clip-text text-transparent`}>
          Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

