import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Camera,
  BarChart as ChartBar,
  Cloud,
  Code2,
  Cpu,
  Database,
  Factory,
  FileText,
  Globe,
  HardDrive,
  HeartPulse,
  Home,
  LineChart,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { title } from "framer-motion/client";

import img14 from "../assets/img14.png";

const Solutions = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  const solutions = [
    {
      title: "IT Infrastructure & System Integration Services",
      description:
        "Design, deployment, and integration of IT infrastructure solutions tailored to enterprise requirements.",
      icon: <Cpu className="h-10 w-10 text-[#E2B478]" />,
      features: [
        "Server Consolidation/ Virtualization",
        "High Availability/ Redundancy Solutions",
        "Fault Tolerant Solutions & Hyper-Converged Infrastructure",
        "Wireless Infrastructure & BYOD Solutions",
        "Infrastructure Upgrade & Migration",
        "IT Infrastructure Setup for New Offices & Relocation",
        "DC/DR Core Network Solutions",
      ],
    },
    {
      title: "Cloud & Managed Services",
      description:
        "Provision of cloud platforms and managed IT services to ensure availability, scalability, and operational efficiency.",
      icon: <Database className="h-10 w-10 text-[#DBE278]" />,
      features: [
        "Private and Public Solutions",
        "Hybrid Solutions",
        "Unified Communications",
        "Telepresence and Teleconference Solutions",
        "VOIP Solutions",
        "Advanced IaaS solution",
      ],
    },
    {
      title: "Data Center Services",
      description:
        "Implementation, optimization, and support of data center infrastructure.",
      icon: <HardDrive className="h-10 w-10 text-[#E2B478]" />,
      features: [
        "Active-Active DC/DR Solutions",
        "Storage & Backup Solutions",
        "Project Management",
        "Delivering Cost Effective & Quality Solutions",
        "Software Defined Networding (SDN) and Virtualization",
      ],
    },
    {
      title: "Security & Compliance Services",
      description:
        "Delivery of cybersecurity solutions and compliance management to safeguard IT systems and data.",
      icon: <Shield className="h-10 w-10 text-[#DBE278]" />,
      features: [
        "Advanced Persistent Threat Protection",
        "Compliance Management",
        "Cyberseccurity & Risk Management",
        "Enabling & Optimizing SSL/TLS",
        "Web Application Firewalls",
        "DDoS Protection",
        "Data Center and Enterprise Security",
        "PCI Compliant Solutions",
        "Next Generation Firewalls",
      ],
    },
    {
      title: "Consultation Services",
      description:
        "Professional advisory services for IT strategy, system architecture, and digital transformation.",
      icon: <BookOpen className="h-10 w-10 text-[#E2B478]" />,
      features: [
        "Gain external and objective advice with professional recommendations",
        "Hire extra hands for one-time projects where the hiring of permanent employees is not necessary",
        "Acquire professional help in project scoping and planning",
        "Convert your business requirements into technical language",
      ],
    },
    {
      title: "Technical Transfer Services",
      description:
        "Structured knowledge transfer and technical training to empower customer IT teams.",
      icon: <Camera className="h-10 w-10 text-[#DBE278]" />,
      features: ["Knowledge Sharing and Technical Transfer Services"],
    },
  ];

  const industries = [
    {
      name: "Telecommunications & Networking",
      icon: <Server className="h-6 w-6" />,
      solutions: [
        "Core & branch network deployment",
        "Firewall & VPN setup",
        "Router & switch configuration",
        "WAN & LAN optimization",
      ],
    },
    {
      name: "Government & Public Sector",
      icon: <Globe className="h-6 w-6" />,
      solutions: [
        "E-Government network upgrades",
        "Datacenter setup & DR implementation",
        "Email & communication system expansion",
        "Compliance & risk management",
      ],
    },
    {
      name: "Enterprise IT & Corporate Infrastructure",
      icon: <Cpu className="h-6 w-6" />,
      solutions: [
        "Data center virtualization (VMware, Azure)",
        "Cloud migration & management",
        "Server & storage upgrades",
        "End-to-end IT support",
      ],
    },
    {
      name: "Security & Surveillance",
      icon: <ShieldCheck className="h-6 w-6" />,
      solutions: [
        "Firewall & endpoint protection",
        "Vulnerability scanning",
        "CCTV & monitoring systems",
        "DDoS & threat protection",
      ],
    },
    {
      name: "Cloud & Virtualization Solutions",
      icon: <Cloud className="h-6 w-6" />,
      solutions: [
        "Cloud migration & deployment",
        "Virtual machines & containerization",
        "Serverless infrastructure",
        "DevOps & automation",
      ],
    },
    {
      name: "Data Center & IT Operations",
      icon: <Database className="h-6 w-6" />,
      solutions: [
        "Datacenter setup & management",
        "Backup & disaster recovery",
        "Monitoring & optimization",
        "Hardware & network support",
      ],
    },
    {
      name: "Corporate & Enterprise Services",
      icon: <Briefcase className="h-6 w-6" />,
      solutions: [
        "IT consulting & project management",
        "Enterprise software deployment",
        "Collaboration & communication systems",
        "End-user support",
      ],
    },
    {
      name: "Infrastructure & Logistics Support",
      icon: <Truck className="h-6 w-6" />,
      solutions: [
        "Network connectivity for offices & warehouses",
        "Server & cloud support",
        "VPN & secure communications",
        "Data tracking systems",
      ],
    },
  ];

  const features = [
    {
      title: "Comprehensive Service Portfolio",
      description: (
        <>
          We are a single-source partner for all your technological needs,
          spanning
          <b> IT Infrastructure, Datacenter, Cloud, and Managed Services. </b>
        </>
      ),
    },
    {
      title: "Certified Security Experts",
      description: (
        <>
          Our primary focus is security. We ensure your systems are
          <b>compliant and resilient</b> with international standards, guided by
          our team of <b>internationally certified professionals.</b>
        </>
      ),
    },
    {
      title: "Strategic Growth & Knowledge Transfe",
      description: (
        <>
          We don't just fix problems; we consult on future-proofing your
          business and provide <b>Technical Transfer Services</b> to empower
          your in-house teams.
        </>
      ),
    },
    {
      title: "Reliable Partnership",
      description: (
        <>
          Established in 2020, we are committed to building long-term
          relationships and delivering high-quality, affordable solutions that
          achieve complete customer satisfaction.
        </>
      ),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section
        fullHeight
        className="bg-gradient-to-b from-gray-900 to-gray-950 flex items-center"
      >
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
              Delivering reliable IT infrastructure, networking, and system
              integration solutions tailored to the unique needs of each
              industry.
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
            <Link to="/contact">
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
        id="solution"
        title="Our Solutions"
        subtitle="End-to-end IT and cloud solutions tailored for modern enterprises"
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {solutions.map((solution, index) => (
            <Card key={index} delay={index} className="p-8">
              <div className="mb-6">{solution.icon}</div>
              <h3 className="text-xl font-bold mb-4 min-h-[3rem]">
                {solution.title}
              </h3>
              <p className="text-gray-400">{solution.description}</p>
              {/* <ul className="space-y-2 mb-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="mr-2 text-[#E2B478]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul> */}
              {/* <Link to="/contact" className="text-[#E2B478] hover:text-[#ebcba2] inline-flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link> */}
            </Card>
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      {/* <Section
        id="solution"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section> */}

      {/* Features Section */}

      <Section
        title="Why Choose Our Solutions"
        subtitle="Key features that set our IT solutions apart"
        centered
        className="bg-gray-900"
      >
        <div className="grid grid-cols-12">
          <div className="flex flex-col gap-6 col-span-12 md:col-span-10">
            {features.map((feature, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-sm overflow-hidden font-semibold text-lg flex items-center justify-center text-center p-4">
                  {feature.title}
                </div>
                <div className="md:col-span-2 p-6 bg-gray-800/70 backdrop-blur-sm rounded-sm overflow-hidden">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-12 md:col-span-2 flex items-end">
            <div>
              <img src={img14} alt="Feature" />
            </div>
          </div>
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
            Contact us today to discuss how our IT infrastructure, networking,
            and enterprise solutions can optimize your operations and support
            growth.{" "}
          </motion.p>

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
            <Link to="/solutions#solution">
              <Button variant="outline" size="lg">
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
