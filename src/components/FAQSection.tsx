import React, { useState } from 'react';
import { InlinePill } from './TenityLogo';
import { Plus, Minus, Search, Sparkles, Send, Loader2, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { answerTenityQuestion } from '../utils/tenityKnowledge';

interface FAQItem {
  id: string;
  category: 'programs' | 'investment' | 'corporate' | 'hubs';
  question: string;
  answer: string;
  tag?: string;
}

const PRESET_FAQS: FAQItem[] = [
  {
    id: 'investment-ticket',
    category: 'investment',
    question: 'What is the typical ticket size and investment structure?',
    answer:
      'Tenity typically deploys up to $250,000 in initial pre-seed and seed tickets. We maintain capital reserves for follow-on participation in subsequent rounds and facilitate co-investment syndication with over 400+ institutional funds, corporate venture arms, and family offices across Europe and Asia.',
    tag: 'Pre-Seed / Seed',
  },
  {
    id: 'eligibility-criteria',
    category: 'programs',
    question: 'What are the core eligibility criteria for accelerator cohorts?',
    answer:
      'We back visionary founders building at the intersection of fintech, AI, insurtech, wealthtech, regtech, and digital assets. We evaluate founding team technical caliber, proprietary IP or defensible algorithms, early user or customer engagement, and strategic relevance to our 65+ banking and corporate partners.',
    tag: 'Selection',
  },
  {
    id: 'equity-terms',
    category: 'investment',
    question: 'Do you take equity simply for joining the accelerator programs?',
    answer:
      'No. Tenity does not take arbitrary equity or charge participation fees for participating in our accelerator cohorts. Equity terms are negotiated transparently and strictly in connection with direct investment checks deployed by the Tenity Venture Fund.',
    tag: 'Terms',
  },
  {
    id: 'corporate-poc',
    category: 'corporate',
    question: 'How does the corporate Proof-of-Concept (PoC) framework work?',
    answer:
      'Unlike traditional demo days that end with high-fives, Tenity runs structured 12-week venture client sprints. Cohort founders are paired directly with budget-holding executives at institutions like UBS, SIX, Generali, and VISA to validate integrations on test data, achieving an industry-leading 80%+ conversion to commercial software contracts.',
    tag: 'Enterprise',
  },
  {
    id: 'global-locations',
    category: 'hubs',
    question: 'Which global hubs host accelerator batches and is physical presence required?',
    answer:
      'We operate permanent innovation centers in Zurich, London, Singapore, Hong Kong, Madrid, and Istanbul. Our programs follow a hybrid rhythm: virtual execution sprints paired with 2-3 high-impact in-person immersion weeks for executive networking, regulatory roundtables, and regional partner dealmaking.',
    tag: 'Global Hubs',
  },
  {
    id: 'visa-program',
    category: 'programs',
    question: 'What is the Visa Innovation Program Europe and how does it differ?',
    answer:
      'The Visa Innovation Program Europe is an equity-free collaborative platform co-run by Tenity and Visa. Spanning 5 countries across Southern and Eastern Europe, it provides fintech scaleups with direct mentor access to Visa product architects and rapid onboarding to commercial banking pilots.',
    tag: 'Partnership',
  },
  {
    id: 'demo-day-syndicate',
    category: 'investment',
    question: 'How do portfolio companies access follow-on capital after graduation?',
    answer:
      'Graduating founders present at our bi-annual flagship Demo Days in Zurich and Singapore. Additionally, our dedicated portfolio platform team orchestrates direct warm introductions to top-tier global venture firms, providing continued guidance through Series A milestones.',
    tag: 'Follow-On',
  },
  {
    id: 'batch-cadence',
    category: 'programs',
    question: 'What is the cohort calendar and application timeline?',
    answer:
      'We run two primary seasonal cohorts per year across our hubs (Spring and Autumn). Applications open roughly three months prior to kick-off. Each application undergoes rigorous two-stage review by our investment committee and corporate innovation board.',
    tag: 'Cadence',
  },
];

interface CustomAnswer {
  question: string;
  answer: string;
  timestamp: string;
  source: 'ai' | 'knowledge_base';
}

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('investment-ticket');
  
  // Custom question state
  const [userQuery, setUserQuery] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [askError, setAskError] = useState('');
  const [customAnswers, setCustomAnswers] = useState<CustomAnswer[]>([]);
  const [latestCustomAnswer, setLatestCustomAnswer] = useState<CustomAnswer | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'investment', label: 'Investment & Tickets' },
    { id: 'programs', label: 'Accelerator Programs' },
    { id: 'corporate', label: 'Corporate PoCs' },
    { id: 'hubs', label: 'Hubs & Locations' },
  ];

  const filteredFaqs = PRESET_FAQS.filter((faq) => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleAskQuestion = async (queryText?: string) => {
    const questionToAsk = (queryText || userQuery).trim();
    if (!questionToAsk) return;

    // Check if the query closely matches an existing preset FAQ
    const existing = PRESET_FAQS.find(
      (f) => f.question.toLowerCase().includes(questionToAsk.toLowerCase()) || questionToAsk.toLowerCase().includes(f.question.toLowerCase())
    );
    if (existing) {
      setExpandedId(existing.id);
      setUserQuery('');
      setAskError('');
      // Scroll to existing question
      const el = document.getElementById(`faq-${existing.id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsAsking(true);
    setAskError('');

    try {
      let resolvedAnswer = '';
      let resolvedSource: 'ai' | 'knowledge_base' = 'knowledge_base';

      // First check client-side serverless knowledge engine
      const clientResult = answerTenityQuestion(questionToAsk);
      resolvedAnswer = clientResult.answer;

      // Also try fetching from /api/faq/ask if available (timeout at 1500ms to guarantee zero lag on Vercel)
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1800);
        const res = await fetch('/api/faq/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: questionToAsk }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data.answer) {
            resolvedAnswer = data.answer;
            resolvedSource = data.source === 'ai' ? 'ai' : 'knowledge_base';
          }
        }
      } catch {
        // Fallback to clientResult with zero interruption
      }

      // Small natural delay for realistic interactive feedback
      await new Promise((resolve) => setTimeout(resolve, 300));

      const newAnswer: CustomAnswer = {
        question: questionToAsk,
        answer: resolvedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: resolvedSource,
      };

      setLatestCustomAnswer(newAnswer);
      setCustomAnswers((prev) => [newAnswer, ...prev.filter((a) => a.question !== questionToAsk)]);
      setUserQuery('');
    } catch (err) {
      console.error('FAQ ask error:', err);
      const fallbackResult = answerTenityQuestion(questionToAsk);
      const fallback: CustomAnswer = {
        question: questionToAsk,
        answer: fallbackResult.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'knowledge_base',
      };
      setLatestCustomAnswer(fallback);
      setCustomAnswers((prev) => [fallback, ...prev]);
    } finally {
      setIsAsking(false);
    }
  };

  const samplePrompts = [
    'Can solo founders apply?',
    'What if we are incorporated outside Switzerland?',
    'Do you support Web3 and real-world asset tokenization?',
    'How do corporate pilot contracts work?',
  ];

  return (
    <section id="faq-section" className="bg-[#050505] text-white py-24 md:py-32 border-b border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#f0386b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header with signature pill */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#f0386b] mb-4 bg-[#f0386b]/10 border border-[#f0386b]/20 px-3.5 sm:px-4 py-2 rounded-full">
              <Sparkles size={15} />
              <span>Infinity Knowledge Center</span>
            </div>
            <h2 className="text-[38px] min-[380px]:text-[48px] sm:text-[68px] md:text-[82px] lg:text-[90px] font-extrabold tracking-[-0.035em] leading-[0.96] text-white">
              <span className="block">Common questions.</span>
              <span className="flex items-center flex-wrap gap-x-2">
                <InlinePill theme="white" className="w-[68px] min-[380px]:w-[84px] sm:w-[124px] md:w-[140px] h-[30px] min-[380px]:h-[38px] sm:h-[54px] md:h-[60px] my-1 sm:my-1.5 shadow-md shrink-0" />
                <span>Infinite</span>
              </span>
              <span className="block">clarity.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2 sm:pb-3">
            <p className="text-white/80 text-[15px] sm:text-lg md:text-[20px] leading-relaxed font-normal">
              Explore essential facts regarding Tenity’s accelerator programs, ticket allocation, enterprise sandboxes, and investment standards.
            </p>
          </div>
        </div>

        {/* Dynamic Ask Bar: For questions not listed, user can type and get an answer */}
        <div className="mb-12 sm:mb-16 p-5 sm:p-8 md:p-12 bg-[#0d0d0d] border border-white/15 hover:border-white/30 rounded-[28px] sm:rounded-[36px] shadow-2xl transition-all">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-2.5">
              <HelpCircle size={17} className="text-[#f0386b] shrink-0" />
              <span>Ask about our programs &amp; investment criteria</span>
            </div>
            <p className="text-sm sm:text-base md:text-[17px] text-white/80 mb-6 leading-relaxed">
              Have a specific question not covered below? Type it here to receive instant guidance from Tenity Intelligence.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAskQuestion();
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5"
            >
              <div className="relative flex-1">
                <Search size={20} className="absolute left-4.5 sm:left-5 top-1/2 -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  value={userQuery}
                  disabled={isAsking}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="e.g. What is the deadline for the next fintech batch in Zurich?"
                  className="w-full bg-[#161616] border border-white/20 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-3.5 sm:py-4.5 text-[15px] sm:text-lg text-white placeholder:text-white/45 outline-none transition-all shadow-inner"
                />
              </div>

              <button
                type="submit"
                disabled={isAsking || !userQuery.trim()}
                className="w-full sm:w-auto bg-[#f0386b] hover:bg-[#d82458] active:bg-[#c01d4b] disabled:opacity-50 text-white font-bold text-base sm:text-lg px-7 sm:px-9 py-3.5 sm:py-4.5 rounded-full flex items-center justify-center gap-2.5 sm:gap-3 transition-all shadow-lg hover:scale-105 active:scale-95 shrink-0 cursor-pointer text-center"
              >
                {isAsking ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>Ask Answer</span>
                    <Send size={17} />
                  </>
                )}
              </button>
            </form>

            {/* Quick sample prompt chips */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-white/60 mr-1 font-medium">Try asking:</span>
              {samplePrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => {
                    setUserQuery(prompt);
                    handleAskQuestion(prompt);
                  }}
                  className="text-xs sm:text-sm font-semibold text-white/85 hover:text-white bg-white/5 hover:bg-white/15 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/12 transition-all cursor-pointer hover:border-white/35"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Latest Dynamic Answer Box */}
            {latestCustomAnswer && (
              <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-[#141414] border border-[#f0386b]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#f0386b] flex items-center gap-2 uppercase tracking-wider bg-[#f0386b]/10 px-3.5 py-1.5 rounded-full border border-[#f0386b]/20">
                      <Sparkles size={14} />
                      <span>Answered by Tenity Intelligence</span>
                    </span>
                    <span className="text-xs text-white/50 font-mono">
                      {latestCustomAnswer.timestamp}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-2xl font-extrabold text-white mb-3">
                    Q: {latestCustomAnswer.question}
                  </h4>
                  <p className="text-[15px] sm:text-[17px] md:text-[18px] text-white/90 leading-relaxed font-normal">
                    {latestCustomAnswer.answer}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-white/70">
                    <span>Need deeper discussions with our investment partners?</span>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        const btn = document.querySelector('button[class*="Contact"]') as HTMLElement;
                        btn?.click();
                      }}
                      className="text-[#f0386b] hover:underline font-bold flex items-center gap-2 cursor-pointer text-sm sm:text-base"
                    >
                      <span>Connect with Hub Team</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-4 mb-8 sm:mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-white/5 text-white/75 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 sm:space-y-6">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                id={`faq-${faq.id}`}
                key={faq.id}
                onClick={() => toggleAccordion(faq.id)}
                className={`bg-[#0b0b0b] hover:bg-[#131313] border rounded-2xl sm:rounded-[28px] p-5 sm:p-7 md:p-9 transition-all duration-300 cursor-pointer ${
                  isExpanded ? 'border-white/40 bg-[#121212] shadow-xl' : 'border-white/12'
                }`}
              >
                <div className="flex items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {faq.tag && (
                      <span className="text-xs font-bold uppercase tracking-wider text-[#f0386b] shrink-0 hidden sm:inline-block bg-[#f0386b]/10 px-3.5 py-1.5 rounded-full border border-[#f0386b]/20">
                        {faq.tag}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-[22px] md:text-2xl font-extrabold text-white tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#f0386b] transition-transform duration-300 ${
                      isExpanded ? 'rotate-90 bg-white/10 text-white' : 'hover:border-[#f0386b]'
                    }`}
                  >
                    {isExpanded ? <Minus size={16} /> : <Plus size={17} />}
                  </span>
                </div>

                {isExpanded && (
                  <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm sm:text-[17px] md:text-[18px] text-white/85 leading-relaxed max-w-4xl font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Previously asked dynamic queries list (if any) */}
        {customAnswers.length > 1 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4">
              Recently Asked Queries
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customAnswers.slice(1, 5).map((item, idx) => (
                <div key={idx} className="bg-[#0e0e0e] border border-white/10 rounded-xl p-4 text-xs">
                  <p className="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#f0386b]" />
                    <span>{item.question}</span>
                  </p>
                  <p className="text-white/65 line-clamp-3 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
