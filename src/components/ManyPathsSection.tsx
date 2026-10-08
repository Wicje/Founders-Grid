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
    <section className="bg-black text-white py-24 md:py-32 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Headline */}
        <div className="mb-20 max-w-[620px]">
          <h2 className="text-[44px] sm:text-[54px] md:text-[68px] font-extrabold tracking-[-0.03em] leading-[0.98] text-white">
            <span className="block">Many paths.</span>
            <span className="flex items-center flex-wrap">
              <InlinePill theme="white" className="w-[78px] sm:w-[94px] h-[34px] sm:h-[42px] my-1" />
              <span>One</span>
            </span>
            <span className="block">shared</span>
            <span className="block">momentum</span>
          </h2>
        </div>

        {/* 2x2 Grid of Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paths.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className={`bg-[#0d0d0d] hover:bg-[#131313] border border-white/10 hover:border-white/25 rounded-2xl p-8 md:p-10 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px] group ${
                  isExpanded ? 'border-white/30 bg-[#121212] ring-1 ring-white/10' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#f0386b] transition-colors">
                      {item.title}
                    </h3>
                    <span 
                      className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#f0386b] transition-transform duration-300 ${
                        isExpanded ? 'rotate-90 bg-white/10 text-white' : 'group-hover:border-[#f0386b]'
                      }`}
                      aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded ? <Minus size={14} /> : <Plus size={16} />}
                    </span>
                  </div>

                  {/* Expanded Content Drawer */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-sm text-white/75 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {item.offerings.map((offering, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs text-white/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f0386b]" />
                            <span>{offering}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectAudience?.(item.title);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#f0386b] transition-colors"
                      >
                        <span>{item.actionLabel}</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  )}
                </div>

                {!isExpanded && (
                  <div className="flex justify-end pt-8">
                    <span className="text-[#f0386b] opacity-80 group-hover:opacity-100 transition-opacity">
                      <Plus size={18} />
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
