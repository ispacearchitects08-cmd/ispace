"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const testimonials = [
  {
    image: '/img/testimonial-1.jpg',
    quote: 'iSpace Architects truly brought our dream home to life. Their innovative designs, attention to detail, and seamless execution made the entire process enjoyable and rewarding.',
    name: 'SHARAN M',
    role: 'SOFTWARE ENGINEER'
  },
  {
    image: '/img/testimonial-2.jpg',
    quote: 'Working with iSpace Architects was a game-changer for our commercial project. Their creative solutions maximized space and functionality, impressing both clients and stakeholders.',
    name: 'DAVID L',
    role: 'DOCTOR'
  },
  {
    image: '/img/testimonial-3.jpg',
    quote: 'From concept to completion, iSpace Architects exceeded our expectations. Their professionalism, clear communication, and stunning designs turned our renovation project into a masterpiece.',
    name: 'IBRAHIM S',
    role: 'BUSINESS'
  }
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi, onSelect]);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-20 bg-light-bg">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h4 className="text-primary uppercase tracking-widest font-bold mb-3">Testimonial</h4>
        <h2 className="text-4xl lg:text-5xl font-heading text-dark-text leading-tight">
          Clients Who Trust Us And Our Services
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((test, index) => (
              <div className="relative flex-[0_0_100%] min-w-0 px-4" key={index}>
                <div className="text-center bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mx-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 shadow-md border-4 border-white">
                    <Image src={test.image} alt={test.name} width={96} height={96} className="object-cover" />
                  </div>
                  <p className="text-xl lg:text-2xl text-gray-600 italic mb-6 leading-relaxed">
                    "{test.quote}"
                  </p>
                  <h3 className="text-2xl font-heading text-dark-text mb-1">{test.name}</h3>
                  <span className="text-primary font-medium text-sm tracking-wider">{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
