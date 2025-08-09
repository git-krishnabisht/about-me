export function SkillsSection({ theme }) {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C++", "Python", "Javascript", "Typescript"],
    },
    {
      category: "Frontend, Frameworks and libraries",
      items: ["HTML", "Reactjs", "Zustand", "Redux", "Angular", "Tailwindcss"],
    },
    {
      category: "Backend Frameworks and libraries",
      items: ["Nodejs", "Expressjs", "Socket.io"],
    },
    {
      category: "Databases and ORMs",
      items: ["Postgresql", "SQL", "MongoDB", "Prisma"],
    },
    {
      category: "Tools",
      items: ["Git", "AWS", "Redis", "Linux", "Docker"],
    },
    {
      category: "Many more cool stuff to add to the arsenal yet . . . . ",
      items: ["Kubernetes", "Github actions", "Golang", "Jetkins"],
    },
  ];

  const getThemeClasses = () => {
    if (theme === 'green') {
      return {
        gradient: "bg-gradient-to-r from-green-400 to-emerald-300",
        border: "border-green-400/30",
        bgGradient: "from-transparent via-green-950/10 to-transparent",
        cardBg: "bg-white/5 border-green-400/20",
        hover: "hover:shadow-green-400/10",
        title: "text-green-300",
        tag: "bg-green-500/20 border-green-400/30 text-green-200 hover:bg-green-500/30"
      };
    } else {
      return {
        gradient: "bg-gradient-to-r from-blue-400 to-indigo-300",
        border: "border-blue-400/30",
        bgGradient: "from-transparent via-blue-950/10 to-transparent",
        cardBg: "bg-white/5 border-blue-400/20",
        hover: "hover:shadow-blue-400/10",
        title: "text-blue-300",
        tag: "bg-blue-500/20 border-blue-400/30 text-blue-200 hover:bg-blue-500/30"
      };
    }
  };

  const classes = getThemeClasses();

  return (
    <section id="skills" className={`relative z-10 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 bg-gradient-to-b ${classes.bgGradient}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 border-b-2 ${classes.border} pb-3 sm:pb-4 ${classes.gradient} bg-clip-text text-transparent`}>
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className={`backdrop-blur-md ${classes.cardBg} border p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl ${classes.hover} transition-all duration-300 hover:scale-105`}
            >
              <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${classes.title}`}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`${classes.tag} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

