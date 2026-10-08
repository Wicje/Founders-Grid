import React from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { TenityLogo } from './TenityLogo';

export interface ModalData {
  title: string;
  subtitle?: string;
  badge?: string;
  content: string;
  bullets?: string[];
  actionText?: string;
  onAction?: () => void;
}

interface DetailModalProps {
  data: ModalData | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#0e0e0e] text-white border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {data.badge && (
          <span className="text-[11px] font-bold text-[#f0386b] uppercase tracking-wider block mb-2">
            {data.badge}
          </span>
        )}

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {data.title}
        </h3>

        {data.subtitle && (
          <p className="text-sm font-medium text-white/80 mb-5">
            {data.subtitle}
          </p>
        )}

        <p className="text-sm text-white/70 leading-relaxed mb-6">
          {data.content}
        </p>

        {data.bullets && data.bullets.length > 0 && (
          <ul className="space-y-2.5 mb-8 bg-[#161616] rounded-2xl p-4 border border-white/10">
            {data.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-white/80">
                <Check size={14} className="text-[#f0386b] shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white text-white text-xs font-medium transition-colors"
          >
            Close
          </button>

          {data.actionText && (
            <button
              onClick={() => {
                data.onAction?.();
                onClose();
              }}
              className="bg-[#f0386b] hover:bg-[#d82458] text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-md"
            >
              <span>{data.actionText}</span>
              <ArrowRight size={12} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
