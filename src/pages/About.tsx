import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Check,
  Cpu,
  Heart,
  Lightbulb,
  Shield,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { title } from "framer-motion/client";

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  // const teamMembers = [
  //   {
  //     name: "Aung Min",
  //     title: "CEO & Founder",
  //     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description: "With over 15 years in AI and tech leadership, Aung leads our strategic vision and growth initiatives."
  //   },
  //   {
  //     name: "Lin Moe",
  //     title: "CTO",
  //     image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description: "Lin brings deep expertise in machine learning and systems architecture to drive our technological innovation."
  //   },
  //   {
  //     name: "Kyi Phyu",
  //     title: "Head of AI Research",
  //     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description: "Leading our R&D efforts, Kyi focuses on developing cutting-edge AI algorithms and solutions."
  //   },
  //   {
  //     name: "Tun Tun",
  //     title: "Director of Operations",
  //     image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description: "Ensuring smooth execution of all projects, Tun oversees our day-to-day operations and client delivery."
  //   },
  // ];

  const services = [
    {
      title: "State government ministries",
    },
    {
      title:
        "Internet Service Providers (Domestic and international telecom companies)",
    },
    {
      title: "Hotels and tourism businesses",
    },
    {
      title: "Banks",
    },
    {
      title: "Locally-based international companies, and",
    },
    {
      title: "Other organizations.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      icon: <Lightbulb className="h-8 w-8 text-[#E2B478]" />,
      description:
        "We constantly explore new IT, networking, and system integration solutions to meet evolving business needs.",
    },
    {
      title: "Excellence",
      icon: <Star className="h-8 w-8 text-[#E2B478]" />,
      description:
        "We deliver the highest quality in IT infrastructure, cloud, and network projects.",
    },
    {
      title: "Integrity",
      icon: <Shield className="h-8 w-8 text-[#E2B478]" />,
      description:
        "We operate with transparency, ethical responsibility, and professionalism in every project.",
    },
    {
      title: "Collaboration",
      icon: <Users className="h-8 w-8 text-[#E2B478]" />,
      description:
        "We work closely with clients and partners to ensure seamless system integration and IT success.",
    },
    {
      title: "Reliability",
      icon: <Heart className="h-8 w-8 text-[#E2B478]" />,
      description:
        "We provide dependable IT solutions that businesses can trust for mission-critical operations.",
    },
    {
      title: "Impact",
      icon: <Target className="h-8 w-8 text-[#E2B478]" />,
      description:
        "We aim to create meaningful improvements in our clients’ IT and business operations.",
    },
  ];

  // const achievements = [
  //   { count: "150+", label: "Clients Served" },
  //   { count: "50+", label: "AI Projects" },
  //   { count: "25+", label: "Industry Awards" },
  //   { count: "10+", label: "Years Experience" },
  // ];

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
              About <span className="gradient-text">Byte Matrix Myanmar</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              The company Byte Matrix Myanmar was established in 2020 and is
              comprised of experienced and specialized professionals who hold
              international-level certifications.
            </p>

            <p className="text-xl text-gray-300 mb-4">
              The company is currently focusing on and expanding its services,
              which include providing consultation and service delivery to
              ensure: <br />
              Secure, reliable, fast and convenient network connectivity; and
              Network security and compliance with international standards and
              procedures for:
            </p>

            <ul className="space-y-2 mb-8">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center text-gray-300 text-lg">
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

                  {service.title}
                </li>
              ))}
            </ul>

            {/* <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="p-2 bg-gray-800/80 rounded-full text-[#E2B478] mr-3">
                  <Check className="h-5 w-5" />
                </div>
                <span>Founded in 2020</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-gray-800/80 rounded-full text-[#E2B478] mr-3">
                  <Check className="h-5 w-5" />
                </div>
                <span>Based in Yangon</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-gray-800/80 rounded-full text-[#E2B478] mr-3">
                  <Check className="h-5 w-5" />
                </div>
                <span>25+ Specialists</span>
              </div>
            </div> */}
            
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
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
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Byte Matrix Myanmar Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            {/* <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">Our Story</h3>
              <p className="text-gray-300">Pioneering AI innovation in Myanmar since 2015</p>
            </div> */}
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision Section */}
      <Section
        id="mission"
        title="Our Mission & Vision"
        subtitle=""
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="p-8">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E2B478]/5 text-[#E2B478]">
              <Cpu className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-4">
              Byte Matrix Myanmar's mission is to
            </p>
            <ul className="list-disc pl-4 space-y-2 text-gray-300">
              <li>
                Provide high quality, affordable IT solutions and services
              </li>
              <li>
                Create and cultivate long-term relationships with clients
              </li>
              <li>
                Respond immediately to the changing needs of our clients
              </li>
              <li>
                Achieve complete customer satisfaction
              </li>
              <li>
                Improve our services to the best supported to clients continuously
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DBE278]/5 text-[#DBE278] ">
              <Brain className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400 mb-4">
              Byte Matrix Myanmar's vision is to
            </p>
            <ul className="list-disc pl-4 space-y-2 text-gray-300">
              <li>
                To set the standard for secure and reliable digital transformation accross all sectors in Myanmar
              </li>
              <li>
                To ensure every client benefits from international best practices and future-proof technology
              </li>
              <li>
                To be recognized as the benchmark for quality and innovation in IT solutions
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Our Story Section */}
      {/* <Section
        title="Our Story"
        subtitle="From a small startup to Myanmar's leading AI solutions provider"
        className=""
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-300 mb-6">
                Cloud Myanmar was founded in 2015 by a group of visionary tech enthusiasts who recognized the transformative potential of artificial intelligence for businesses in Myanmar.
              </p>
              <p className="text-gray-300 mb-6">
                What began as a small consultancy with just five team members has grown into Myanmar's premier AI solutions provider, with over 25 specialists serving clients across multiple industries.
              </p>
              <p className="text-gray-300 mb-6">
                Throughout our journey, we've remained committed to our founding principles: delivering innovative, high-quality solutions tailored to the unique needs of the Myanmar market while maintaining the highest standards of ethics and integrity.
              </p>
              <p className="text-gray-300 mb-6">
                Today, we're proud to be at the forefront of Myanmar's digital transformation, helping businesses harness the power of AI to overcome challenges, seize opportunities, and thrive in an increasingly competitive landscape.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-[#E2B478] mb-2">{item.count}</h3>
                  <p className="text-gray-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden h-full min-h-[300px]"
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Byte Matrix Myanmar Journey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex flex-col justify-end p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E2B478] mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Our Achievements</h3>
                <p className="text-gray-300">Recognized excellence in AI innovation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section> */}

      {/* Our Values Section */}
      <Section
        title="Our Values"
        subtitle="Core principles that drive our system integration, IT, and networking services."
        centered
        className=""
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <Card key={index} delay={index} className="p-8">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Team Section */}
      {/* <Section
        title="Meet Our Leadership Team"
        subtitle="The visionaries behind Cloud Myanmar"
        centered
        className="bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <Card key={index} delay={index} className="overflow-hidden" hoverEffect={false}>
              <div className="relative h-64">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-indigo-400 mb-4">{member.title}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section> */}

      {/* Awards Section */}
      {/* <Section
        title="Awards & Recognition"
        subtitle="Our commitment to excellence has been recognized across the industry"
        centered
        className="bg-gray-950"
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
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Innovation Excellence Award 2022</h3>
            <p className="text-gray-400">ASEAN Business Council</p>
          </Card>
          
          <Card className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Top 10 Tech Startups 2021</h3>
            <p className="text-gray-400">Myanmar Digital Economy Association</p>
          </Card>
        </div>
      </Section> */}

      {/* CTA Section */}
      {/* <Section className="">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Partner With <br />
            <span className="gradient-text">Myanmar's AI Leaders?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Join the many businesses that have transformed their operations with our innovative AI solutions.
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
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
              >
                View Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section> */}
    </div>
  );
};

export default About;
