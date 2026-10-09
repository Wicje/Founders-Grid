import React, { useState } from 'react';
import { InlinePill } from './TenityLogo';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface DifferenceSectionProps {
  onLearnMore?: (topic: string) => void;
}

export const DifferenceSection: React.FC<DifferenceSectionProps> = ({ onLearnMore }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: 'Build',
      shortTitle: 'Build',
      summary: 'We celebrate people who make things.',
      detail: 'Whether software, hardware, or creative work, shipping beats waiting. We celebrate and center builders who roll up their sleeves and create.',
    },
    {
      id: 2,
      title: 'Progress over\nperfection',
      shortTitle: 'Progress over perfection',
      summary: 'Shipping beats waiting every single time.',
      detail: 'Don’t wait until everything is flawless. Share your early iterations, get real input, and build momentum with honest community testing.',
    },
    {
      id: 3,
      title: 'Access is\nfree',
      shortTitle: 'Access is free',
      summary: 'Founders are never charged to be featured.',
      detail: 'No paywalls, no paid placements, no sponsored fees. Visibility and product feedback are open to all builders equally.',
    },
    {
      id: 4,
      title: 'Honest\nfeedback',
      shortTitle: 'Honest feedback',
      summary: 'Given kindly, specifically, and with open doors.',
      detail: 'Tested by fellow makers who care about constructive critique. Open doors regardless of background, stage, or discipline.',
    },
  ];

  return (
    <section id="difference-section" className="bg-white text-black py-16 sm:py-24 md:py-32 overflow-hidden border-b border-neutral-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Left Headline */}
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-[700px]">
          <h2 className="text-[38px] min-[380px]:text-[46px] sm:text-[60px] md:text-[76px] lg:text-[90px] font-extrabold tracking-[-0.035em] leading-[0.96] text-black">
            <span className="block">The difference</span>
            <span className="block">that makes</span>
            <span className="flex items-center flex-wrap gap-x-2">
              <InlinePill theme="black" className="w-[68px] min-[380px]:w-[84px] sm:w-[116px] md:w-[140px] h-[30px] min-[380px]:h-[36px] sm:h-[50px] md:h-[60px] my-1 sm:my-1.5 shadow-md shrink-0" />
              <span>the</span>
            </span>
            <span className="block">difference</span>
          </h2>
        </div>

        {/* 4 Architectural Geometric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
          {pillars.map((pillar, idx) => {
            const isHovered = activeCard === idx;
            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => onLearnMore?.(pillar.shortTitle)}
                className="group relative flex flex-col cursor-pointer transition-all duration-300"
              >
                {/* Arch outline frame */}
                <div 
                  className={`relative w-full aspect-auto sm:aspect-[4/5] min-h-[220px] sm:min-h-[300px] md:min-h-[340px] border border-neutral-900/80 rounded-r-[48px] sm:rounded-r-full p-7 sm:p-8 md:p-9 flex flex-col justify-between transition-all duration-300 ${
                    isHovered 
                      ? 'border-black bg-neutral-50 shadow-xl scale-[1.02]' 
                      : 'hover:border-black hover:bg-neutral-50/50'
                  }`}
                >
                  {/* Subtle top indicator */}
                  <div className="flex justify-end opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black text-white flex items-center justify-center text-xs shadow-md">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  {/* Card Title */}
                  <div className="mt-6 sm:mt-auto">
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-black tracking-tight leading-[1.2] whitespace-pre-line group-hover:translate-x-1 transition-transform">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Subtitle / summary info visible on card */}
                <div className="mt-3.5 sm:mt-5 px-1 sm:px-2">
                  <p className="text-sm sm:text-[15px] md:text-base text-neutral-600 line-clamp-2 group-hover:text-neutral-900 transition-colors leading-relaxed font-normal">
                    {pillar.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
