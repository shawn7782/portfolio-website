
import React, { useState } from 'react';
import { Send, MessageCircle, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-headline font-bold">Contact Nazmul</h2>
          <div className="h-1 w-20 bg-gold"></div>
          <p className="text-softwhite/60">Ready to start your next project? Let's connect!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Direct Channels</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <a 
                  href="https://wa.me/8801870287096" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl flex flex-col gap-4 group hover:bg-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="text-[#25D366] group-hover:scale-110 transition-transform" size={40} />
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp এ মেসেজ পাঠান</h4>
                    <p className="text-sm text-softwhite/40">Quickest response time</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.facebook.com/share/1D6kLURREw/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 bg-[#1877F2]/10 border border-[#1877F2]/30 rounded-2xl flex flex-col gap-4 group hover:bg-[#1877F2]/20 transition-all"
                >
                  <Facebook className="text-[#1877F2] group-hover:scale-110 transition-transform" size={40} />
                  <div>
                    <h4 className="font-bold text-lg">Facebook এ দেখা করুন</h4>
                    <p className="text-sm text-softwhite/40">Connect on social media</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-softwhite/40">Email Me</p>
                  <p className="font-bold">Nazmul7782@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-softwhite/40">Location</p>
                  <p className="font-bold">Comilla, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-softwhite/5 p-8 rounded-3xl border border-softwhite/10 relative">
            {submitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-charcoal/90 backdrop-blur-md rounded-3xl animate-fade-in text-center z-10">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-charcoal mb-4 shadow-xl shadow-gold/20">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-softwhite/60">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-softwhite/60 ml-1">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-charcoal/50 border border-softwhite/10 rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-softwhite/60 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-charcoal/50 border border-softwhite/10 rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-softwhite/60 ml-1">Message</label>
                <textarea 
                  required
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-charcoal/50 border border-softwhite/10 rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              {/* Anti-spam honeypot */}
              <div className="hidden">
                <input type="checkbox" name="botcheck" />
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-gold text-charcoal font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gold/90 hover:scale-[1.01] transition-all"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
