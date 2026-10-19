import React from 'react';
import { GraduationCap, ExternalLink, Mail, MessageCircle, Heart } from 'lucide-react';
import { TARGET_EXTERNAL_URL } from '../data/mockData';

interface FooterProps {
  onNavigate: (tab: 'home' | 'subjects' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Platform Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                BSB & CHSB Ta'lim Portali
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              O'zbekiston Respublikasi umumta'lim maktablari o'quvchilari uchun 5–11-sinf
              Bo'lim yuzasidan summativ baholash (BSB) va Choraklik summativ baholash (CHSB)
              materiallarini qidirish, mezonlar bilan tanishish va yechimlar portaliga o'tish
              tizimi.
            </p>
            <div className="text-xs text-slate-500">
              Ushbu portal mustaqil ta'limiy resurs bo'lib, o'quvchilarning baholashga tayyorgarligini oshirish uchun xizmat qiladi.
            </div>
          </div>

          {/* Col 2: Sahifalar */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Tezkor sahifalar
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Bosh sahifa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('subjects')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Fanlar ro'yxati (10 ta fan)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Biz haqimizda & Qo'llanma
                </button>
              </li>
              <li>
                <a
                  href={TARGET_EXTERNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-indigo-400 transition-colors"
                >
                  <span>Javoblar portali</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Aloqa va Manbalar */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Aloqa va Ma'lumot
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="truncate">info@bsb-chsb.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Telegram: @bsb_chsb_yordam</span>
              </div>
              <div className="pt-2 text-xs text-slate-400">
                Ish vaqti: Dushanba – Shanba, 09:00 – 18:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} BSB & CHSB Portali. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">O'zbekiston maktab ta'limi standarti</span>
            <span aria-hidden="true">·</span>
            <a
              href={TARGET_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              bsb-chsb.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
