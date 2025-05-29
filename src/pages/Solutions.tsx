import { motion } from 'framer-motion';
import { ArrowRight, Brain, Building2, BarChart as ChartBar, Cloud, Code2, Database, Factory, FileText, HeartPulse, LineChart, ShieldCheck, ShoppingBag } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutions = [
    {
      title: "Healthcare AI",
      description: "Advanced AI solutions for healthcare providers and medical institutions",
      icon: <HeartPulse className="h-10 w-10 text-indigo-500" />,
      features: [
        "Medical image analysis",
        "Patient data analytics",
        "Treatment optimization",
        "Resource management"
      ]
    },
    {
      title: "Financial Analytics",
      description: "AI-powered financial analysis and risk management solutions",
      icon: <LineChart className="h-10 w-10 text-purple-500" />,
      features: [
        "Risk assessment",
        "Fraud detection",
        "Market analysis",
        "Investment optimization"
      ]
    },
    {
      title: "Manufacturing Intelligence",
      description: "Smart manufacturing solutions for Industry 4.0",
      icon: <Factory className="h-10 w-10 text-indigo-500" />,
      features: [
        "Predictive maintenance",
        "Quality control",
        "Process optimization",
        "Supply chain management"
      ]
    },
    {
      title: "Retail Analytics",
      description: "AI solutions for modern retail businesses",
      icon: <ShoppingBag className="h-10 w-10 text-purple-500" />,
      features: [
        "Customer behavior analysis",
        "Inventory optimization",
        "Price optimization",
        "Demand forecasting"
      ]
    },
    {
      title: "Document Intelligence",
      description: "Automated document processing and analysis",
      icon: <FileText className="h-10 w-10 text-indigo-500" />,
      features: [
        "Text extraction",
        "Document classification",
        "Data validation",
        "Workflow automation"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Cloud-native AI infrastructure and services",
      icon: <Cloud className="h-10 w-10 text-purple-500" />,
      features: [
        "Cloud migration",
        "Scalable infrastructure",
        "Serverless computing",
        "DevOps automation"
      ]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: <HeartPulse className="h-6 w-6" />,
      solutions: [
        "Medical imaging analysis",
        "Patient risk prediction",
        "Clinical trial optimization",
        "Healthcare resource management"
      ]
    },
    {
      name: "Finance",
      icon: <ChartBar className="h-6 w-6" />,
      solutions: [
        "Fraud detection",
        "Risk assessment",
        "Algorithmic trading",
        "Customer segmentation"
      ]
    },
    {
      name: "Manufacturing",
      icon: <Factory className="h-6 w-6" />,
      solutions: [
        "Predictive maintenance",
        "Quality control",
        "Supply chain optimization",
        "Production planning"
      ]
    },
    {
      name: "Retail",
      icon: <ShoppingBag className="h-6 w-6" />,
      solutions: [
        "Customer analytics",
        "Inventory management",
        "Price optimization",
        "Demand forecasting"
      ]
    }
  ];

  const features = [
    {
      title: "Scalable Architecture",
      description: "Our solutions are built to grow with your business",
      icon: <Building2 className="h-6 w-6 text-indigo-400" />
    },
    {
      title: "Data Security",
      description: "Enterprise-grade security measures to protect your data",
      icon: <ShieldCheck className="h-6 w-6 text-indigo-400" />
    },
    {
      title: "Custom Development",
      description: "Tailored solutions to meet your specific needs",
      icon: <Code2 className="h-6 w-6 text-indigo-400" />
    },
    {
      title: "Data Integration",
      description: "Seamless integration with your existing systems",
      icon: <Database className="h-6 w-6 text-indigo-400" />
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
              Industry-Specific <br />
              <span className="gradient-text">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our tailored AI solutions can transform your industry and drive innovation in your business operations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3">
                  <Brain className="h-5 w-5" />
                </div>
                <span>Industry Expertise</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3">
                  <Code2 className="h-5 w-5" />
                </div>
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3">
                  <Database className="h-5 w-5" />
                </div>
                <span>Data Integration</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-indigo-900/30 rounded-full text-indigo-400 mr-3">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span>Enterprise Security</span>
              </div>
            </div>
            <Link to="/contact">
              <Button 
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Explore Solutions
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
              src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="AI Solutions" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">Industry Solutions</h3>
              <p className="text-gray-300">Tailored AI solutions for every sector</p>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Solutions Grid */}
      <Section
        title="Our Solutions"
        subtitle="Comprehensive AI solutions tailored for different industries"
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {solutions.map((solution, index) => (
            <Card key={index} delay={index} className="p-8">
              <div className="mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
              <p className="text-gray-400 mb-6">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, idx) => (
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
      
      {/* Industries Section */}
      <Section
        title="Industries We Serve"
        subtitle="Specialized AI solutions for various sectors"
        centered
        className="bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-400 mr-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold">{industry.name}</h3>
              </div>
              <ul className="space-y-3">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-2 mt-1 text-indigo-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Features Section */}
      <Section
        title="Why Choose Our Solutions"
        subtitle="Key features that set our AI solutions apart"
        centered
        className="bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} delay={index} className="p-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
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
            Ready to Transform Your Industry <br />
            <span className="gradient-text">With AI Solutions?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Contact us today to discuss how our AI solutions can help you stay ahead in your industry.
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
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Get Started
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Solutions;