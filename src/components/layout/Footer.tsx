import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#111111] text-gray-400 mt-16 pt-16">
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Address Section */}
          <div>
            <h3 className="text-white text-2xl font-heading mb-6">Address</h3>
            <div className="space-y-4">
              <p className="flex items-start text-[15px]">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Moonjikal, Kodaikanal, TN, India</span>
              </p>
              <p className="flex items-center text-[15px]">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span>+91 70103 08898</span>
              </p>
              <p className="flex items-center text-[15px]">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span className="break-all">contact@ispacearchitects.com</span>
              </p>
            </div>
            <div className="flex pt-6 space-x-3">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:shadow-[0_0_15px_rgba(183,141,101,0.4)] transition-all duration-300">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:shadow-[0_0_15px_rgba(183,141,101,0.4)] transition-all duration-300">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:shadow-[0_0_15px_rgba(183,141,101,0.4)] transition-all duration-300">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white text-2xl font-heading mb-6">Services</h3>
            <div className="flex flex-col space-y-3">
              <Link href="#" className="hover:text-primary transition-colors text-[15px]">Architecture</Link>
              <Link href="#" className="hover:text-primary transition-colors text-[15px]">3D Animation</Link>
              <Link href="#" className="hover:text-primary transition-colors text-[15px]">House Planning</Link>
              <Link href="#" className="hover:text-primary transition-colors text-[15px]">Interior Design</Link>
              <Link href="#" className="hover:text-primary transition-colors text-[15px]">Construction</Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-2xl font-heading mb-6">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link href="#about_us" className="hover:text-primary transition-colors text-[15px]">About Us</Link>
              <Link href="#contact_us" className="hover:text-primary transition-colors text-[15px]">Contact Us</Link>
              <Link href="#our_services" className="hover:text-primary transition-colors text-[15px]">Our Services</Link>
              <Link href="#" className="hover:text-primary transition-colors text-[15px]">Terms & Condition</Link>
              <Link href="#" className="hover:text-primary transition-colors text-[15px]">Support</Link>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright area */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-0 text-[15px]">
            &copy; <span className="text-primary font-medium">i SPACE ARCHITECTS & CONSTRUCTION</span>, All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
