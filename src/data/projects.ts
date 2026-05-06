export type ProjectCategory = 'architecture' | 'interior' | 'construction';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
}

export const projects: Project[] = [
  // Architectural Design
  { id: 'arch-1', title: 'Design 1', category: 'architecture', thumbnail: '/img/project-1.jpg', description: 'Modern architectural design focusing on natural light.' },
  { id: 'arch-2', title: 'Design 2', category: 'architecture', thumbnail: '/img/project-2.jpg', description: 'Sustainable architecture with eco-friendly materials.' },
  { id: 'arch-3', title: 'Design 3', category: 'architecture', thumbnail: '/img/project-3.jpg', description: 'Urban contemporary architectural solution.' },
  { id: 'arch-4', title: 'Design 4', category: 'architecture', thumbnail: '/img/project-4.jpg', description: 'Minimalist architecture with clean lines.' },
  { id: 'arch-5', title: 'Design 5', category: 'architecture', thumbnail: '/img/service-1.jpg', description: 'Luxury residential architectural concept.' },
  { id: 'arch-6', title: 'Design 6', category: 'architecture', thumbnail: '/img/team-3.jpg', description: 'Commercial architectural space optimization.' },
  
  // Interior Design
  { id: 'int-1', title: 'Interior Design 1', category: 'interior', thumbnail: '/img/service-2.jpg', description: 'Elegant and spacious interior layout.' },
  { id: 'int-2', title: 'Interior Design 2', category: 'interior', thumbnail: '/img/service-3.jpg', description: 'Cozy and warm interior ambiance.' },
  { id: 'int-3', title: 'Interior Design 3', category: 'interior', thumbnail: '/img/service-4.jpg', description: 'Modern minimalist interior design.' },
  { id: 'int-4', title: 'Interior Design 4', category: 'interior', thumbnail: '/img/team-4.jpg', description: 'Luxury hotel interior aesthetics.' },
  { id: 'int-5', title: 'Interior Design 5', category: 'interior', thumbnail: '/img/team-2.jpg', description: 'Office workspace interior transformation.' },
  { id: 'int-6', title: 'Interior Design 6', category: 'interior', thumbnail: '/img/team-3.jpg', description: 'Residential interior harmonization.' },
  
  // Construction
  { id: 'con-1', title: 'Construction Project 1', category: 'construction', thumbnail: '/img/team-1.jpg', description: 'High-rise residential construction.' },
  { id: 'con-2', title: 'Construction Project 2', category: 'construction', thumbnail: '/img/team-2.jpg', description: 'Commercial office building construction.' },
  { id: 'con-3', title: 'Construction Project 3', category: 'construction', thumbnail: '/img/team-3.jpg', description: 'Industrial facility construction.' },
  { id: 'con-4', title: 'Construction Project 4', category: 'construction', thumbnail: '/img/team-4.jpg', description: 'Urban renovation and construction.' },
  { id: 'con-5', title: 'Construction Project 5', category: 'construction', thumbnail: '/img/team-2.jpg', description: 'Public infrastructure construction.' },
  { id: 'con-6', title: 'Construction Project 6', category: 'construction', thumbnail: '/img/team-3.jpg', description: 'Luxury villa construction.' },
];
