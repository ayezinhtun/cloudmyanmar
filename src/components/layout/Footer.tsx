import { Link } from 'react-router-dom';
import { Cpu, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className='flex flex-col items-center text-center md:text-start md:items-start'>
            <Link to="/" className="flex items-center gap-2 mb-4">
              {/* <Cpu className="h-6 w-6 text-indigo-500" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">Cloud</span>
                <span className="text-xs text-indigo-400 -mt-1">Myanmar</span>
              </div> */}
              <img src={logo} className='h-10 w-24 object-cover' alt="" />
            </Link>
            <p className="text-gray-400 mb-4">
              Delivering innovative IT solutions and enterprise-grade technologies to empower businesses in Myanmar and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#E2B478]  transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E2B478]  transition-colors" aria-label="Twitter">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E2B478]  transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='text-center md:text-start'>
            <h5 className="font-bold mb-4 text-white">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#E2B478]  transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#E2B478]  transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#E2B478]  transition-colors">Services</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#E2B478]  transition-colors">Solutions</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-[#E2B478]  transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#E2B478]  transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className='text-center md:text-start'>
            <h5 className="font-bold mb-4 text-white">Our Solutions</h5>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#E2B478] transition-colors">IT Infrastructure & System Integration Services</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#E2B478] transition-colors">Cloud & Managed Services</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#E2B478] transition-colors">Data Center Services</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#E2B478] transition-colors">Security & Complicance Service</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#E2B478] transition-colors">Consulation Services</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#E2B478] transition-colors">Technical Transfer Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className='text-center md:text-start'>
            <h5 className="font-bold mb-4 text-white">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex flex-col gap-y-2 items-center md:flex-row md:items-start">
                <MapPin className="h-8 w-20 text-[#E2B478] mr-2 mt-0.5" />
                <span className="text-gray-400">Room No. M-723, Sanchaung Housing Estate, Sanchaung Road, Sanchaung Township, Yangon, Myanmar</span>
              </li>
              <li className="flex flex-col gap-y-2 items-center md:flex-row md:items-start">
                <Phone className="h-5 w-5 text-[#E2B478] mr-3" />
                <div>
                  <span className="text-gray-400">+959 408 833 155</span> <br />
                  {/* <span className="text-gray-400">+959 250 817 798</span> */}
                </div>

              </li>
              <li className="flex flex-col gap-y-2 items-center md:flex-row md:items-start">
                <Mail className="h-5 w-5 text-[#E2B478] mr-3" />
                <span className="text-gray-400">sales@bytematrixmyanmar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-start">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Byte Matrix Myanmar. All rights reserved.
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