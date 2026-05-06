import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Topbar() {
  return (
    <div className="bg-dark-bg text-gray-400 p-0 hidden lg:flex">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex space-x-6 items-center">
            <a href="tel:+917010308898" className="flex items-center hover:text-primary transition-colors text-sm">
              <Phone className="w-4 h-4 text-primary mr-2" />
              +91 70103 08898
            </a>
            <a href="mailto:contact@ispacearchitects.com" className="flex items-center hover:text-primary transition-colors text-sm">
              <Mail className="w-4 h-4 text-primary mr-2" />
              contact@ispacearchitects.com
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <a href="#" className="w-8 h-8 border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
