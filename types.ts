
export interface Skill {
  name: string;
  proficiency: number;
  note: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export type ProjectCategory = 
  | 'Documentary Edit' 
  | 'Map Animation Edit' 
  | 'Promotional & Corporate Edit' 
  | 'Tech Review, Tutorial & Podcast Edit' 
  | 'Suspense Horror Video (Ai+Edit)' 
  | 'Kids Story Video (Ai+Edit)';

export interface Project {
  id: string;
  title: string;
  duration: string;
  description: string;
  tools: string[];
  tags: string[];
  category: ProjectCategory;
  thumbnailUrl: string;
  videoUrl: string; // YouTube ID or direct link
  isVideoFile?: boolean;
  transcript?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}
