import React from 'react';
import { TenityLogo } from './TenityLogo';
import { NewsletterSubscriptionForm } from './NewsletterSubscriptionForm';
import { SocialMediaFollow } from './SocialMediaFollow';

interface FooterSectionProps {
  onLegalClick?: (title: string) => void;
  onNewsletterSuccess?: (email: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ 
  onLegalClick,
  onNewsletterSuccess,
}) => {
  const communityChannels = [
    'WhatsApp Community',
    'Discord Server',
    'Weekly Newsletter',
    'Volunteer Sign-up',
    'Roadmap Hubs',
  ];

  const socialLinks = [
    { label: 'Submit Product [Form Link Placeholder]', href: '#' },
    { label: 'WhatsApp', href: '#' },
    { label: 'Discord', href: '#' },
    { label: 'X (Twitter)', href: 'https://x.com/ArchJosephan' },
    { label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Founders Grid Logo */}
        <div className="mb-10 sm:mb-14">
          <TenityLogo theme="dark" size="md" />
        </div>

        {/* Main Grid: Stay in our orbit & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16 sm:mb-20">
          
          {/* Left: Giant Headline */}
          <div className="lg:col-span-7">
            <h2 className="text-[44px] min-[380px]:text-[56px] sm:text-[76px] md:text-[96px] lg:text-[104px] font-extrabold tracking-[-0.04em] leading-[0.92] text-white">
              <span className="block">Stay in</span>
              <span className="block">our orbit</span>
            </h2>
          </div>

          {/* Right: Community Channels List & Contact Email */}
          <div className="lg:col-span-5 lg:pt-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 sm:mb-5">
              Community Channels &amp; Contact
            </h4>
            <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 text-[15px] sm:text-base md:text-[17px] text-white/85 font-semibold mb-6">
              {communityChannels.map((item) => (
                <span
                  key={item}
                  className="hover:text-white transition-colors cursor-pointer hover:underline underline-offset-4"
                  onClick={() => onLegalClick?.(`Founders Grid — ${item}`)}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Direct Contact Email placeholder */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono uppercase text-white/60 block mb-1">Direct Contact</span>
              <div className="text-sm sm:text-base font-mono text-[#f0386b] font-bold select-all">
                [Contact Email: hello@foundersgrid.co placeholder]
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end pt-8 sm:pt-10 border-t border-white/10 pb-12 sm:pb-16">
          
          {/* Left: Integrated Newsletter Subscription Component */}
          <div className="lg:col-span-7">
            <NewsletterSubscriptionForm onSuccess={onNewsletterSuccess} />
          </div>

          {/* Right: Explanatory Copy */}
          <div className="lg:col-span-5">
            <p className="text-white/80 text-[15px] sm:text-base md:text-lg leading-relaxed max-w-md font-normal">
              Featured products in your inbox every week (5–10 new products), community test builds, and monthly traction issues. No spam, 100% free.
            </p>
          </div>

        </div>

        {/* Social Media Follow Component */}
        <div className="pt-10 sm:pt-12 pb-12 sm:pb-16 border-t border-white/10">
          <SocialMediaFollow />
        </div>

        {/* Bottom Bar with Disclaimers & Placeholders */}
        <div className="pt-8 sm:pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs sm:text-sm text-white/70">
          
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors font-mono text-xs"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright, Legal & Disclaimers */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-white/60">
            <span>&copy; 2026 Founders Grid</span>
            <span aria-hidden="true" className="hidden sm:inline">&mdash;</span>
            <button
              onClick={() => onLegalClick?.('Community Rules')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
            >
              Community Rules
            </button>
            <span aria-hidden="true">|</span>
            <button
              onClick={() => onLegalClick?.('Consent & Takedown Policy')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
            >
              Consent &amp; Takedown Policy
            </button>
            <span aria-hidden="true">|</span>
            <button
              onClick={() => onLegalClick?.('Transparency & Disclaimers')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
            >
              Disclaimers
            </button>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-white/50 leading-relaxed font-normal">
          <p>
            Notice: Founders Grid is a digital community for builders in software, hardware, and creative work to gain visibility and test products. We do not provide funding, guarantee investor responses, or claim unconfirmed sponsorships. Before showing founder pages to investors, have a lawyer review the consent and disclaimer wording first.
          </p>
        </div>

      </div>
    </footer>
  );
};
