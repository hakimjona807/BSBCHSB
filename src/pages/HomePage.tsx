import React from 'react';
import { Sparkles, BookOpen, Layers, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { AssessmentItem, AssessmentType, QuarterNumber, RecentSelection } from '../types';
import { SelectionBar } from '../components/SelectionBar';
import { AssessmentCard } from '../components/AssessmentCard';
import { SUBJECTS } from '../data/mockData';
import { ASSET_IMAGES } from '../assets/images';

interface HomePageProps {
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
  onCardProceed: (item: AssessmentItem) => void;
  filteredAssessments: AssessmentItem[];
  validationError: string | null;
}

export const HomePage: React.FC<HomePageProps> = ({
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
  onCardProceed,
  filteredAssessments,
  validationError,
}) => {
  const currentSubject = SUBJECTS.find((s) => s.id === selectedSubjectId);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950 text-white shadow-xl border border-indigo-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Hero Copy */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-300">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                <span>O'zbekiston Maktab Ta'limi Standarti</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white text-balance">
                BSB va CHSB Materiallari & Javoblar Portali
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                5–11-sinf o‘quvchilari uchun Bo‘lim yuzasidan summativ baholash (BSB) va
                Choraklik summativ baholash (CHSB) topshiriqlari, mezonlari hamda namunaviy
                yechimlarni qulay qidiring.
              </p>
            </div>

            {/* Quick stats strip */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-indigo-900/60 text-xs">
              <div>
                <span className="block text-indigo-300 font-bold text-lg sm:text-xl tabular-nums">
                  5–11
                </span>
                <span className="text-slate-400 text-[11px]">Sinflar qamrovi</span>
              </div>
              <div>
                <span className="block text-indigo-300 font-bold text-lg sm:text-xl tabular-nums">
                  10+
                </span>
                <span className="text-slate-400 text-[11px]">Asosiy fanlar</span>
              </div>
              <div>
                <span className="block text-indigo-300 font-bold text-lg sm:text-xl tabular-nums">
                  1–4
                </span>
                <span className="text-slate-400 text-[11px]">Choraklar bo'yicha</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src={ASSET_IMAGES.hero}
              alt="O'quvchilar BSB va CHSB topshiriqlarini o'rganmoqda"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Interactive Selection Bar */}
      <section className="scroll-mt-20" id="selection-stage">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Materialni tanlang
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Sinf, fan, baholash turi va chorakni belgilab, kerakli topshiriqlar va javoblarni toping.
          </p>
        </div>

        <SelectionBar
          selectedGrade={selectedGrade}
          setSelectedGrade={setSelectedGrade}
          selectedSubjectId={selectedSubjectId}
          setSelectedSubjectId={setSelectedSubjectId}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedQuarter={selectedQuarter}
          setSelectedQuarter={setSelectedQuarter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          recentSelections={recentSelections}
          onSelectRecent={onSelectRecent}
          onClearFilters={onClearFilters}
          onViewAnswersClick={onViewAnswersClick}
          validationError={validationError}
        />
      </section>

      {/* Filtered Assessment Cards Section */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Topilgan topshiriqlar</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 tabular-nums">
                {filteredAssessments.length} ta
              </span>
            </h2>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {selectedGrade ? `${selectedGrade}-sinf ` : ''}
              {currentSubject ? `· ${currentSubject.name} ` : ''}
              {selectedQuarter ? `· ${selectedQuarter}-chorak ` : ''}
              {selectedType !== 'ALL' ? `· ${selectedType}` : ''}
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400">
            Mavjud namunalar va baholash mezonlari
          </div>
        </div>

        {/* Assessment Items Grid */}
        {filteredAssessments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredAssessments.map((item) => (
              <AssessmentCard key={item.id} item={item} onSelectAndProceed={onCardProceed} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Mos keluvchi materiallar topilmadi
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Tanlangan sinf, fan yoki qidiruv so'zi bo'yicha ma'lumot chiqmadi. Filtrlarni o'zgartirib
              ko'ring yoki tozalang.
            </p>
            <button
              onClick={onClearFilters}
              className="px-4 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              Barcha filtrlarni tozalash
            </button>
          </div>
        )}
      </section>

      {/* Educational System Information Banner */}
      <section className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-50/70 via-indigo-50/70 to-violet-50/70 dark:from-slate-900 dark:via-indigo-950/30 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/50">
        <div className="max-w-3xl space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            O'zbekiston maktablarida BSB va CHSB tizimi
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Yangi baholash tizimi o'quvchilarning yodlab olishini emas, balki bilimlarni amalda qo'llash,
            mantiqiy fikrlash va tahlil qilish ko'nikmalarini baholashga qaratilgan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                BSB (Bo'lim baholash)
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300">
                Chorak davomida har bir bo'lim oxirida o'tkaziladi. Odatda har chorakda 2 marta.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <div className="text-xs font-bold text-purple-600 dark:text-purple-400">
                CHSB (Choraklik baholash)
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300">
                Chorak yakunida o'tkaziladigan yagona katta imtihon bo'lib, eng yuqori ballni tashkil etadi.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                100 ballik konvertatsiya
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300">
                Jami to'plangan ballar foiz nisbatida 5, 4, 3 baholarga shaffof tarzda o'tkaziladi.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
