import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PartnersSectionProps {
  onViewAllPartners: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onViewAllPartners,
}) => {
  return (
    <section className="bg-black text-white pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Row 1: Global strategic partners */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-6 sm:py-8">
          <div className="md:col-span-4 text-center md:text-left">
            <h3 className="text-xs sm:text-[14px] md:text-base font-bold text-white/90 tracking-wider uppercase">
              Global strategic<br className="hidden md:block" /> partners
            </h3>
          </div>
          
          <div className="md:col-span-8 flex flex-wrap items-center justify-center md:justify-around gap-7 sm:gap-10 md:gap-14">
            {/* SIX Logo */}
            <div className="flex items-center gap-2 text-white/95 hover:text-white transition-opacity select-none" title="SIX Group">
              <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter">SIX</span>
            </div>

            {/* UBS Logo */}
            <div className="flex items-center gap-2 text-white/95 hover:text-white transition-opacity select-none" title="UBS">
              {/* 3 keys icon */}
              <svg width="30" height="30" viewBox="0 0 40 40" fill="currentColor" className="text-white/85 sm:w-9 sm:h-9">
                <path d="M12 8a6 6 0 100 12 6 6 0 000-12zm-3 6a3 3 0 116 0 3 3 0 01-6 0zM12 20v14h3v-4h3v-3h-3v-4h3v-3H12zm16-12a6 6 0 100 12 6 6 0 000-12zm-3 6a3 3 0 116 0 3 3 0 01-6 0zM25 20v14h3v-4h3v-3h-3v-4h3v-3H25z"/>
              </svg>
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight">UBS</span>
            </div>

            {/* Ripple Logo */}
            <div className="flex items-center gap-2.5 text-white/95 hover:text-white transition-opacity select-none" title="Ripple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="sm:w-7 sm:h-7">
                <circle cx="5" cy="12" r="3" />
                <circle cx="19" cy="6" r="3" />
                <circle cx="19" cy="18" r="3" />
                <path d="M7.5 10.5L16.5 7.5M7.5 13.5L16.5 16.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl tracking-normal lowercase">ripple</span>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="border-t border-white/10 my-4 sm:my-6" />

        {/* Row 2: Investment & Collaboration Partners */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-6 sm:py-8">
          <div className="md:col-span-4 text-center md:text-left">
            <h3 className="text-xs sm:text-[14px] md:text-base font-bold text-white/90 tracking-wider uppercase">
              Investment &amp;<br className="hidden md:block" /> Collaboration<br className="hidden md:block" /> Partners
            </h3>
          </div>

          <div className="md:col-span-8 flex flex-wrap items-center justify-center md:justify-around gap-6 sm:gap-8 md:gap-12">
            {/* Generali Group */}
            <div className="flex items-center gap-2 text-white/85 hover:text-white transition-opacity select-none" title="Generali Group">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12h8M12 8v8" />
              </svg>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">GENERALI</span>
            </div>

            {/* Worldline */}
            <div className="flex items-center gap-1.5 text-white/85 hover:text-white transition-opacity select-none" title="Worldline">
              <span className="font-extrabold italic text-lg sm:text-xl tracking-tight">W</span>
              <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">WORLDLINE</span>
            </div>

            {/* Keyrock */}
            <div className="text-white/85 hover:text-white transition-opacity select-none" title="Keyrock">
              <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight">Keyrock</span>
            </div>

            {/* VISA */}
            <div className="text-white/85 hover:text-white transition-opacity select-none" title="VISA">
              <span className="font-black italic text-2xl sm:text-3xl md:text-4xl tracking-tight">VISA</span>
            </div>

            {/* Julius Bär / EXP Group */}
            <div className="flex items-center gap-1.5 text-white/85 hover:text-white transition-opacity select-none" title="Julius Bär / EXP Group">
              <span className="font-mono text-xs sm:text-sm md:text-base tracking-widest">[&times;] EXP GROUP</span>
            </div>
          </div>
        </div>

        {/* Centered CTA */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            onClick={onViewAllPartners}
            className="group inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/35 hover:border-white text-white text-sm sm:text-[15px] font-semibold tracking-tight bg-transparent hover:bg-white/10 active:bg-white/15 transition-all cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white w-full sm:w-auto"
          >
            <span>View all partners</span>
            <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full border border-white/60 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
