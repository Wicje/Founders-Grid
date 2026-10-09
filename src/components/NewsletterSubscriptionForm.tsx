import React, { useState, useEffect } from 'react';
import { Plus, Check, Loader2, Sparkles, AlertCircle } from 'lucide-react';

interface NewsletterSubscriptionFormProps {
  onSuccess?: (email: string) => void;
  className?: string;
  showTitle?: boolean;
}

export const NewsletterSubscriptionForm: React.FC<NewsletterSubscriptionFormProps> = ({
  onSuccess,
  className = '',
  showTitle = true,
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);

  // Check if previously subscribed in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tenity_orbit_subscriber');
      if (saved) {
        setSubscribedEmail(saved);
        setStatus('success');
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const validateEmail = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Please enter your email address.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return 'Please provide a valid email format (e.g. name@domain.com).';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateEmail(email);
    if (error) {
      setErrorMessage(error);
      setStatus('error');
      return;
    }

    setErrorMessage('');
    setStatus('loading');

    // Simulate real network request with realistic latency (400ms)
    try {
      await new Promise((resolve) => setTimeout(resolve, 450));
      const cleanEmail = email.trim().toLowerCase();
      try {
        localStorage.setItem('tenity_orbit_subscriber', cleanEmail);
      } catch {
        // ignore storage errors
      }
      setSubscribedEmail(cleanEmail);
      setStatus('success');
      onSuccess?.(cleanEmail);
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('tenity_orbit_subscriber');
    } catch {
      // ignore
    }
    setSubscribedEmail(null);
    setStatus('idle');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div className={`w-full ${className}`}>
      {showTitle && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#f0386b] mb-2.5">
            <Sparkles size={14} />
            <span>Orbit Newsletter</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Join the<br />newsletter
          </h3>
        </div>
      )}

      {status === 'success' ? (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="inline-flex items-center gap-3.5 bg-[#f0386b]/15 border border-[#f0386b]/60 px-6 py-4 rounded-2xl sm:rounded-full text-white text-sm sm:text-base shadow-lg">
            <span className="w-6 h-6 rounded-full bg-[#f0386b] flex items-center justify-center shrink-0">
              <Check size={14} className="text-white stroke-[3]" />
            </span>
            <span className="font-medium">
              You’re subscribed to <strong className="font-bold text-white">Tenity Orbit</strong> with{' '}
              <span className="text-white/90 underline underline-offset-2">{subscribedEmail || email}</span>!
            </span>
          </div>
          <div>
            <button
              onClick={handleReset}
              className="text-xs text-white/50 hover:text-white/80 transition-colors underline cursor-pointer ml-1"
            >
              Sign up with another email
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 max-w-xl">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                disabled={status === 'loading'}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') {
                    setStatus('idle');
                    setErrorMessage('');
                  }
                }}
                placeholder="Enter your email"
                aria-label="Email for Orbit newsletter"
                className={`w-full bg-[#111111] border ${
                  status === 'error' ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/20 focus:border-[#f0386b] focus:ring-1 focus:ring-[#f0386b]'
                } text-white text-[15px] sm:text-lg px-5 sm:px-7 py-3.5 sm:py-5 rounded-full outline-none transition-all placeholder:text-white/40 disabled:opacity-60 shadow-inner`}
              />
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
              {/* Circular pink plus button matching the exact design motif */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === 'loading'}
                aria-label="Submit newsletter registration"
                className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#f0386b] hover:bg-[#d82458] active:bg-[#c01d4b] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 hover:scale-105 shadow-lg cursor-pointer disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <Loader2 size={20} className="animate-spin text-white" />
                ) : (
                  <Plus size={22} />
                )}
              </button>

              {/* Pink pill Subscribe button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-1 sm:flex-none bg-[#f0386b] hover:bg-[#d82458] active:bg-[#c01d4b] text-white font-bold text-base sm:text-lg px-6 sm:px-9 py-3.5 sm:py-5 rounded-full transition-all active:scale-95 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer disabled:opacity-60 flex items-center justify-center min-w-[130px]"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={18} className="animate-spin" />
                    <span>Joining...</span>
                  </span>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </div>

          {status === 'error' && errorMessage && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-rose-400 mt-1 font-semibold animate-in fade-in">
              <AlertCircle size={15} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <p className="text-xs sm:text-[13px] text-white/55 mt-1 font-normal">
            5–10 new products featured every week, plus monthly traction issues. No spam. 100% free.
          </p>
        </form>
      )}
    </div>
  );
};
