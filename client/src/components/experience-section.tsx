export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-syntax-orange">Work</span> <span className="text-white">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-code-accent to-terminal-green mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-code-secondary/50 backdrop-blur-lg p-8 rounded-2xl border border-code-accent/20">
            {/* Terminal-style header */}
            <div className="bg-code-bg/80 p-4 rounded-lg mb-6 font-mono">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-syntax-red rounded-full"></div>
                <div className="w-3 h-3 bg-syntax-orange rounded-full"></div>
                <div className="w-3 h-3 bg-terminal-green rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">~ experience.log</span>
              </div>
              <div className="text-terminal-green">
                <span className="text-syntax-orange">$</span> cat work_experience.txt
              </div>
            </div>

            <div className="space-y-8">
              {/* Current Position */}
              <div className="border-l-4 border-code-accent pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-code-accent rounded-full animate-pulse"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-mono">Full Stack Developer</h3>
                    <p className="text-code-accent text-lg font-semibold">Softcon Business Solutions</p>
                  </div>
                  <div className="text-terminal-green font-mono">
                    June 2024 - Present
                  </div>
                </div>
                
                <div className="bg-code-bg/50 p-6 rounded-lg mb-4">
                  <h4 className="text-syntax-orange font-mono mb-3">Project: Smart Business Solution (ERP Software)</h4>
                  <p className="text-gray-300 mb-4">
                    Lead development of comprehensive ERP system handling finance reporting, party management, 
                    order tracking, and real-time analytics. Working with modern tech stack to deliver 
                    scalable business solutions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-mono mb-3 flex items-center">
                      <i className="fas fa-code text-syntax-blue mr-2"></i>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-terminal-green mr-2">•</span>
                        Design and develop user interfaces using Angular
                      </li>
                      <li className="flex items-start">
                        <span className="text-terminal-green mr-2">•</span>
                        Develop RESTful APIs using .NET framework
                      </li>
                      <li className="flex items-start">
                        <span className="text-terminal-green mr-2">•</span>
                        Optimize SQL queries and stored procedures
                      </li>
                      <li className="flex items-start">
                        <span className="text-terminal-green mr-2">•</span>
                        Implement complex business logic for backend services
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-mono mb-3 flex items-center">
                      <i className="fas fa-tools text-syntax-orange mr-2"></i>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-code-accent/20 text-code-accent rounded-full text-xs font-mono">Angular</span>
                      <span className="px-3 py-1 bg-syntax-blue/20 text-syntax-blue rounded-full text-xs font-mono">C#</span>
                      <span className="px-3 py-1 bg-syntax-blue/20 text-syntax-blue rounded-full text-xs font-mono">.NET</span>
                      <span className="px-3 py-1 bg-syntax-purple/20 text-syntax-purple rounded-full text-xs font-mono">SQL Server</span>
                      <span className="px-3 py-1 bg-syntax-orange/20 text-syntax-orange rounded-full text-xs font-mono">HTML</span>
                      <span className="px-3 py-1 bg-syntax-orange/20 text-syntax-orange rounded-full text-xs font-mono">CSS</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-code-bg/50 p-4 rounded-lg">
                  <h4 className="text-terminal-green font-mono mb-2">Modules Worked On:</h4>
                  <div className="flex flex-wrap gap-4 text-gray-300 font-mono text-sm">
                    <span className="flex items-center"><i className="fas fa-exchange-alt text-code-accent mr-2"></i>Transaction Management</span>
                    <span className="flex items-center"><i className="fas fa-sync-alt text-terminal-green mr-2"></i>System Updates</span>
                    <span className="flex items-center"><i className="fas fa-chart-bar text-syntax-purple mr-2"></i>Reporting System</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
