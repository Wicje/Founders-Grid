import React, { useState } from 'react';
import { ExternalLink, Check, Copy, ArrowUpRight } from 'lucide-react';

export interface SocialAccount {
  id: string;
  name: string;
  handle: string;
  url: string;
  description: string;
  badge?: string;
  color: string;
  hoverBorder: string;
  icon: (props: { className?: string }) => React.ReactElement;
}

export const OFFICIAL_SOCIAL_ACCOUNTS: SocialAccount[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Community',
    handle: 'Announcements & Cohorts',
    url: '#',
    description: 'Weekly announcements, product launches, and builder cohort groups.',
    badge: 'Primary Community',
    color: '#25D366',
    hoverBorder: 'hover:border-[#25D366]/50',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41c-1.45 0-2.88-.39-4.14-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.4c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3" />
      </svg>
    ),
  },
  {
    id: 'discord',
    name: 'Discord Server',
    handle: 'Builders & Testers',
    url: '#',
    description: 'Real-time testing rooms, software/hardware feedback, and demo stages.',
    badge: 'Peer Testing',
    color: '#5865F2',
    hoverBorder: 'hover:border-[#5865F2]/50',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    handle: '@ArchJosephan',
    url: 'https://x.com/ArchJosephan',
    description: 'Weekly featured product highlights, builder questions, and community dispatches.',
    badge: 'Social Channel',
    color: '#FFFFFF',
    hoverBorder: 'hover:border-white/50',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@foundersgrid',
    url: '#',
    description: 'Visual showcases of physical hardware builds and software design systems.',
    badge: 'Social Showcase',
    color: '#E4405F',
    hoverBorder: 'hover:border-[#E4405F]/50',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

interface SocialMediaFollowProps {
  className?: string;
  variant?: 'grid' | 'compact';
}

export const SocialMediaFollow: React.FC<SocialMediaFollowProps> = ({
  className = '',
  variant = 'grid',
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // fallback
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {OFFICIAL_SOCIAL_ACCOUNTS.map((account) => {
          const IconComponent = account.icon;
          return (
            <a
              key={account.id}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Tenity on ${account.name} (${account.handle})`}
              className={`group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 ${account.hoverBorder} transition-all duration-200 text-white/80 hover:text-white`}
            >
              <div className="w-5 h-5 flex items-center justify-center text-white/90 group-hover:text-white group-hover:scale-110 transition-transform duration-200">
                <IconComponent className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight">{account.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Header / Sub-heading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-wider text-white/70 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fa3838] animate-pulse"></span>
            Official Channels
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-[-0.02em]">
            Connect & Follow
          </h3>
          <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-md">
            Follow Tenity across LinkedIn, X, and Medium for deal announcements, accelerator cohorts, and fintech venture reports.
          </p>
        </div>

        <div className="text-xs text-white/50 hidden sm:block">
          Updated weekly across all hubs
        </div>
      </div>

      {/* Grid of 3 Social Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {OFFICIAL_SOCIAL_ACCOUNTS.map((account) => {
          const IconComponent = account.icon;
          const isCopied = copiedId === account.id;

          return (
            <div
              key={account.id}
              className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#0c0c0c] hover:bg-[#141414] border border-white/10 ${account.hoverBorder} transition-all duration-300 hover:shadow-2xl hover:shadow-black/50`}
            >
              {/* Top Row: Icon + Badge + Copy Button */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:bg-white/[0.12] group-hover:scale-105 transition-all duration-200">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {account.badge && (
                      <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/[0.06] text-white/70 border border-white/10">
                        {account.badge}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => handleCopy(account.id, account.url, e)}
                      title={`Copy ${account.name} link`}
                      aria-label={`Copy ${account.name} link`}
                      className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Account Name & Handle */}
                <div className="mb-2">
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-white flex items-center gap-1.5">
                    {account.name}
                  </h4>
                  <span className="text-xs sm:text-sm font-medium text-white/60 font-mono">
                    {account.handle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-normal">
                  {account.description}
                </p>
              </div>

              {/* Bottom: Follow Button */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <a
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white text-white hover:text-black font-semibold text-xs sm:text-sm transition-all duration-200 group-hover:border-transparent"
                >
                  <span>Follow on {account.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
