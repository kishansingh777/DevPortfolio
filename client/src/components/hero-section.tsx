import { Button } from "@/components/ui/button";
import TypingAnimation from "./typing-animation";
import profileImage from "@assets/IMG_20250608_190903_426_1754147105341.webp";

export default function HeroSection() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Kishan Singh Resume E_1754147131361.pdf';
    link.download = 'Kishan_Singh_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const typingPhrases = [
    'console.log("Hello World!");',
    'const developer = "Full Stack";',
    'function buildAmazing() { ... }',
    'npm install awesome-skills'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-terminal-green font-mono text-lg mb-4">
              <TypingAnimation phrases={typingPhrases} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-code-accent">Kishan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-mono">
              <span className="text-syntax-orange">const</span>{" "}
              <span className="text-white">role</span>{" "}
              <span className="text-syntax-orange">=</span>{" "}
              <span className="text-terminal-green">"Full Stack Developer"</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Passionate about crafting robust ERP solutions with Angular, .NET, and SQL Server. 
              Transforming complex business requirements into elegant digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={downloadResume}
                className="bg-code-accent text-code-bg px-8 py-3 rounded-lg font-mono font-semibold hover:bg-code-accent/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-code-accent/50"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-code-accent text-code-accent px-8 py-3 rounded-lg font-mono font-semibold hover:bg-code-accent hover:text-code-bg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-code-accent text-2xl transition-colors duration-300 transform hover:scale-110">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-code-accent text-2xl transition-colors duration-300 transform hover:scale-110">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:kishansingh98337@gmail.com" className="text-gray-400 hover:text-code-accent text-2xl transition-colors duration-300 transform hover:scale-110">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-code-accent to-terminal-green opacity-75 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-code-accent/50 shadow-2xl shadow-code-accent/25">
                  <img 
                    src={profileImage} 
                    alt="Kishan Singh - Full Stack Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Code snippets floating around */}
              <div className="absolute -top-10 -left-10 bg-code-secondary/90 backdrop-blur-sm p-3 rounded-lg font-mono text-sm text-terminal-green animate-float" style={{animationDelay: '0s'}}>
                <span className="text-syntax-orange">function</span> <span className="text-code-accent">createAwesome</span>()
              </div>
              <div className="absolute -bottom-10 -right-10 bg-code-secondary/90 backdrop-blur-sm p-3 rounded-lg font-mono text-sm text-syntax-purple animate-float" style={{animationDelay: '2s'}}>
                <span className="text-syntax-orange">const</span> <span className="text-white">skills</span> = <span className="text-terminal-green">["Angular", ".NET"]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button 
          onClick={scrollToAbout}
          className="text-code-accent text-2xl hover:text-terminal-green transition-colors duration-300"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </section>
  );
}
