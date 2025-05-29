import { motion } from 'framer-motion';
import { ArrowRight, Brain, Building, Cpu, Database, LineChart, MessageSquare, Server, Sparkles, BarChart2, Network } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "AI Consulting",
      description: "Strategic guidance on AI implementation tailored to your business needs",
      icon: <Brain className="h-10 w-10 text-indigo-500" />,
      features: [
        "AI readiness assessment",
        "Strategy development",
        "ROI analysis",
        "Technology selection"
      ]
    },
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models to solve complex business problems and extract insights",
      icon: <Server className="h-10 w-10 text-purple-500" />,
      features: [
        "Predictive analytics",
        "Classification models",
        "Regression analysis",
        "Anomaly detection"
      ]
    },
    {
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable business intelligence and insights",
      icon: <BarChart2 className="h-10 w-10 text-indigo-500" />,
      features: [
        "Data visualization",
        "Business dashboards",
        "Trend analysis",
        "Performance metrics"
      ]
    },
    {
      title: "Computer Vision",
      description: "Advanced image and video processing solutions for various applications",
      icon: <Cpu className="h-10 w-10 text-purple-500" />,
      features: [
        "Object detection",
        "Image classification",
        "Facial recognition",
        "Video analytics"
      ]
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis and language understanding for enhanced communication",
      icon: <MessageSquare className="h-10 w-10 text-indigo-500" />,
      features: [
        "Sentiment analysis",
        "Text classification",
        "Named entity recognition",
        "Language translation"
      ]
    },
    {
      title: "AI Integration Services",
      description: "Seamless integration of AI capabilities into your existing systems",
      icon: <Network className="h-10 w-10 text-purple-500" />,
      features: [
        "API development",
        "System integration",
        "Microservices architecture",
        "Continuous deployment"
      ]
    },
    {
      title: "Big Data Engineering",
      description: "Robust infrastructure for processing and managing large datasets",
      icon: <Database className="h-10 w-10 text-indigo-500" />,
      features: [
        "Data pipelines",
        "ETL processes",
        "Data warehousing",
        "Real-time processing"
      ]
    },
    {
      title: "AI-Powered Automation",
      description: "Streamline operations and reduce manual tasks through intelligent automation",
      icon: <Sparkles className="h-10 w-10 text-purple-500" />,
      features: [
        "Process automation",
        "Workflow optimization",
        "Intelligent bots",
        "Decision support systems"
      ]
    },
    {
      title: "Industry-Specific Solutions",
      description: "Specialized AI applications tailored to your industry's unique challenges",
      icon: <Building className="h-10 w-10 text-indigo-500" />,
      features: [
        "Healthcare AI",
        "Financial analytics",
        "Retail intelligence",
        "Manufacturing optimization"
      ]
    },
  ];

  const processSteps = [
    { 
      title: "Discovery", 
      description: "We learn about your business, challenges, and goals to identify how AI can create value.",
      icon: <Brain className="h-6 w-6" />
    },
    { 
      title: "Strategy", 
      description: "We develop a tailored implementation plan with clear milestones and expected outcomes.",
      icon: <LineChart className="h-6 w-6" />
    },
    { 
      title: "Development", 
      description: "Our team builds your custom AI solution using cutting-edge technologies and methodologies.",
      icon: <Cpu className="h-6 w-6" />
    },
    { 
      title: "Integration", 
      description: "We seamlessly integrate the AI solution into your existing systems and workflows.",
      icon: <Network className="h-6 w-6" />
    },
    { 
      title: "Deployment", 
      description: "Your solution goes live with comprehensive testing and quality assurance.",
      icon: <Server className="h-6 w-6" />
    },
    { 
      title: "Support", 
      description: "We provide ongoing maintenance, optimization, and support to ensure long-term success.",
      icon: <Sparkles className="h-6 w-6" />
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
              Our <span className="gradient-text">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive AI solutions designed to transform your business operations, enhance decision-making, and drive innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-medium">Customized Solutions</h4>
                  <p className="text-gray-400 text-sm mt-1">Tailored to your specific business needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-medium">Expert Team</h4>
                  <p className="text-gray-400 text-sm mt-1">Specialized AI developers and data scientists</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-medium">End-to-End Service</h4>
                  <p className="text-gray-400 text-sm mt-1">From strategy to implementation and support</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-medium">Proven Results</h4>
                  <p className="text-gray-400 text-sm mt-1">Track record of successful implementations</p>
                </div>
              </div>
            </div>
            <Link to="/contact">
              <Button 
                variant="primary"
                size="lg"
              >
                Discuss Your Project
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/20 aspect-[4/3]"
          >
            <img 
              src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="AI Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">Innovative AI Solutions</h3>
              <p className="text-gray-300">Powering the future of business in Myanmar</p>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Our Services Section */}
      <Section
        title="Our Services"
        subtitle="Comprehensive AI solutions to address your business challenges"
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} delay={index} className="p-8">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="mr-2 text-indigo-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Our Process Section */}
      <Section
        title="Our Process"
        subtitle="A structured approach to implementing AI solutions for your business"
        centered
        className="bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="mt-16 relative">
          {/* Process timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative md:grid grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left md:flex-row-reverse'
                }`}
              >
                <div className={index % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                  <h3 className="text-xl font-bold mb-4">
                    <span className="text-indigo-400">0{index + 1}.</span> {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                
                <div className={`hidden md:flex items-center justify-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-indigo-900/50 backdrop-blur-sm flex items-center justify-center border border-indigo-500/30 z-10">
                      {step.icon}
                    </div>
                    <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl"></div>
                  </div>
                </div>
                
                {/* Mobile view */}
                <div className="flex md:hidden items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center border border-indigo-500/30 mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold">
                    <span className="text-indigo-400">0{index + 1}.</span> {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Technologies Section */}
      <Section
        title="Technologies We Use"
        subtitle="Cutting-edge tools and frameworks to build powerful AI solutions"
        centered
        className="bg-gray-900"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {[
            { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" },
            { name: "PyTorch", icon: "https://pytorch.org/assets/images/pytorch-logo.png" },
            { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" },
            { name: "Keras", icon: "https://keras.io/img/logo.png" },
            { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" },
            { name: "R", icon: "https://www.r-project.org/logo/Rlogo.png" },
            { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" },
            { name: "Google Cloud", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg flex flex-col items-center justify-center h-32"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="max-h-12 mb-4 object-contain"
              />
              <p className="text-gray-300 text-sm">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Why Choose Us Section */}
      <Section
        title="Why Choose Us"
        subtitle="What sets Cloud Myanmar apart as your AI solutions partner"
        className="bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/20 aspect-[4/3]"
          >
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Our Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-300">Specialists in AI and machine learning</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">What Makes Us Different</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-900/30 rounded-full text-indigo-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Local Expertise, Global Standards</h4>
                  <p className="text-gray-400">We combine deep knowledge of the Myanmar market with international best practices in AI development.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-900/30 rounded-full text-indigo-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Results-Driven Approach</h4>
                  <p className="text-gray-400">We focus on delivering measurable business outcomes and ROI from your AI investments.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-900/30 rounded-full text-indigo-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Customized Solutions</h4>
                  <p className="text-gray-400">No one-size-fits-all approaches – we tailor our solutions to your specific business challenges.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-900/30 rounded-full text-indigo-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Transparent Collaboration</h4>
                  <p className="text-gray-400">We maintain clear communication and involve you throughout the development process.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business <br />
            <span className="gradient-text">With AI Technology?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Contact us today to discuss your project and discover how our AI services can help you achieve your business goals.
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
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg"
              >
                View Our Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Services;