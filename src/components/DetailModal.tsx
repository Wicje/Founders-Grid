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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
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

        {data.badge && (
          <span className="text-xs sm:text-[13px] font-bold text-[#f0386b] uppercase tracking-wider block mb-2.5">
            {data.badge}
          </span>
        )}

        <h3 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white tracking-tight leading-tight mb-3">
          {data.title}
        </h3>

        {data.subtitle && (
          <p className="text-base sm:text-lg font-medium text-white/85 mb-5 leading-snug">
            {data.subtitle}
          </p>
        )}

        <p className="text-base text-white/75 leading-relaxed mb-6 font-normal">
          {data.content}
        </p>

        {data.bullets && data.bullets.length > 0 && (
          <ul className="space-y-3 mb-8 bg-[#161616] rounded-2xl p-5 border border-white/10">
            {data.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-white/85 leading-relaxed">
                <Check size={16} className="text-[#f0386b] shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-end gap-3.5 pt-2">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-full border border-white/20 hover:border-white text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>

          {data.actionText && (
            <button
              onClick={() => {
                data.onAction?.();
                onClose();
              }}
              className="bg-[#f0386b] hover:bg-[#d82458] active:bg-[#c01d4b] text-white text-sm sm:text-base font-bold px-7 py-3 rounded-full flex items-center gap-2.5 transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>{data.actionText}</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
