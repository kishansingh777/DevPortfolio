export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-syntax-orange">About</span> <span className="text-white">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-code-accent to-terminal-green mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-code-secondary/50 backdrop-blur-lg p-8 rounded-2xl border border-code-accent/20">
              <div className="font-mono text-terminal-green mb-4">
                <span className="text-syntax-orange">// </span>About Me
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer currently working at <span className="text-code-accent font-semibold">Softcon Business Solutions</span>, 
                where I architect and develop comprehensive ERP solutions. My expertise spans across modern web technologies, 
                with a strong focus on creating scalable, user-centric applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With proficiency in <span className="text-terminal-green">Angular</span>, <span className="text-syntax-blue">.NET</span>, 
                and <span className="text-syntax-purple">SQL Server</span>, I handle the complete development lifecycle 
                from designing intuitive user interfaces to implementing robust backend services and optimizing database performance.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-code-bg/50 rounded-lg">
                  <div className="text-2xl font-bold text-code-accent">2+</div>
                  <div className="text-gray-400 font-mono text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-code-bg/50 rounded-lg">
                  <div className="text-2xl font-bold text-terminal-green">10+</div>
                  <div className="text-gray-400 font-mono text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-code-secondary/50 backdrop-blur-lg p-8 rounded-2xl border border-code-accent/20">
              <div className="font-mono text-terminal-green mb-6">
                <span className="text-syntax-orange">// </span>Education
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-code-accent pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-code-accent rounded-full"></div>
                  <h3 className="font-semibold text-white">MSc in Information Technology</h3>
                  <p className="text-gray-400 font-mono text-sm">Thakur College Of Science and Commerce</p>
                  <p className="text-terminal-green">2023 - 2025 | SGPA: 7.8</p>
                </div>
                <div className="border-l-2 border-terminal-green pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-terminal-green rounded-full"></div>
                  <h3 className="font-semibold text-white">BSc in Information Technology</h3>
                  <p className="text-gray-400 font-mono text-sm">Sathaye College Of Science and Commerce</p>
                  <p className="text-terminal-green">2020 - 2023 | CGPA: 8.6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
