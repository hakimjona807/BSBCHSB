export type SubjectCategory = 'aniq' | 'tabiiy' | 'gumanitar' | 'tillar' | 'it';

export type AssessmentType = 'ALL' | 'BSB' | 'CHSB';

export type QuarterNumber = 1 | 2 | 3 | 4;

export interface Subject {
  id: string;
  name: string;
  shortName: string;
  category: SubjectCategory;
  categoryLabel: string;
  description: string;
  grades: number[];
  color: string;
  accentBg: string;
  iconName: string;
  bsbPerQuarter: number;
  hasPractical: boolean;
}

export interface AssessmentItem {
  id: string;
  subjectId: string;
  subjectName: string;
  grade: number;
  type: 'BSB' | 'CHSB';
  quarter: QuarterNumber;
  assessmentNumber: number; // e.g. BSB-1, BSB-2, CHSB-1
  title: string;
  topics: string[];
  maxScore: number;
  durationMinutes: number;
  questionCount: number;
  format: string;
  difficulty: 'Oson' | "O'rta" | 'Murakkab';
  criteriaSummary: string;
  targetUrl: string;
}

export interface SelectionState {
  grade: number | null;
  subjectId: string | null;
  type: AssessmentType;
  quarter: QuarterNumber | null;
}

export interface RecentSelection {
  id: string;
  grade: number;
  subjectId: string;
  subjectName: string;
  type: 'BSB' | 'CHSB';
  quarter: QuarterNumber;
  timestamp: number;
}
