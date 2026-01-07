import { Mail, Github, Linkedin, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 1000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 1000);
    }
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
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <Mail className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
            <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">Me Contacter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
              Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités pour faire partie de votre vision.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <ScrollReveal delay={0.2} direction="left">
              <div>
                <h3 className="mb-4 md:mb-6 text-lg md:text-xl">Coordonnées</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 mb-1 text-sm md:text-base">Email</p>
                      <a
                        href="mailto:votre.email@example.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base break-all"
                      >
                        toufictalhapro@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <Github className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 mb-1 text-sm md:text-base">GitHub</p>
                      <a
                        href="https://github.com/EnergieNVidia77"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base break-all"
                      >
                        github.com/EnergieNVidia77
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 mb-1 text-sm md:text-base">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/toufictalha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base break-all"
                      >
                        linkedin.com/in/toufictalha
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 rounded-lg">
                  <h4 className="mb-2 text-base md:text-lg">Ouvert aux Opportunités</h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Je recherche activement des opportunités pour évoluer en tant que développeur et contribuer à des projets significatifs. Connectons-nous !
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="right">
              <div>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 text-xs md:text-sm"
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
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 text-xs md:text-sm"
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
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base"
                      placeholder="jean@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2 text-xs md:text-sm"
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
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-sm md:text-base"
                      placeholder="Parlez-moi de votre projet ou opportunité..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status !== 'idle'}
                    className={`w-full px-6 py-2.5 md:px-8 md:py-3 rounded-lg transition-all text-sm md:text-base font-medium ${
                      status === 'idle'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : status === 'loading'
                        ? 'bg-blue-500 text-white cursor-wait'
                        : status === 'success'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                    whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                  >
                    <AnimatePresence mode="wait">
                      {status === 'idle' && (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          Envoyer le Message
                        </motion.span>
                      )}
                      {status === 'loading' && (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Loader2 className="w-5 h-5" />
                          </motion.div>
                          <span>Envoi en cours...</span>
                        </motion.div>
                      )}
                      {status === 'success' && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 300,
                              damping: 20
                            }}
                          >
                            <CheckCircle2 className="w-5 h-5" />
                          </motion.div>
                          <span>Message envoyé !</span>
                        </motion.div>
                      )}
                      {status === 'error' && (
                        <motion.div
                          key="error"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 250,
                              damping: 15
                            }}
                          >
                            <XCircle className="w-5 h-5" />
                          </motion.div>
                          <span>Erreur d'envoi</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}