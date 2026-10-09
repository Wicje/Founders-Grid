import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HybridModelStageProps {
  onApproachClick: () => void;
  onPillarClick: (pillarIndex: number) => void;
}

export const HybridModelStage: React.FC<HybridModelStageProps> = ({
  onApproachClick,
  onPillarClick,
}) => {
  return (
    <section id="hybrid-stage" className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Main Stage Arrangement */}
        <div className="relative flex flex-col lg:block items-center justify-center min-h-0 lg:min-h-[760px] gap-6 sm:gap-8 lg:gap-0">
          
          {/* Center Showcase Card: Photography + "A hybrid model that works" */}
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] h-[460px] sm:h-[540px] md:h-[600px] lg:h-[660px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10 group mx-auto order-1 lg:order-none">
            {/* Background Image */}
            <img
              src="/src/assets/images/hero_hybrid_team_1791458222716.jpg"
              alt="Tenity collaborative ecosystem team"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Dark Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30" />

            {/* Content overlay */}
            <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 text-center z-10">
              <span className="inline-block px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-white/90 mb-5 sm:mb-7 shadow-sm">
                Founders Grid Blueprint
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.08] max-w-[360px] mb-8 sm:mb-10">
                A digital model that works
              </h2>

              <button
                onClick={onApproachClick}
                className="group/btn inline-flex items-center gap-3.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/70 hover:border-white text-white text-[14px] sm:text-base font-bold tracking-tight bg-black/50 backdrop-blur-md hover:bg-white hover:text-black transition-all cursor-pointer shadow-xl hover:scale-105"
              >
                <span>How it works</span>
                <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full border border-current flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5">
                  <ArrowRight size={13} />
                </span>
              </button>
            </div>
          </div>

          {/* Pillars Container: Clean 3-col grid on tablet, stack on mobile, absolute positioning on desktop */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:contents gap-5 sm:gap-6 lg:gap-0 order-2 lg:order-none">
            
            {/* Card 01: Submitting what you make */}
            <div 
              onClick={() => onPillarClick(1)}
              className="w-full lg:w-[370px] bg-[#0c0c0c] hover:bg-[#151515] border border-white/15 hover:border-white/35 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-6 lg:p-9 shadow-2xl transition-all duration-300 cursor-pointer group z-20 lg:absolute lg:left-2 lg:top-8 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-white/90">01.</span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#f0386b] shadow-[0_0_14px_#f0386b] animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-[20px] lg:text-[23px] font-bold text-white mt-3.5 group-hover:text-[#f0386b] transition-colors leading-snug">
                Submitting what you make
              </h3>
              <p className="text-sm sm:text-[15px] md:text-sm lg:text-base text-white/75 mt-2.5 leading-relaxed">
                Founders submit products through a short form. Free forever, no fees or paywalls.
              </p>
            </div>

            {/* Card 02: Testing & honest feedback */}
            <div 
              onClick={() => onPillarClick(2)}
              className="w-full lg:w-[370px] bg-[#0c0c0c] hover:bg-[#151515] border border-white/15 hover:border-white/35 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-6 lg:p-9 shadow-2xl transition-all duration-300 cursor-pointer group z-20 lg:absolute lg:right-2 lg:top-44 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-white/90">02.</span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#3b82f6] shadow-[0_0_14px_#3b82f6] animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-[20px] lg:text-[23px] font-bold text-white mt-3.5 group-hover:text-[#3b82f6] transition-colors leading-snug">
                Testing &amp; honest feedback
              </h3>
              <p className="text-sm sm:text-[15px] md:text-sm lg:text-base text-white/75 mt-2.5 leading-relaxed">
                Community members test each other's products and give honest feedback, kindly and specifically.
              </p>
            </div>

            {/* Card 03: Getting featured & visibility */}
            <div 
              onClick={() => onPillarClick(3)}
              className="w-full lg:w-[380px] bg-[#0c0c0c] hover:bg-[#151515] border border-white/15 hover:border-white/35 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-6 lg:p-9 shadow-2xl transition-all duration-300 cursor-pointer group z-20 lg:absolute lg:left-24 lg:bottom-1 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-white/90">03.</span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#10b981] shadow-[0_0_14px_#10b981] animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-[20px] lg:text-[23px] font-bold text-white mt-3.5 group-hover:text-[#10b981] transition-colors leading-snug">
                Getting featured &amp; visible
              </h3>
              <p className="text-sm sm:text-[15px] md:text-sm lg:text-base text-white/75 mt-2.5 leading-relaxed">
                Featured in weekly newsletters (5–10 products), monthly traction issues, dedicated pages, and socials.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
