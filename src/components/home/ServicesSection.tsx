import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

const services = [
  {
    icon: '/img/icons/icon-5.png',
    bgImg: '/img/service-1.jpg',
    title: 'Architecture',
    description: 'Designing, planning, and overseeing construction projects, ensuring functionality, aesthetics, safety, and efficient space utilization for optimal built environments'
  },
  {
    icon: '/img/icons/icon-6.png',
    bgImg: '/img/service-2.jpg',
    title: '3D Animation',
    description: 'Crafting dynamic 3D visuals of architectural designs, illustrating spaces, materials, and ambiance, aiding in conveying concepts and engaging presentations'
  },
  {
    icon: '/img/icons/icon-7.png',
    bgImg: '/img/service-3.jpg',
    title: 'House Planning',
    description: 'Thoughtfully planned home with practical layout, inviting interiors, optimized storage, and emphasis on comfort, blending style and functionality seamlessly'
  },
  {
    icon: '/img/icons/icon-8.png',
    bgImg: '/img/service-4.jpg',
    title: 'Interior Design',
    description: 'Elevate spaces with personalized interior design, balancing aesthetics and functionality through curated elements, colors, and textures for a harmonious ambiance'
  },
  {
    icon: '/img/icons/icon-9.png',
    bgImg: '/img/service-5.jpg',
    title: 'Renovation',
    description: 'Revitalize spaces with expert renovation services, combining modern updates, efficient layouts, and quality craftsmanship to enhance both aesthetics and functionality'
  },
  {
    icon: '/img/icons/icon-10.png',
    bgImg: '/img/service-6.jpg',
    title: 'Construction',
    description: 'Comprehensive construction services delivering reliable project management, skilled labor, and quality materials for timely execution of diverse projects with precision'
  }
];

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-32 bg-light-bg" id="our_services">
      <FadeIn delay={0.1}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-primary tracking-[0.2em] uppercase font-bold mb-3 text-sm">Our Services</h4>
          <h2 className="text-5xl lg:text-6xl font-light text-dark-text leading-tight tracking-tight">
            We Focus On Modern Sustainable Architecture And Interior Design
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
                alt={service.title} 
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
