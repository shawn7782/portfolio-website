
import React from 'react';
import { Download, FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-softwhite/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full border-4 border-gold p-2 relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1asHjsAiBRL0JuhiO13nbPGoIdHWsxExe" 
                alt="Nazmul Hasan Shawon Headshot" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal px-6 py-3 rounded-2xl font-bold shadow-xl z-20 hidden md:block">
              3+ Years Experience
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-3xl rounded-full scale-150 -z-0"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-headline font-bold">About Me</h2>
              <div className="h-1 w-20 bg-gold"></div>
            </div>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-softwhite/90 font-medium italic">
                "আমি Nazmul Hasan Shawon। ভিডিও এডিটিং, মোশন গ্রাফিক্স ও AI-বেইসড কনটেন্ট ক্রিয়েশনে দক্ষ। প্রিমিয়ার, আফটার ইফেক্ট ও AI টুল দিয়ে প্রফেশনাল ভিডিও প্রডিউস করি।"
              </p>
              <p className="text-softwhite/70 leading-relaxed">
                Specializing in documentary storytelling and immersive horror visual effects. 
                I bridge the gap between traditional professional post-production (Premiere, AE, DaVinci) 
                and the future of AI-driven content creation. My passion lies in macro nature videography 
                and creating detailed, animated map visuals that tell deep historical stories.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-2 transition-colors border border-softwhite/10">
                <FileText size={18} /> Download CV
              </button>
              <div className="flex -space-x-3 items-center">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/50?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-charcoal" alt="Client avatar" />
                ))}
                <span className="ml-4 text-sm text-softwhite/50">+50 Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
