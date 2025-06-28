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

export function ExperienceSection() {
  const experiences = [
    {
      period: "2020 - Present",
      title: "CEO & CFO",
      company: "finishup.com",
      description:
        "Leading strategic direction and financial operations of the company. Grew revenue by 30000000% in 3 years and expanded the team from 5 to 50 employees.",
    },
    {
      period: "2016 - 2020",
      title: "Lead Engineer for LLM Development",
      company: "Meta",
      description:
        "Lead team of 24 capable engineer to develop LLMs like LLAMA69.420, DALL-E",
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 md:px-20 lg:px-40">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
        Experience
      </h2>
      <div className="mt-12">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}