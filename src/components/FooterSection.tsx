import React, { useState } from 'react';
import { TenityLogo } from './TenityLogo';
import { Plus, Check, ArrowRight } from 'lucide-react';

interface FooterSectionProps {
  onLegalClick?: (title: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onLegalClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const hubs = [
    'Zurich',
    'London',
    'Singapore',
    'Hong Kong',
    'Madrid',
    'Istanbul',
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'TG Europe', href: '#' },
    { label: 'TG Asia', href: '#' },
    { label: 'TG UK', href: '#' },
    { label: 'Youtube', href: 'https://youtube.com' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Tenity Logo */}
        <div className="mb-14">
          <TenityLogo theme="dark" size="md" />
        </div>

        {/* Main Grid: Stay in our orbit & Hubs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          
          {/* Left: Giant Headline */}
          <div className="lg:col-span-7">
            <h2 className="text-[54px] sm:text-[68px] md:text-[84px] font-extrabold tracking-[-0.04em] leading-[0.92] text-white">
              <span className="block">Stay in</span>
              <span className="block">our orbit</span>
            </h2>
          </div>

          {/* Right: Hubs List */}
          <div className="lg:col-span-5 lg:pt-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Hubs
            </h4>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80 font-medium">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end pt-8 border-t border-white/10 pb-20">
          
          {/* Left: Newsletter form */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-6">
              Join the<br />newsletter
            </h3>

            {subscribed ? (
              <div className="inline-flex items-center gap-3 bg-[#f0386b]/20 border border-[#f0386b] px-6 py-3 rounded-full text-white text-sm">
                <Check size={18} className="text-[#f0386b]" />
                <span className="font-medium">You’re now subscribed to Tenity Orbit! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email"
                    className="w-full bg-[#111111] border border-white/20 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] text-white text-sm px-5 py-3 rounded-full outline-none transition-colors placeholder:text-white/40"
                  />
                </div>

                <div className="flex items-center gap-2">
                  {/* Circular pink plus button as seen in design */}
                  <button
                    type="button"
                    onClick={handleSubscribe}
                    aria-label="Add subscription"
                    className="w-12 h-12 rounded-full bg-[#f0386b] hover:bg-[#d82458] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md"
                  >
                    <Plus size={20} />
                  </button>

                  {/* Pink pill Subscribe button */}
                  <button
                    type="submit"
                    className="bg-[#f0386b] hover:bg-[#d82458] text-white font-bold text-sm px-7 py-3 rounded-full transition-all active:scale-95 shadow-md whitespace-nowrap cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}

            {error && (
              <p className="text-xs text-rose-400 mt-2 font-medium">
                {error}
              </p>
            )}
          </div>

          {/* Right: Explanatory Copy */}
          <div className="lg:col-span-5">
            <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-md">
              Get insights, stories, and opportunities from across our global ecosystem - and listen our podcast on the ideas shaping finance and tech.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/60">
          
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5">
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
          <div className="flex flex-wrap items-center gap-2 text-white/50">
            <span>&copy; 2026 Tenity Group AG All rights reserved</span>
            <span aria-hidden="true">&mdash;</span>
            <button
              onClick={() => onLegalClick?.('Privacy Policy')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">|</span>
            <button
              onClick={() => onLegalClick?.('Cookie policy')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              Cookie policy
            </button>
            <span aria-hidden="true">|</span>
            <button
              onClick={() => onLegalClick?.('Cookie preferences')}
              className="hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              Cookie preferences
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
