import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, HeadphonesIcon, HelpCircle, LifeBuoy, Mail, MessageCircle, Phone, Search, Users } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "What types of AI solutions do you offer?",
      answer: "We offer a comprehensive range of AI solutions including machine learning, computer vision, natural language processing, predictive analytics, and custom AI development tailored to your business needs."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary depending on the complexity of the solution. Simple projects might take 2-3 months, while more complex enterprise solutions can take 6-12 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and more. Our solutions are customized to meet industry-specific challenges and requirements."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including encryption, secure data storage, access controls, and compliance with international data protection standards to ensure your data remains safe and confidential."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer comprehensive post-implementation support including maintenance, monitoring, optimization, training, and 24/7 technical support to ensure your AI solution continues to perform optimally."
    },
    {
      question: "How do you price your services?",
      answer: "Our pricing is based on the scope, complexity, and specific requirements of your project. We offer flexible pricing models including project-based, subscription-based, and custom arrangements. Contact us for a detailed quote."
    }
  ];

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/docs"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share knowledge",
      icon: <Users className="h-6 w-6" />,
      link: "/community"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step visual guides and tutorials",
      icon: <HeadphonesIcon className="h-6 w-6" />,
      link: "/tutorials"
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageCircle className="h-6 w-6" />,
      action: "Start Chat"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: <Phone className="h-6 w-6" />,
      action: "Call Now"
    },
    {
      title: "Email Support",
      description: "Send us your detailed inquiries",
      icon: <Mail className="h-6 w-6" />,
      action: "Send Email"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section fullHeight className="bg-gradient-to-b from-gray-900 to-gray-950 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            How Can We <span className="gradient-text">Help You?</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Find answers, documentation, and expert support to help you get the most out of our AI solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our knowledge base..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </motion.div>
        </div>
      </Section>

      {/* Support Channels */}
      <Section
        title="Get Support"
        subtitle="Choose your preferred way to get help from our team"
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {supportChannels.map((channel, index) => (
            <Card key={index} delay={index} className="p-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
                {channel.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{channel.title}</h3>
              <p className="text-gray-400 mb-6">{channel.description}</p>
              <Button variant="primary">
                {channel.action}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Resources Section */}
      <Section
        title="Resources"
        subtitle="Explore our comprehensive collection of resources"
        centered
        className="bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {resources.map((resource, index) => (
            <Link key={index} to={resource.link}>
              <Card delay={index} className="p-8 text-center h-full">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                <p className="text-gray-400">{resource.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions"
        centered
        className="bg-gray-900"
      >
        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-3 flex items-start">
                  <HelpCircle className="h-6 w-6 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 ml-9">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact CTA Section */}
      <Section className="bg-gradient-to-t from-gray-950 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 p-1 rounded-xl"
          >
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
                <LifeBuoy className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-gray-300 mb-6">
                Our support team is always ready to assist you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="h-5 w-5" />}
                    iconPosition="right"
                  >
                    Contact Support
                  </Button>
                </Link>
                <Link to="/docs">
                  <Button 
                    variant="outline"
                    size="lg"
                  >
                    Browse Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Support;