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
        <div className="relative min-h-[580px] md:min-h-[660px] flex items-center justify-center">
          
          {/* Card 01: Spotting what's next (Top-Left) */}
          <div 
            onClick={() => onPillarClick(1)}
            className="w-full sm:w-[280px] md:w-[310px] bg-[#0c0c0c] hover:bg-[#141414] border border-white/12 hover:border-white/30 rounded-2xl p-6 shadow-2xl transition-all duration-300 cursor-pointer group z-20 mb-6 lg:mb-0 lg:absolute lg:left-4 lg:top-12"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold tracking-wider text-white/90">01.</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#f0386b] shadow-[0_0_8px_#f0386b]" />
            </div>
            <h3 className="text-lg font-bold text-white mt-4 group-hover:text-[#f0386b] transition-colors">
              Spotting what's next
            </h3>
            <p className="text-[13px] text-white/60 mt-2.5 leading-relaxed">
              Trend scouting, startup sourcing & evaluation, market insight.
            </p>
          </div>

          {/* Center Showcase Card: Photography + "A hybrid model that works" */}
          <div className="relative w-full sm:w-[380px] md:w-[420px] h-[520px] md:h-[580px] rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 group mx-auto">
            {/* Background Image */}
            <img
              src="/src/assets/images/hero_hybrid_team_1791458222716.jpg"
              alt="Tenity collaborative ecosystem team"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Dark Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

            {/* Content overlay */}
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-[280px] mb-8">
                A hybrid model that works
              </h2>

              <button
                onClick={onApproachClick}
                className="group/btn inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/60 hover:border-white text-white text-[13px] font-medium tracking-tight bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg"
              >
                <span>Our approach</span>
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5">
                  <ArrowRight size={11} />
                </span>
              </button>
            </div>
          </div>

          {/* Card 02: Creating what's next (Right-Center) */}
          <div 
            onClick={() => onPillarClick(2)}
            className="w-full sm:w-[280px] md:w-[310px] bg-[#0c0c0c] hover:bg-[#141414] border border-white/12 hover:border-white/30 rounded-2xl p-6 shadow-2xl transition-all duration-300 cursor-pointer group z-20 mt-6 lg:mt-0 lg:absolute lg:right-6 lg:top-48"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold tracking-wider text-white/90">02.</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6]" />
            </div>
            <h3 className="text-lg font-bold text-white mt-4 group-hover:text-[#3b82f6] transition-colors">
              Creating what's next
            </h3>
            <p className="text-[13px] text-white/60 mt-2.5 leading-relaxed">
              Co-designed programs, pilots, startup matching.
            </p>
          </div>

          {/* Card 03: Scaling what's next (Bottom-Center/Left) */}
          <div 
            onClick={() => onPillarClick(3)}
            className="w-full sm:w-[280px] md:w-[320px] bg-[#0c0c0c] hover:bg-[#141414] border border-white/12 hover:border-white/30 rounded-2xl p-6 shadow-2xl transition-all duration-300 cursor-pointer group z-20 mt-6 lg:mt-0 lg:absolute lg:left-32 lg:bottom-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold tracking-wider text-white/90">03.</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
            </div>
            <h3 className="text-lg font-bold text-white mt-4 group-hover:text-[#10b981] transition-colors">
              Scaling what's next
            </h3>
            <p className="text-[13px] text-white/60 mt-2.5 leading-relaxed">
              Early-stage investment, co-investment, global network.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
