import { Link } from 'react-router-dom';
import { Cpu, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Cpu className="h-6 w-6 text-indigo-500" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">Cloud</span>
                <span className="text-xs text-indigo-400 -mt-1">Myanmar</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Leading provider of AI solutions and services in Myanmar, helping businesses transform with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-4 text-white">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-indigo-400 transition-colors">Solutions</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-indigo-400 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold mb-4 text-white">Our Services</h5>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">AI Consulting</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">Machine Learning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">Data Analytics</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">Computer Vision</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">NLP Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">AI Integration</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold mb-4 text-white">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" />
                <span className="text-gray-400">123 AI Avenue, Innovation District, Yangon, Myanmar</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-500 mr-3" />
                <span className="text-gray-400">+95 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-500 mr-3" />
                <span className="text-gray-400">info@cloudmyanmar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Cloud Myanmar. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-indigo-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-indigo-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;