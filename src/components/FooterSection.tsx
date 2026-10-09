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
  const hubs = [
    'Zurich',
    'London',
    'Singapore',
    'Hong Kong',
    'Madrid',
    'Istanbul',
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tenity' },
    { label: 'X (Twitter)', href: 'https://x.com/ArchJosephan' },
    { label: 'Medium', href: 'https://medium.com/@tenity' },
    { label: 'TG Europe', href: '#' },
    { label: 'TG Asia', href: '#' },
    { label: 'TG UK', href: '#' },
    { label: 'Youtube', href: 'https://youtube.com/@tenity' },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Tenity Logo */}
        <div className="mb-10 sm:mb-14">
          <TenityLogo theme="dark" size="md" />
        </div>

        {/* Main Grid: Stay in our orbit & Hubs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16 sm:mb-20">
          
          {/* Left: Giant Headline */}
          <div className="lg:col-span-7">
            <h2 className="text-[44px] min-[380px]:text-[56px] sm:text-[76px] md:text-[96px] lg:text-[104px] font-extrabold tracking-[-0.04em] leading-[0.92] text-white">
              <span className="block">Stay in</span>
              <span className="block">our orbit</span>
            </h2>
          </div>

          {/* Right: Hubs List */}
          <div className="lg:col-span-5 lg:pt-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 sm:mb-5">
              Hubs
            </h4>
            <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 text-[15px] sm:text-base md:text-[17px] text-white/85 font-semibold">
              {hubs.map((hub) => (
                <span
                  key={hub}
                  className="hover:text-white transition-colors cursor-pointer hover:underline underline-offset-4"
                  onClick={() => onLegalClick?.(`Tenity Hub — ${hub}`)}
                >
                  {hub}
                </span>
              ))}
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
              Get insights, stories, and opportunities from across our global ecosystem - and listen to our podcast on the ideas shaping finance and tech.
            </p>
          </div>

        </div>

        {/* Social Media Follow Component */}
        <div className="pt-10 sm:pt-12 pb-12 sm:pb-16 border-t border-white/10">
          <SocialMediaFollow />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs sm:text-sm text-white/70">
          
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-white/60">
            <span>&copy; 2026 Tenity Group AG</span>
            <span aria-hidden="true" className="hidden sm:inline">&mdash;</span>
            <button
              onClick={() => onLegalClick?.('Privacy Policy')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">|</span>
            <button
              onClick={() => onLegalClick?.('Cookie policy')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
            >
              Cookie policy
            </button>
            <span aria-hidden="true">|</span>
            <button
              onClick={() => onLegalClick?.('Cookie preferences')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
            >
              Cookie preferences
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
