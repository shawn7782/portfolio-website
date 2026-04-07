
import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline font-bold">Technical Skills</h2>
          <div className="h-1 w-20 bg-gold"></div>
          <p className="text-softwhite/60 max-w-2xl text-center">
            Mastery over industry-standard tools and emerging AI technologies to deliver pixel-perfect results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="space-y-3 group">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-bold tracking-tight">{skill.name}</span>
                </div>
                <span className="text-gold font-bold">{skill.proficiency}%</span>
              </div>
              <div className="h-2 w-full bg-softwhite/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gold transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className="text-sm text-softwhite/50 italic">{skill.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['4K Editing', 'Color Grading', 'Sound Design', 'VFX', 'AI Rendering', 'Storyboarding', 'Storytelling'].map(tag => (
            <div key={tag} className="px-6 py-4 bg-softwhite/5 border border-softwhite/10 rounded-xl flex items-center justify-center hover:border-gold/50 transition-colors">
              <span className="text-sm font-medium tracking-wider">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
