import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart Business Solution (ERP)",
      description: "Comprehensive ERP system built with Angular frontend and .NET backend. Features include transaction management, real-time reporting, and advanced business analytics.",
      icon: "fas fa-chart-line",
      iconColor: "text-code-accent",
      bgGradient: "from-code-accent/20 to-terminal-green/20",
      tags: ["Angular", ".NET", "SQL Server", "RESTful API"],
      tagColors: ["bg-code-accent/20 text-code-accent", "bg-syntax-blue/20 text-syntax-blue", "bg-syntax-purple/20 text-syntax-purple", "bg-terminal-green/20 text-terminal-green"],
      status: "Active Project",
      statusColor: "bg-code-bg/80 text-terminal-green"
    },
    {
      title: "AcademicIQ",
      description: "Academic Performance Classification System using Machine Learning to categorize students and identify those who need additional support. Built with React, Node.js, and Python.",
      icon: "fas fa-graduation-cap",
      iconColor: "text-terminal-green",
      bgGradient: "from-terminal-green/20 to-syntax-purple/20",
      tags: ["React", "Node.js", "Python", "Flask", "Sklearn"],
      tagColors: ["bg-code-accent/20 text-code-accent", "bg-terminal-green/20 text-terminal-green", "bg-syntax-orange/20 text-syntax-orange", "bg-syntax-purple/20 text-syntax-purple", "bg-syntax-blue/20 text-syntax-blue"],
      status: "Machine Learning",
      statusColor: "bg-code-bg/80 text-syntax-orange"
    },
    {
      title: "Online Book Shopping",
      description: "Full-featured e-commerce platform for book shopping with user authentication, cart management, multiple payment options, and admin dashboard for inventory management.",
      icon: "fas fa-book",
      iconColor: "text-syntax-orange",
      bgGradient: "from-syntax-orange/20 to-syntax-red/20",
      tags: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
      tagColors: ["bg-syntax-orange/20 text-syntax-orange", "bg-terminal-green/20 text-terminal-green", "bg-syntax-blue/20 text-syntax-blue", "bg-syntax-purple/20 text-syntax-purple"],
      status: "Full Stack",
      statusColor: "bg-code-bg/80 text-terminal-green"
    },
    {
      title: "Developer Portfolio",
      description: "Modern, responsive portfolio website with dark theme, code-inspired design, and interactive animations. Features project showcases and contact functionality.",
      icon: "fas fa-code",
      iconColor: "text-syntax-blue",
      bgGradient: "from-syntax-blue/20 to-code-accent/20",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      tagColors: ["bg-code-accent/20 text-code-accent", "bg-syntax-blue/20 text-syntax-blue", "bg-code-accent/20 text-code-accent", "bg-terminal-green/20 text-terminal-green"],
      status: "Frontend",
      statusColor: "bg-code-bg/80 text-code-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-syntax-orange">Featured</span> <span className="text-white">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-code-accent to-terminal-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-code-secondary/50 backdrop-blur-lg rounded-2xl border border-code-accent/20 hover:border-code-accent/50 transition-all duration-300 overflow-hidden group">
              <div className={`h-48 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <i className={`${project.icon} text-6xl ${project.iconColor} mb-4`}></i>
                    <div className="font-mono text-sm text-gray-300">{project.title}</div>
                  </div>
                </div>
                <div className={`absolute top-4 left-4 ${project.statusColor} px-3 py-1 rounded-full text-xs font-mono`}>
                  {project.status}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 font-mono">{project.title}</h3>
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`px-3 py-1 ${project.tagColors[tagIndex]} rounded-full text-xs font-mono`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" className="text-code-accent hover:text-terminal-green transition-colors font-mono p-0">
                    <i className="fas fa-eye mr-2"></i>Live Demo
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white transition-colors font-mono p-0">
                    <i className="fab fa-github mr-2"></i>Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
