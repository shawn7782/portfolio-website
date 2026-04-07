
import { Skill, Service, Project, Testimonial } from './types';

export const SKILLS: Skill[] = [
  { name: 'Adobe Premiere Pro', proficiency: 95, note: 'Industry standard video editing and assembly.' },
  { name: 'After Effects', proficiency: 85, note: 'Advanced motion graphics and visual effects.' },
  { name: 'DaVinci Resolve', proficiency: 20, note: 'Professional color grading and finishing.' },
  { name: 'AI Generative Tools', proficiency: 60, note: 'Runway Gen-3, Midjourney, Pika, and ChatGPT workflows.' },
  { name: 'Sound Design', proficiency: 75, note: 'Immersive audio landscapes and clean mixing.' },
  { name: 'Map Animation', proficiency: 85, note: 'Specialized historical and geographical visual storytelling.' }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Documentary Editing',
    description: 'Cinematic storytelling for documentary films and features.',
    features: ['Script Breakdown', 'Archival footage integration', 'Pacing & Narrative flow']
  },
  {
    id: '2',
    title: 'AI + VFX Horror Shorts',
    description: 'Specialized horror content combining high-end VFX with AI synthesis.',
    features: ['Creature Design', 'Atmospheric Grading', 'Jump-scare optimization']
  },
  {
    id: '3',
    title: 'YouTube & Social Production',
    description: 'High-engagement editing for content creators and brands.',
    features: ['Dynamic Captions', 'B-Roll selection', 'Thumbnail consulting']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Documentary Edit — Heritage Story',
    duration: '12:45',
    description: 'Professional documentary editing focusing on narrative flow and emotional impact.',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    tags: ['Documentary', 'Storytelling', 'Cinematic'],
    category: 'Documentary Edit',
    thumbnailUrl: 'https://img.youtube.com/vi/4p7xpHdraTo/maxresdefault.jpg',
    videoUrl: '4p7xpHdraTo',
    transcript: 'Narrative storytelling at its best...'
  },
  {
    id: '2',
    title: 'Map Animation Edit — Historical Journey',
    duration: '4:20',
    description: 'Dynamic 2D/3D map animations used for educational and historical content.',
    tools: ['After Effects', 'GeoLayers 3', 'Illustrator'],
    tags: ['Map Animation', 'Motion Graphics', 'Educational'],
    category: 'Map Animation Edit',
    thumbnailUrl: 'https://picsum.photos/seed/maps/600/400',
    videoUrl: 'dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Promotional & Corporate Edit — Brand Reveal',
    duration: '1:30',
    description: 'High-energy promotional video for corporate branding and marketing campaigns.',
    tools: ['Premiere Pro', 'After Effects', 'Audition'],
    tags: ['Corporate', 'Promo', 'Marketing'],
    category: 'Promotional & Corporate Edit',
    thumbnailUrl: 'https://picsum.photos/seed/promo/600/400',
    videoUrl: 'dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'Tech Review, Tutorial & Podcast Edit',
    duration: '15:10',
    description: 'Clean and engaging multi-cam editing for tech reviews and professional podcasts.',
    tools: ['Premiere Pro', 'After Effects', 'AI Voice Clean'],
    tags: ['Tech', 'Podcast', 'YouTube'],
    category: 'Tech Review, Tutorial & Podcast Edit',
    thumbnailUrl: 'https://picsum.photos/seed/tech/600/400',
    videoUrl: 'dQw4w9WgXcQ'
  },
  {
    id: '5',
    title: 'Suspense Horror Video (Ai+Edit)',
    duration: '3:45',
    description: 'A chilling atmospheric horror experience combining AI textures with professional VFX editing.',
    tools: ['After Effects', 'Runway Gen-3', 'Midjourney'],
    tags: ['Horror', 'AI Art', 'Visual Effects'],
    category: 'Suspense Horror Video (Ai+Edit)',
    thumbnailUrl: 'https://picsum.photos/seed/horrorv/600/400',
    videoUrl: 'dQw4w9WgXcQ'
  },
  {
    id: '6',
    title: 'Kids Story Video (Ai+Edit)',
    duration: '5:30',
    description: 'Colorful and imaginative storybooks brought to life using AI animation and professional editing.',
    tools: ['Runway', 'Pika Labs', 'After Effects', 'Premiere Pro'],
    tags: ['Kids', 'Animation', 'AI Content'],
    category: 'Kids Story Video (Ai+Edit)',
    thumbnailUrl: 'https://picsum.photos/seed/kids/600/400',
    videoUrl: 'dQw4w9WgXcQ'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Tanvir Rahman',
    role: 'Documentary Director',
    text: 'Nazmuls attention to detail in map animations added a whole new dimension to our heritage project. Highly professional!',
    avatar: 'https://i.pravatar.cc/150?u=tanvir'
  },
  {
    id: '2',
    name: 'Sara Karim',
    role: 'YouTube Creator',
    text: 'The horror shorts he edited for my channel went viral. His sound design skills are unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sara'
  }
];
