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
    { label: 'Values', target: 'difference-section' },
    { label: 'How it Works', target: 'hybrid-stage' },
    { label: 'Featured Products', target: 'featured-products' },
    { label: 'Join Community', target: 'join-community' },
    { label: 'Rules & FAQ', target: 'faq-section' },
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
    <header className="fixed top-3 sm:top-4 md:top-6 inset-x-0 z-50 px-3 sm:px-4 flex justify-center pointer-events-none">
      <div className="w-full max-w-[1060px] bg-white/95 text-neutral-900 rounded-full py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-6 md:px-8 shadow-2xl border border-neutral-200/90 flex items-center justify-between pointer-events-auto backdrop-blur-xl transition-all">
        {/* Brand */}
        <a 
          href="#" 
          className="hover:opacity-85 transition-opacity py-0.5 shrink-0" 
          aria-label="Tenity Homepage"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <TenityLogo theme="light" size="sm" />
        </a>

        {/* Desktop / Tablet Nav Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2.5 text-[13px] lg:text-[15px] font-semibold text-neutral-700">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.target)}
              className="px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-full hover:bg-neutral-100/90 hover:text-black transition-all whitespace-nowrap cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onContactClick}
            className="bg-[#f0386b] hover:bg-[#d82458] active:bg-[#c01d4b] text-white text-[13px] sm:text-[14px] md:text-[15px] font-bold px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-[1.04] active:scale-[0.98] cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0386b] focus-visible:ring-offset-2"
          >
            Join Free
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden text-neutral-800 hover:text-black p-2 rounded-full cursor-pointer focus-visible:outline-none hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden pointer-events-auto animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-x-4 top-18 sm:top-20 max-h-[82vh] overflow-y-auto bg-white/98 backdrop-blur-2xl border border-neutral-200 rounded-[28px] p-6 shadow-2xl flex flex-col gap-4 pointer-events-auto md:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-50">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <TenityLogo theme="light" size="sm" />
              <button
                type="button"
                className="text-neutral-500 hover:text-black p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-left text-base sm:text-lg font-semibold text-neutral-800 hover:text-[#f0386b] py-3 px-3 rounded-2xl hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-neutral-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full bg-[#f0386b] hover:bg-[#d82458] text-white text-center py-3.5 rounded-full font-bold text-base shadow-lg transition-colors cursor-pointer"
              >
                Get in touch
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
