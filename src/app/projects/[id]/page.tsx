import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        
        <Link href="/#projects" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8 font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Project Image */}
          <div className="relative h-[500px] w-full shadow-lg">
            <Image 
              src={project.thumbnail} 
              alt={project.title} 
              fill 
              className="object-cover"
            />
          </div>

          {/* Project Details */}
          <div>
            <span className="text-primary uppercase tracking-widest font-bold mb-2 block">
              {project.category}
            </span>
            <h1 className="text-5xl font-heading text-dark-text mb-6">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {project.description}
            </p>
            
            <div className="bg-light-bg p-6 border-l-4 border-primary">
              <h3 className="font-heading text-2xl text-dark-text mb-4">Project Overview</h3>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Client:</strong> Private Corp</li>
                <li><strong>Location:</strong> Kodaikanal, TN</li>
                <li><strong>Status:</strong> Completed</li>
                <li><strong>Architect:</strong> Principal Architect</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
