import { Code, Link } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'motion/react';


interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string|null;
}

const projects: Project[] = [
  {
    title: 'Mon APHP',
    description:
      'Mon APHP – Portail patient sécurisé permettant aux patients d’accéder facilement à leurs informations médicales, prendre des rendez-vous et communiquer avec les professionnels de santé.',
    tags: ['React', 'Spring Boot', 'OAuth2', 'Vite'],
    link: 'https://mon.aphp.fr/',
  },
  {
    title: 'DirectAPHP',
    description:
      'DirectAPHP – Application web de messagerie sécurisée pour les professionnels de santé, facilitant la communication interne et l’orientation des patients entre médecins, y compris hors du réseau AP-HP.',
    tags: ['React', 'NodeJS', 'Jenkins', 'SonarQube'],
    link: 'https://direct.aphp.fr/',
  },
  {
    title: 'LORAH',
    description:
      'LORAH – Outil interne de l’AP-HP permettant aux agents de gérer efficacement les demandes de prise en charge, en réorientant, validant ou transférant les demandes des patients ou des médecins de ville vers le service approprié.',
    tags: ['React', 'Spring', 'FHIR', 'PostgreSQL'],
    link: 'https://www.aphp.fr/media/10850',
  },
  {
    title: 'DDU (Droit Des Usagers)',
    description:
      'DDU (Droit Des Usagers) – Application fullstack conçue pour centraliser et gérer les plaintes des patients au sein des hôpitaux du réseau AP-HP, offrant une interface sécurisée et des outils efficaces pour le suivi et le traitement des demandes.',
    tags: ['React', 'NodeJS', 'Sequelize', 'MUI'],
    link: null,
   },
];


export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <Code className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
            <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">Projets Réalisés</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
              Une sélection de projets qui démontrent mes compétences et ma passion pour créer des solutions numériques impactantes.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <motion.div
                  className="bg-white rounded-lg shadow-sm overflow-hidden h-full"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 md:p-6 flex flex-col h-full">
                    <h3 className="mb-2 md:mb-3 text-lg md:text-xl">{project.title}</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 md:px-3 md:py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    { project.link &&
                     <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Link className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm">Voir le Site</span>
                    </a>}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
