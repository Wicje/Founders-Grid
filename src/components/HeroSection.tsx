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
    <section className="relative bg-black text-white pt-36 md:pt-44 pb-20 overflow-hidden">
      {/* Background architectural vertical glow slits in top-right */}
      <div 
        className="absolute top-10 right-0 md:right-12 w-[340px] md:w-[480px] h-[340px] pointer-events-none select-none opacity-85 z-0"
        aria-hidden="true"
      >
        <div className="relative w-full h-full flex justify-end gap-3 md:gap-4 blur-2xl">
          <div className="w-8 h-80 bg-gradient-to-b from-[#8f1d39]/0 via-[#f0386b]/40 to-[#ff5c47]/0 rounded-full transform -rotate-12" />
          <div className="w-10 h-96 bg-gradient-to-b from-[#b5264b]/10 via-[#f0386b]/70 to-[#ff6b52]/10 rounded-full transform -rotate-6" />
          <div className="w-9 h-96 bg-gradient-to-b from-[#941b3a]/0 via-[#d62858]/60 to-[#f97316]/0 rounded-full" />
          <div className="w-12 h-88 bg-gradient-to-b from-[#701a2e]/0 via-[#f0386b]/50 to-[#ea580c]/0 rounded-full transform rotate-6" />
          <div className="w-8 h-72 bg-gradient-to-b from-[#5c1322]/0 via-[#b5264b]/30 to-transparent rounded-full transform rotate-12" />
        </div>
        {/* Subtle vertical louvre lines texture */}
        <div className="absolute inset-0 flex justify-end gap-3 md:gap-4 opacity-40">
          <div className="w-px h-64 bg-gradient-to-b from-transparent via-[#ff7895] to-transparent" />
          <div className="w-px h-80 bg-gradient-to-b from-transparent via-[#ff7895] to-transparent" />
          <div className="w-px h-72 bg-gradient-to-b from-transparent via-[#ff9478] to-transparent" />
          <div className="w-px h-60 bg-gradient-to-b from-transparent via-[#ff7895] to-transparent" />
          <div className="w-px h-48 bg-gradient-to-b from-transparent via-[#ff9478] to-transparent" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          {/* Left Column: Big Bold Statement */}
          <div className="lg:col-span-7">
            <h1 className="text-[54px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-extrabold tracking-[-0.04em] leading-[0.94] text-white">
              <span className="block">Fintech</span>
              <span className="block">makers</span>
              <span className="flex items-center flex-wrap">
                <InlinePill theme="white" className="w-[84px] sm:w-[104px] h-[38px] sm:h-[46px] my-1" />
                <span>and</span>
              </span>
              <span className="block">other</span>
              <span className="block">impossible</span>
              <span className="block">things</span>
            </h1>
          </div>

          {/* Right Column: Statement & CTA Pills */}
          <div className="lg:col-span-5 lg:pb-4 flex flex-col justify-end">
            <p className="text-white/85 text-base md:text-[17px] leading-[1.65] font-normal max-w-[420px] mb-8">
              Tenity is a fintech innovation platform that backs early-stage founders and partners with corporates at the convergence of fintech, AI, and digital assets.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExploreVenture}
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/40 hover:border-white text-white text-[13px] font-medium tracking-tight bg-transparent hover:bg-white/10 active:bg-white/15 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Venture Capital</span>
                <span className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center group-hover:border-white transition-colors">
                  <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>

              <button
                onClick={onExploreInnovation}
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/40 hover:border-white text-white text-[13px] font-medium tracking-tight bg-transparent hover:bg-white/10 active:bg-white/15 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Innovation Services</span>
                <span className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center group-hover:border-white transition-colors">
                  <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
