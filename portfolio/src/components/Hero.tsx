import { Github, Linkedin, Mail, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import img from '../assets/hero_img.jpg';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Effet parallaxe sur le scroll (désactivé sur mobile pour performance)
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${img}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <motion.div
        className="container mx-auto px-4 py-16 md:py-20 text-center relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-4 md:mb-6 inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Rocket className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto animate-bounce" />
          </motion.div>
          <motion.h1
            className="text-white mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Bonjour, je suis <span className="text-blue-400">Toufic Talha</span>
          </motion.h1>
          <motion.h2
            className="text-white mb-6 md:mb-8 text-xl md:text-2xl lg:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Développeur Full Stack
          </motion.h2>
          <motion.p
            className="text-gray-200 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
           Développeur passionné, je suis motivé pour apprendre, évoluer et contribuer à des projets impactants, tout en livrant un code propre et maintenable.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me Contacter
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir Mes Projets
            </motion.button>
          </motion.div>

          <motion.div
            className="flex gap-4 md:gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="https://github.com/EnergieNVidia77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/toufictalha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
            <motion.a
              href="mailto:toufictalhapro@gmail.com"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
