import React, { useEffect, useState } from 'react';
import { ExternalLink, X, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { TARGET_EXTERNAL_URL } from '../data/mockData';

interface RedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  grade: number | null;
  subjectName: string;
  type: string;
  quarter: number | null;
  assessmentTitle?: string;
}

export const RedirectModal: React.FC<RedirectModalProps> = ({
  isOpen,
  onClose,
  grade,
  subjectName,
  type,
  quarter,
  assessmentTitle,
}) => {
  const [countdown, setCountdown] = useState<number>(3);
  const [autoRedirect, setAutoRedirect] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && autoRedirect && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isOpen && autoRedirect && countdown === 0) {
      handleProceed();
    }
    return () => clearTimeout(timer);
  }, [isOpen, autoRedirect, countdown]);

  if (!isOpen) return null;

  const handleProceed = () => {
    window.open(TARGET_EXTERNAL_URL, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transform transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header with gradient accent */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 id="modal-title" className="text-lg font-bold">
                Javoblar portaliga yo'naltirish
              </h3>
              <p className="text-xs text-white/80">
                Tanlangan material bo'yicha rasmiy manzilga o'tmoqdasiz
              </p>
            </div>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-2.5">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Tanlangan baholash parametri:
            </div>
            {assessmentTitle ? (
              <div className="font-semibold text-sm text-slate-900 dark:text-white">
                {assessmentTitle}
              </div>
            ) : null}

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 dark:text-slate-500">Sinf:</span>
                <span className="font-semibold">{grade ? `${grade}-sinf` : 'Tanlanmagan'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 dark:text-slate-500">Fan:</span>
                <span className="font-semibold">{subjectName || 'Tanlanmagan'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 dark:text-slate-500">Turi:</span>
                <span className="font-semibold">
                  {type === 'ALL' ? 'BSB va CHSB' : type}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 dark:text-slate-500">Chorak:</span>
                <span className="font-semibold">
                  {quarter ? `${quarter}-chorak` : 'Barcha choraklar'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-900/50 text-xs text-blue-900 dark:text-blue-200">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              Tanlovingiz saqlab qolindi. Siz to'g'ridan-to'g'ri{' '}
              <strong className="underline decoration-blue-400">bsb-chsb.com</strong> portaliga
              yo'naltirilasiz. U yerda test javoblari va namunaviy yechimlarni ko'rishingiz mumkin.
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-end">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Bekor qilish
            </button>
            <button
              onClick={handleProceed}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>Javoblarni ko'rish</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
