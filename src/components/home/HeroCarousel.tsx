"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/img/project-1.jpg',
    title: 'Architecture',
    description: 'Designing Dreams, Crafting Spaces: Your Vision, Our Architectural Expertise. Turning dreams into reality through innovative design, shaping spaces that inspire and elevate human experience.',
    link: '#Architectural_designs',
    btnText: 'Architectural Designs'
  },
  {
    image: '/img/project-2.jpg',
    title: 'Interior Design',
    description: 'Transforming spaces with harmonious elements, functional elegance, and personalized aesthetics for captivating interior experiences.',
    link: '#Interior_designs',
    btnText: 'Interior Designs'
  },
  {
    image: '/img/carousel-3.jpg',
    title: 'Construction',
    description: 'Pioneering construction excellence through meticulous planning, skilled craftsmanship, and unwavering dedication to quality and innovation.',
    link: '#Construction_projects',
    btnText: 'Construction Projects'
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
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
    <div className="relative" id="home_us">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative h-[600px] lg:h-[800px] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent flex items-center">
                  <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mt-32">
                      <h4 className="text-primary tracking-[0.3em] font-bold uppercase mb-4 text-sm md:text-base drop-shadow-lg">
                        {slide.title}
                      </h4>
                      <h1 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight mb-8 leading-tight drop-shadow-2xl text-white">
                        {slide.title === 'Architecture' ? 'Designing Dreams' : 
                         slide.title === 'Interior Design' ? 'Functional Elegance' : 
                         'Pioneering Excellence'}
                      </h1>
                      <p className="text-white/90 text-lg lg:text-xl mb-12 max-w-2xl font-light leading-relaxed drop-shadow-lg">
                        {slide.description}
                      </p>
                      <Link 
                        href={slide.link}
                        className="inline-block bg-primary text-white py-4 px-8 text-lg font-medium rounded-full shadow-lg hover:bg-[#c79d75] hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                      >
                        {slide.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-primary' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
