import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, ProjectCategory } from '@/data/projects';
import FadeIn from '@/components/ui/FadeIn';

export default function ProjectsSection() {
  const categories: { key: ProjectCategory; title: string; subtitle: string; id: string }[] = [
    { key: 'architecture', title: 'ARCHITECTURAL DESIGN', subtitle: 'Find Some Of Our Recent Architectural Design Solutions Here', id: 'Architectural_designs' },
    { key: 'interior', title: 'INTERIOR DESIGN', subtitle: 'Find Some Of Our Creative Interior Designs Here', id: 'Interior_designs' },
    { key: 'construction', title: 'CONSTRUCTION & RENOVATION', subtitle: 'Find Some Of Our Recent Construction & Renovation Projects Here', id: 'Construction_projects' },
  ];

  return (
    <div id="projects" className="py-20">
      {categories.map((cat, idx) => {
        const categoryProjects = projects.filter(p => p.category === cat.key);
        
        return (
          <FadeIn key={cat.key} delay={0.2} className={`container mx-auto px-4 lg:px-8 ${idx > 0 ? 'mt-32' : ''}`}>
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-20" id={cat.id}>
              <h4 className="text-primary tracking-[0.2em] font-bold mb-3 uppercase text-sm">{cat.title}</h4>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-dark-text leading-tight mb-4 tracking-tight">
                {cat.subtitle}
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProjects.map((project, pIdx) => (
                <div 
                  key={project.id} 
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-500 ${
                    pIdx === 0 ? 'lg:col-span-2 lg:row-span-2 h-[400px] md:h-[500px] lg:h-[624px]' : 
                    pIdx === 3 ? 'lg:col-span-2 h-[300px]' : 
                    'lg:col-span-1 h-[300px]'
                  }`}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image 
                      src={project.thumbnail} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm text-center p-6 border-t border-gray-100 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-heading text-dark-text mb-2">{project.title}</h3>
                    <Link 
                      href={`/projects/${project.id}`} 
                      className="text-primary font-medium hover:text-dark-text transition-colors"
                    >
                      More Images
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
