import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AmbitionResultsSectionProps {
  onReadMore: (study: { title: string; desc: string; metrics: string }) => void;
  onDiscoverMore: () => void;
}

export const AmbitionResultsSection: React.FC<AmbitionResultsSectionProps> = ({
  onReadMore,
  onDiscoverMore,
}) => {
  const caseStudies = [
    {
      id: 1,
      title: 'Software\nProduct\n[Placeholder]',
      headline: 'Software Product [Placeholder Card]',
      description: 'Placeholder card for upcoming community software submissions (developer tools, web apps, mobile products). Every product gets its own page and tester feedback.',
      metrics: 'Status: [Submission Form Link: Add your link here] • Weekly Newsletter Feature',
    },
    {
      id: 2,
      title: 'Hardware\nBuild\n[Placeholder]',
      headline: 'Hardware Build [Placeholder Card]',
      description: 'Placeholder card for physical devices, electronics, robotics, and hardware prototypes. Built to give tangible hardware makers real visibility and community notes.',
      metrics: 'Status: [Submission Form Link: Add your link here] • Peer Tested',
    },
    {
      id: 3,
      title: 'Creative\nWork\n[Placeholder]',
      headline: 'Creative Work [Placeholder Card]',
      description: 'Placeholder card for creative tools, design systems, generative media, and interactive experiences crafted by independent makers.',
      metrics: 'Status: [Submission Form Link: Add your link here] • Monthly Traction Candidate',
    },
  ];

  return (
    <section id="featured-products" className="bg-black text-white py-16 sm:py-24 md:py-32 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Centered Headline */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-white/80 mb-4 border border-white/15">
            Featured Products • [Placeholder Cards to Fill Later]
          </span>
          <h2 className="text-[32px] min-[380px]:text-[40px] sm:text-[52px] md:text-[62px] lg:text-[68px] font-extrabold tracking-[-0.035em] leading-[1.04] text-white">
            From ambition to<br />tangible results
          </h2>
        </div>

        {/* 3 Arched Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative group border border-white/40 hover:border-white rounded-r-[36px] sm:rounded-r-[48px] md:rounded-r-full p-6 sm:p-9 md:p-11 flex flex-col justify-between min-h-[300px] sm:min-h-[380px] md:min-h-[440px] bg-[#070707] hover:bg-[#121212] hover:scale-[1.02] transition-all duration-300 shadow-2xl"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-white tracking-tight leading-[1.12] whitespace-pre-line mb-4 sm:mb-6">
                  {study.title}
                </h3>
                <p className="text-sm sm:text-[15px] md:text-base text-white/75 leading-relaxed max-w-[300px]">
                  {study.description}
                </p>
              </div>

              <div className="pt-6 sm:pt-8">
                <button
                  onClick={() => onReadMore({ title: study.headline, desc: study.description, metrics: study.metrics })}
                  className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/50 group-hover:border-white text-white text-[13px] sm:text-[14px] font-bold tracking-tight bg-transparent group-hover:bg-white group-hover:text-black transition-all cursor-pointer shadow-md"
                >
                  <span>View card</span>
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[11px]">
                    <ArrowRight size={12} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Discover more CTA */}
        <div className="mt-12 sm:mt-18 flex justify-center">
          <button
            onClick={onDiscoverMore}
            className="group inline-flex items-center justify-center gap-3.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full border border-white/40 hover:border-white text-white text-[14px] sm:text-[15px] md:text-base font-bold tracking-tight bg-white/5 hover:bg-white/15 active:bg-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white w-full sm:w-auto"
          >
            <span>Submit a product to be featured</span>
            <span className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full border border-white/70 flex items-center justify-center group-hover:border-white transition-colors bg-white/5">
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
