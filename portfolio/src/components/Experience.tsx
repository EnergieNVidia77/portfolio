import { Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Job[] = [
  {
    title: 'Développeur Full Stack Junior',
    company: 'Tech Solutions Inc.',
    period: '2023 - Présent',
    description: [
      'Développement et maintenance d\'applications web avec React et Node.js',
      'Collaboration avec des développeurs seniors sur l\'implémentation de fonctionnalités',
      'Écriture de code propre et maintenable en suivant les bonnes pratiques',
      'Participation aux revues de code et aux processus de développement agile',
      'Débogage et résolution de problèmes techniques dans les applications existantes',
    ],
  },
  {
    title: 'Développeur Full Stack Junior',
    company: 'Tech Solutions Inc.',
    period: '2023 - Présent',
    description: [
      'Développement et maintenance d\'applications web avec React et Node.js',
      'Collaboration avec des développeurs seniors sur l\'implémentation de fonctionnalités',
      'Écriture de code propre et maintenable en suivant les bonnes pratiques',
      'Participation aux revues de code et aux processus de développement agile',
      'Débogage et résolution de problèmes techniques dans les applications existantes',
    ],
  },
  {
    title: 'Stagiaire Développeur Full Stack',
    company: 'IBM Interactive France',
    period: 'Mars 2023 - Septembre 2023',
    description: [
      'Création d\'interfaces utilisateur responsive avec React et Tailwind CSS',
      'Collaboration étroite avec les designers pour implémenter des designs au pixel près',
      'Intégration d\'API RESTful et gestion de l\'état de l\'application',
      'Amélioration des performances et de l\'accessibilité des sites web',
      'Apprentissage et application des pratiques modernes de développement web',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
            <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">Expérience Professionnelle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
              Mon parcours professionnel et les rôles qui ont façonné ma jeune carrière dans le développement web.
            </p>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((job, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="left">
                <div className="relative pl-6 md:pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-600"></div>
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                    <h3 className="mb-2 text-lg md:text-xl lg:text-2xl">{job.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                      <span>{job.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{job.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start text-sm md:text-base">
                          <span className="text-blue-600 mr-2 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
