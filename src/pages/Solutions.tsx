import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Briefcase, Building2, Camera, BarChart as ChartBar, Cloud, Code2, Cpu, Database, Factory, FileText, Globe, HeartPulse, Home, LineChart, Server, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutions = [
    {
      title: "Network Infrastructure",
      description: "Design, implementation, and maintenance of enterprise and government networks",
      icon: <Server className="h-10 w-10 text-[#E2B478]" />,
      features: [
        "Core & branch network deployment",
        "Firewall & VPN setup",
        "Router & switch configuration",
        "WAN & LAN optimization"
      ]
    },
    {
      title: "Data Center Solutions",
      description: "Comprehensive data center setup, migration, and operations",
      icon: <Database className="h-10 w-10 text-[#DBE278]" />,
      features: [
        "Turnkey data center implementation",
        "VMware & cloud virtualization",
        "High availability & redundancy",
        "Disaster recovery setup"
      ]
    },
    {
      title: "Cloud & Managed Services",
      description: "Cloud migration, management, and scalable IT solutions",
      icon: <Cloud className="h-10 w-10 text-[#E2B478]" />,
      features: [
        "Public & private cloud solutions",
        "Hybrid cloud integration",
        "Serverless and scalable infrastructure",
        "Managed IT support & monitoring"
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Protecting enterprise networks and ensuring regulatory compliance",
      icon: <ShieldCheck className="h-10 w-10 text-[#DBE278]" />,
      features: [
        "Firewall & endpoint security",
        "Vulnerability scanning",
        "Compliance & risk management",
        "DDoS & threat protection"
      ]
    },
    {
      title: "IT Infrastructure Upgrade",
      description: "Upgrading legacy systems and optimizing enterprise IT environments",
      icon: <Cpu className="h-10 w-10 text-[#E2B478]" />,
      features: [
        "EOL device replacement",
        "Server & storage upgrades",
        "Network optimization",
        "Performance monitoring"
      ]
    },
    {
      title: "Security & Surveillance Solutions",
      description: "Deployment of CCTV, access control, and monitoring systems",
      icon: <Camera className="h-10 w-10 text-[#DBE278]" />,
      features: [
        "CCTV installation & monitoring",
        "Secure local network setup",
        "Access control systems",
        "Government & enterprise compliance"
      ]
    }
  ];


  const industries = [
    {
      name: "Telecommunications & Networking",
      icon: <Server className="h-6 w-6" />,
      solutions: [
        "Core & branch network deployment",
        "Firewall & VPN setup",
        "Router & switch configuration",
        "WAN & LAN optimization"
      ]
    },
    {
      name: "Government & Public Sector",
      icon: <Globe className="h-6 w-6" />,
      solutions: [
        "E-Government network upgrades",
        "Datacenter setup & DR implementation",
        "Email & communication system expansion",
        "Compliance & risk management"
      ]
    },
    {
      name: "Enterprise IT & Corporate Infrastructure",
      icon: <Cpu className="h-6 w-6" />,
      solutions: [
        "Data center virtualization (VMware, Azure)",
        "Cloud migration & management",
        "Server & storage upgrades",
        "End-to-end IT support"
      ]
    },
    {
      name: "Security & Surveillance",
      icon: <ShieldCheck className="h-6 w-6" />,
      solutions: [
        "Firewall & endpoint protection",
        "Vulnerability scanning",
        "CCTV & monitoring systems",
        "DDoS & threat protection"
      ]
    },
    {
      name: "Cloud & Virtualization Solutions",
      icon: <Cloud className="h-6 w-6" />,
      solutions: [
        "Cloud migration & deployment",
        "Virtual machines & containerization",
        "Serverless infrastructure",
        "DevOps & automation"
      ]
    },
    {
      name: "Data Center & IT Operations",
      icon: <Database className="h-6 w-6" />,
      solutions: [
        "Datacenter setup & management",
        "Backup & disaster recovery",
        "Monitoring & optimization",
        "Hardware & network support"
      ]
    },
    {
      name: "Corporate & Enterprise Services",
      icon: <Briefcase className="h-6 w-6" />,
      solutions: [
        "IT consulting & project management",
        "Enterprise software deployment",
        "Collaboration & communication systems",
        "End-user support"
      ]
    },
    {
      name: "Infrastructure & Logistics Support",
      icon: <Truck className="h-6 w-6" />,
      solutions: [
        "Network connectivity for offices & warehouses",
        "Server & cloud support",
        "VPN & secure communications",
        "Data tracking systems"
      ]
    }
  ];



  const features = [
    {
      title: "Scalable Infrastructure",
      description: "IT solutions designed to grow with your organization, from branch networks to data centers.",
      icon: <Building2 className="h-6 w-6 text-[#E2B478]" />
    },
    {
      title: "Enterprise Security",
      description: "Robust security measures including firewalls, VPNs, and endpoint protection to safeguard your systems.",
      icon: <ShieldCheck className="h-6 w-6 text-[#E2B478]" />
    },
    {
      title: "Custom IT Solutions",
      description: "Tailored system integration and infrastructure projects to match your business requirements.",
      icon: <Code2 className="h-6 w-6 text-[#E2B478]" />
    },
    {
      title: "Cloud & Virtualization",
      description: "Seamless deployment of cloud platforms, virtualized servers, and enterprise applications.",
      icon: <Database className="h-6 w-6 text-[#E2B478]" />
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
              Industry-Focused <br />
              <span className="gradient-text">IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Delivering reliable IT infrastructure, networking, and system integration
              solutions tailored to the unique needs of each industry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="p-2 bg-gray-800/80 rounded-full text-[#E2B478] mr-3">
                  <Brain className="h-5 w-5" />
                </div>
                <span>Industry Experience</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-gray-800/80 rounded-full text-[#E2B478] mr-3">
                  <Code2 className="h-5 w-5" />
                </div>
                <span>Customized IT Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-gray-800/80 rounded-full text-[#E2B478] mr-3">
                  <Database className="h-5 w-5" />
                </div>
                <span>Seamless System Integration</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-gray-800/80 rounded-full text-[#E2B478] mr-3">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span>Enterprise-Grade Security</span>
              </div>
            </div>
            <Link to="/contact#contacts">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Explore Our Solutions
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
              alt="SI Solutions"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            {/* <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">Industry Solutions</h3>
              <p className="text-gray-300"> Trusted IT and system integration solutions across multiple sectors</p>
            </div> */}
          </motion.div>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section
        title="Our Solutions"
        subtitle="End-to-end IT and cloud solutions tailored for modern enterprises"
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
                    <div className="mr-2 text-[#E2B478]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <Link to="/contact" className="text-[#E2B478] hover:text-[#ebcba2] inline-flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link> */}
            </Card>
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section
        title="Industries We Serve"
        subtitle="Reliable IT and network solutions for every industry"
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
                <div className="w-12 h-12 rounded-full bg-gray-800/80 flex items-center justify-center text-[#E2B478] mr-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold">{industry.name}</h3>
              </div>
              <ul className="space-y-3">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-2 mt-1 text-[#E2B478]">
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
        subtitle="Key features that set our IT solutions apart"
        centered
        className="bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} delay={index} className="p-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80">
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
            <span className="gradient-text">With IT Solutions?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Contact us today to discuss how our IT infrastructure, networking, and enterprise solutions can optimize your operations and support growth.          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact#contacts">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Get Started
              </Button>
            </Link>
            <Link to="/services#service">
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