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
        
        {/* Row 1: Community channels & spaces */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-6 sm:py-8">
          <div className="md:col-span-4 text-center md:text-left">
            <h3 className="text-xs sm:text-[14px] md:text-base font-bold text-white/90 tracking-wider uppercase">
              Community channels<br className="hidden md:block" /> &amp; spaces
            </h3>
          </div>
          
          <div className="md:col-span-8 flex flex-wrap items-center justify-center md:justify-around gap-7 sm:gap-10 md:gap-14">
            {/* WhatsApp Community */}
            <div className="flex items-center gap-2.5 text-white/95 hover:text-white transition-opacity select-none" title="WhatsApp Community">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
              <span className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight">WhatsApp</span>
              <span className="text-[11px] font-mono uppercase bg-white/10 px-2 py-0.5 rounded-full text-white/70">Announcements + Cohorts</span>
            </div>

            {/* Discord */}
            <div className="flex items-center gap-2.5 text-white/95 hover:text-white transition-opacity select-none" title="Discord Community">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5865F2]" />
              <span className="font-bold text-xl sm:text-2xl md:text-3xl tracking-tight">Discord</span>
              <span className="text-[11px] font-mono uppercase bg-white/10 px-2 py-0.5 rounded-full text-white/70">Builders &amp; Testers</span>
            </div>

            {/* Weekly Newsletter */}
            <div className="flex items-center gap-2 text-white/95 hover:text-white transition-opacity select-none" title="Weekly Newsletter">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f0386b]" />
              <span className="font-bold text-lg sm:text-xl md:text-2xl tracking-normal">Weekly Issue</span>
              <span className="text-[11px] font-mono uppercase bg-white/10 px-2 py-0.5 rounded-full text-white/70">5–10 Products</span>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="border-t border-white/10 my-4 sm:my-6" />

        {/* Row 2: Distribution & Social Channels */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-6 sm:py-8">
          <div className="md:col-span-4 text-center md:text-left">
            <h3 className="text-xs sm:text-[14px] md:text-base font-bold text-white/90 tracking-wider uppercase">
              Social spotlight<br className="hidden md:block" /> &amp; channels
            </h3>
          </div>

          <div className="md:col-span-8 flex flex-wrap items-center justify-center md:justify-around gap-6 sm:gap-8 md:gap-12">
            {/* Instagram */}
            <div className="flex items-center gap-2 text-white/85 hover:text-white transition-opacity select-none" title="Instagram">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Instagram</span>
              <span className="text-[11px] font-mono text-white/50">[@foundersgrid]</span>
            </div>

            {/* X */}
            <div className="flex items-center gap-1.5 text-white/85 hover:text-white transition-opacity select-none" title="X">
              <span className="font-extrabold text-base sm:text-lg tracking-tight">X (Twitter)</span>
              <span className="text-[11px] font-mono text-white/50">[@ArchJosephan]</span>
            </div>

            {/* Clearly marked partner placeholder per requirements */}
            <div className="text-white/60 hover:text-white/80 transition-opacity select-none border border-dashed border-white/20 rounded-full px-3 py-1" title="Community Collaborations">
              <span className="font-mono text-xs tracking-tight">[Partner Placeholder — Open for Collaborations]</span>
            </div>
          </div>
        </div>

        {/* Centered CTA */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            onClick={onViewAllPartners}
            className="group inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/35 hover:border-white text-white text-sm sm:text-[15px] font-semibold tracking-tight bg-transparent hover:bg-white/10 active:bg-white/15 transition-all cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white w-full sm:w-auto"
          >
            <span>Explore Community Channels</span>
            <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full border border-white/60 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
