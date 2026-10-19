import React from 'react';
import {
  Calculator,
  BookA,
  BookOpen,
  Languages,
  Hourglass,
  Dna,
  Globe,
  Atom,
  FlaskConical,
  Code,
  GraduationCap,
} from 'lucide-react';

interface SubjectIconProps {
  name: string;
  className?: string;
}

export const SubjectIcon: React.FC<SubjectIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Calculator':
      return <Calculator className={className} />;
    case 'BookA':
      return <BookA className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Languages':
      return <Languages className={className} />;
    case 'Hourglass':
      return <Hourglass className={className} />;
    case 'Dna':
      return <Dna className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Atom':
      return <Atom className={className} />;
    case 'FlaskConical':
      return <FlaskConical className={className} />;
    case 'Code':
      return <Code className={className} />;
    default:
      return <GraduationCap className={className} />;
  }
};
