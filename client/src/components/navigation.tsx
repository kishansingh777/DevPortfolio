import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-code-bg/80 backdrop-blur-lg border-b border-code-accent/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-mono font-bold text-code-accent">
              <span className="text-terminal-green">&lt;</span>KishanSingh<span className="text-terminal-green">/&gt;</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 font-mono ${
                    activeSection === item.id 
                      ? 'text-code-accent' 
                      : 'text-white hover:text-code-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button 
              className="md:hidden text-white text-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-code-bg/95 backdrop-blur-lg transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-mono text-white hover:text-code-accent transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
