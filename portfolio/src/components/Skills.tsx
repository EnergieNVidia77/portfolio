import { Code, Briefcase, Award, Database, Wrench, Palette, Server, CheckCircle, Shield, Cloud } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'motion/react';

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', category: 'Langages' },
  { name: 'TypeScript', category: 'Langages' },
  { name: 'HTML & CSS', category: 'Langages' },
  { name: 'Java', category: 'Langages' },

  { name: 'React', category: 'Frontend' },
  { name: 'React Router', category: 'Frontend' },
  { name: 'Vite / Webpack', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Redux', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'Redux-Saga', category: 'Frontend' },
  { name: 'Sass', category: 'Frontend' },

  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Spring Batch', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },

  { name: 'PostgreSQL', category: 'Base de données' },
  { name: 'Redis', category: 'Base de données' },
  { name: 'Firebase', category: 'Base de données' },

  { name: 'OAuth2', category: 'Sécurité' },
  { name: 'JWT', category: 'Sécurité' },
  { name: 'Spring Security', category: 'Sécurité' },

  { name: 'Jest', category: 'Testing / QA' },
  { name: 'Cypress', category: 'Testing / QA' },
  { name: 'Postman / Insomnia', category: 'Testing / QA' },

  { name: 'Docker', category: 'Cloud / Déploiement' },
  { name: 'AWS', category: 'Cloud / Déploiement' },
  { name: 'Kubernetes', category: 'Cloud / Déploiement' },
  { name: 'Netlify', category: 'Cloud / Déploiement' },

  { name: 'Git / GitHub & Gitlab', category: 'Outils' },
  { name: 'FHIR (Fast Healthcare Interoperability Resources)', category: 'Outils' },
  { name: 'VS Code', category: 'Outils' },
  { name: 'Eclipse', category: 'Outils' },
  { name: 'Shell / Linux', category: 'Outils' },
];

// Icônes pour chaque catégorie
const categoryIcons: Record<string, any> = {
  'Langage': Code,
  'Frontend': Palette,
  'Backend': Server,
  'Base de données': Database,
  'Sécurité': Shield,
  'Testing': CheckCircle,
  'Cloud / Déploiement': Cloud,
  'Outils': Wrench,
};

export function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-8 md:mb-12">
            <Code className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
            <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">Compétences Techniques</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
              Technologies et outils que j'utilise régulièrement dans mes projets de développement.
            </p>
          </ScrollReveal>

          {/* Grille compacte de compétences - 2 colonnes mobile, 3 tablette, 4 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 md:mb-16">
            {categories.map((category, idx) => {
              const Icon = categoryIcons[category] || Code;
              return (
                <ScrollReveal key={category} delay={idx * 0.05}>
                  <motion.div
                    className="bg-white p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header avec icône */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <h3 className="text-gray-900 font-semibold text-sm md:text-base">{category}</h3>
                    </div>
                    
                    {/* Liste compacte des skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill, index) => (
                          <span
                            key={index}
                            className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium hover:bg-blue-100 transition-colors"
                          >
                            {skill.name}
                          </span>
                        ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <motion.div
                className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />
                <h3 className="mb-1 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">3</h3>
                <p className="text-gray-600 text-xs md:text-sm">Ans d'Exp.</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <motion.div
                className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />
                <h3 className="mb-1 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">7</h3>
                <p className="text-gray-600 text-xs md:text-sm">Projets</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <motion.div
                className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />
                <h3 className="mb-1 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">10+</h3>
                <p className="text-gray-600 text-xs md:text-sm">Technos</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}