import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-20" id="about_us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <div className="absolute top-0 left-0 w-[70%] h-[80%] z-10">
            <Image 
              src="/img/project-3.jpg" 
              alt="Architecture blueprint" 
              fill 
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[70%] h-[80%] z-20 border-8 border-white rounded-2xl shadow-2xl">
            <Image 
              src="/img/project-4.jpg" 
              alt="Construction site" 
              fill 
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold mb-3">About Us</h4>
          <h2 className="text-4xl lg:text-5xl font-heading text-dark-text mb-6 leading-tight">
            A Creative Young Architect For Your Dream Built Environment
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Welcome to i SPACE ARCHITECTS & CONSTRUCTION, a dynamic and innovative powerhouse where architecture and construction seamlessly converge. Our young and driven team is dedicated to transforming dreams into reality, crafting spaces that inspire and endure. With a holistic approach, we bridge the gap between design and construction, ensuring a harmonious journey from concept to completion.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            At i SPACE, we thrive on challenges, leveraging our passion for creative design and technical prowess to deliver exceptional results. From envisioning modern homes to constructing functional commercial complexes, our commitment to excellence remains unwavering. With sustainability as a cornerstone, we infuse eco-conscious practices into every project, leaving a positive impact on the environment. Join us in shaping skylines and reshaping possibilities. Welcome to the fusion of imagination and craftsmanship at i SPACE ARCHITECTS & CONSTRUCTION.
          </p>
        </div>
      </div>
    </div>
  );
}
