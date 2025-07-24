export function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C++", "Python", "Javascript"],
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
      items: ["Postgresql", "SQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "AWS", "Redis", "Linux", "Docker"],
    },
    {
      category: "Many more cool stuff to add to the arsenal yet . . . . ",
      items: ["Kubernetes", "Github actions", "Golang"],
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
