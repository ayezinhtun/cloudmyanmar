import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Brain,
  Server,
  BarChartBig,
  CircleSlash2,
  Stars,
  Shield,
  Code,
  Database,
  LineChart,
  Users,
  Sparkles,
  Award,
  Building2,
  Globe,
  MapPin,
  ShieldCheck,
  HardDrive,
  BookOpen,
  Camera,
} from "lucide-react";
import HeroSection from "../components/home/HeroSection";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link, useLocation } from "react-router-dom";
import img15 from "../assets/img15.png";

const Home = () => {
  
  const services = [
    {
      title: (
        <>
          IT Infrastructure <br /> & <br /> System Integration <br /> Services
        </>
      ),
      icon: <Cpu className="h-8 w-8 text-[#E2B478]" />,
    },
    {
      title: (
        <>
          Cloud <br /> & <br /> Managed Services
        </>
      ),
      icon: <Database className="h-8 w-8 text-[#DBE278]" />,
    },
    {
      title: (
        <>
          Security <br /> & <br /> Compliance <br /> Service
        </>
      ),
      icon: <Shield className="h-8 w-8 text-[#E2B478]" />,
    },
    {
      title: (
        <>
          Data Center <br /> Services
        </>
      ),
      icon: <HardDrive className="h-8 w-8 text-[#E2B478]" />,
    },
    {
      title: (
        <>
          Consultation <br /> Services
        </>
      ),
      icon: <BookOpen className="h-8 w-8 text-[#E2B478]" />,
    },
    {
      title: (
        <>
          Technical Transfer <br /> Services
        </>
      ),
      icon: <Camera className="h-8 w-8 text-[#E2B478]" />,
    },
  ];
  const technologies = [
    {
      name: "VMware",
      description: "Server virtualization and cloud infrastructure",
      icon: <Server className="h-8 w-8 text-[#E2B478]" />,
    },
    {
      name: "Cisco",
      description: "Networking, routing, and security solutions",
      icon: <MapPin className="h-8 w-8 text-[#DBE278]" />,
    },
    {
      name: "Microsoft Azure",
      description: "Cloud computing and hybrid solutions",
      icon: <Globe className="h-8 w-8 text-[#E2B478]" />,
    },
    {
      name: "Fortinet",
      description: "Enterprise security and firewalls",
      icon: <ShieldCheck className="h-8 w-8 text-[#DBE278]" />,
    },
  ];

  // const stats = [
  //   { value: "98%", label: "Client Satisfaction" },
  //   { value: "50+", label: "AI Projects" },
  //   { value: "25+", label: "Industry Awards" },
  //   { value: "100+", label: "Team Members" }
  // ];

  const industries = [
    "Telecommunications & Networking",
    "Government & Public Sector",
    "Enterprise IT & Corporate Infrastructure",
    "Security & Surveillance",
    "Cloud & Virtualization Solutions",
    "Data Center & IT Operations",
    "Corporate & Enterprise Services",
    "Infrastructure & Logistics Support",
  ];

  const features = [
    {
      title: "Secure Infrastructure",
      description:
        "Enterprise-grade security for networks, data centers, and applications",
      icon: <Shield className="h-8 w-8 text-[#E2B478]" />,
    },
    {
      title: "System Integration",
      description: "Seamless integration of IT, network, and cloud solutions",
      icon: <Database className="h-8 w-8 text-[#DBE278]" />,
    },
    {
      title: "Cloud & Virtualization",
      description: "Reliable cloud, virtualization, and hybrid IT solutions",
      icon: <Server className="h-8 w-8 text-[#E2B478]" />,
    },
    {
      title: "Network & IT Operations",
      description:
        "Efficient network, data center, and IT operations management",
      icon: <MapPin className="h-8 w-8 text-[#DBE278]" />,
    },
  ];

  // const team = [
  //   {
  //     name: "Aung Min",
  //     role: "CEO & Founder",
  //     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  //   },
  //   {
  //     name: "Lin Moe",
  //     role: "CTO",
  //     image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
  //   },
  //   {
  //     name: "Kyi Phyu",
  //     role: "Head of AI",
  //     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  //   },
  //   {
  //     name: "Tun Tun",
  //     role: "Lead Developer",
  //     image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
  //   }
  // ];

  return (
    <>
      <HeroSection />

      {/* About Section */}
      <Section
        title="About Byte Matrix Myanmar"
        subtitle="Expertise in IT infrastructure, networking, and system integration to empower businesses across Myanmar."
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card delay={0} className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80 text-[#E2B478] ">
              <Cpu className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To provide high-quality and affordable IT solutions, build
              long-term client relationships, respond quickly to evolving
              business needs, and continuously improve our services to achieve
              complete customer satisfaction.
            </p>
          </Card>

          <Card delay={1} className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80 text-[#DBE278] ">
              <Stars className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To set the standard for secure and reliable digital transformation
              across Myanmar by delivering innovative IT solutions built on
              international best practices and future-ready technology.
            </p>
          </Card>

          {/* <Card delay={2} className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80 text-[#E2B478]">
              <CircleSlash2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-400">We value innovation and transparency, reflected in our products, services, operations, and how we treat our team members.</p>
          </Card> */}
        </div>

        <div className="mt-12 text-center">
          <Link to="/about#mission">
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
        title="Our Solutions"
        subtitle="Explore our innovative IT, cloud, and security solutions designed to empower your business."
        centered
        className="bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {services.map((service, idx) => (
                <Link to="/solutions#solution" key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 10px 10px rgba(226, 180, 120, 0.1)",
                      transition: { duration: 0.3 },
                    }}
                    className="relative bg-gray-800/70 backdrop-blur-sm rounded-3xl overflow-hidden font-semibold text-lg flex items-center justify-center text-center py-8"
                  >
                    <div className="h-40 flex items-center justify-center text-center">
                      <h3 className="text-white text-xl font-bold leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="bg-white rounded-full flex items-center justify-center shadow-xl">
                        <div className="p-2">{service.icon}</div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 flex items-end">
            <div>
              <img src={img15} alt="Feature" />
            </div>
          </div>
        </div>
      </Section>

      {/* Technologies Section */}
      {/* <Section
        title="Our Technologies"
        subtitle="The tools and platforms we use to design, integrate, and manage IT and network solutions for businesses." centered
        className="bg-gradient-to-t from-gray-950 to-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {technologies.map((tech, index) => (
            <Card key={index} delay={index} className="p-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services#technology">
            <Button
              variant="outline"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              View All
            </Button>
          </Link>
        </div>
      </Section> */}

      {/* Stats Section */}
      {/* <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
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
              <div className="text-4xl md:text-5xl font-bold text-[#E2B478] mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section> */}

      {/* Industries Section */}
      <Section
        title="Industries We Serve"
        subtitle="Delivering reliable IT, cloud, and system integration solutions across diverse industries."
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
        {/* <div className="mt-12 text-center">
          <Link to="/solutions#solution">
            <Button
              variant="primary"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              View All
            </Button>
          </Link>
        </div> */}
      </Section>

      {/* Features Section */}
      <Section
        title="Why Choose Us"
        subtitle="Expertise, reliability, and innovative IT solutions that empower your business."
        centered
        className="bg-gradient-to-t from-gray-950 to-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} delay={index} className="p-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80 text-[#E2B478]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      {/* <Section
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
      </Section> */}

      {/* Awards Section */}
      {/* <Section
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
      </Section> */}

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
            Technology Partners &
            <span className="gradient-text ps-2">Certified Experts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            We build strong partnerships with global technology leaders,
            supported by certified engineers to deliver trusted IT solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
              </Button>
            </Link>
            <Link to="">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Home;
