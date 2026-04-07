
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-headline font-bold">My Services</h2>
          <div className="h-1 w-20 bg-gold"></div>
          <p className="text-softwhite/60 max-w-2xl">
            From commercial projects to artistic films, I provide full-spectrum post-production services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-softwhite/5 p-8 rounded-2xl border border-softwhite/10 hover:border-gold/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-softwhite/60 text-sm leading-relaxed">{service.description}</p>
              </div>
              
              <ul className="space-y-3 mb-10 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-softwhite/80">
                    <Check size={14} className="text-gold mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-gold font-bold group-hover:gap-4 transition-all"
              >
                Book This Service <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
