import { Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
  .then(() => {
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    setFormData({ name: '', email: '', message: '' });
  })
  .catch((err) => {
    console.error('Erreur en envoyant le mail:', err);
    alert('Oups, une erreur est survenue. Réessayez plus tard.');
  });
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="mb-4">Me Contacter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités pour faire partie de votre vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-6">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-800 mb-1">Email</p>
                    <a
                      href="mailto:votre.email@example.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      toufictalhapro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-800 mb-1">GitHub</p>
                    <a
                      href="https://github.com/EnergieNVidia77"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      github.com/EnergieNVidia77
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-800 mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/toufictalha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/toufictalha
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="mb-2">Ouvert aux Opportunités</h4>
                <p className="text-gray-600 text-sm">
                  Je recherche activement des opportunités pour évoluer en tant que développeur et contribuer à des projets significatifs. Connectons-nous !
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2 text-sm"
                  >
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2 text-sm"
                  >
                    Votre Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="jean@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Parlez-moi de votre projet ou opportunité..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}