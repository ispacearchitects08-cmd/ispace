"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about_us' },
    { name: 'Services', href: '#our_services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#our_team' },
    { name: 'Contact', href: '#contact_us' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100/50 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image src="/img/icons/icon-1.png" alt="i SPACE Architects Logo" width={40} height={40} className="mr-3" />
            <span className="text-primary text-2xl lg:text-3xl font-heading m-0 uppercase tracking-wide">
              i Space Architects
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-dark-text hover:text-primary font-medium text-[15px] uppercase tracking-wide transition-colors"
                title={`Visit ${link.name} of i SPACE Architects Kodaikanal`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark-text hover:text-primary focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-dark-text hover:text-primary hover:bg-light-bg uppercase"
                onClick={() => setIsOpen(false)}
                title={`Visit ${link.name} of i SPACE Architects Kodaikanal`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
