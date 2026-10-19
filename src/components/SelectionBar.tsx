import React, { useState } from 'react';
import { Search, Filter, AlertCircle, Sparkles, Clock, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { AVAILABLE_GRADES, AVAILABLE_QUARTERS, SUBJECTS } from '../data/mockData';
import { AssessmentType, QuarterNumber, RecentSelection, Subject } from '../types';
import { SubjectIcon } from './SubjectIcon';

interface SelectionBarProps {
  selectedGrade: number | null;
  setSelectedGrade: (grade: number | null) => void;
  selectedSubjectId: string | null;
  setSelectedSubjectId: (id: string | null) => void;
  selectedType: AssessmentType;
  setSelectedType: (type: AssessmentType) => void;
  selectedQuarter: QuarterNumber | null;
  setSelectedQuarter: (quarter: QuarterNumber | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  recentSelections: RecentSelection[];
  onSelectRecent: (recent: RecentSelection) => void;
  onClearFilters: () => void;
  onViewAnswersClick: () => void;
  validationError: string | null;
}

export const SelectionBar: React.FC<SelectionBarProps> = ({
  selectedGrade,
  setSelectedGrade,
  selectedSubjectId,
  setSelectedSubjectId,
  selectedType,
  setSelectedType,
  selectedQuarter,
  setSelectedQuarter,
  searchQuery,
  setSearchQuery,
  recentSelections,
  onSelectRecent,
  onClearFilters,
  onViewAnswersClick,
  validationError,
}) => {
  const [filterExpanded, setFilterExpanded] = useState(false);

  // Filter subjects based on grade if grade is selected
  const availableSubjects = selectedGrade
    ? SUBJECTS.filter((s) => s.grades.includes(selectedGrade))
    : SUBJECTS;

  const currentSubject = SUBJECTS.find((s) => s.id === selectedSubjectId);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-6 transition-colors space-y-6">
      {/* Search & Top Action Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Fan nomi, sinf yoki mavzu bo'yicha qidirish..."
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Tozalash
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {(selectedGrade || selectedSubjectId || selectedQuarter || selectedType !== 'ALL' || searchQuery) && (
            <button
              onClick={onClearFilters}
              className="px-3.5 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors whitespace-nowrap"
            >
              Filtrlarni tozalash
            </button>
          )}

          {/* Primary CTA: Javoblarni ko'rish */}
          <button
            onClick={onViewAnswersClick}
            className="flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            <span>Javoblarni ko'rish</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Validation alert if user clicked button without required fields */}
      {validationError && (
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs sm:text-sm animate-shake">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold">{validationError}</p>
            <p className="text-xs text-amber-700 dark:text-amber-300/80 mt-0.5">
              Quyidagi qadamlardan sinf va fanni tanlang, so'ngra javoblar sahifasiga o'ting.
            </p>
          </div>
        </div>
      )}

      {/* STEP 1: Sinf tanlash (5 - 11 sinflar) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-[11px] font-bold">
              1
            </span>
            Sinfni tanlang:
          </span>
          <span className="text-[11px] font-normal text-slate-400">
            {selectedGrade ? `${selectedGrade}-sinf tanlandi` : 'Barcha sinflar'}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <button
            onClick={() => setSelectedGrade(null)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedGrade === null
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Barchasi
          </button>
          {AVAILABLE_GRADES.map((grade) => {
            const isSelected = selectedGrade === grade;
            return (
              <button
                key={grade}
                onClick={() => setSelectedGrade(isSelected ? null : grade)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm ring-2 ring-indigo-500/20'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {grade}-sinf
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 2: Fan tanlash */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-[11px] font-bold">
              2
            </span>
            Fanni tanlang:
          </span>
          <span className="text-[11px] font-normal text-slate-400">
            {currentSubject ? currentSubject.name : 'Barcha fanlar'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          <button
            onClick={() => setSelectedSubjectId(null)}
            className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
              selectedSubjectId === null
                ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-semibold shadow-xs'
                : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <div className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
            </div>
            <span className="truncate">Barcha fanlar</span>
          </button>

          {availableSubjects.map((subject) => {
            const isSelected = selectedSubjectId === subject.id;
            return (
              <button
                key={subject.id}
                onClick={() => setSelectedSubjectId(isSelected ? null : subject.id)}
                className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold ring-1 ring-indigo-500/30'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <SubjectIcon name={subject.iconName} className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{subject.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 3 & 4: Baholash turi va Chorak */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        {/* Baholash turi (BSB / CHSB) */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-[11px] font-bold">
              3
            </span>
            Baholash turi:
          </div>

          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {(
              [
                { id: 'ALL', label: 'Barchasi' },
                { id: 'BSB', label: 'BSB (Bo‘lim)' },
                { id: 'CHSB', label: 'CHSB (Choraklik)' },
              ] as const
            ).map((item) => {
              const isActive = selectedType === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedType(item.id)}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all text-center whitespace-nowrap ${
                    isActive
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chorak tanlash (1 - 4 choraklar) */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-[11px] font-bold">
              4
            </span>
            Chorak:
          </div>

          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => setSelectedQuarter(null)}
              className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all text-center whitespace-nowrap ${
                selectedQuarter === null
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Hammasi
            </button>
            {AVAILABLE_QUARTERS.map((q) => {
              const isActive = selectedQuarter === q.number;
              return (
                <button
                  key={q.number}
                  onClick={() => setSelectedQuarter(isActive ? null : q.number)}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all text-center whitespace-nowrap ${
                    isActive
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {q.number}-chorak
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Oxirgi tanlovlar (Recently selected) */}
      {recentSelections.length > 0 && (
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 dark:text-slate-500 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5" />
            <span>Oxirgi qidiruvlar:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {recentSelections.slice(0, 4).map((rec) => (
              <button
                key={rec.id}
                onClick={() => onSelectRecent(rec)}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/60 dark:hover:text-indigo-300 transition-colors"
              >
                <span>
                  {rec.grade}-sinf · {rec.subjectName} · {rec.type}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
