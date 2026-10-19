/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RedirectModal } from './components/RedirectModal';
import { HomePage } from './pages/HomePage';
import { SubjectsPage } from './pages/SubjectsPage';
import { AboutPage } from './pages/AboutPage';
import { generateAssessmentData, SUBJECTS, TARGET_EXTERNAL_URL } from './data/mockData';
import { AssessmentItem, AssessmentType, QuarterNumber, RecentSelection } from './types';

export default function App() {
  // Navigation tab state
  const [currentTab, setCurrentTab] = useState<'home' | 'subjects' | 'about'>('home');

  // Dark mode state with persistence
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('bsb_theme');
    if (saved) return saved === 'dark';
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('bsb_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('bsb_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Selection states with localStorage persistence
  const [selectedGrade, setSelectedGrade] = useState<number | null>(() => {
    const saved = localStorage.getItem('bsb_saved_grade');
    return saved ? Number(saved) : 8; // Default to 8th grade for rich initial view
  });

  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(() => {
    const saved = localStorage.getItem('bsb_saved_subject');
    return saved || 'matematika'; // Default to Matematika
  });

  const [selectedType, setSelectedType] = useState<AssessmentType>('ALL');
  const [selectedQuarter, setSelectedQuarter] = useState<QuarterNumber | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  // Save selected grade and subject to localStorage
  useEffect(() => {
    if (selectedGrade !== null) {
      localStorage.setItem('bsb_saved_grade', String(selectedGrade));
    }
  }, [selectedGrade]);

  useEffect(() => {
    if (selectedSubjectId !== null) {
      localStorage.setItem('bsb_saved_subject', selectedSubjectId);
    }
  }, [selectedSubjectId]);

  // Recent searches history
  const [recentSelections, setRecentSelections] = useState<RecentSelection[]>(() => {
    try {
      const saved = localStorage.getItem('bsb_recent_history');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      {
        id: 'rec-1',
        grade: 8,
        subjectId: 'matematika',
        subjectName: 'Matematika',
        type: 'BSB',
        quarter: 1,
        timestamp: Date.now() - 3600000,
      },
      {
        id: 'rec-2',
        grade: 9,
        subjectId: 'fizika',
        subjectName: 'Fizika',
        type: 'CHSB',
        quarter: 2,
        timestamp: Date.now() - 7200000,
      },
    ];
  });

  const saveRecent = (grade: number, subjectId: string, type: 'BSB' | 'CHSB', quarter: QuarterNumber) => {
    const subj = SUBJECTS.find((s) => s.id === subjectId);
    const newEntry: RecentSelection = {
      id: `rec-${Date.now()}`,
      grade,
      subjectId,
      subjectName: subj ? subj.shortName : subjectId,
      type,
      quarter,
      timestamp: Date.now(),
    };
    const updated = [newEntry, ...recentSelections.filter((r) => !(r.grade === grade && r.subjectId === subjectId && r.type === type && r.quarter === quarter))].slice(0, 5);
    setRecentSelections(updated);
    localStorage.setItem('bsb_recent_history', JSON.stringify(updated));
  };

  // Pre-generated assessment data
  const allAssessments = useMemo(() => generateAssessmentData(), []);

  // Filtered assessments
  const filteredAssessments = useMemo(() => {
    return allAssessments.filter((item) => {
      // Grade match
      if (selectedGrade !== null && item.grade !== selectedGrade) {
        return false;
      }
      // Subject match
      if (selectedSubjectId !== null && item.subjectId !== selectedSubjectId) {
        return false;
      }
      // Type match
      if (selectedType !== 'ALL' && item.type !== selectedType) {
        return false;
      }
      // Quarter match
      if (selectedQuarter !== null && item.quarter !== selectedQuarter) {
        return false;
      }
      // Query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSubject = item.subjectName.toLowerCase().includes(q);
        const matchesGrade = `${item.grade}`.includes(q);
        const matchesTopic = item.topics.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSubject && !matchesGrade && !matchesTopic) {
          return false;
        }
      }
      return true;
    });
  }, [allAssessments, selectedGrade, selectedSubjectId, selectedType, selectedQuarter, searchQuery]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    grade: number | null;
    subjectName: string;
    type: string;
    quarter: number | null;
    assessmentTitle?: string;
  }>({
    grade: null,
    subjectName: '',
    type: 'BSB',
    quarter: null,
  });

  // Handler for primary "Javoblarni ko'rish" button in selection bar
  const handleViewAnswersClick = () => {
    if (!selectedGrade && !selectedSubjectId) {
      setValidationError("Iltimos, avval sinf va fanni tanlang!");
      return;
    }
    if (!selectedGrade) {
      setValidationError("Iltimos, sinfni tanlang (5-11 sinflardan biri).");
      return;
    }
    if (!selectedSubjectId) {
      setValidationError("Iltimos, fanni tanlang.");
      return;
    }

    setValidationError(null);
    const subj = SUBJECTS.find((s) => s.id === selectedSubjectId);
    const subjectName = subj ? subj.name : 'Tanlangan fan';

    // Save to history
    saveRecent(selectedGrade, selectedSubjectId, selectedType === 'ALL' ? 'BSB' : selectedType, selectedQuarter || 1);

    setModalData({
      grade: selectedGrade,
      subjectName,
      type: selectedType === 'ALL' ? 'BSB va CHSB' : selectedType,
      quarter: selectedQuarter,
      assessmentTitle: `${selectedGrade}-sinf ${subjectName} ${selectedQuarter ? `(${selectedQuarter}-chorak)` : ''}`,
    });
    setIsModalOpen(true);
  };

  // Handler for card specific click
  const handleCardProceed = (item: AssessmentItem) => {
    setSelectedGrade(item.grade);
    setSelectedSubjectId(item.subjectId);
    setSelectedQuarter(item.quarter);
    setSelectedType(item.type);

    saveRecent(item.grade, item.subjectId, item.type, item.quarter);

    setModalData({
      grade: item.grade,
      subjectName: item.subjectName,
      type: item.type,
      quarter: item.quarter,
      assessmentTitle: item.title,
    });
    setIsModalOpen(true);
  };

  // Direct header external link
  const handleOpenDirectExternal = () => {
    const subj = SUBJECTS.find((s) => s.id === selectedSubjectId);
    setModalData({
      grade: selectedGrade,
      subjectName: subj ? subj.name : 'Barcha fanlar',
      type: selectedType === 'ALL' ? 'BSB va CHSB' : selectedType,
      quarter: selectedQuarter,
      assessmentTitle: "Rasmiy BSB va CHSB materiallari va javoblar portali",
    });
    setIsModalOpen(true);
  };

  const handleSelectRecent = (recent: RecentSelection) => {
    setSelectedGrade(recent.grade);
    setSelectedSubjectId(recent.subjectId);
    setSelectedType(recent.type);
    setSelectedQuarter(recent.quarter);
    setValidationError(null);
  };

  const handleClearFilters = () => {
    setSelectedGrade(null);
    setSelectedSubjectId(null);
    setSelectedType('ALL');
    setSelectedQuarter(null);
    setSearchQuery('');
    setValidationError(null);
  };

  const handleSelectSubjectAndNavigate = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setCurrentTab('home');
    setValidationError(null);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white transition-colors">
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenDirectExternal={handleOpenDirectExternal}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'home' && (
          <HomePage
            selectedGrade={selectedGrade}
            setSelectedGrade={(g) => {
              setSelectedGrade(g);
              setValidationError(null);
            }}
            selectedSubjectId={selectedSubjectId}
            setSelectedSubjectId={(s) => {
              setSelectedSubjectId(s);
              setValidationError(null);
            }}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedQuarter={selectedQuarter}
            setSelectedQuarter={setSelectedQuarter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            recentSelections={recentSelections}
            onSelectRecent={handleSelectRecent}
            onClearFilters={handleClearFilters}
            onViewAnswersClick={handleViewAnswersClick}
            onCardProceed={handleCardProceed}
            filteredAssessments={filteredAssessments}
            validationError={validationError}
          />
        )}

        {currentTab === 'subjects' && (
          <SubjectsPage
            onSelectSubjectAndNavigate={handleSelectSubjectAndNavigate}
            onOpenDirectExternal={handleOpenDirectExternal}
          />
        )}

        {currentTab === 'about' && <AboutPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => setCurrentTab(tab)} />

      {/* Redirect & Answers Modal */}
      <RedirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        grade={modalData.grade}
        subjectName={modalData.subjectName}
        type={modalData.type}
        quarter={modalData.quarter}
        assessmentTitle={modalData.assessmentTitle}
      />
    </div>
  );
}
