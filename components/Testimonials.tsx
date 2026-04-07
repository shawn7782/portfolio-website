
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % TESTIMONIALS.length);
  const prev = () => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="py-24 bg-softwhite/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-headline font-bold mb-16">What Clients Say</h2>
        
        <div className="max-w-4xl mx-auto relative px-12">
          <Quote className="absolute -top-10 left-1/2 -translate-x-1/2 text-gold/10 w-24 h-24" />
          
          <div className="relative min-h-[300px] flex items-center justify-center">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={t.id}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ visibility: i === active ? 'visible' : 'hidden' }}
              >
                <p className="text-xl md:text-2xl italic leading-relaxed text-softwhite/90 mb-8">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 text-left">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-gold" />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-gold text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 bg-white/5 rounded-full hover:bg-gold/20 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-3 bg-white/5 rounded-full hover:bg-gold/20 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
