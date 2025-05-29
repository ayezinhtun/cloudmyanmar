import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Brain, Server, BarChartBig, CircleSlash2, Stars, Shield, Code, Database, LineChart, Users, Sparkles, Award, Building2, Globe } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: "AI Consulting",
      description: "Get expert guidance on implementing AI solutions for your business challenges.",
      icon: <Brain className="h-10 w-10 text-indigo-500" />,
    },
    {
      title: "Machine Learning",
      description: "Leverage data-driven insights with custom machine learning models tailored to your needs.",
      icon: <Server className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable business intelligence with our advanced analytics.",
      icon: <BarChartBig className="h-10 w-10 text-indigo-500" />,
    },
  ];

  const technologies = [
    {
      name: "TensorFlow",
      description: "Deep learning and neural networks",
      icon: <Brain className="h-8 w-8 text-indigo-400" />
    },
    {
      name: "PyTorch",
      description: "Advanced machine learning models",
      icon: <Server className="h-8 w-8 text-purple-400" />
    },
    {
      name: "Scikit-Learn",
      description: "Statistical modeling & analysis",
      icon: <LineChart className="h-8 w-8 text-indigo-400" />
    },
    {
      name: "Cloud AI",
      description: "Scalable cloud infrastructure",
      icon: <Globe className="h-8 w-8 text-purple-400" />
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "AI Projects" },
    { value: "25+", label: "Industry Awards" },
    { value: "100+", label: "Team Members" }
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Logistics",
    "Agriculture",
    "Real Estate"
  ];

  const features = [
    {
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning algorithms",
      icon: <Brain className="h-8 w-8" />
    },
    {
      title: "Secure Infrastructure",
      description: "Enterprise-grade security measures",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Custom Development",
      description: "Tailored solutions for your needs",
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "Data Integration",
      description: "Seamless system integration",
      icon: <Database className="h-8 w-8" />
    }
  ];

  const team = [
    {
      name: "Aung Min",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Lin Moe",
      role: "CTO",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
    },
    {
      name: "Kyi Phyu",
      role: "Head of AI",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Tun Tun",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* About Section */}
      <Section
        title="About Cloud Myanmar"
        subtitle="We're a team of AI specialists dedicated to creating innovative solutions that drive digital transformation."
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card delay={0} className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
              <Cpu className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400">To empower businesses in Myanmar with cutting-edge AI solutions that drive growth and innovation.</p>
          </Card>
          
          <Card delay={1} className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 text-purple-400">
              <Stars className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400">To be the leading AI solutions provider in Myanmar, pioneering the digital transformation journey.</p>
          </Card>
          
          <Card delay={2} className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
              <CircleSlash2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-400">Innovation, integrity, excellence, and client success drive everything we do at Cloud Myanmar.</p>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/about">
            <Button 
              variant="outline"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </Section>
      
      {/* Services Section */}
      <Section
        title="Our Services"
        subtitle="Discover how our AI solutions can transform your business operations and drive growth."
        centered
        className="bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} delay={index} className="p-8">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link to="/services" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button 
              variant="primary"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </Section>

      {/* Technologies Section */}
      <Section
        title="Our Technologies"
        subtitle="Cutting-edge tools and frameworks we use to build powerful AI solutions"
        centered
        className="bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {technologies.map((tech, index) => (
            <Card key={index} delay={index} className="p-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section
        title="Industries We Serve"
        subtitle="Specialized AI solutions across various sectors"
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-800/70 transition-colors"
            >
              <h3 className="text-lg font-medium text-gray-200">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section
        title="Why Choose Us"
        subtitle="Key features that set us apart"
        centered
        className="bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} delay={index} className="p-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section
        title="Meet Our Team"
        subtitle="The experts behind our success"
        centered
        className="bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <Card key={index} delay={index} className="overflow-hidden">
              <div className="aspect-square relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-indigo-400">{member.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Awards Section */}
      <Section
        title="Recognition & Awards"
        subtitle="Our commitment to excellence"
        centered
        className="bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Best AI Solutions Provider 2023</h3>
            <p className="text-gray-400">Myanmar Technology Awards</p>
          </Card>
          
          <Card className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 text-purple-400">
              <Building2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Innovation Excellence Award</h3>
            <p className="text-gray-400">ASEAN Business Awards 2023</p>
          </Card>
          
          <Card className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Top Tech Company 2023</h3>
            <p className="text-gray-400">Myanmar Digital Economy Association</p>
          </Card>
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
            Ready to Transform Your Business <br />
            <span className="gradient-text">With AI Solutions?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Contact us today to discuss how our AI expertise can help your business thrive in the digital age.
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
                Get in Touch
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
    </>
  );
};

export default Home;