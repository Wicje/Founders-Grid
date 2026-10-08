import React, { useState } from 'react';
import { TenityLogo } from './TenityLogo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Venture Capital', target: 'hybrid-stage' },
    { label: 'Innovation Services', target: 'difference-section' },
    { label: 'Startups', target: 'proof-numbers' },
    { label: 'About Tenity', target: 'ambition-results' },
    { label: 'Orbit', target: 'orbit-section' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(target);
    } else {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-4 md:top-6 inset-x-0 z-50 px-4 flex justify-center pointer-events-none">
      <div className="w-full max-w-[920px] bg-white text-neutral-900 rounded-full py-2.5 px-6 shadow-xl border border-neutral-200/80 flex items-center justify-between pointer-events-auto backdrop-blur-md transition-all">
        {/* Brand */}
        <a 
          href="#" 
          className="hover:opacity-80 transition-opacity" 
          aria-label="Tenity Homepage"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <TenityLogo theme="light" size="sm" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-neutral-800">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.target)}
              className="hover:text-black transition-colors whitespace-nowrap cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-sm"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="bg-[#f0386b] hover:bg-[#d82458] active:bg-[#c01d4b] text-white text-[13px] font-semibold px-5 py-2 rounded-full transition-all shadow-sm hover:shadow hover:scale-[1.02] cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0386b] focus-visible:ring-offset-2"
          >
            Contact
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden text-neutral-700 hover:text-black p-1 rounded-full cursor-pointer focus-visible:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 pointer-events-auto md:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.target)}
                className="text-left text-base font-semibold text-neutral-800 hover:text-[#f0386b] py-2 border-b border-neutral-100 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full mt-2 bg-[#f0386b] text-white text-center py-3 rounded-full font-semibold text-sm shadow hover:bg-[#d82458] transition-colors"
          >
            Get in touch
          </button>
        </div>
      )}
    </header>
  );
};
