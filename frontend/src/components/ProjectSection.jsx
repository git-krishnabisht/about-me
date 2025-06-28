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

export function ProjectsSection() {
  const projects = [
    {
      title: "Hostel Outing Application using .NETcore",
      description:
        "Application made as my minor project assessment for my university, that suggests a digitized solution to the legacy way of taking permits from the warden on a diary, that is a tedious process for both warden and students. This solution promises to cut the time taken by both warden and students to 40% in comparison to the previous procedure",
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
      description:
        "Made this application as my side-project for the purpose of learning how MVC architecture works with ASP.NETcore and how to introduce real-time communication to an application via SignalR websocket",
      tags: ["Angular", "Asp.Netcore", "SQL", "SignalR"],
      link: "https://github.com/krishnaasx/DatingApp_Dotnet-8",
    },
    {
      title: "Sentimental analysis NLP model using BERT",
      description:
        "Another side project, which is a Natural processing machine learning model that classifies the sentiments of the set of texts or a corpus by leveraging the BERT classifier, which is trained on ~18k distinct parameters with inference of ~91% that could be used in websites such as those who uses reviews to analyze the public opinion about their product.",
      tags: [
        "Python",
        "torch",
        "pandas",
        "transforms such as BERT",
        "sklearn",
        "joblib",
      ],
      link: "https://github.com/krishnaasx/sentiment_analysis",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-20 lg:px-40 ">
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
