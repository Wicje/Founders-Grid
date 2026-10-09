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
    id: 'linkedin',
    name: 'LinkedIn',
    handle: '@tenity',
    url: 'https://www.linkedin.com/company/tenity',
    description: 'Corporate innovation programs, cohort announcements, and founder stories.',
    badge: '32K+ followers',
    color: '#0A66C2',
    hoverBorder: 'hover:border-[#0A66C2]/50',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.4 9.74v-8.37H5.06v8.37z" />
      </svg>
    ),
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    handle: '@ArchJosephan',
    url: 'https://x.com/ArchJosephan',
    description: 'Real-time dispatches, demo day highlights, and fintech industry insights.',
    badge: 'Official handle',
    color: '#FFFFFF',
    hoverBorder: 'hover:border-white/50',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'medium',
    name: 'Medium',
    handle: '@tenity',
    url: 'https://medium.com/@tenity',
    description: 'Deep-dive essays on venture building, open banking, and Web3 enterprise rails.',
    badge: 'Publication',
    color: '#FFFFFF',
    hoverBorder: 'hover:border-white/50',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
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
