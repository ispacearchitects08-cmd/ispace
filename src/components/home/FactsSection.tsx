import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

const facts = [
  {
    icon: '/img/icons/icon-2.png',
    title: 'Design Approach',
    description: 'Embracing modernity with a sustainable design approach, harmonizing innovation, functionality, and environmental consciousness.'
  },
  {
    icon: '/img/icons/icon-3.png',
    title: 'Innovative Solutions',
    description: 'Exploring boundaries, our architectural innovations offer visionary solutions, seamlessly merging aesthetics, function, and sustainable ingenuity for transformative spaces.'
  },
  {
    icon: '/img/icons/icon-4.png',
    title: 'Project Management',
    description: 'Efficiently orchestrating projects, we oversee every aspect, ensuring timelines, budgets, and quality align for successful construction outcomes.'
  }
];

export default function FactsSection() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {facts.map((fact, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 text-center h-full group hover:-translate-y-2 transition-all duration-500">
              <div className="w-20 h-20 mx-auto bg-light-bg rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Image src={fact.icon} alt={fact.title} width={40} height={40} />
              </div>
              <h3 className="text-2xl font-heading mb-4 text-dark-text">{fact.title}</h3>
              <p className="text-gray-500 mb-0 leading-relaxed">
                {fact.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
