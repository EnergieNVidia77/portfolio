import { Code, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Site E-Commerce',
    description:
      'Boutique en ligne responsive avec catalogue de produits, panier et processus de paiement. Implémentation de l\'authentification utilisateur et du filtrage de produits.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com',
  },
  {
    title: 'Application de Gestion de Tâches',
    description:
      'Application de todo avec fonctionnalité glisser-déposer, catégories et dates d\'échéance. Les utilisateurs peuvent créer, modifier et organiser leurs tâches efficacement.',
    tags: ['React', 'TypeScript', 'Local Storage', 'CSS'],
    link: 'https://github.com',
  },
  {
    title: 'Application Météo',
    description:
      'Application météo épurée affichant les conditions actuelles et les prévisions sur 5 jours. Intégration avec l\'API OpenWeather avec fonctionnalité de recherche par localisation.',
    tags: ['JavaScript', 'Weather API', 'HTML', 'CSS'],
    link: 'https://github.com',
  },
  {
    title: 'Plateforme de Blog',
    description:
      'Blog personnel avec support markdown, catégories et recherche. Construit avec une API RESTful pour créer et gérer les articles de blog.',
    tags: ['React', 'Express', 'PostgreSQL', 'Markdown'],
    link: 'https://github.com',
  },
  {
    title: 'Recherche de Recettes',
    description:
      'Recherche et sauvegarde de recettes basées sur les ingrédients. Fonctionnalités de filtrage par préférences alimentaires et sauvegarde des favoris en local.',
    tags: ['React', 'Recipe API', 'Tailwind CSS'],
    link: 'https://github.com',
  },
  {
    title: 'Site Portfolio',
    description:
      'Site portfolio responsive présentant projets et compétences. Construit avec les pratiques modernes de React et des animations fluides.',
    tags: ['React', 'Tailwind CSS', 'Motion'],
    link: 'https://github.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="mb-4">Projets Réalisés</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une sélection de projets qui démontrent mes compétences et ma passion pour créer des solutions numériques impactantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Voir le Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}