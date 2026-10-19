import React, { useState } from 'react';
import {
  HelpCircle,
  Mail,
  Send,
  MessageCircle,
  CheckCircle2,
  FileCheck2,
  Award,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import { FAQ_LIST, TARGET_EXTERNAL_URL } from '../data/mockData';
import { ASSET_IMAGES } from '../assets/images';

export const AboutPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Contact form state
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState("O'quvchi");
  const [formContact, setFormContact] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setFormError('Iltimos, ismingizni kiriting.');
      return;
    }
    if (!formContact.trim()) {
      setFormError('Iltimos, telefon raqam yoki Telegram profilingizni kiriting.');
      return;
    }
    if (!formMessage.trim()) {
      setFormError('Iltimos, xabaringiz mazmunini yozing.');
      return;
    }

    setFormError(null);
    setFormSubmitted(true);
    setFormName('');
    setFormContact('');
    setFormMessage('');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-12">
      {/* Banner & Intro */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 text-white shadow-xl border border-indigo-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-4">
            <span className="text-xs font-semibold text-violet-300 uppercase tracking-wider">
              Metodik qo'llanma & Ma'lumot
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              BSB va CHSB Baholash Tizimi Haqida
            </h1>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              O'zbekiston maktablarida joriy etilgan yangi baholash mezonlari, ballarni
              hisoblash tartibi, o'quvchilarga tavsiyalar hamda biz bilan bog'lanish sahifasi.
            </p>
          </div>

          <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
            <img
              src={ASSET_IMAGES.guide}
              alt="Baholash mezonlari qo'llanmasi"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Explanatory cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
            BSB
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Bo‘lim yuzasidan summativ baholash
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            BSB — har bir fanda o'tilgan yirik bob yoki bo'lim yakunida o'quvchining o'zlashtirish
            darajasini tekshirish uchun o'tkaziladi. Odatda har chorakda 2 ta BSB bo'ladi.
          </p>
          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2 list-disc list-inside">
            <li>Davomiyligi: 45 daqiqa (1 dars soati)</li>
            <li>Savollar soni: 8–12 ta (test va yozma topshiriq)</li>
            <li>Maksimal ball: odatda 25 yoki 30 ball</li>
            <li>Umumiy chorak balliga ta'siri: 40%</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
            CHSB
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Choraklik summativ baholash
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            CHSB — chorak oxirida o'tilgan barcha mavzularni umumlashtiruvchi yagona nazorat imtihonidir.
            U o'quvchining choraklik yakuniy bahosini belgilashda asosiy o'rin tutadi.
          </p>
          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2 list-disc list-inside">
            <li>Davomiyligi: 45–60 daqiqa</li>
            <li>Savollar soni: 15–25 ta standartlashtirilgan test va masalalar</li>
            <li>Maksimal ball: 40 yoki 50 ball</li>
            <li>Umumiy chorak balliga ta'siri: 60%</li>
          </ul>
        </div>
      </section>

      {/* 100 Ballik Shkala Jadvali */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Baholar konvertatsiyasi (100 ballik shkala)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Respublika umumta'lim mezoniga asosan to'plangan umumiy ballning an'anaviy 5 baholik tizimga o'tkazilishi
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold">
                <th className="py-2.5 px-3">To'plangan foiz / ball</th>
                <th className="py-2.5 px-3">An'anaviy baho</th>
                <th className="py-2.5 px-3">Daraja ta'rifi</th>
                <th className="py-2.5 px-3">Tavsiya</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="py-3 px-3 font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                  86% – 100%
                </td>
                <td className="py-3 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                  5 (A'lo)
                </td>
                <td className="py-3 px-3">Mavzularni to'liq o'zlashtirgan, ijodiy tahlil qila oladi</td>
                <td className="py-3 px-3 text-slate-500">Olimpiada va chuqurlashtirilgan to'garaklar</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                  71% – 85%
                </td>
                <td className="py-3 px-3 font-bold text-blue-600 dark:text-blue-400">
                  4 (Yaxshi)
                </td>
                <td className="py-3 px-3">Asosiy qoidalarni biladi, hisob-kitoblarda kichik kamchiliklar</td>
                <td className="py-3 px-3 text-slate-500">Amaliy mashqlar ustida qo'shimcha ishlash</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                  56% – 70%
                </td>
                <td className="py-3 px-3 font-bold text-amber-600 dark:text-amber-400">
                  3 (Qoniqarli)
                </td>
                <td className="py-3 px-3">Tayanch tushunchalarni o'zlashtirgan, murakkab masalalarda qiyinchilik</td>
                <td className="py-3 px-3 text-slate-500">Muntazam takrorlash va o'qituvchi bilan konsultatsiya</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-bold text-rose-600 dark:text-rose-400 tabular-nums">
                  0% – 55%
                </td>
                <td className="py-3 px-3 font-bold text-rose-600 dark:text-rose-400">
                  2 (Qoniqarsiz)
                </td>
                <td className="py-3 px-3">Dastur talablari bajarilmagan, qayta topshirish talab qilinadi</td>
                <td className="py-3 px-3 text-slate-500">Qayta o'rganish va individual darslar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tez-tez beriladigan savollar (FAQ) */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Tez-tez so'raladigan savollar (FAQ)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            O'quvchilar va ota-onalarni qiziqtirgan eng muhim masalalar
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-800/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Aloqa va Fikr-mulohaza formasi */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Biz bilan bog'lanish & Fikr-mulohaza
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Savollaringiz, takliflaringiz yoki xatoliklar haqida xabar bering
          </p>
        </div>

        {formSubmitted && (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Xabaringiz muvaffaqiyatli qabul qilindi!</p>
              <p className="text-xs text-emerald-700 dark:text-emerald-300/80 mt-0.5">
                Tez orada mutaxassislarimiz ko'rib chiqib, ko'rsatilgan kontakt orqali bog'lanishadi.
              </p>
            </div>
          </div>
        )}

        {formError && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Ismingiz
              </label>
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Masalan: Sardor Aliyev"
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kim siz?
              </label>
              <select
                value={formRole}
                onChange={(e) => setFormRole(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              >
                <option value="O'quvchi">O'quvchi (5-11 sinf)</option>
                <option value="O'qituvchi">O'qituvchi / Ustoz</option>
                <option value="Ota-ona">Ota-ona</option>
                <option value="Boshqa">Boshqa</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Telegram yoki Telefon
              </label>
              <input
                type="text"
                value={formContact}
                onChange={(e) => setFormContact(e.target.value)}
                placeholder="@username yoki +998 90..."
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Xabaringiz / Savolingiz
            </label>
            <textarea
              rows={4}
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              placeholder="Qaysi fan yoki sinf bo'yicha savolingiz bor? Yoki qanday taklif bermoqchisiz..."
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Xabarni yuborish</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
