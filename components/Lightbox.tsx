
import React, { useState } from 'react';
import { X, Download, MessageCircle, Volume2, VolumeX, Subtitles, FileText } from 'lucide-react';
import { Project } from '../types';

interface LightboxProps {
  project: Project;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ project, onClose }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [showCaptions, setShowCaptions] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  // Stop propagation to prevent closing when clicking inside content
  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div 
      className="fixed inset-0 z-[60] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 text-softwhite/60 hover:text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X size={40} />
      </button>

      <div 
        className="bg-charcoal w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-softwhite/10 max-h-[90vh] flex flex-col"
        onClick={handleContentClick}
      >
        {/* Video Player Area */}
        <div className="relative aspect-video bg-black flex-shrink-0">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.videoUrl}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Overlay Controls */}
          <div className="absolute top-4 left-4 flex gap-2">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 bg-charcoal/60 backdrop-blur-md rounded-full text-white hover:bg-gold/80 transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button 
              onClick={() => setShowCaptions(!showCaptions)}
              className={`p-3 backdrop-blur-md rounded-full text-white transition-all ${showCaptions ? 'bg-gold' : 'bg-charcoal/60'}`}
              title="Toggle Captions"
            >
              <Subtitles size={18} />
            </button>
          </div>
        </div>

        {/* Details Area */}
        <div className="p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-headline font-bold">{project.title}</h2>
                <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-lg border border-gold/30">
                  {project.category}
                </span>
              </div>
              <p className="text-softwhite/70 leading-relaxed text-lg">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tools.map(tool => (
                  <span key={tool} className="text-xs font-medium px-4 py-1.5 bg-softwhite/5 border border-softwhite/10 rounded-full text-softwhite/40">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-64 space-y-4">
              <button 
                className="w-full py-4 bg-gold text-charcoal font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <MessageCircle size={18} /> Discuss Similar Project
              </button>
              
              <div className="space-y-2">
                <button 
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="w-full py-3 bg-softwhite/5 border border-softwhite/10 rounded-xl flex items-center justify-center gap-2 hover:bg-softwhite/10 transition-colors"
                >
                  <FileText size={16} /> {showTranscript ? 'Hide Transcript' : 'View Transcript'}
                </button>
                <button className="w-full py-3 text-softwhite/40 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm">
                  <Download size={16} /> Download .SRT Subtitles
                </button>
              </div>
            </div>
          </div>

          {showTranscript && project.transcript && (
            <div className="mt-8 p-6 bg-softwhite/5 border border-softwhite/10 rounded-2xl animate-fade-in-up">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-gold"><FileText size={16}/> Transcription</h4>
              <div className="text-sm text-softwhite/60 leading-relaxed space-y-2 whitespace-pre-line">
                {project.transcript}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
