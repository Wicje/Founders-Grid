import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PartnersSectionProps {
  onViewAllPartners: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onViewAllPartners,
}) => {
  return (
    <section className="bg-black text-white pt-12 pb-24 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Row 1: Global strategic partners */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-6">
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-white tracking-tight uppercase">
              Global strategic<br className="hidden md:block" /> partners
            </h3>
          </div>
          
          <div className="md:col-span-8 flex flex-wrap items-center justify-start md:justify-around gap-8 md:gap-12">
            {/* SIX Logo */}
            <div className="flex items-center gap-1.5 text-white/90 hover:text-white transition-opacity select-none" title="SIX Group">
              <span className="font-extrabold text-3xl md:text-4xl tracking-tighter">SIX</span>
            </div>

            {/* UBS Logo */}
            <div className="flex items-center gap-2 text-white/90 hover:text-white transition-opacity select-none" title="UBS">
              {/* 3 keys icon */}
              <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor" className="text-white/80">
                <path d="M12 8a6 6 0 100 12 6 6 0 000-12zm-3 6a3 3 0 116 0 3 3 0 01-6 0zM12 20v14h3v-4h3v-3h-3v-4h3v-3H12zm16-12a6 6 0 100 12 6 6 0 000-12zm-3 6a3 3 0 116 0 3 3 0 01-6 0zM25 20v14h3v-4h3v-3h-3v-4h3v-3H25z"/>
              </svg>
              <span className="font-bold text-2xl md:text-3xl tracking-tight">UBS</span>
            </div>

            {/* Ripple Logo */}
            <div className="flex items-center gap-2.5 text-white/90 hover:text-white transition-opacity select-none" title="Ripple">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="12" r="3" />
                <circle cx="19" cy="6" r="3" />
                <circle cx="19" cy="18" r="3" />
                <path d="M7.5 10.5L16.5 7.5M7.5 13.5L16.5 16.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-bold text-xl md:text-2xl tracking-normal lowercase">ripple</span>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Row 2: Investment & Collaboration Partners */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-6">
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-white tracking-tight uppercase">
              Investment &amp;<br className="hidden md:block" /> Collaboration<br className="hidden md:block" /> Partners
            </h3>
          </div>

          <div className="md:col-span-8 flex flex-wrap items-center justify-start md:justify-around gap-8 md:gap-10">
            {/* Generali Group */}
            <div className="flex items-center gap-2 text-white/80 hover:text-white transition-opacity select-none" title="Generali Group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12h8M12 8v8" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider">GENERALI</span>
            </div>

            {/* Worldline */}
            <div className="flex items-center gap-1.5 text-white/80 hover:text-white transition-opacity select-none" title="Worldline">
              <span className="font-extrabold italic text-lg tracking-tight">W</span>
              <span className="text-xs font-bold uppercase tracking-wider">WORLDLINE</span>
            </div>

            {/* Keyrock */}
            <div className="text-white/80 hover:text-white transition-opacity select-none" title="Keyrock">
              <span className="font-bold text-base md:text-lg tracking-tight">Keyrock</span>
            </div>

            {/* VISA */}
            <div className="text-white/80 hover:text-white transition-opacity select-none" title="VISA">
              <span className="font-black italic text-2xl md:text-3xl tracking-tight">VISA</span>
            </div>

            {/* Julius Bär / EXP Group */}
            <div className="flex items-center gap-2 text-white/80 hover:text-white transition-opacity select-none" title="Julius Bär / EXP Group">
              <span className="font-mono text-sm tracking-widest">[&times;] EXP GROUP</span>
            </div>
          </div>
        </div>

        {/* Centered CTA */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={onViewAllPartners}
            className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/30 hover:border-white text-white text-[13px] font-medium tracking-tight bg-transparent hover:bg-white/10 active:bg-white/15 transition-all cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>View all partners</span>
            <span className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
