import React from 'react';
import { InlinePill } from './TenityLogo';
import { ArrowUpRight, Rocket, Calendar } from 'lucide-react';

interface ImpossibleToPossibleSectionProps {
  onCardClick?: (title: string) => void;
}

export const ImpossibleToPossibleSection: React.FC<ImpossibleToPossibleSectionProps> = ({
  onCardClick,
}) => {
  return (
    <section id="orbit-section" className="bg-white text-black py-16 sm:py-24 md:py-32 border-b border-neutral-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-[38px] min-[380px]:text-[46px] sm:text-[60px] md:text-[76px] lg:text-[90px] font-extrabold tracking-[-0.035em] leading-[0.96] text-black">
              <span className="block">From</span>
              <span className="block">impossible</span>
              <span className="flex items-center flex-wrap gap-x-2">
                <InlinePill theme="black" className="w-[68px] min-[380px]:w-[84px] sm:w-[116px] md:w-[140px] h-[30px] min-[380px]:h-[36px] sm:h-[50px] md:h-[60px] my-1 sm:my-1.5 shadow-md shrink-0" />
                <span>to</span>
              </span>
              <span className="block">possible</span>
            </h2>
          </div>

          <div className="lg:col-span-5 pb-2 sm:pb-3">
            <p className="text-neutral-700 text-[15px] sm:text-lg md:text-[19px] leading-relaxed max-w-lg font-normal">
              Quick stories of ventures and programmes that prove the impossible isn't just possible — it scales.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 md:gap-7">
          
          {/* Card 1: Emerald Green Card ("The Latest from our Orbit") */}
          <div
            onClick={() => onCardClick?.('The Latest from our Orbit')}
            className="sm:col-span-1 lg:col-span-3 bg-[#00d68f] rounded-t-full sm:rounded-tr-full sm:rounded-tl-none sm:rounded-b-none p-8 sm:p-10 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] md:min-h-[360px] cursor-pointer group hover:brightness-105 hover:scale-[1.02] transition-all shadow-md"
          >
            <div className="flex justify-end">
              <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/10 flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <ArrowUpRight size={19} />
              </span>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-[30px] font-extrabold text-neutral-900 tracking-tight leading-tight">
                The Latest<br />from our<br />Orbit
              </h3>
            </div>
          </div>

          {/* Card 2: Upcoming Events (Arched photo card with event celebration & maracas) */}
          <div
            onClick={() => onCardClick?.('Upcoming Events')}
            className="sm:col-span-1 lg:col-span-3 relative rounded-t-full overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] cursor-pointer group shadow-md bg-neutral-950 flex flex-col justify-end p-7 sm:p-9 border border-neutral-200 hover:scale-[1.02] transition-all"
          >
            {/* Visual background representation of festival/cocktail celebration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
            
            {/* Ambient cocktail / maracas illustration / photo styling */}
            <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:scale-105 transition-transform duration-700">
              <div className="relative w-40 sm:w-48 h-40 sm:h-48 rounded-full bg-gradient-to-tr from-amber-500/30 via-rose-500/30 to-emerald-500/30 blur-xl" />
              <div className="absolute flex items-center justify-center gap-3">
                <span className="w-8 sm:w-9 h-16 sm:h-18 rounded-full bg-gradient-to-b from-[#f0386b] to-amber-400 rotate-12 shadow-lg" />
                <span className="w-8 sm:w-9 h-20 sm:h-22 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600 -rotate-12 shadow-lg" />
                <span className="w-8 sm:w-9 h-14 sm:h-16 rounded-full bg-gradient-to-b from-blue-400 to-indigo-600 rotate-45 shadow-lg" />
              </div>
            </div>

            <div className="relative z-20">
              <div className="flex items-center gap-2 text-white/90 mb-2 text-xs font-bold uppercase tracking-wider">
                <Calendar size={14} className="text-[#f0386b]" />
                <span>Global Calendar</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-white tracking-tight leading-tight">
                Upcoming Events
              </h3>
            </div>
          </div>

          {/* Card 3: Rocket Arched Card */}
          <div
            onClick={() => onCardClick?.('Venture Accelerators')}
            className="sm:col-span-1 lg:col-span-2 relative rounded-t-full overflow-hidden min-h-[260px] sm:min-h-[320px] md:min-h-[360px] cursor-pointer group bg-black flex flex-col items-center justify-center p-7 sm:p-8 border border-neutral-900 shadow-md hover:scale-[1.02] transition-all"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,56,107,0.3)_0%,_transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 text-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-[#f0386b] group-hover:scale-110 group-hover:text-white transition-all shadow-inner">
                <Rocket size={32} className="transform -rotate-45" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white/95 uppercase tracking-widest">
                Accelerate
              </span>
            </div>
          </div>

          {/* Card 4: Tall Right Coworking / Startup Team Photo Card */}
          <div
            onClick={() => onCardClick?.('Nordic Fintech Deal')}
            className="sm:col-span-1 lg:col-span-4 lg:row-span-2 relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[360px] md:min-h-full cursor-pointer group shadow-lg bg-neutral-900 border border-neutral-200 hover:scale-[1.01] transition-all"
          >
            <img
              src="/src/assets/images/bento_coworking_laptops_1791458279835.jpg"
              alt="Startup founders coding together late at night"
              className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            
            <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10 md:p-12 text-white">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90 mb-2 sm:mb-3">
                Ecosystem Spotlight
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-[28px] font-extrabold tracking-tight text-white mb-2.5 sm:mb-3 leading-snug">
                Collaborative Builder Hubs
              </h3>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-[340px]">
                High-intensity co-working, hackathons, and roundtables across 6 global hubs.
              </p>
            </div>
          </div>

          {/* Card 5: Large Coral Red 100+ PoCs Card with Wireframe Globe */}
          <div
            onClick={() => onCardClick?.('Visa Innovation Program Europe')}
            className="sm:col-span-2 lg:col-span-5 bg-[#f0386b] rounded-3xl p-8 sm:p-10 md:p-12 text-white min-h-[300px] sm:min-h-[330px] flex flex-col sm:flex-row items-center justify-between overflow-hidden cursor-pointer group shadow-xl relative hover:scale-[1.01] transition-all"
          >
            {/* Left Content */}
            <div className="relative z-10 max-w-[320px] mb-6 sm:mb-0 text-center sm:text-left">
              <span className="text-7xl sm:text-8xl lg:text-[104px] font-black tracking-tight leading-none block mb-3 sm:mb-4 tabular-nums drop-shadow-sm">
                100+
              </span>
              <p className="text-base sm:text-lg md:text-[20px] font-bold text-white/95 leading-snug">
                PoCs facilitated through the Visa Innovation Program Europe
              </p>
            </div>

            {/* Right Graphic: Exquisite 3D Wireframe Globe */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0 flex items-center justify-center">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full text-white/95 group-hover:rotate-12 transition-transform duration-1000 ease-out"
              >
                {/* Globe outer ring */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="100" cy="100" r="88" fill="white" fillOpacity="0.1" />
                
                {/* Latitude circles */}
                <ellipse cx="100" cy="100" rx="88" ry="40" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                <ellipse cx="100" cy="100" rx="88" ry="70" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
                <line x1="12" y1="100" x2="188" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                
                {/* Longitude ellipses */}
                <ellipse cx="100" cy="100" rx="42" ry="88" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                <ellipse cx="100" cy="100" rx="72" ry="88" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
                <line x1="100" y1="12" x2="100" y2="188" stroke="currentColor" strokeWidth="2" opacity="0.8" />

                {/* Simulated continents/nodes */}
                <circle cx="85" cy="70" r="4" fill="white" />
                <circle cx="115" cy="65" r="3" fill="white" />
                <circle cx="135" cy="95" r="4.5" fill="white" />
                <circle cx="70" cy="115" r="3" fill="white" />
                <circle cx="120" cy="130" r="3.5" fill="white" />
                <circle cx="65" cy="85" r="2.5" fill="white" />
                <path d="M85 70 L115 65 L135 95 L120 130" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8" />
              </svg>
            </div>
          </div>

          {/* Card 6: Light Periwinkle Blue Card ("One of Denmark's largest...") */}
          <div
            onClick={() => onCardClick?.('Danish AI/Fintech Pre-seed Round')}
            className="sm:col-span-2 lg:col-span-3 bg-[#8ab4f8] rounded-3xl p-8 sm:p-10 flex flex-col justify-end min-h-[240px] sm:min-h-[290px] md:min-h-[330px] cursor-pointer group hover:bg-[#7aa7f0] hover:scale-[1.02] transition-all shadow-md"
          >
            <div className="flex justify-end mb-6 sm:mb-auto">
              <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/10 flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <ArrowUpRight size={19} />
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-[27px] font-extrabold text-neutral-900 tracking-tight leading-snug">
              One of Denmark's largest AI/Fintech pre-seed rounds
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};
