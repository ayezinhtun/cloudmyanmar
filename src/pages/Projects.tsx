import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code, Database, Globe, LineChart } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Healthcare AI Assistant",
      client: "Myanmar General Hospital",
      description: "AI-powered diagnostic assistance system for medical professionals",
      image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg",
      category: "Healthcare",
      technologies: ["TensorFlow", "Python", "React"],
      outcomes: [
        "30% faster diagnosis time",
        "95% accuracy rate",
        "Improved patient care"
      ]
    },
    {
      title: "Financial Fraud Detection",
      client: "Myanmar Banking Group",
      description: "Real-time fraud detection system using machine learning",
      image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg",
      category: "Finance",
      technologies: ["PyTorch", "Python", "Node.js"],
      outcomes: [
        "90% fraud detection rate",
        "50% reduction in false positives",
        "$2M saved annually"
      ]
    },
    {
      title: "Smart Inventory Management",
      client: "Myanmar Retail Chain",
      description: "AI-driven inventory optimization system",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
      category: "Retail",
      technologies: ["Scikit-learn", "Python", "React"],
      outcomes: [
        "25% reduction in stockouts",
        "20% inventory cost reduction",
        "Improved supply chain efficiency"
      ]
    },
    {
      title: "Manufacturing Quality Control",
      client: "Myanmar Manufacturing Co.",
      description: "Computer vision system for quality assurance",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      category: "Manufacturing",
      technologies: ["OpenCV", "TensorFlow", "Python"],
      outcomes: [
        "99% defect detection rate",
        "40% reduction in manual inspection",
        "Improved product quality"
      ]
    },
    {
      title: "Agricultural Yield Prediction",
      client: "Myanmar Agri-Tech",
      description: "ML-based crop yield prediction system",
      image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
      category: "Agriculture",
      technologies: ["Python", "TensorFlow", "React"],
      outcomes: [
        "85% prediction accuracy",
        "20% increase in crop yield",
        "Optimized resource usage"
      ]
    },
    {
      title: "Education Analytics Platform",
      client: "Myanmar Education Network",
      description: "Learning analytics and student performance prediction",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
      category: "Education",
      technologies: ["Python", "React", "Node.js"],
      outcomes: [
        "15% improvement in student performance",
        "Personalized learning paths",
        "Enhanced teaching efficiency"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section fullHeight className="bg-gradient-to-b from-gray-900 to-gray-950 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our portfolio of successful AI implementations across various industries in Myanmar.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3">
                  <Brain className="h-5 w-5" />
                </div>
                <span>AI Excellence</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3">
                  <Globe className="h-5 w-5" />
                </div>
                <span>Local Impact</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3">
                  <Database className="h-5 w-5" />
                </div>
                <span>Data-Driven</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3">
                  <Code className="h-5 w-5" />
                </div>
                <span>Innovation</span>
              </div>
            </div>
            <Link to="/contact">
              <Button 
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Start Your Project
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/20"
          >
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="AI Projects"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">Innovative Solutions</h3>
              <p className="text-gray-300">Transforming businesses across Myanmar</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section
        title="Featured Projects"
        subtitle="Discover how we've helped businesses across Myanmar transform with AI"
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} delay={index} className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-indigo-400 text-sm mb-4">{project.client}</p>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Outcomes:</h4>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-center text-gray-400 text-sm">
                        <LineChart className="h-4 w-4 text-indigo-400 mr-2" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-t from-gray-950 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Build Your <br />
            <span className="gradient-text">Success Story?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Let's discuss how our AI solutions can transform your business and create lasting impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button 
                variant="primary" 
                size="lg"
              >
                Start Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;