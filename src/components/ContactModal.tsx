import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { TenityLogo } from './TenityLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'General Inquiry',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [interest, setInterest] = useState('Venture Capital & Incubation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setError('Please provide your name and a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setOrganization('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0e0e0e] text-white border border-white/15 rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close dialog"
        >
          <X size={19} />
        </button>

        {submitted ? (
          <div className="text-center py-10 animate-in zoom-in-95 duration-200">
            <div className="w-18 h-18 rounded-full bg-[#f0386b]/20 border border-[#f0386b] text-[#f0386b] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Message Sent</h3>
            <p className="text-base text-white/75 max-w-sm mx-auto mb-8 leading-relaxed">
              Thank you, <span className="text-white font-semibold">{name}</span>. A Tenity partner from your regional hub will reach out within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="bg-[#f0386b] hover:bg-[#d82458] text-white text-sm font-bold px-8 py-3.5 rounded-full transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-7">
              <TenityLogo theme="dark" size="sm" className="mb-4" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Connect with Tenity
              </h2>
              <p className="text-sm text-white/65 mt-1.5 leading-relaxed">
                Reach out to discuss venture funding, innovation programs, or strategic corporate partnership.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs sm:text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4.5">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/80 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Meier"
                  className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/35"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/80 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@fintech.io"
                    className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/35"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/80 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Company or Venture"
                    className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/35"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/80 mb-2">
                  Primary Area of Interest
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3.5 text-base text-white outline-none transition-colors cursor-pointer"
                >
                  <option value="Venture Capital & Incubation">Venture Capital &amp; Startup Funding</option>
                  <option value="Corporate Innovation & PoCs">Corporate Innovation &amp; PoC Acceleration</option>
                  <option value="Visa Innovation Program">Visa Innovation Program Europe</option>
                  <option value="Investor Dealflow Network">LP &amp; Co-Investor Syndication</option>
                  <option value="Event Sponsorship / Speaking">Hub Events &amp; Fintech Week</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief overview of your team, startup stage, or corporate objectives..."
                  className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3 text-base text-white outline-none transition-colors resize-none placeholder:text-white/35"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#f0386b] hover:bg-[#d82458] active:bg-[#c01d4b] text-white font-bold text-base py-4 rounded-full transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
