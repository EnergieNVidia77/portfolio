import { motion, useInView } from 'motion/react';
import { useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Réduire l'animation sur mobile pour meilleures performances
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const animationDistance = isMobile ? 20 : 40;

  const adjustedDirections = {
    up: { y: animationDistance, x: 0 },
    down: { y: -animationDistance, x: 0 },
    left: { x: animationDistance, y: 0 },
    right: { x: -animationDistance, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...adjustedDirections[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        duration: isMobile ? 0.5 : 0.7, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Easing similaire à Apple
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
