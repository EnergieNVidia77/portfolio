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
    title: 'Développeur Full Stack',
    company: 'IBM Consulting France',
    period: 'Octobre 2023 - Présent',
    description: [
      'Modernisation du portail patient avec React, en améliorant ergonomie, accessibilité et expérience utilisateur.',
      'Développement de fonctionnalités backend sécurisées avec Spring Boot et Spring Security, et gestion automatisée des données via SQL et Spring Batch.',
      'Analyse et résolution de bugs front-end et back-end, contribuant à la stabilité, la performance et la fiabilité du système.',
      'Développement d’une application de gestion des plaintes avec ReactJS pour le front-end et NodeJS/Express pour les API REST.',
      'Mise en place d’authentification sécurisée avec PassportJS et gestion de la base PostgreSQL via Sequelize, garantissant fiabilité et sécurité des données.',
      'Assure la qualité du code et tests automatisés avec SonarQube, Mocha et Jest, dans un environnement Agile/Scrum avec livraisons régulières.',
    ],
  },
  {
    title: 'Développeur Full Stack | Stagiaire',
    company: 'IBM Consulting France',
    period: 'Juillet 2023 - Septembre 2023',
    description: [
      'Automatisation des tests frontend et end-to-end avec Cypress, améliorant la qualité du code et la fiabilité des interfaces utilisateur.',
      'Accélération de la validation des fonctionnalités grâce à des tests systématiques et reproductibles.',
      'Assurance d’une couverture complète des tests, incluant interactions utilisateur et flux critiques.',
      'Intégration dans un pipeline CI/CD, renforçant la stabilité des livraisons et réduisant les risques de régressions.',
    ],
  },
  {
    title: 'Développeur Full Stack | Stagiaire',
    company: 'IBM Interactive France',
    period: 'Mars 2023 - Juillet 2023',
    description: [
      'Mise en place d’une chaîne complète d’automatisation CI/CD pour une application web, incluant tests, validation et déploiement automatique.',
      'Optimisation de la qualité du code via SonarQube et intégration de Jenkins pour des pipelines fiables et reproductibles.',
      'Développement de fonctionnalités front-end et back-end sur React et NodeJS, incluant authentification à deux facteurs et export de données CSV.',
      'Renforcement des compétences en tests automatisés et outils d’assurance qualité pour des environnements web modernes.',
      'Acquisition d’une expérience pratique en automatisation et déploiement continu, combinée à la livraison de fonctionnalités à forte valeur ajoutée.',
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
