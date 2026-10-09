import React, { useState } from 'react';
import { InlinePill } from './TenityLogo';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface ManyPathsSectionProps {
  onSelectAudience?: (audience: string) => void;
}

export const ManyPathsSection: React.FC<ManyPathsSectionProps> = ({ onSelectAudience }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const paths = [
    {
      id: 'startups',
      title: 'Startups',
      description:
        'From pre-seed funding to commercial pilots with leading banks and insurers. We plug you into a global network of mentors, co-investors, and corporate decision-makers.',
      offerings: ['Up to $250k initial ticket', 'Direct access to 65+ financial institutions', 'Zero fee cohort infrastructure', 'Hub access across Europe & Asia'],
      actionLabel: 'Explore Startup Programs',
    },
    {
      id: 'investors',
      title: 'Investors',
      description:
        'Gain direct allocation into high-conviction fintech, insurtech, AI, and digital asset startups vetted through our rigorous multi-hub pipeline and corporate stress-tests.',
      offerings: ['Vetted dealflow from 2,000+ applicants/year', 'Syndication and co-investment rights', 'Quarterly portfolio performance reports', 'Exclusive Demo Days in Zurich & Singapore'],
      actionLabel: 'Join Investor Network',
    },
    {
      id: 'corporates',
      title: 'Corporates',
      description:
        'Solve real business challenges through co-designed accelerators, proof-of-concept sandboxes, and bespoke startup scouting tailored to your strategic digital agenda.',
      offerings: ['Bespoke Proof-of-Concept delivery', 'Venture client model implementation', 'Executive foresight & market scanning', 'Pan-European & Asian fintech scouting'],
      actionLabel: 'Partner as Corporate',
    },
    {
      id: 'governments',
      title: 'Governments',
      description:
        'Accelerate national fintech ecosystems, craft progressive regulatory sandboxes, and foster foreign direct investment via cross-border innovation bridges.',
      offerings: ['National fintech hub orchestration', 'Regulatory sandbox advisory', 'Ecosystem impact measurement', 'Cross-border trade corridor programs'],
      actionLabel: 'Collaborate with Tenity',
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="bg-black text-white py-16 sm:py-24 md:py-32 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Headline */}
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-[700px]">
          <h2 className="text-[38px] min-[380px]:text-[46px] sm:text-[60px] md:text-[76px] lg:text-[90px] font-extrabold tracking-[-0.035em] leading-[0.96] text-white">
            <span className="block">Many paths.</span>
            <span className="flex items-center flex-wrap gap-x-2">
              <InlinePill theme="white" className="w-[68px] min-[380px]:w-[84px] sm:w-[116px] md:w-[140px] h-[30px] min-[380px]:h-[36px] sm:h-[50px] md:h-[60px] my-1 sm:my-1.5 shadow-md shrink-0" />
              <span>One</span>
            </span>
            <span className="block">shared</span>
            <span className="block">momentum</span>
          </h2>
        </div>

        {/* 2x2 Grid of Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 md:gap-8">
          {paths.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className={`bg-[#0d0d0d] hover:bg-[#151515] border border-white/12 hover:border-white/30 rounded-[22px] sm:rounded-3xl p-5 sm:p-8 md:p-11 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[160px] sm:min-h-[210px] group ${
                  isExpanded ? 'border-white/40 bg-[#141414] ring-1 ring-white/20 shadow-2xl scale-[1.01]' : 'hover:scale-[1.01]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white tracking-tight group-hover:text-[#f0386b] transition-colors">
                      {item.title}
                    </h3>
                    <span 
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-[#f0386b] transition-all duration-300 ${
                        isExpanded ? 'rotate-90 bg-white/10 text-white' : 'group-hover:border-[#f0386b] group-hover:scale-110'
                      }`}
                      aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded ? <Minus size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Plus size={18} className="sm:w-5 sm:h-5" />}
                    </span>
                  </div>

                  {/* Expanded Content Drawer */}
                  {isExpanded && (
                    <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-sm sm:text-base md:text-[17px] text-white/90 leading-relaxed mb-5 sm:mb-6 font-normal">
                        {item.description}
                      </p>

                      <ul className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
                        {item.offerings.map((offering, idx) => (
                          <li key={idx} className="flex items-center gap-3 sm:gap-3.5 text-sm sm:text-[15px] md:text-base text-white/75">
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#f0386b] shrink-0" />
                            <span>{offering}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectAudience?.(item.title);
                        }}
                        className="inline-flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base font-bold text-white hover:text-[#f0386b] transition-colors py-1 cursor-pointer"
                      >
                        <span>{item.actionLabel}</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  )}
                </div>

                {!isExpanded && (
                  <div className="flex justify-end pt-6 sm:pt-8">
                    <span className="text-[#f0386b] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <Plus size={22} />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
