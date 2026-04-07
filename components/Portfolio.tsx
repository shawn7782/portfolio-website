
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import Lightbox from './Lightbox';
import { Play, Clock } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All', 
    'Documentary Edit', 
    'Map Animation Edit', 
    'Promotional & Corporate Edit', 
    'Tech Review, Tutorial & Podcast Edit', 
    'Suspense Horror Video (Ai+Edit)', 
    'Kids Story Video (Ai+Edit)'
  ];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-softwhite/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-headline font-bold">Featured Projects</h2>
          <div className="h-1 w-20 bg-gold"></div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-[12px] font-bold border transition-all duration-300 uppercase tracking-wider ${
                filter === cat 
                  ? 'bg-gold border-gold text-charcoal shadow-lg shadow-gold/20' 
                  : 'border-softwhite/10 hover:border-softwhite/30 text-softwhite/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="group cursor-pointer bg-charcoal rounded-2xl overflow-hidden border border-softwhite/10 hover:border-gold/50 transition-all duration-300 flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-gold text-charcoal rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play size={28} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider text-gold border border-gold/30">
                  {project.category}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold leading-tight group-hover:text-gold transition-colors">{project.title}</h3>
                  <span className="flex items-center gap-1 text-[10px] text-softwhite/40 whitespace-nowrap"><Clock size={12} /> {project.duration}</span>
                </div>
                
                <p className="text-sm text-softwhite/60 line-clamp-2">{project.description}</p>
                
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map(tool => (
                    <span key={tool} className="text-[9px] bg-softwhite/5 border border-softwhite/10 px-2 py-1 rounded text-softwhite/50 uppercase tracking-tighter">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <Lightbox 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Portfolio;
