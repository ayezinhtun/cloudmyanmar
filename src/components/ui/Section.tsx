import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  fullHeight?: boolean;
  centered?: boolean;
  id?: string;
}

const Section = ({
  children,
  title,
  subtitle,
  className = '',
  fullHeight = false,
  centered = false,
  id,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`
        section py-16 md:py-24
        ${fullHeight ? 'min-h-screen flex items-center' : ''}
        ${className}
      `}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <div className={`mb-12 md:mb-16 max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-400"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;