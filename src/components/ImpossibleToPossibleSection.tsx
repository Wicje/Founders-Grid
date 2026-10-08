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
    <section id="orbit-section" className="bg-white text-black py-24 md:py-32 border-b border-neutral-100">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-[44px] sm:text-[54px] md:text-[68px] font-extrabold tracking-[-0.03em] leading-[0.98] text-black">
              <span className="block">From</span>
              <span className="block">impossible</span>
              <span className="flex items-center flex-wrap">
                <InlinePill theme="black" className="w-[78px] sm:w-[92px] h-[34px] sm:h-[40px] my-1" />
                <span>to</span>
              </span>
              <span className="block">possible</span>
            </h2>
          </div>

          <div className="lg:col-span-5 pb-2">
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-sm">
              Quick stories of ventures and programmes that prove the impossible isn't just possible — it scales
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: Emerald Green Card ("The Latest from our Orbit") */}
          <div
            onClick={() => onCardClick?.('The Latest from our Orbit')}
            className="md:col-span-3 bg-[#00d68f] rounded-t-full md:rounded-tr-full md:rounded-tl-none md:rounded-b-none p-8 flex flex-col justify-between min-h-[260px] md:min-h-[290px] cursor-pointer group hover:brightness-105 transition-all shadow-sm"
          >
            <div className="flex justify-end">
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </div>
            <div>
              <h3 className="text-2xl md:text-[26px] font-extrabold text-neutral-900 tracking-tight leading-tight">
                The Latest<br />from our<br />Orbit
              </h3>
            </div>
          </div>

          {/* Card 2: Upcoming Events (Arched photo card with event celebration & maracas) */}
          <div
            onClick={() => onCardClick?.('Upcoming Events')}
            className="md:col-span-3 relative rounded-t-full overflow-hidden min-h-[260px] md:min-h-[290px] cursor-pointer group shadow-sm bg-neutral-950 flex flex-col justify-end p-6 border border-neutral-200"
          >
            {/* Visual background representation of festival/cocktail celebration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
            
            {/* Ambient cocktail / maracas illustration / photo styling */}
            <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
              <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-amber-500/30 via-rose-500/30 to-emerald-500/30 blur-xl" />
              <div className="absolute flex items-center justify-center gap-3">
                <span className="w-8 h-16 rounded-full bg-gradient-to-b from-[#f0386b] to-amber-400 rotate-12 shadow-lg" />
                <span className="w-8 h-20 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600 -rotate-12 shadow-lg" />
                <span className="w-8 h-14 rounded-full bg-gradient-to-b from-blue-400 to-indigo-600 rotate-45 shadow-lg" />
              </div>
            </div>

            <div className="relative z-20">
              <div className="flex items-center gap-2 text-white/70 mb-2 text-xs font-semibold">
                <Calendar size={13} className="text-[#f0386b]" />
                <span>Global Calendar</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                Upcoming Events
              </h3>
            </div>
          </div>

          {/* Card 3: Rocket Arched Card */}
          <div
            onClick={() => onCardClick?.('Venture Accelerators')}
            className="md:col-span-2 relative rounded-t-full overflow-hidden min-h-[260px] md:min-h-[290px] cursor-pointer group bg-black flex flex-col items-center justify-center p-6 border border-neutral-900 shadow-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,56,107,0.25)_0%,_transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-[#f0386b] group-hover:scale-110 group-hover:text-white transition-all shadow-inner">
                <Rocket size={26} className="transform -rotate-45" />
              </div>
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                Accelerate
              </span>
            </div>
          </div>

          {/* Card 4: Tall Right Coworking / Startup Team Photo Card */}
          <div
            onClick={() => onCardClick?.('Nordic Fintech Deal')}
            className="md:col-span-4 md:row-span-2 relative rounded-3xl overflow-hidden min-h-[320px] md:min-h-full cursor-pointer group shadow-sm bg-neutral-900 border border-neutral-200"
          >
            <img
              src="/src/assets/images/bento_coworking_laptops_1791458279835.jpg"
              alt="Startup founders coding together late at night"
              className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 mb-2">
                Ecosystem Spotlight
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">
                Collaborative Builder Hubs
              </h3>
              <p className="text-xs text-white/70 leading-relaxed max-w-[280px]">
                High-intensity co-working, hackathons, and roundtables across 6 global hubs.
              </p>
            </div>
          </div>

          {/* Card 5: Large Coral Red 100+ PoCs Card with Wireframe Globe */}
          <div
            onClick={() => onCardClick?.('Visa Innovation Program Europe')}
            className="md:col-span-5 bg-[#f0386b] rounded-3xl p-8 md:p-10 text-white min-h-[280px] flex flex-col md:flex-row items-center justify-between overflow-hidden cursor-pointer group shadow-lg relative"
          >
            {/* Left Content */}
            <div className="relative z-10 max-w-[260px] mb-6 md:mb-0">
              <span className="text-6xl md:text-7xl lg:text-[84px] font-black tracking-tight leading-none block mb-3 tabular-nums">
                100+
              </span>
              <p className="text-sm md:text-base font-medium text-white/95 leading-snug">
                PoCs facilitated through the Visa Innovation Program Europe
              </p>
            </div>

            {/* Right Graphic: Exquisite 3D Wireframe Globe */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 flex items-center justify-center">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full text-white/90 group-hover:rotate-12 transition-transform duration-1000 ease-out"
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
            className="md:col-span-3 bg-[#8ab4f8] rounded-3xl p-8 flex flex-col justify-end min-h-[240px] md:min-h-[280px] cursor-pointer group hover:bg-[#7aa7f0] transition-colors shadow-sm"
          >
            <div className="flex justify-end mb-auto">
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </div>
            <h3 className="text-xl md:text-[23px] font-extrabold text-neutral-900 tracking-tight leading-snug">
              One of Denmark's largest AI/Fintech pre-seed rounds
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};
