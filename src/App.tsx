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
      badge: 'Product Submission',
      title: 'Submit Your Product to Founders Grid',
      subtitle: 'Access is 100% free. Founders are never charged to be featured.',
      content:
        'Founders submit products through a short form. Featured products receive their own dedicated page, spotlight in our weekly newsletter (5–10 new products), and peer testing from fellow makers.',
      bullets: [
        'Submission Form: [Submission Form Link: Add your link here]',
        'Free forever: founders are never charged',
        'Featured product page with 100% takedown control',
        'Products also shared on Instagram and X',
      ],
      actionText: 'Submit Product Form',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleExploreInnovation = () => {
    setModalData({
      badge: 'Community',
      title: 'Join the Founders Grid Community',
      subtitle: 'A digital home for software, hardware, and creative builders.',
      content:
        'The Silicon Valley idea of visibility and clustering, started online first, with physical hubs planned later. Giving visibility to software, hardware, and creative builders, including people who haven’t been noticed yet.',
      bullets: [
        'WhatsApp community (announcements plus cohort groups)',
        'Discord server for builders & testers',
        'Weekly newsletter featuring 5–10 new products',
        'Monthly issue on products gaining real traction',
      ],
      actionText: 'Join Free',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleApproachClick = () => {
    setModalData({
      badge: 'Blueprint',
      title: 'A Digital Community Model That Works',
      subtitle: 'How Founders Grid operates for builders.',
      content:
        'We celebrate people who make things. Shipping beats waiting, access is free, feedback is honest and kind, and doors are open regardless of background, stage, or discipline.',
      bullets: [
        'Build: We celebrate people who make things',
        'Progress over perfection: Shipping beats waiting',
        'Access is free: Founders are never charged to be featured',
        'Honest feedback: Given kindly and specifically',
      ],
      actionText: 'Get Involved',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handlePillarClick = (pillarIndex: number) => {
    const pillars = [
      {
        title: '01. Submitting what you make',
        subtitle: 'Short submission form, product details, builder notes',
        content:
          'Founders submit products through a short form. Two items need your real input: the submission form link and the contact email.',
        bullets: [
          'Submission Form: [Submission Form Link: Add your link here]',
          'Contact Email: [Contact Email: hello@foundersgrid.co placeholder]',
          'Zero fee to be featured or receive feedback',
        ],
      },
      {
        title: '02. Testing & honest feedback',
        subtitle: 'Community members test each other\'s products',
        content:
          'Community members test each other’s products and give honest feedback, given kindly and specifically.',
        bullets: [
          'Constructive notes on usability and polish',
          'Peer testing across software and hardware',
          'Kind, specific suggestions from fellow makers',
        ],
      },
      {
        title: '03. Getting featured & visibility',
        subtitle: 'Weekly newsletter, monthly traction issue, dedicated page',
        content:
          'Featured products get their own page, which founders can take down at any time. Products are also shared on Instagram and X.',
        bullets: [
          'Weekly newsletter (5–10 new products)',
          'Monthly issue on products gaining real traction',
          '100% founder consent and takedown control',
        ],
      },
    ];

    const selected = pillars[pillarIndex - 1];
    if (selected) {
      setModalData({
        badge: 'How It Works',
        title: selected.title,
        subtitle: selected.subtitle,
        content: selected.content,
        bullets: selected.bullets,
        actionText: 'Join Community',
        onAction: () => setIsContactOpen(true),
      });
    }
  };

  const handleViewAllPartners = () => {
    setModalData({
      badge: 'Community Channels',
      title: 'Founders Grid Community & Distribution Channels',
      subtitle: 'Connect across announcements, testing rooms, and newsletters.',
      content:
        'Where builders gather to test products and get honest feedback. We do not claim sponsors or partners exist; our community is powered by independent makers.',
      bullets: [
        'WhatsApp community (announcements plus cohort groups)',
        'Discord server (builders and testers)',
        'Weekly newsletter (5–10 new products)',
        '[Partner / Ecosystem Placeholder — Open for Collaborations]',
      ],
      actionText: 'Join Channels',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleStatClick = (label: string, value: string) => {
    setModalData({
      badge: 'Founders Grid Facts',
      title: `${value} — ${label}`,
      content: `Our numbers reflect actual community facts without invented statistics or funding claims.`,
      bullets: [
        'Access is free — founders are never charged to be featured',
        'Weekly newsletter features 5–10 new products',
        'Featured products get their own page with takedown control',
      ],
      actionText: 'Submit Product',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleReadMoreCaseStudy = (study: { title: string; desc: string; metrics: string }) => {
    setModalData({
      badge: 'Featured Product Placeholder',
      title: study.title,
      subtitle: study.desc,
      content:
        'Placeholder card for upcoming community product features. Every featured product gets its own dedicated page, which founders can take down at any time.',
      bullets: [
        `Card status: ${study.metrics}`,
        'Submission Form: [Submission Form Link: Add your link here]',
        'Contact Email: [Contact Email: hello@foundersgrid.co placeholder]',
      ],
      actionText: 'Submit Your Product',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleBentoClick = (title: string) => {
    setModalData({
      badge: 'Founders Grid',
      title,
      content:
        'A digital community where builders in software, hardware, and creative work share what they are making, get honest feedback, and get featured.',
      bullets: [
        'Weekly newsletter (5–10 new products)',
        'Monthly traction issue',
        '100% free with full takedown control',
      ],
      actionText: 'Join Community',
      onAction: () => setIsContactOpen(true),
    });
  };

  const handleLegalClick = (title: string) => {
    if (title.startsWith('Founders Grid — ') || title.startsWith('Tenity Hub — ')) {
      setIsContactOpen(true);
      return;
    }
    setModalData({
      badge: 'Rules, Consent & Disclaimers',
      title,
      content:
        'Founders Grid operates on clear rules, free access, and unconditional respect for builder consent. We do not provide funding, guarantee that investors will respond, or claim unconfirmed sponsorships.',
      bullets: [
        'Consent & takedown: founders can take down their page at any time',
        'If planning to show founder pages to investors, have a lawyer review consent and disclaimer wording first',
        'Contact: [Contact Email: hello@foundersgrid.co placeholder]',
      ],
      actionText: 'Contact Us',
      onAction: () => setIsContactOpen(true),
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

      {/* 10. Dark Section: Infinity FAQ & Knowledge Exploration */}
      <FAQSection />

      {/* 11. Dark Section: "Stay in our orbit" & Footer */}
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
