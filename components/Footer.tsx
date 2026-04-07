
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 border-t border-softwhite/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-2xl font-headline font-bold">Nazmul Hasan Shawon</h2>
            <p className="text-softwhite/50 text-sm max-w-sm">
              Creating meaningful visual experiences through professional editing and artificial intelligence.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a href="https://www.facebook.com/share/1D6kLURREw/" target="_blank" rel="noopener noreferrer" className="p-3 bg-softwhite/5 hover:bg-gold/20 hover:text-gold rounded-full transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-softwhite/5 hover:bg-gold/20 hover:text-gold rounded-full transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-softwhite/5 hover:bg-gold/20 hover:text-gold rounded-full transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-softwhite/5 hover:bg-gold/20 hover:text-gold rounded-full transition-all">
                <Youtube size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest text-softwhite/30 hover:text-gold transition-colors"
            >
              <div className="w-10 h-10 border border-softwhite/10 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
                <ArrowUp size={16} />
              </div>
              Back to Top
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-softwhite/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-softwhite/30">
          <p>© {new Date().getFullYear()} Nazmul Hasan Shawon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
