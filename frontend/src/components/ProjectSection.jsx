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
        "A digital solution to replace the traditional method of obtaining outing permits from the warden using a physical diary. This application streamlines the process for both students and wardens, reducing the time required by up to 40% compared to the manual procedure.",
      tags: ["Angular", "Asp.Netcore", "SQL"],
      link: "https://github.com/krishnaasx/HostelOutingApplication",
    },
    {
      title: "Real-Time Chat Application using PERN",
      description:
        "A real-time chat application built using ReactJS and Socket.io, enabling multiple clients to communicate simultaneously through a WebSocket server. Built with the PERN stack for full-stack functionality.",
      tags: ["ReactJs", "NodeJs", "PostgreSQL", "Socket.io"],
      link: "https://github.com/krishnaasx/chat-app",
    },
    {
      title: "Dating Application using .NETcore",
      description:
        "A dating application where users can create profiles, connect, and communicate with each other in real time. Built using .NET Core and SignalR for live interactions.",
      tags: ["Angular", "Asp.Netcore", "SQL", "SignalR"],
      link: "https://github.com/krishnaasx/DatingApp_Dotnet-8",
    },
    {
      title: "Sentimental analysis NLP model using BERT",
      description:
        "A natural language processing model that classifies text sentiment using a BERT-based classifier. Trained on approximately 18,000 samples, achieving around 91% accuracy. This model can be integrated into platforms to analyze user reviews and gauge public sentiment.",
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
