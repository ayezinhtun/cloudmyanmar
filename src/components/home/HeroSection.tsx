import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Database } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Prevent scrolling on this page
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const floatingIconVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex items-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950 z-0"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-indigo-500 opacity-20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Transforming Business <br/>
              <span className="gradient-text">With AI Solutions</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Cloud Myanmar is the leading provider of cutting-edge AI systems and solutions to empower your business in the digital age.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/services">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Explore Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Animated visual */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Central circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-64 h-64 rounded-full bg-indigo-900/20 backdrop-blur-md flex items-center justify-center border border-indigo-500/30 shadow-glow"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Cpu className="w-24 h-24 text-indigo-400" />
              </motion.div>
            </motion.div>
            
            {/* Floating icons */}
            <motion.div
              variants={floatingIconVariants}
              animate="animate"
              className="absolute -top-10 left-20 p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700"
            >
              <Brain className="w-10 h-10 text-purple-500" />
            </motion.div>
            
            <motion.div
              variants={floatingIconVariants}
              animate="animate"
              transition={{ delay: 1 }}
              className="absolute top-20 -right-5 p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700"
            >
              <Database className="w-10 h-10 text-indigo-500" />
            </motion.div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <motion.path
                d="M200,50 Q150,150 100,200"
                fill="none"
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <motion.path
                d="M200,50 Q250,150 300,200"
                fill="none"
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 2 }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;