import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, Star, MessageSquare } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import img1 from '../assets/Bloomberg-Data-for-Health-Initiative-150x150.png';
import img2 from '../assets/Community-Partners-150x150.png';
import img3 from '../assets/GTL-150x150.png';
import img4 from '../assets/GTMH-150x150.png';
import img5 from '../assets/Heineken-150x150.png';
import img6 from '../assets/Hotel-Max-150x150.png';
import img7 from '../assets/IKBZ-150x150.png';
import img8 from '../assets/im-net-150x150.png';
import img9 from '../assets/Law-150x150.png';
import img10 from '../assets/Mandalay-City-Development-150x150.png';
import img11 from '../assets/Mandalay-Hill-Resort-150x150.png';
import img12 from '../assets/MCB-150x150.png';
import img13 from '../assets/MCM-150x150.png';
import img14 from '../assets/Ministry-of-Transport-150x150.png';
import img15 from '../assets/MOEE-150x150.png';
import img16 from '../assets/Mottama-150x150.png';
import img17 from '../assets/MPT-150x150.png';
import img18 from '../assets/Myanmar-150x150.png';
import img19 from '../assets/Myanmar-Red-Cross-150x150.png';
import img20 from '../assets/Myanmar2-1-150x150.png';
import img21 from '../assets/N-Health-1-150x150.png';
import img22 from '../assets/Ooredoo-150x150.png';
import img23 from '../assets/Path-150x150.png';
import img24 from '../assets/Sakura-150x150.png';
import img25 from '../assets/State-of-Qatar-150x150.png';
import img26 from '../assets/UMG-150x150.png';
import img27 from '../assets/umg-college-150x150.png';
import img28 from '../assets/umg-college-150x150.png';
import img29 from '../assets/UMTGI-150x150.png';
import img30 from '../assets/wilmar-150x150.png';
import img31 from '../assets/Yangon-150x150.png';
import img32 from '../assets/Picture1.png';
import img33 from '../assets/Picture2.png';
import img34 from '../assets/Picture3.png';
import img35 from '../assets/Picture4.png';
import img36 from '../assets/Picture5.png';
import img37 from '../assets/Picture6.png';
import img38 from '../assets/Picture7.png';

const Clients = () => {
  // const featuredClients = [
  //   {
  //     name: "Myanmar Healthcare Group",
  //     industry: "Healthcare",
  //     logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  //     description: "Leading healthcare provider implementing AI-driven diagnostic solutions",
  //     testimonial: {
  //       text: "Cloud Myanmar's AI solutions have revolutionized our diagnostic processes, improving accuracy and efficiency.",
  //       author: "Dr. Aung Kyaw",
  //       position: "Chief Medical Officer"
  //     }
  //   },
  //   {
  //     name: "Myanmar Banking Corporation",
  //     industry: "Finance",
  //     logo: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
  //     description: "Major financial institution utilizing AI for fraud detection and risk assessment",
  //     testimonial: {
  //       text: "The AI-powered fraud detection system has significantly reduced our exposure to financial risks.",
  //       author: "U Thein Win",
  //       position: "Head of Risk Management"
  //     }
  //   },
  //   {
  //     name: "Myanmar Manufacturing Co.",
  //     industry: "Manufacturing",
  //     logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  //     description: "Leading manufacturer implementing smart factory solutions",
  //     testimonial: {
  //       text: "Our production efficiency has improved dramatically since implementing Cloud's AI solutions.",
  //       author: "Daw Mi Mi",
  //       position: "Operations Director"
  //     }
  //   },
  //   {
  //     name: "Myanmar Retail Chain",
  //     industry: "Retail",
  //     logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
  //     description: "Major retail chain using AI for inventory and customer analytics",
  //     testimonial: {
  //       text: "The AI-driven inventory management system has transformed our supply chain operations.",
  //       author: "U Kyaw Zaw",
  //       position: "Supply Chain Manager"
  //     }
  //   }
  // ];

  // const testimonials = [
  //   {
  //     text: "Cloud Myanmar's expertise in AI has helped us stay ahead of the competition.",
  //     author: "Ma Hnin Yu",
  //     position: "CEO",
  //     company: "Tech Innovations Myanmar"
  //   },
  //   {
  //     text: "Their team's dedication to excellence and innovation is truly remarkable.",
  //     author: "U Zaw Min",
  //     position: "CTO",
  //     company: "Digital Solutions Co."
  //   },
  //   {
  //     text: "The results we've achieved with their AI solutions have exceeded our expectations.",
  //     author: "Daw Thin Thin",
  //     position: "Director",
  //     company: "Myanmar Analytics Ltd"
  //   }
  // ];

  const stats = [
    { value: "150+", label: "Clients Served" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "50+", label: "Industries" },
    { value: "100%", label: "Project Success Rate" }
  ];

  const clients = [
    { name: "img1", logo: img1 },
    { name: "img2", logo: img2 },
    { name: "img3", logo: img3 },
    { name: "img4", logo: img4 },
    { name: "img5", logo: img5 },
    { name: "img6", logo: img6 },
    { name: "img7", logo: img7 },
    { name: "img8", logo: img8 },
    { name: "img9", logo: img9 },
    { name: "img10", logo: img10 },
    { name: "img11", logo: img11 },
    { name: "img12", logo: img12 },
    { name: "img13", logo: img13 },
    { name: "img14", logo: img14 },
    { name: "img15", logo: img15 },
    { name: "img16", logo: img16 },
    { name: "img17", logo: img17 },
    { name: "img18", logo: img18 },
    { name: "img19", logo: img19 },
    { name: "img20", logo: img20 },
    { name: "img21", logo: img21 },
    { name: "img22", logo: img22 },
    { name: "img23", logo: img23 },
    { name: "img24", logo: img24 },
    { name: "img25", logo: img25 },
    { name: "img26", logo: img26 },
    { name: "img27", logo: img27 },
    { name: "img28", logo: img28 },
    { name: "img29", logo: img29 },
    { name: "img30", logo: img30 },
    { name: "img31", logo: img31 },
    { name: "img32", logo: img32 },
    { name: "img33", logo: img33 },
    { name: "img34", logo: img34 },
    { name: "img35", logo: img35 },
    { name: "img36", logo: img36 },
    { name: "img37", logo: img37 },
    { name: "img38", logo: img38 }
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
              Our Trusted <span className="gradient-text">Clients</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We have successfully delivered IT, networking, and infrastructure projects for government agencies, enterprises, and corporates across Myanmar.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#E2B478] mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link to="/contact#contacts">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Work With Us
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
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
              alt="Our Clients"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            {/* <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">Success Stories</h3>
              <p className="text-gray-300">From startups to enterprises</p>
            </div> */}
          </motion.div>
        </div>
      </Section>

      <Section
        title="Our Clients"
        subtitle="Trusted by leading organizations in Myanmar"
        centered
        className="bg-gray-950"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={8}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        // breakpoints={{
        //   320: { slidesPerView: 2 },
        //   640: { slidesPerView: 3 },
        //   768: { slidesPerView: 4 },
        //   1024: { slidesPerView: 5 },
        //   1280: { slidesPerView: 6 },
        // }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="px-2 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-28 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {/* Featured Clients */}
      {/* <Section
        title="Featured Clients"
        subtitle="Leading organizations that trust us with their AI transformation journey"
        centered
        className="bg-gray-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {featuredClients.map((client, index) => (
            <Card key={index} delay={index} className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                  <img 
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{client.name}</h3>
                  <p className="text-[#E2B478]">{client.industry}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{client.description}</p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-300 italic mb-4">"{client.testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="font-medium">{client.testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{client.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section> */}

      {/* Testimonials */}
      {/* <Section
        title="Client Testimonials"
        subtitle="What our clients say about working with us"
        centered
        className="bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} delay={index} className="p-8">
              <div className="mb-6">
                <MessageSquare className="h-8 w-8 text-indigo-400" />
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.position}</p>
                <p className="text-indigo-400 text-sm">{testimonial.company}</p>
              </div>
            </Card>
          ))}
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
            Ready to <br />
            <span className="gradient-text">Transform Your IT Infrastructure?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Let’s discuss how our IT, cloud, and system integration solutions can optimize your operations and drive business growth.          </motion.p>

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
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Clients;