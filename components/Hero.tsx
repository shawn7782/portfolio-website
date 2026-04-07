
import React from 'react';
import { Play, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration - updated to orange/gold */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Welcome to my world</h2>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight">
              Nazmul Hasan Shawon — <span className="text-gold">Video Editor</span> & AI Content Maker
            </h1>
            <p className="text-lg text-softwhite/70 max-w-lg leading-relaxed">
              Crafting immersive visual stories through high-end editing, motion graphics, and cutting-edge AI technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-gold/20"
            >
              <Play size={18} fill="currentColor" /> Watch Demo
            </a>
            <a 
              href="https://wa.me/8801870287096" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gold/50 hover:border-gold rounded-full flex items-center justify-center gap-2 transition-colors font-bold"
            >
              <MessageCircle size={18} /> Contact on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative group animate-fade-in-right flex justify-center">
          {/* Main profile image area glow */}
          <div className="absolute inset-0 bg-gold/15 rounded-full blur-[80px] group-hover:blur-[100px] transition-all duration-500 opacity-40"></div>
          
          <div className="relative w-full max-w-md aspect-square bg-gold rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] overflow-hidden shadow-2xl border-4 border-gold/20 hover:rounded-[50%] transition-all duration-700">
            <img 
              src="https://lh3.googleusercontent.com/d/1asHjsAiBRL0JuhiO13nbPGoIdHWsxExe" 
              alt="Nazmul Hasan Shawon Portfolio Image" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gold/50"></div>
      </div>
    </section>
  );
};

export default Hero;
