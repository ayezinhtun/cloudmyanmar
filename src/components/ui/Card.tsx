import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  delay = 0
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={hoverEffect ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={`
        bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 shadow-lg hover:shadow-indigo-900/20' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;