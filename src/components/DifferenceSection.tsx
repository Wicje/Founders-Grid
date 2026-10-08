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
      title: 'Hybrid\nmodel',
      shortTitle: 'Hybrid model',
      summary: 'Bridging venture capital and corporate innovation seamlessly.',
      detail: 'We combine early-stage risk capital with direct corporate access. Founders get institutional funding and real clients from day one; corporates get proven technological solutions before the market catches on.',
    },
    {
      id: 2,
      title: 'Global reach.\nLocal\nrelevance.',
      shortTitle: 'Global reach. Local relevance.',
      summary: 'Active hubs in Europe, Asia, and the Middle East.',
      detail: 'Fintech regulation and adoption are inherently local. With hubs across Zurich, London, Singapore, Hong Kong, Madrid, and Istanbul, we navigate regional compliance while scaling globally.',
    },
    {
      id: 3,
      title: 'Fintech-first\nfocus',
      shortTitle: 'Fintech-first focus',
      summary: 'Deep domain mastery at the convergence of finance and AI.',
      detail: 'We don’t do generalist tech. From core banking modernisation and decentralized infrastructure to regtech, insurtech, and wealth management AI, our ecosystem lives and breathes financial services.',
    },
    {
      id: 4,
      title: 'Execution\ndiscipline',
      shortTitle: 'Execution discipline',
      summary: 'Structured pilot-to-contract frameworks with measurable velocity.',
      detail: 'No vanity hackathons. Over 100+ proven corporate innovation programs with structured validation frameworks that convert proof-of-concepts into multi-year commercial software license agreements.',
    },
  ];

  return (
    <section id="difference-section" className="bg-white text-black py-24 md:py-32 overflow-hidden border-b border-neutral-100">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Left Headline */}
        <div className="mb-16 md:mb-20 max-w-[560px]">
          <h2 className="text-[44px] sm:text-[54px] md:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.0] text-black">
            <span className="block">The difference</span>
            <span className="block">that makes</span>
            <span className="flex items-center flex-wrap">
              <InlinePill theme="black" className="w-[78px] sm:w-[92px] h-[34px] sm:h-[40px] my-1" />
              <span>the</span>
            </span>
            <span className="block">difference</span>
          </h2>
        </div>

        {/* 4 Architectural Geometric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
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
                  className={`relative w-full aspect-[4/5] min-h-[260px] border border-neutral-900/80 rounded-r-full p-6 flex flex-col justify-end transition-all duration-300 ${
                    isHovered 
                      ? 'border-black bg-neutral-50 shadow-md scale-[1.01]' 
                      : 'hover:border-black'
                  }`}
                >
                  {/* Subtle top indicator on hover */}
                  <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                  {/* Card Title */}
                  <div className="mt-auto">
                    <h3 className="text-xl md:text-[22px] font-bold text-black tracking-tight leading-[1.2] whitespace-pre-line group-hover:translate-x-1 transition-transform">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Subtitle / summary info visible on card */}
                <div className="mt-4 px-2">
                  <p className="text-xs text-neutral-500 line-clamp-2 group-hover:text-neutral-800 transition-colors">
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
