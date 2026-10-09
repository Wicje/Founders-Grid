import React from 'react';
import { ArrowRight } from 'lucide-react';
import { InlinePill } from './TenityLogo';

interface HeroSectionProps {
  onExploreVenture: () => void;
  onExploreInnovation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreVenture,
  onExploreInnovation,
}) => {
  return (
    <section className="relative bg-black text-white pt-28 sm:pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden">
      {/* Background architectural vertical glow slits in top-right */}
      <div 
        className="absolute top-6 sm:top-10 right-0 md:right-12 w-[260px] sm:w-[380px] md:w-[480px] h-[260px] sm:h-[380px] pointer-events-none select-none opacity-70 sm:opacity-85 z-0"
        aria-hidden="true"
      >
        <div className="relative w-full h-full flex justify-end gap-2 sm:gap-3 md:gap-4 blur-xl sm:blur-2xl">
          <div className="w-6 sm:w-8 h-64 sm:h-80 bg-gradient-to-b from-[#8f1d39]/0 via-[#f0386b]/40 to-[#ff5c47]/0 rounded-full transform -rotate-12" />
          <div className="w-8 sm:w-10 h-72 sm:h-96 bg-gradient-to-b from-[#b5264b]/10 via-[#f0386b]/70 to-[#ff6b52]/10 rounded-full transform -rotate-6" />
          <div className="w-7 sm:w-9 h-72 sm:h-96 bg-gradient-to-b from-[#941b3a]/0 via-[#d62858]/60 to-[#f97316]/0 rounded-full" />
          <div className="w-9 sm:w-12 h-64 sm:h-88 bg-gradient-to-b from-[#701a2e]/0 via-[#f0386b]/50 to-[#ea580c]/0 rounded-full transform rotate-6" />
          <div className="w-6 sm:w-8 h-56 sm:h-72 bg-gradient-to-b from-[#5c1322]/0 via-[#b5264b]/30 to-transparent rounded-full transform rotate-12" />
        </div>
        {/* Subtle vertical louvre lines texture */}
        <div className="absolute inset-0 flex justify-end gap-2 sm:gap-3 md:gap-4 opacity-40">
          <div className="w-px h-52 sm:h-64 bg-gradient-to-b from-transparent via-[#ff7895] to-transparent" />
          <div className="w-px h-64 sm:h-80 bg-gradient-to-b from-transparent via-[#ff7895] to-transparent" />
          <div className="w-px h-56 sm:h-72 bg-gradient-to-b from-transparent via-[#ff9478] to-transparent" />
          <div className="w-px h-48 sm:h-60 bg-gradient-to-b from-transparent via-[#ff7895] to-transparent" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-end">
          
          {/* Left Column: Big Bold Statement */}
          <div className="lg:col-span-7">
            <h1 className="text-[40px] min-[380px]:text-[48px] sm:text-[72px] md:text-[92px] lg:text-[112px] xl:text-[124px] font-extrabold tracking-[-0.04em] leading-[0.93] text-white">
              <span className="block">Fintech</span>
              <span className="block">makers</span>
              <span className="flex items-center flex-wrap gap-x-2">
                <InlinePill theme="white" className="w-[68px] min-[380px]:w-[84px] sm:w-[116px] md:w-[140px] h-[30px] min-[380px]:h-[36px] sm:h-[50px] md:h-[60px] my-1 sm:my-1.5 shadow-md shrink-0" />
                <span>and</span>
              </span>
              <span className="block">other</span>
              <span className="block">impossible</span>
              <span className="block">things</span>
            </h1>
          </div>

          {/* Right Column: Statement & CTA Pills */}
          <div className="lg:col-span-5 lg:pb-6 flex flex-col justify-end">
            {/* Friendly ecosystem trust pill */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-white/85 bg-white/10 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-full w-fit mb-5 sm:mb-6 border border-white/15 shadow-sm">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#f0386b] animate-pulse shrink-0" />
              <span>Global Cohort Applications Open</span>
            </div>

            <p className="text-white/90 text-[15px] sm:text-[18px] md:text-[20px] leading-[1.6] sm:leading-[1.65] font-normal max-w-[490px] mb-7 sm:mb-10">
              Tenity is a fintech innovation platform that backs early-stage founders and partners with corporates at the convergence of fintech, AI, and digital assets.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onExploreVenture}
                className="group inline-flex items-center justify-center gap-3.5 px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-full border border-white/50 hover:border-white text-white text-[15px] sm:text-[16px] font-bold tracking-tight bg-white/5 hover:bg-white/15 active:bg-white/20 transition-all cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white w-full sm:w-auto text-center"
              >
                <span>Venture Capital</span>
                <span className="w-7 h-7 rounded-full border border-white/70 flex items-center justify-center group-hover:border-white transition-colors bg-white/5 shrink-0">
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>

              <button
                onClick={onExploreInnovation}
                className="group inline-flex items-center justify-center gap-3.5 px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-full border border-white/50 hover:border-white text-white text-[15px] sm:text-[16px] font-bold tracking-tight bg-white/5 hover:bg-white/15 active:bg-white/20 transition-all cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white w-full sm:w-auto text-center"
              >
                <span>Innovation Services</span>
                <span className="w-7 h-7 rounded-full border border-white/70 flex items-center justify-center group-hover:border-white transition-colors bg-white/5 shrink-0">
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
