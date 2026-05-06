import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const team = [
  { name: 'Architect Name 1', designation: 'Principal Architect', image: '/img/team-1.jpg' },
  { name: 'Architect Name 2', designation: 'Senior Designer', image: '/img/team-2.jpg' },
  { name: 'Architect Name 3', designation: 'Civil Engineer', image: '/img/team-3.jpg' },
  { name: 'Architect Name 4', designation: 'Interior Designer', image: '/img/team-4.jpg' },
];

export default function TeamSection() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-20 bg-white" id="our_team">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h4 className="text-primary uppercase tracking-widest font-bold mb-3">Team Members</h4>
        <h2 className="text-4xl lg:text-5xl font-heading text-dark-text leading-tight">
          We Are Creative Architecture Team For Your Dream Home
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="group text-center">
            <div className="relative h-[400px] w-full mb-6 overflow-hidden rounded-2xl shadow-sm group-hover:shadow-xl transition-shadow duration-500">
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Social Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                <a href="#" className="w-10 h-10 bg-white rounded-full text-primary flex items-center justify-center hover:bg-dark-bg hover:text-white transition-colors">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full text-primary flex items-center justify-center hover:bg-dark-bg hover:text-white transition-colors">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full text-primary flex items-center justify-center hover:bg-dark-bg hover:text-white transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-heading text-dark-text mb-1">{member.name}</h3>
            <span className="text-primary font-medium">{member.designation}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
