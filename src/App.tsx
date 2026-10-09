/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HybridModelStage } from './components/HybridModelStage';
import { PartnersSection } from './components/PartnersSection';
import { DifferenceSection } from './components/DifferenceSection';
import { ProofInNumbersSection } from './components/ProofInNumbersSection';
import { AmbitionResultsSection } from './components/AmbitionResultsSection';
import { ManyPathsSection } from './components/ManyPathsSection';
import { ImpossibleToPossibleSection } from './components/ImpossibleToPossibleSection';
import { GlobalHubsVisualization } from './components/GlobalHubsVisualization';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { DetailModal, ModalData } from './components/DetailModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  // Handlers for interactive details
  const handleExploreVenture = () => {
    setModalData({
      badge: 'Venture Capital',
      title: 'Tenity Seed & Pre-Seed Fund',
      subtitle: 'Backing world-class fintech founders at the earliest inflection points.',
      content:
        'Tenity invests early in visionary teams reinventing banking, wealth tech, crypto infrastructure, regulatory intelligence, and embedded insurance. Our portfolio companies gain unfair distribution advantage through our global financial network.',
      bullets: [
        'Initial tickets up to $250k with follow-on reserves',
        'Co-investment syndication with tier-1 venture firms',
        'Access to 65+ banking, insurance, and wealth partners',
        'Dedicated portfolio support in Zurich, London, Singapore & Madrid',
      ],
      actionText: 'Apply for Investment',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleExploreInnovation = () => {
    setModalData({
      badge: 'Innovation Services',
      title: 'Enterprise Innovation & Venture Clienting',
      subtitle: 'Converting corporate strategic challenges into validated commercial deployments.',
      content:
        'We design and run bespoke accelerators, Proof-of-Concept sandboxes, and venture client frameworks for financial institutions including UBS, SIX, Generali, and Julius Bär. Our structured vetting replaces vanity innovation with commercial velocity.',
      bullets: [
        'Structured 12-week PoC acceleration cycles',
        'Proprietary scouting matching your specific digital stack',
        'Comprehensive security & regulatory pre-screening',
        'Over 80% commercial contract conversion rate',
      ],
      actionText: 'Partner With Tenity',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleApproachClick = () => {
    setModalData({
      badge: 'Methodology',
      title: 'The Tenity Hybrid Model',
      subtitle: 'Why bringing capital and corporate adoption together wins.',
      content:
        'Traditional accelerators lack balance sheet capital; traditional VCs lack corporate enterprise distribution. Tenity unifies both under one roof: providing founders with capital and real clients simultaneously, while offering corporate partners vetted, production-ready solutions.',
      bullets: [
        'Phase 1: Spotting early signals and technical breakthroughs',
        'Phase 2: Co-designing pilots with actual business units',
        'Phase 3: Scaling via capital injection and international rollout',
      ],
      actionText: 'Get in Touch',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handlePillarClick = (pillarIndex: number) => {
    const pillars = [
      {
        title: '01. Spotting what’s next',
        subtitle: 'Trend scouting, startup sourcing & evaluation, market insight',
        content:
          'Our global analyst team monitors thousands of fintech and AI ventures quarterly across Switzerland, the UK, Europe, and Asia. We spot market structural shifts before they become consensus.',
        bullets: [
          'Global pipeline of 2,000+ evaluated fintechs/year',
          'Proprietary telemetry on regulatory shifts and AI adoption',
          'Quarterly deep-dive thematic foresight reports',
        ],
      },
      {
        title: '02. Creating what’s next',
        subtitle: 'Co-designed programs, pilots, startup matching',
        content:
          'We bridge the gap between enterprise legacy infrastructure and agile startup solutions through structured sandboxes that de-risk integration and fast-track proof of concept.',
        bullets: [
          'Sprint-based architecture alignment',
          'Real-data compliant sandboxing',
          'Direct executive sponsor alignment',
        ],
      },
      {
        title: '03. Scaling what’s next',
        subtitle: 'Early-stage investment, co-investment, global network',
        content:
          'When pilots succeed, we double down with institutional capital, syndicate follow-on rounds with global venture partners, and launch the venture into our cross-border international hubs.',
        bullets: [
          'Pre-seed and seed ticket lead capability',
          'Global syndication network of 400+ family offices & funds',
          'Cross-border expansion support across 6 global hubs',
        ],
      },
    ];

    const selected = pillars[pillarIndex - 1];
    if (selected) {
      setModalData({
        badge: 'Core Capability',
        title: selected.title,
        subtitle: selected.subtitle,
        content: selected.content,
        bullets: selected.bullets,
        actionText: 'Learn More',
        onAction: () => setIsContactOpen(true),
      });
    }
  };

  const handleViewAllPartners = () => {
    setModalData({
      badge: 'Global Network',
      title: 'Tenity Partner Ecosystem',
      subtitle: 'Trusted by the world’s leading financial institutions and tech protocols.',
      content:
        'Our partner network encompasses top-tier European banks, global payment networks, digital asset custodians, insurance conglomerates, and national monetary authorities collaborating to define the next era of finance.',
      bullets: [
        'Strategic: SIX Group, UBS, Ripple, Julius Bär',
        'Corporate: Generali Group, Worldline, Keyrock, VISA',
        'Regional: Swisscom, PostFinance, Raiffeisen, Baloise',
        'Hub Network: Over 65+ tier-1 institutions active globally',
      ],
      actionText: 'Become a Partner',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleStatClick = (label: string, value: string) => {
    setModalData({
      badge: 'Proof In Numbers',
      title: `${value} — ${label}`,
      content: `Our track record reflects institutional rigor and measurable impact. Through systematic acceleration and dedicated venture backing, we have created an enduring global fintech innovation footprint.`,
      bullets: [
        'Consistent top-quartile cohort survival rates',
        'Over $350M+ in follow-on funding raised by alumni',
        'Active presence across Switzerland, UK, Singapore, Spain, and Turkey',
      ],
      actionText: 'Explore Ecosystem',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleReadMoreCaseStudy = (study: { title: string; desc: string; metrics: string }) => {
    setModalData({
      badge: 'Case Study',
      title: study.title,
      subtitle: study.desc,
      content:
        'A comprehensive demonstration of how structured collaboration between agile fintech creators and established financial institutions delivers real commercial outcomes.',
      bullets: [
        `Key Impact: ${study.metrics}`,
        'High-velocity enterprise pilot integration',
        'Standardized compliance and procurement frameworks',
      ],
      actionText: 'Discuss Your Program',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleBentoClick = (title: string) => {
    setModalData({
      badge: 'Orbit Stories',
      title,
      content:
        'At Tenity, we highlight real breakthrough stories from our cohorts, alumni, and ecosystem partners that demonstrate scalable market impact.',
      bullets: [
        'Published in our weekly Orbit newsletter',
        'Detailed breakdown in our podcast series',
        'Featuring founders and innovation executives',
      ],
      actionText: 'Connect with Us',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleHubExplore = (hubName: string) => {
    setModalData({
      badge: 'Global Ecosystem',
      title: `Tenity ${hubName} Hub`,
      subtitle: `Accelerating local fintech pioneers with global venture capital and tier-1 corporate partnerships.`,
      content: `Our ${hubName} team leads flagship accelerator tracks, enterprise innovation sandboxes, and bespoke corporate scouting. Connect with our local investment and program directors to explore cohorts or partnership opportunities.`,
      bullets: [
        'Dedicated on-the-ground program management and mentor network',
        'Direct access to institutional banking and insurance partners',
        'Cross-border expansion support across our other 5 global hubs',
        'Fast-track application access for upcoming cohort cycles',
      ],
      actionText: `Contact ${hubName} Team`,
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleLegalClick = (title: string) => {
    if (title.startsWith('Tenity Hub — ')) {
      const hubName = title.replace('Tenity Hub — ', '');
      handleHubExplore(hubName);
      return;
    }
    setModalData({
      badge: 'Legal & Info',
      title,
      content:
        'Tenity Group AG is registered in Zurich, Switzerland. We are committed to absolute data privacy, transparent investor communications, and the highest compliance standards in European and global financial jurisdictions.',
      bullets: [
        'Fully GDPR and Swiss FADP compliant',
        'Regularly audited corporate governance',
        'Strict confidential treatment of founder IP and dealflow',
      ],
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-[#f0386b] selection:text-white">
      {/* 1. Floating Top Navigation Bar */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* 2. Hero Section: "Fintech makers [pill] and other impossible things" */}
      <HeroSection
        onExploreVenture={handleExploreVenture}
        onExploreInnovation={handleExploreInnovation}
      />

      {/* 3. Central Feature Stage: "A hybrid model that works" & 01, 02, 03 cards */}
      <HybridModelStage
        onApproachClick={handleApproachClick}
        onPillarClick={handlePillarClick}
      />

      {/* 4. Strategic & Collaboration Partners */}
      <PartnersSection onViewAllPartners={handleViewAllPartners} />

      {/* 5. Light Section: "The difference that makes [pill] the difference" */}
      <DifferenceSection
        onLearnMore={(topic) =>
          setModalData({
            badge: 'Strategic Pillar',
            title: topic,
            content:
              'Tenity provides an institutional grade innovation operating system. Combining deep local ecosystem presence with borderless capital allocation.',
            bullets: [
              'Dedicated on-the-ground hub teams',
              'Proven corporate partner procurement navigation',
              'Access to leading international fintech syndicates',
            ],
            actionText: 'Discover More',
            onAction: () => setIsContactOpen(true),
          })
        }
      />

      {/* 6. Light Section: "Proof [pill] in numbers" */}
      <ProofInNumbersSection onStatClick={handleStatClick} />

      {/* 7. Dark Section: "From ambition to tangible results" */}
      <AmbitionResultsSection
        onReadMore={handleReadMoreCaseStudy}
        onDiscoverMore={handleViewAllPartners}
      />

      {/* 8. Dark Section: "Many paths. [pill] One shared momentum" */}
      <ManyPathsSection onSelectAudience={() => setIsContactOpen(true)} />

      {/* 9. Light Section: "From impossible [pill] to possible" Bento */}
      <ImpossibleToPossibleSection onCardClick={handleBentoClick} />

      {/* 10. Interactive Global Hubs & Data Visualization (Recharts + Interactive Vector Map) */}
      <GlobalHubsVisualization onHubExplore={handleHubExplore} />

      {/* 11. Dark Section: Infinity FAQ & Knowledge Exploration */}
      <FAQSection />

      {/* 12. Dark Section: "Stay in our orbit" & Footer */}
      <FooterSection 
        onLegalClick={handleLegalClick}
        onNewsletterSuccess={(email) => {
          // Toast or modal acknowledgment can be shown if needed
        }}
      />

      {/* Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Detail / Deep-dive Modal */}
      <DetailModal
        data={modalData}
        onClose={() => setModalData(null)}
      />
    </div>
  );
}
