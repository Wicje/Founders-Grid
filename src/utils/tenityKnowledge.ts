/**
 * Tenity Knowledge Engine (Client-side Serverless)
 * Provides instant, intelligent answers to any user query regarding Tenity's
 * accelerators, investment criteria, cohort stages, corporate pilots, and global hubs.
 */

interface KnowledgeResult {
  answer: string;
  category: string;
}

export function answerTenityQuestion(query: string): KnowledgeResult {
  const q = query.toLowerCase().trim();

  // 1. Ticket sizes & investment funding
  if (
    q.includes('ticket') ||
    q.includes('how much') ||
    q.includes('check size') ||
    q.includes('investment amount') ||
    q.includes('funding amount') ||
    q.includes('capital') ||
    q.includes('valuation')
  ) {
    return {
      category: 'Investment & Funding',
      answer:
        'Tenity typically deploys up to $250,000 in initial pre-seed and seed checks. We maintain reserved capital for follow-on participation in subsequent rounds and facilitate co-investment syndication with over 400+ institutional venture partners and family offices worldwide.',
    };
  }

  // 2. Selection criteria & eligibility
  if (
    q.includes('criteria') ||
    q.includes('eligible') ||
    q.includes('requirements') ||
    q.includes('qualification') ||
    q.includes('who can apply') ||
    q.includes('what do you look for') ||
    q.includes('stage')
  ) {
    return {
      category: 'Selection & Criteria',
      answer:
        'Tenity selects high-conviction early-stage founders building at the convergence of fintech, AI in finance, insurtech, wealthtech, regtech, and digital assets. We evaluate founding team technical execution, defensible intellectual property or data moats, early traction or validated prototypes, and strategic synergy with our 65+ banking and insurance partners.',
    };
  }

  // 3. Equity & fees
  if (
    q.includes('equity') ||
    q.includes('fee') ||
    q.includes('cost') ||
    q.includes('charge') ||
    q.includes('free') ||
    q.includes('percentage') ||
    q.includes('warrant')
  ) {
    return {
      category: 'Terms & Equity',
      answer:
        'Participation in Tenity accelerator programs does not require giving up equity or paying tuition fees. We do not take mandatory equity for attendance; equity terms are negotiated transparently and solely in connection with direct venture capital investment from our funds.',
    };
  }

  // 4. Solo founders & team structure
  if (
    q.includes('solo') ||
    q.includes('single founder') ||
    q.includes('one founder') ||
    q.includes('team size') ||
    q.includes('co-founder')
  ) {
    return {
      category: 'Founding Team',
      answer:
        'While co-founding teams with complementary technical and commercial skill sets are strongly preferred, exceptional solo founders with profound domain depth, demonstrable engineering velocity, and advisors are welcome to apply and frequently accepted into our cohorts.',
    };
  }

  // 5. Locations, hubs & remote participation
  if (
    q.includes('remote') ||
    q.includes('online') ||
    q.includes('location') ||
    q.includes('where') ||
    q.includes('zurich') ||
    q.includes('singapore') ||
    q.includes('london') ||
    q.includes('madrid') ||
    q.includes('istanbul') ||
    q.includes('travel') ||
    q.includes('in person')
  ) {
    return {
      category: 'Locations & Format',
      answer:
        'Tenity operates innovation hubs across Zurich, London, Singapore, Hong Kong, Madrid, and Istanbul. Our programs operate on a hybrid model: focused virtual sprint cycles combined with 2-3 high-impact in-person immersion weeks for executive networking, regulatory masterclasses, and corporate demo days.',
    };
  }

  // 6. Incorporation & international applicants
  if (
    q.includes('incorporated') ||
    q.includes('incorporation') ||
    q.includes('delaware') ||
    q.includes('switzerland') ||
    q.includes('country') ||
    q.includes('international') ||
    q.includes('foreign') ||
    q.includes('uk') ||
    q.includes('us') ||
    q.includes('eu')
  ) {
    return {
      category: 'Legal & International',
      answer:
        'You do not need to be incorporated in Switzerland to apply. We accept startups incorporated globally (including Delaware C-Corps, UK Ltd, Singapore Pte Ltd, and EU entities), provided your go-to-market strategy or partner expansion aligns with our European or Asian financial corridors.',
    };
  }

  // 7. Corporate PoCs & partners
  if (
    q.includes('poc') ||
    q.includes('corporate') ||
    q.includes('bank') ||
    q.includes('partner') ||
    q.includes('ubs') ||
    q.includes('six') ||
    q.includes('generali') ||
    q.includes('pilot') ||
    q.includes('enterprise')
  ) {
    return {
      category: 'Corporate PoCs',
      answer:
        'Tenity partners with over 65 financial leaders (including SIX Group, UBS, Ripple, Generali, Worldline, Keyrock, and VISA) to co-design real enterprise pilots. Over 80% of cohort Proof-of-Concepts result in multi-year commercial software contracts or strategic corporate investments.',
    };
  }

  // 8. Visa Innovation Program Europe
  if (
    q.includes('visa') ||
    q.includes('vip') ||
    q.includes('innovation program europe')
  ) {
    return {
      category: 'Visa Innovation Program',
      answer:
        'The Visa Innovation Program Europe is an equity-free collaborative initiative co-run by Tenity and Visa across Southern and Eastern Europe. Over 100+ PoCs have been facilitated, granting scaleups direct access to Visa product suites, client banks, and payment network distribution.',
    };
  }

  // 9. Web3, crypto & digital assets
  if (
    q.includes('web3') ||
    q.includes('crypto') ||
    q.includes('token') ||
    q.includes('blockchain') ||
    q.includes('defi') ||
    q.includes('digital asset') ||
    q.includes('rwa')
  ) {
    return {
      category: 'Digital Assets & Web3',
      answer:
        'Yes, Tenity actively backs digital asset infrastructure, tokenized real-world assets (RWAs), institutional DeFi, compliance/analytics tools, and custody solutions, backed by strategic ecosystem partners like Ripple and SIX Digital Exchange.',
    };
  }

  // 10. AI & machine learning
  if (
    q.includes('ai') ||
    q.includes('artificial intelligence') ||
    q.includes('llm') ||
    q.includes('agent') ||
    q.includes('machine learning')
  ) {
    return {
      category: 'AI in Finance',
      answer:
        'Applied AI in financial services is one of Tenity’s highest priority focus areas. We back teams building algorithmic risk assessment, automated compliance agents, generative wealth advisory, fraud detection, and conversational banking intelligence.',
    };
  }

  // 11. Program duration & deadlines
  if (
    q.includes('duration') ||
    q.includes('how long') ||
    q.includes('weeks') ||
    q.includes('deadline') ||
    q.includes('dates') ||
    q.includes('when') ||
    q.includes('calendar')
  ) {
    return {
      category: 'Program Timeline',
      answer:
        'Programs run for 12 intensive weeks with cohorts kicking off semi-annually in Spring and Autumn across our regional hubs. Applications typically open 3 months prior to cohort start. We review applications on a rolling basis, so applying early increases review priority.',
    };
  }

  // 12. Mentors & ecosystem support
  if (
    q.includes('mentor') ||
    q.includes('advisor') ||
    q.includes('network') ||
    q.includes('support') ||
    q.includes('perks')
  ) {
    return {
      category: 'Ecosystem & Mentors',
      answer:
        'Cohort founders gain dedicated access to over 200+ seasoned fintech entrepreneurs, former C-level bank executives, regulatory authorities, and tech leaders, accompanied by over $250k in partner cloud, compliance, and legal credits.',
    };
  }

  // Default intelligent comprehensive answer
  return {
    category: 'Tenity Platform',
    answer:
      `Regarding "${query}": Tenity accelerates and invests in early-stage fintech, AI, and digital asset ventures across Europe and Asia. We provide up to $250,000 in pre-seed funding, 12-week structured programs, zero mandatory equity for attendance, and direct PoC commercial contracts with 65+ tier-1 financial institutions. You can apply directly through our seasonal cohort portal or connect with our hub directors in Zurich, London, Singapore, Madrid, or Istanbul.`,
  };
}
