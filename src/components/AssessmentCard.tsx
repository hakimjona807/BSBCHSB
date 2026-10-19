import React from 'react';
import { ExternalLink, Clock, HelpCircle, CheckCircle, FileText, Award } from 'lucide-react';
import { AssessmentItem } from '../types';
import { SubjectIcon } from './SubjectIcon';
import { SUBJECTS } from '../data/mockData';

interface AssessmentCardProps {
  item: AssessmentItem;
  onSelectAndProceed: (item: AssessmentItem) => void;
}

export const AssessmentCard: React.FC<AssessmentCardProps> = ({ item, onSelectAndProceed }) => {
  const subject = SUBJECTS.find((s) => s.id === item.subjectId);

  const isBsb = item.type === 'BSB';

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all duration-200 flex flex-col justify-between">
      <div className="space-y-3.5">
        {/* Unboxed clean metadata header */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5 font-medium">
            <span className={isBsb ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-purple-600 dark:text-purple-400 font-bold'}>
              {item.type} {item.type === 'BSB' ? `№${item.assessmentNumber}` : ''}
            </span>
            <span aria-hidden="true">·</span>
            <span>{item.grade}-sinf</span>
            <span aria-hidden="true">·</span>
            <span>{item.quarter}-chorak</span>
          </div>

          <span className="text-slate-400 dark:text-slate-500 tabular-nums">
            Maks: {item.maxScore} ball
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {item.title}
        </h3>

        {/* Topics list */}
        <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
            Qamrab olingan mavzular:
          </div>
          <ul className="space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300">
            {item.topics.map((t, idx) => (
              <li key={idx} className="truncate">
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Assessment Specs Grid */}
        <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300">
          <div>
            <span className="block text-slate-400 text-[10px]">Vaqt</span>
            <span className="font-semibold tabular-nums">{item.durationMinutes} daqiqa</span>
          </div>
          <div>
            <span className="block text-slate-400 text-[10px]">Savollar</span>
            <span className="font-semibold tabular-nums">{item.questionCount} ta savol</span>
          </div>
          <div>
            <span className="block text-slate-400 text-[10px]">Format</span>
            <span className="font-semibold truncate block" title={item.format}>
              {item.format.split(' ')[0]}...
            </span>
          </div>
        </div>

        {/* Assessment criteria hint */}
        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed italic">
          "{item.criteriaSummary}"
        </p>
      </div>

      {/* Card Action */}
      <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          {subject && (
            <div className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
              <SubjectIcon name={subject.iconName} className="w-3 h-3" />
            </div>
          )}
          <span className="truncate max-w-[120px]">{item.subjectName.split(' ')[0]}</span>
        </div>

        <button
          onClick={() => onSelectAndProceed(item)}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all active:scale-95 whitespace-nowrap"
        >
          <span>Javoblarni ko'rish</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
