import React from 'react';
import { InlinePill } from './TenityLogo';

interface ProofInNumbersSectionProps {
  onStatClick?: (label: string, number: string) => void;
}

export const ProofInNumbersSection: React.FC<ProofInNumbersSectionProps> = ({ onStatClick }) => {
  const stats = [
    {
      id: 1,
      label: 'Startups accelerated.',
      value: '250+',
      image: '/src/assets/images/stat_founders_doorway_1791458233602.jpg',
      alt: 'Founders accelerated at Tenity hubs',
      description: 'More than 250 early-stage ventures guided from prototype to market leadership across Europe and APAC.',
    },
    {
      id: 2,
      label: 'Assets under management.',
      value: '$140M+',
      image: '/src/assets/images/stat_speaker_stage_1791458245034.jpg',
      alt: 'Assets under management keynote presentation',
      description: 'Institutional venture capital deployed with co-investors into high-conviction pre-seed & seed rounds.',
    },
    {
      id: 3,
      label: 'Innovation programs delivered.',
      value: '100+',
      image: '/src/assets/images/stat_woman_keynote_1791458255773.jpg',
      alt: 'Innovation programs keynote delivery',
      description: 'Accelerators, incubators, and enterprise sandboxes tailored for tier-1 banks, reinsurers, and fintech giants.',
    },
    {
      id: 4,
      label: 'Corporate clients worldwide.',
      value: '65+',
      image: '/src/assets/images/stat_office_window_1791458265500.jpg',
      alt: 'Global corporate partners at Tenity',
      description: 'Direct relationships with global financial institutions actively testing, licensing, and acquiring innovations.',
    },
  ];

  return (
    <section id="proof-numbers" className="bg-white text-black py-24 md:py-32 border-b border-neutral-100">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Headline */}
        <div className="mb-20 max-w-[560px]">
          <h2 className="text-[44px] sm:text-[54px] md:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.0] text-black">
            <span className="block">Proof</span>
            <span className="flex items-center flex-wrap">
              <InlinePill theme="black" className="w-[78px] sm:w-[92px] h-[34px] sm:h-[40px] my-1" />
              <span>in</span>
            </span>
            <span className="block">numbers</span>
          </h2>
        </div>

        {/* 4 Stat Rows */}
        <div className="space-y-12 md:space-y-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              onClick={() => onStatClick?.(stat.label, stat.value)}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-4 border-b border-neutral-100 last:border-b-0 group cursor-pointer"
            >
              {/* Left Label */}
              <div className="md:col-span-4">
                <span className="text-base md:text-lg font-bold text-black tracking-tight group-hover:text-[#f0386b] transition-colors">
                  {stat.label}
                </span>
                <p className="text-xs text-neutral-400 mt-1 hidden md:block">
                  {stat.description}
                </p>
              </div>

              {/* Middle Giant Stat */}
              <div className="md:col-span-5 flex items-center">
                <span className="text-[64px] sm:text-[80px] lg:text-[104px] font-extrabold text-[#f0386b] tracking-tight leading-none tabular-nums group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </span>
              </div>

              {/* Right Media Preview */}
              <div className="md:col-span-3 flex justify-start md:justify-end">
                <div className="relative w-44 h-28 sm:w-52 sm:h-32 rounded-2xl overflow-hidden shadow-md border border-neutral-200/80 group-hover:shadow-lg transition-all">
                  <img
                    src={stat.image}
                    alt={stat.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
