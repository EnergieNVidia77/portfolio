import { useState, useEffect } from 'react';
import { Code } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group"
          >
            <Code
              className={`w-8 h-8 ${
                scrolled ? 'text-blue-600' : 'text-white'
              }`}
            />
            <span
              className={`font-bold ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Portfolio
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? scrolled
                      ? 'text-blue-600'
                      : 'text-blue-400'
                    : scrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className={`hidden md:block px-6 py-2 rounded-lg transition-colors ${
              scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            Me Recruter
          </button>
        </div>
      </div>
    </nav>
  );
}