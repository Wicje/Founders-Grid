/**
 * Founders Grid Knowledge Engine (Client-side Serverless)
 * Provides clear, accurate, plain-spoken answers regarding Founders Grid:
 * submissions, community testing, free access, rules, consent & takedown,
 * newsletter features, and community channels.
 * 
 * Notice: We do not claim funding, guaranteed investor responses, or unconfirmed partners.
 */

interface KnowledgeResult {
  answer: string;
  category: string;
}

export function answerTenityQuestion(query: string): KnowledgeResult {
  const q = query.toLowerCase().trim();

  // 1. Is it free / costs / fees / equity
  if (
    q.includes('free') ||
    q.includes('cost') ||
    q.includes('fee') ||
    q.includes('charge') ||
    q.includes('pay') ||
    q.includes('equity') ||
    q.includes('price')
  ) {
    return {
      category: 'Free Access',
      answer:
        'Yes, Founders Grid is 100% free. Founders are never charged to be featured, join the community, have their products tested, or receive feedback. We never take fees or equity.',
    };
  }

  // 2. Funding & investors disclaimer
  if (
    q.includes('funding') ||
    q.includes('invest') ||
    q.includes('vc') ||
    q.includes('check size') ||
    q.includes('ticket') ||
    q.includes('capital') ||
    q.includes('money') ||
    q.includes('sponsor')
  ) {
    return {
      category: 'Funding & Disclaimer',
      answer:
        'Founders Grid does not provide funding, and we do not guarantee that investors will respond. We are a digital home for builders to get visibility, test each other’s products, and receive honest feedback. If you plan to show your founder page to investors, have a lawyer review the consent and disclaimer wording first.',
    };
  }

  // 3. How to submit & submission form link
  if (
    q.includes('submit') ||
    q.includes('apply') ||
    q.includes('form') ||
    q.includes('how to join') ||
    q.includes('add my product') ||
    q.includes('link')
  ) {
    return {
      category: 'Product Submission',
      answer:
        'Founders submit their products through a short form [Submission Form Link: Add your link here]. You share what you are making, your builder notes, and what kind of feedback you are looking for.',
    };
  }

  // 4. Getting featured & newsletter
  if (
    q.includes('feature') ||
    q.includes('newsletter') ||
    q.includes('how many') ||
    q.includes('weekly') ||
    q.includes('monthly') ||
    q.includes('traction')
  ) {
    return {
      category: 'Getting Featured',
      answer:
        'Products are featured in our weekly newsletter (5–10 new products per issue) and a monthly issue on products gaining real traction. Featured products also get their own dedicated page and are shared on Instagram and X.',
    };
  }

  // 5. Consent & takedown policy
  if (
    q.includes('takedown') ||
    q.includes('remove') ||
    q.includes('delete') ||
    q.includes('consent') ||
    q.includes('privacy') ||
    q.includes('own page')
  ) {
    return {
      category: 'Consent & Takedown',
      answer:
        'Featured products get their own dedicated page, which founders can take down at any time upon request. You retain complete ownership of your work, IP, and visibility choices unconditionally.',
    };
  }

  // 6. Community rules & values
  if (
    q.includes('rule') ||
    q.includes('value') ||
    q.includes('culture') ||
    q.includes('conduct') ||
    q.includes('ethos')
  ) {
    return {
      category: 'Community Rules',
      answer:
        'Our core values are: 1) Build — we celebrate people who make things. 2) Progress over perfection — shipping beats waiting. 3) Access is free — founders are never charged. 4) Honest feedback — given kindly and specifically. 5) Open doors — regardless of background, stage, or discipline.',
    };
  }

  // 7. Testing & feedback
  if (
    q.includes('test') ||
    q.includes('feedback') ||
    q.includes('review') ||
    q.includes('critique')
  ) {
    return {
      category: 'Testing & Feedback',
      answer:
        'Community members test each other’s products and give honest feedback, delivered kindly and specifically. It is built on mutual support: testing fellow builders’ work creates a thoughtful culture where people help each other ship better products.',
    };
  }

  // 8. Channels: WhatsApp, Discord, Newsletter, Volunteer
  if (
    q.includes('whatsapp') ||
    q.includes('discord') ||
    q.includes('join') ||
    q.includes('volunteer') ||
    q.includes('cohort')
  ) {
    return {
      category: 'Where to Join',
      answer:
        'You can join Founders Grid through our WhatsApp community (announcements plus cohort groups), our Discord server, newsletter sign-up, or by signing up to volunteer and support cohorts.',
    };
  }

  // 9. Locations & physical hubs
  if (
    q.includes('hub') ||
    q.includes('location') ||
    q.includes('physical') ||
    q.includes('office') ||
    q.includes('where are you')
  ) {
    return {
      category: 'Clustering & Physical Hubs',
      answer:
        'Founders Grid is inspired by the Silicon Valley idea of visibility and clustering, started online first, with physical hubs planned later on our roadmap.',
    };
  }

  // Default fallback
  return {
    category: 'Founders Grid Overview',
    answer:
      'Founders Grid is a digital community where builders in software, hardware, and creative work share what they are making, get honest feedback, and get featured. Access is 100% free forever.',
  };
}
