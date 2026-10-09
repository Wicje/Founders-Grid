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
  const [discipline, setDiscipline] = useState('Software');
  const [interest, setInterest] = useState('Submit a Product (Software, Hardware, Creative)');
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Welcome to Founders Grid</h3>
            <p className="text-base text-white/75 max-w-sm mx-auto mb-4 leading-relaxed">
              Thank you, <span className="text-white font-semibold">{name}</span>. You're part of a digital home where builders celebrate making things.
            </p>
            <div className="text-xs font-mono text-white/50 bg-white/5 p-3 rounded-xl max-w-md mx-auto mb-8 border border-white/10">
              Form Link: [Submission Form Link: Add your link here]<br />
              Direct Contact: [Contact Email: hello@foundersgrid.co placeholder]
            </div>
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
                Join Founders Grid &amp; Submit
              </h2>
              <p className="text-sm text-white/65 mt-1.5 leading-relaxed">
                A digital community where software, hardware, and creative makers share what they're making and get honest feedback. 100% free forever.
              </p>
            </div>

            {/* Clearly marked placeholder inputs notice */}
            <div className="mb-5 p-3.5 rounded-xl bg-white/5 border border-dashed border-white/20 text-white/80 text-xs font-mono">
              <span className="text-[#f0386b] font-bold">Input Placeholders:</span><br />
              • [Submission Form Link: Add your link here]<br />
              • [Contact Email: hello@foundersgrid.co placeholder]
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
                  placeholder="e.g. Maya Chen"
                  className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/35"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maya@builder.io"
                    className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/35"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/80 mb-2">
                    Builder Discipline
                  </label>
                  <select
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value)}
                    className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3.5 text-base text-white outline-none transition-colors cursor-pointer"
                  >
                    <option value="Software">Software (Web, Mobile, Tools)</option>
                    <option value="Hardware">Hardware (Electronics, Physical)</option>
                    <option value="Creative">Creative (Design, Interactive)</option>
                    <option value="Tester">Community Tester / Volunteer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/80 mb-2">
                  How would you like to participate?
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3.5 text-base text-white outline-none transition-colors cursor-pointer"
                >
                  <option value="Submit a Product">Submit a Product to be Featured (Free)</option>
                  <option value="Join WhatsApp">Join WhatsApp Community (Announcements + Cohorts)</option>
                  <option value="Join Discord">Join Discord (Builders &amp; Peer Testing)</option>
                  <option value="Volunteer Sign-up">Volunteer Sign-up (Help with Cohorts &amp; Reviews)</option>
                  <option value="Newsletter Only">Newsletter Sign-up Only</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/80 mb-2">
                  What are you building or looking for?
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a short note about what you are making, your prototype link, or what kind of feedback helps you most..."
                  className="w-full bg-[#181818] border border-white/15 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b] rounded-2xl px-5 py-3 text-base text-white outline-none transition-colors resize-none placeholder:text-white/35"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#f0386b] hover:bg-[#d82458] active:bg-[#c01d4b] text-white font-bold text-base py-4 rounded-full transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <span>Submit to Founders Grid</span>
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
