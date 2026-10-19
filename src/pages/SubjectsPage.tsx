import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Layers, Check, ExternalLink } from 'lucide-react';
import { SUBJECTS, TARGET_EXTERNAL_URL } from '../data/mockData';
import { Subject, SubjectCategory } from '../types';
import { SubjectIcon } from '../components/SubjectIcon';
import { ASSET_IMAGES } from '../assets/images';

interface SubjectsPageProps {
  onSelectSubjectAndNavigate: (subjectId: string) => void;
  onOpenDirectExternal: () => void;
}

export const SubjectsPage: React.FC<SubjectsPageProps> = ({
  onSelectSubjectAndNavigate,
  onOpenDirectExternal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: SubjectCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Barcha fanlar' },
    { id: 'aniq', label: 'Aniq fanlar' },
    { id: 'tabiiy', label: 'Tabiiy fanlar' },
    { id: 'gumanitar', label: 'Gumanitar fanlar' },
    { id: 'tillar', label: 'Tillar' },
    { id: 'it', label: 'Axborot texnologiyalari' },
  ];

  const filteredSubjects = SUBJECTS.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-xl border border-indigo-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-4">
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
              O'quv fanlari katalogi
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              Maktab Dasturidagi Barcha Fanlar
            </h1>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              5–11-sinflar uchun barcha tayanch fanlar ro'yxati, baholash qamrovi va mavzular bilan
              tanishib, to'g'ridan-to'g'ri o'zingizga kerakli fanni tanlang.
            </p>
          </div>

          <div className="lg:col-span-5 relative min-h-[200px] lg:min-h-full">
            <img
              src={ASSET_IMAGES.subjects}
              alt="Fanlar ramzi"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Category tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Fan nomini qidirish..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                    <SubjectIcon name={subject.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {subject.categoryLabel}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {subject.description}
                  </p>
                </div>

                {/* Taught in grades */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    O'qitiladigan sinflar:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {subject.grades.map((grade) => (
                      <span
                        key={grade}
                        className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {grade}-sinf
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Har chorakda BSB</span>
                    <span className="font-semibold">{subject.bsbPerQuarter} marta</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Choraklik CHSB</span>
                    <span className="font-semibold">Har chorak oxirida</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                <button
                  onClick={() => onSelectSubjectAndNavigate(subject.id)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xs active:scale-95 transition-all"
                >
                  <span>BSB va CHSB ko'rish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-12 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Bunday fan topilmadi
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Qidiruv so'zini tekshiring yoki toifani 'Barcha fanlar' qilib belgilang.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 rounded-lg"
            >
              Qidiruvni tozalash
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
