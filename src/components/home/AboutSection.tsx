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
              alt="i SPACE Architects in Kodaikanal - Blueprint Design" 
              fill 
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[70%] h-[80%] z-20 border-8 border-white rounded-2xl shadow-2xl">
            <Image 
              src="/img/project-4.jpg" 
              alt="Kodaikanal Architecture Construction Site" 
              fill 
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h1 className="text-primary uppercase tracking-widest font-bold mb-3 text-lg">Best Architects in Kodaikanal | i SPACE</h1>
          <h2 className="text-4xl lg:text-5xl font-heading text-dark-text mb-6 leading-tight">
            Leading Kodaikanal Architecture & Construction Firm
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Welcome to i SPACE ARCHITECTS & CONSTRUCTION, the premier destination for <strong>modern architecture in Kodaikanal</strong>. We are a dynamic and innovative powerhouse where creative design and professional construction seamlessly converge. Our team of expert <strong>architects in Kodaikanal</strong> is dedicated to transforming your vision into reality, crafting sustainable spaces that inspire.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            As a top-rated <strong>architecture firm in Kodaikanal</strong>, we thrive on delivering exceptional results for residential and commercial projects. From envisioning modern eco-homes to constructing functional hill-station complexes, i SPACE remains the trusted choice for quality and innovation in the TN region.
          </p>
        </div>
      </div>
    </div>
  );
}
