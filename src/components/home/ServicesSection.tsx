import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

const services = [
  {
    icon: '/img/icons/icon-5.png',
    bgImg: '/img/service-1.jpg',
    title: 'Architecture',
    description: 'Premier architectural planning in Kodaikanal, ensuring functionality, aesthetics, and sustainable space utilization for hills and plains.'
  },
  {
    icon: '/img/icons/icon-6.png',
    bgImg: '/img/service-2.jpg',
    title: '3D Animation',
    description: 'Dynamic 3D walkthroughs and visuals for architecture in Kodaikanal, aiding in conveying concepts with high-end realistic presentations.'
  },
  {
    icon: '/img/icons/icon-7.png',
    bgImg: '/img/service-3.jpg',
    title: 'House Planning',
    description: 'Expert house planning in Kodaikanal for villas and residences, blending comfort and style with practical hill-station layouts.'
  },
  {
    icon: '/img/icons/icon-8.png',
    bgImg: '/img/service-4.jpg',
    title: 'Interior Design',
    description: 'Premium interior design in Kodaikanal, balancing aesthetics and functionality through curated elements for a harmonious mountain ambiance.'
  },
  {
    icon: '/img/icons/icon-9.png',
    bgImg: '/img/service-5.jpg',
    title: 'Renovation',
    description: 'Expert home renovation in Kodaikanal, combining modern updates with quality craftsmanship to revitalize your existing spaces.'
  },
  {
    icon: '/img/icons/icon-10.png',
    bgImg: '/img/service-6.jpg',
    title: 'Construction',
    description: 'Comprehensive construction services in Kodaikanal delivering reliable management and quality materials for timely project execution.'
  }
];

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-32 bg-light-bg" id="our_services">
      <FadeIn delay={0.1}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-primary tracking-[0.2em] uppercase font-bold mb-3 text-sm">Professional Architecture in Kodaikanal</h4>
          <h2 className="text-5xl lg:text-6xl font-light text-dark-text leading-tight tracking-tight">
            Leading Kodaikanal Architecture & Modern Interior Design
          </h2>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="relative h-[400px] group overflow-hidden bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-500">
              {/* Background Image (appears on hover) */}
              <Image 
                src={service.bgImg} 
                alt={`${service.title} in Kodaikanal`} 
                fill 
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Overlay to darken background image */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-10 transition-transform duration-500">
                <div className="w-16 h-16 mb-6">
                  <Image src={service.icon} alt={`${service.title} icon`} width={64} height={64} className="group-hover:brightness-0 group-hover:invert transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-heading text-dark-text group-hover:text-white mb-4 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-500 line-clamp-4">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
