import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const Reel: React.FC<{ src: string; caption: string }> = ({ src, caption }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[9/16] bg-black group cursor-pointer"
      whileHover={{ y: -10 }}
      onClick={togglePlay}
    >
      <video 
        ref={videoRef}
        src={src} 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
            <span className="material-icons text-white text-4xl ml-1">play_arrow</span>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-display text-2xl">{caption}</h3>
      </div>
    </motion.div>
  );
};

const Reels: React.FC = () => {
  return (
    <section className="py-24 bg-[#1F1508] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h2 className="font-display text-5xl text-brand-primary mb-2">Star-Burger TV</h2>
                <p className="text-white/60">Watch the magic happen.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
                 <Reel src={IMAGES.brand.videoIntro} caption="The Vibe" />
                 <Reel src={IMAGES.brand.videoReel} caption="Jaaneman Haseen" />
                 {/* Duplicate for layout balance or use another video if available */}
                 <div className="hidden lg:block relative rounded-3xl overflow-hidden bg-brand-secondary flex items-center justify-center text-center p-8 border border-white/10">
                    <div>
                        <span className="material-icons text-6xl text-brand-primary mb-4">video_library</span>
                        <h3 className="font-display text-3xl text-white mb-2">More on Social</h3>
                        <p className="text-white/50 mb-6">Follow us for daily drool-worthy content.</p>
                        <button className="bg-white text-brand-dark px-6 py-2 rounded-full font-bold hover:bg-brand-primary transition-colors">
                            @starburger.india
                        </button>
                    </div>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default Reels;