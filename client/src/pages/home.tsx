import Navigation from "@/components/navigation";
import MatrixBackground from "@/components/matrix-background";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="bg-code-bg text-white font-sans overflow-x-hidden">
      <MatrixBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-code-accent/20 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 font-mono text-sm mb-4 md:mb-0">
              <span className="text-syntax-orange">&copy; 2024</span>{" "}
              <span className="text-code-accent">Kishan Singh</span>.{" "}
              All rights reserved.
            </div>
            <div className="text-gray-400 font-mono text-sm">
              Built with <span className="text-syntax-red">❤</span> using{" "}
              <span className="text-code-accent">React</span>,{" "}
              <span className="text-terminal-green">Tailwind CSS</span> &{" "}
              <span className="text-syntax-orange">TypeScript</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
