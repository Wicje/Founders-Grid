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
      title: 'Swiss\nFintech\nWeek',
      headline: 'Swiss Fintech Week',
      description: 'A week-long fintech festival that brought 275 organisations together in Zurich',
      metrics: '275+ institutions, 1,400 attendees, 45 cross-border deals initiated.',
    },
    {
      id: 2,
      title: 'Visa\nInnovation\nProgram\nEurope',
      headline: 'Visa Innovation Program Europe',
      description: 'Empowering fintech scaleups with commercial pilot contracts, mentorship, and pan-European distribution channels.',
      metrics: '100+ PoCs executed, 82% commercial contract conversion, 5 countries.',
    },
    {
      id: 3,
      title: 'HackZone\nby Allianz',
      headline: 'HackZone by Allianz',
      description: 'From collaboration to commercial success: scaling insurtech innovation',
      metrics: '14 pilot deployments, 4 enterprise spin-outs, 60% accelerated time-to-market.',
    },
  ];

  return (
    <section id="ambition-results" className="bg-black text-white py-24 md:py-32 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Centered Headline */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-[36px] sm:text-[46px] md:text-[54px] font-extrabold tracking-[-0.03em] leading-[1.08] text-white">
            From ambition to<br />tangible results
          </h2>
        </div>

        {/* 3 Arched Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative group border border-white/40 hover:border-white rounded-r-full p-8 md:p-10 flex flex-col justify-between min-h-[380px] bg-[#070707] hover:bg-[#111111] transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl md:text-[28px] font-extrabold text-white tracking-tight leading-[1.15] whitespace-pre-line mb-6">
                  {study.title}
                </h3>
                <p className="text-xs md:text-[13px] text-white/60 leading-relaxed max-w-[260px]">
                  {study.description}
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onReadMore({ title: study.headline, desc: study.description, metrics: study.metrics })}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/40 group-hover:border-white text-white text-xs font-medium tracking-tight bg-transparent group-hover:bg-white group-hover:text-black transition-all cursor-pointer"
                >
                  <span>Read more</span>
                  <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">
                    <ArrowRight size={10} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Discover more CTA */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={onDiscoverMore}
            className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/30 hover:border-white text-white text-[13px] font-medium tracking-tight bg-transparent hover:bg-white/10 active:bg-white/15 transition-all cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Discover more</span>
            <span className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
