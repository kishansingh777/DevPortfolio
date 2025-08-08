import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-laptop-code",
      color: "text-code-accent",
      skills: [
        { name: "Angular", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 40 },
      ]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      color: "text-terminal-green",
      skills: [
        { name: ".NET", level: 88 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 70 },
        { name: "Python", level: 60 },
      ]
    },
    {
      title: "Database",
      icon: "fas fa-database",
      color: "text-syntax-purple",
      skills: [
        { name: "SQL Server", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 65 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-syntax-orange">Technical</span> <span className="text-white">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-code-accent to-terminal-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-code-secondary/50 backdrop-blur-lg p-8 rounded-2xl border border-code-accent/20 hover:border-code-accent/50 transition-all duration-300">
              <div className="text-center mb-6">
                <i className={`${category.icon} text-4xl ${category.color} mb-4`}></i>
                <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-mono">{skill.name}</span>
                      <span className={`${category.color} font-mono`}>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
