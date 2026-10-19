import { Subject, AssessmentItem, QuarterNumber } from '../types';

export const TARGET_EXTERNAL_URL = 'https://bsb-chsb.com/?utm_source=chatgpt.com';

export const AVAILABLE_GRADES = [5, 6, 7, 8, 9, 10, 11] as const;

export const AVAILABLE_QUARTERS: { number: QuarterNumber; label: string; months: string }[] = [
  { number: 1, label: '1-chorak', months: 'Sentyabr – Oktyabr' },
  { number: 2, label: '2-chorak', months: 'Noyabr – Dekabr' },
  { number: 3, label: '3-chorak', months: 'Yanvar – Mart' },
  { number: 4, label: '4-chorak', months: 'Aprel – May' },
];

export const SUBJECTS: Subject[] = [
  {
    id: 'matematika',
    name: 'Matematika (Algebra / Geometriya)',
    shortName: 'Matematika',
    category: 'aniq',
    categoryLabel: 'Aniq fanlar',
    description: 'Sonlar, arifmetika, tenglamalar, funksiyalar va planimetriya/stereometriya masalalari.',
    grades: [5, 6, 7, 8, 9, 10, 11],
    color: 'from-blue-600 to-indigo-700',
    accentBg: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',
    iconName: 'Calculator',
    bsbPerQuarter: 2,
    hasPractical: true,
  },
  {
    id: 'ona_tili',
    name: 'Ona tili',
    shortName: 'Ona tili',
    category: 'gumanitar',
    categoryLabel: 'Gumanitar fanlar',
    description: "Fonetika, orfografiya, leksikologiya, morfologiya, sintaksis va imlo qoidalari.",
    grades: [5, 6, 7, 8, 9, 10, 11],
    color: 'from-violet-600 to-purple-700',
    accentBg: 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
    iconName: 'BookA',
    bsbPerQuarter: 2,
    hasPractical: true,
  },
  {
    id: 'adabiyot',
    name: 'Adabiyot',
    shortName: 'Adabiyot',
    category: 'gumanitar',
    categoryLabel: 'Gumanitar fanlar',
    description: "Klassik va zamonaviy o'zbek adabiyoti durdonalari, asarlar tahlili va insho yozish.",
    grades: [5, 6, 7, 8, 9, 10, 11],
    color: 'from-fuchsia-600 to-pink-700',
    accentBg: 'bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950/40 dark:text-fuchsia-300',
    iconName: 'BookOpen',
    bsbPerQuarter: 2,
    hasPractical: false,
  },
  {
    id: 'ingliz_tili',
    name: 'Ingliz tili (Foreign Language)',
    shortName: 'Ingliz tili',
    category: 'tillar',
    categoryLabel: 'Xorijiy tillar',
    description: 'Grammar, Reading comprehension, Listening, Writing va og\'zaki muloqot ko\'nikmalari.',
    grades: [5, 6, 7, 8, 9, 10, 11],
    color: 'from-sky-600 to-cyan-700',
    accentBg: 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300',
    iconName: 'Languages',
    bsbPerQuarter: 2,
    hasPractical: true,
  },
  {
    id: 'tarix',
    name: "Tarix (O'zbekiston & Jahon tarixi)",
    shortName: 'Tarix',
    category: 'gumanitar',
    categoryLabel: 'Gumanitar fanlar',
    description: "Qadimgi dunyo, o'rta asrlar, yangi va eng yangi davr tarixiy voqea va xronologiyasi.",
    grades: [5, 6, 7, 8, 9, 10, 11],
    color: 'from-amber-600 to-orange-700',
    accentBg: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
    iconName: 'Hourglass',
    bsbPerQuarter: 2,
    hasPractical: false,
  },
  {
    id: 'biologiya',
    name: 'Biologiya (Tabiiy fanlar)',
    shortName: 'Biologiya',
    category: 'tabiiy',
    categoryLabel: 'Tabiiy fanlar',
    description: 'Botanika, zoologiya, odam anatomiyasi, umumiy biologiya va genetika qonuniyatlari.',
    grades: [5, 6, 7, 8, 9, 10, 11],
    color: 'from-emerald-600 to-teal-700',
    accentBg: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
    iconName: 'Dna',
    bsbPerQuarter: 2,
    hasPractical: true,
  },
  {
    id: 'geografiya',
    name: 'Geografiya',
    shortName: 'Geografiya',
    category: 'tabiiy',
    categoryLabel: 'Tabiiy fanlar',
    description: "Yer tuzilishi, materiklar va okeanlar, O'zbekiston va jahon iqtisodiy-ijtimoiy geografiyasi.",
    grades: [5, 6, 7, 8, 9, 10],
    color: 'from-teal-600 to-cyan-800',
    accentBg: 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300',
    iconName: 'Globe',
    bsbPerQuarter: 2,
    hasPractical: true,
  },
  {
    id: 'fizika',
    name: 'Fizika va Astronomiya',
    shortName: 'Fizika',
    category: 'aniq',
    categoryLabel: 'Aniq fanlar',
    description: 'Mexanika, kinematika, dinamika, issiqlik, elektrodinamika, optika va atom fizikasi.',
    grades: [6, 7, 8, 9, 10, 11],
    color: 'from-indigo-600 to-blue-800',
    accentBg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300',
    iconName: 'Atom',
    bsbPerQuarter: 2,
    hasPractical: true,
  },
  {
    id: 'kimyo',
    name: 'Kimyo',
    shortName: 'Kimyo',
    category: 'tabiiy',
    categoryLabel: 'Tabiiy fanlar',
    description: 'Anorganik kimyo, davriy qonun, kimyoviy bog\'lanishlar, organik sintez va reaksiyalar.',
    grades: [7, 8, 9, 10, 11],
    color: 'from-rose-600 to-pink-800',
    accentBg: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300',
    iconName: 'FlaskConical',
    bsbPerQuarter: 2,
    hasPractical: true,
  },
  {
    id: 'informatika',
    name: 'Informatika va axborot texnologiyalari',
    shortName: 'Informatika',
    category: 'it',
    categoryLabel: 'Axborot texnologiyalari',
    description: 'Algoritmlash asoslari, Python dasturlash, ma\'lumotlar bazasi, kiberxavfsizlik va veb.',
    grades: [5, 6, 7, 8, 9, 10, 11],
    color: 'from-purple-600 to-indigo-800',
    accentBg: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300',
    iconName: 'Code',
    bsbPerQuarter: 2,
    hasPractical: true,
  },
];

// Helper to generate representative assessment items across grades and quarters
export const generateAssessmentData = (): AssessmentItem[] => {
  const items: AssessmentItem[] = [];

  const subjectTopicsMap: Record<string, Record<number, { bsb1: string[]; bsb2: string[]; chsb: string[] }>> = {
    matematika: {
      1: {
        bsb1: ['Natural sonlar va ular ustida amallar', "Sonli ifodalar va qavslarni ochish"],
        bsb2: ['Oddiy kasrlar', "Kasrlarni qo'shish va ayirish qoidalari"],
        chsb: ['1-chorak bo\'yicha yakuniy test va 5 ta murakkab matnli masala'],
      },
      2: {
        bsb1: ['O\'nli kasrlar va ularni taqqoslash', "O'nli kasrlarni ko'paytirish va bo'lish"],
        bsb2: ['Foizlar va proporsiya tushunchasi', 'Masshtab va diagrammalar tahlili'],
        chsb: ['2-chorak algebraik va geometrik hisoblashlar bo\'yicha CHSB nazorati'],
      },
      3: {
        bsb1: ['Burchaklar va geometrik shakllar', 'Uchburchak turlari va perimetri'],
        bsb2: ['Yuzalarni hisoblash formulalari', 'To\'g\'ri to\'rtburchak va kvadrat'],
        chsb: ['3-chorak umumiy hisoblash va geometrik chizmalar bo\'yicha CHSB'],
      },
      4: {
        bsb1: ['Statistika va ma\'lumotlar tahlili', 'O\'rta arifmetik qiymat'],
        bsb2: ['Yillik takrorlash topshiriqlari', 'Mustaqil loyiha ishi'],
        chsb: ['Yillik yakuniy 4-chorak CHSB imtihoni (Standart talablar)'],
      },
    },
    ona_tili: {
      1: {
        bsb1: ['Fonetika va grafika qoidalari', 'Tovushlar va harflar mutanosibligi'],
        bsb2: ['Lug\'at boyligi va so\'z ma\'nosi', 'Sinonim, antonim va omonimlar'],
        chsb: ['Matn ustida ishlash, orfografik tahlil va insho topshirig\'i'],
      },
      2: {
        bsb1: ['So\'zning tarkibi va yasalishi', 'Asos va qo\'shimchalar uyg\'unligi'],
        bsb2: ['Ot so\'z turkumi va egalik qo\'shimchalari', 'Kelishiklar tizimi'],
        chsb: ['Morfologik tahlil va ijodiy matn yaratish bo\'yicha 2-chorak CHSB'],
      },
      3: {
        bsb1: ['Sifat va son so\'z turkumlari', 'Daraja va ma\'no turlari'],
        bsb2: ['Olmosh va fe\'l zamonlari', 'Fe\'l mayllari va tuslanishi'],
        chsb: ['Grammatik qoidalar sinovi va tahrir topshiriqlari'],
      },
      4: {
        bsb1: ['Sintaksis: So\'z birikmasi va sodda gap', 'Bosh va ikkinchi darajali bo\'laklar'],
        bsb2: ['Tinish belgilari va nutq madaniyati', 'Loyiha ishi: Nutqiy taqdimot'],
        chsb: ['Yil bo\'yicha yakuniy 4-chorak CHSB kompleks nazorat ishi'],
      },
    },
    fizika: {
      1: {
        bsb1: ['Fizik miqdorlar va o\'lchash xatoliklari', 'Xalqaro birliklar tizimi (SI)'],
        bsb2: ['Mexanik harakat va to\'g\'ri chiziqli tekis harakat', 'Tezlik va tezlanish'],
        chsb: ['Kinematika qonuniyatlari bo\'yicha grafikli va hisoblashli CHSB'],
      },
      2: {
        bsb1: ['Nyuton qonunlari va kuchlar turlari', 'Gravitatsiya va butunjahon tortishish'],
        bsb2: ['Mexanik ish, quvvat va energiya', 'Energiyaning saqlanish qonuni'],
        chsb: ['Dinamika va energiya bo\'yicha laboratoriya & nazariy CHSB'],
      },
      3: {
        bsb1: ['Bosim va Paskal qonuni', 'Arximed kuchi va jismlarning suzish shartlari'],
        bsb2: ['Issiqlik hodisalari va ichki energiya', 'Issiqlik miqdori formulalari'],
        chsb: ['Gidrostatika va termodinamika bo\'yicha 3-chorak CHSB testi'],
      },
      4: {
        bsb1: ['Elektr zaryadi va Kulon qonuni', 'Elektr toki va Om qonuni'],
        bsb2: ['O\'tkazgichlarni ketma-ket va parallel ulash', 'Amaliy elektr zanjiri yig\'ish'],
        chsb: ['Yillik fizik hodisalar va zanjirlar bo\'yicha 4-chorak CHSB'],
      },
    },
    ingliz_tili: {
      1: {
        bsb1: ['Present Simple vs Continuous tense rules', 'Vocabulary: Daily routines & School life'],
        bsb2: ['Reading comprehension & Inference questions', 'Formal and informal letter writing'],
        chsb: ['Comprehensive English CHSB: Reading, Listening & Grammar test'],
      },
      2: {
        bsb1: ['Past Simple & Past Continuous narrative tenses', 'Irregular verbs practice'],
        bsb2: ['Comparative and superlative adjectives', 'Descriptive essay writing'],
        chsb: ['Listening audio comprehension and structured essay CHSB'],
      },
      3: {
        bsb1: ['Future forms: will, be going to, Present Continuous', 'Vocabulary: Technology & Environment'],
        bsb2: ['Modal verbs for obligation, permission and advice', 'Speaking topic cards & debate'],
        chsb: ['B1/B2 level standard assessment & grammar quiz CHSB'],
      },
      4: {
        bsb1: ['Conditionals (Zero, First and Second)', 'Passive Voice fundamental rules'],
        bsb2: ['Project-based speaking interview & portfolio review', 'Global challenges presentation'],
        chsb: ['End of year English evaluation CHSB (All 4 language skills)'],
      },
    },
  };

  SUBJECTS.forEach((subject) => {
    subject.grades.forEach((grade) => {
      ([1, 2, 3, 4] as QuarterNumber[]).forEach((quarter) => {
        const gradeTopicSet = subjectTopicsMap[subject.id]?.[quarter] || {
          bsb1: [`${subject.shortName} ${grade}-sinf ${quarter}-chorak 1-mavzular guruhi`, 'Asosiy tushunchalar va formulalar'],
          bsb2: [`${subject.shortName} ${grade}-sinf ${quarter}-chorak chuqurlashtirilgan amaliyot`, 'Mustaqil topshiriqlar'],
          chsb: [`${grade}-sinf ${quarter}-chorak ${subject.shortName} yakuniy baholash nazorati`],
        };

        // BSB-1
        items.push({
          id: `${subject.id}-${grade}-q${quarter}-bsb1`,
          subjectId: subject.id,
          subjectName: subject.name,
          grade,
          type: 'BSB',
          quarter,
          assessmentNumber: 1,
          title: `${grade}-sinf ${subject.shortName} · BSB-1 (${quarter}-chorak)`,
          topics: gradeTopicSet.bsb1,
          maxScore: 25,
          durationMinutes: 45,
          questionCount: 10,
          format: 'Yopiq test (5 ta) + Ochiq yozma savollar (5 ta)',
          difficulty: 'Oson',
          criteriaSummary: 'Har bir to\'g\'ri test javobi 2 balldan, yozma yechimlar bosqichma-bosqich 3 balldan baholanadi.',
          targetUrl: TARGET_EXTERNAL_URL,
        });

        // BSB-2
        items.push({
          id: `${subject.id}-${grade}-q${quarter}-bsb2`,
          subjectId: subject.id,
          subjectName: subject.name,
          grade,
          type: 'BSB',
          quarter,
          assessmentNumber: 2,
          title: `${grade}-sinf ${subject.shortName} · BSB-2 (${quarter}-chorak)`,
          topics: gradeTopicSet.bsb2,
          maxScore: 25,
          durationMinutes: 45,
          questionCount: 8,
          format: 'Amaliy topshiriq / Masala yechish / Loyiha ishi',
          difficulty: "O'rta",
          criteriaSummary: 'Tushunchalarni qo\'llay olish, hisoblash aniqligi va mantiqiy xulosalash baholanadi.',
          targetUrl: TARGET_EXTERNAL_URL,
        });

        // CHSB
        items.push({
          id: `${subject.id}-${grade}-q${quarter}-chsb`,
          subjectId: subject.id,
          subjectName: subject.name,
          grade,
          type: 'CHSB',
          quarter,
          assessmentNumber: 1,
          title: `${grade}-sinf ${subject.shortName} · CHSB (${quarter}-chorak)`,
          topics: gradeTopicSet.chsb,
          maxScore: 40,
          durationMinutes: 60,
          questionCount: 20,
          format: 'Standartlashtirilgan choraklik test va kompleks tahliliy topshiriqlar',
          difficulty: 'Murakkab',
          criteriaSummary: 'Chorak davomida o\'zlashtirilgan barcha standart kompetensiyalar qamrab olinadi.',
          targetUrl: TARGET_EXTERNAL_URL,
        });
      });
    });
  });

  return items;
};

export const FAQ_LIST = [
  {
    question: "BSB va CHSB nima degani?",
    answer:
      "BSB — Bo'lim yuzasidan summativ baholash (har bir mavzu/bo'lim yakunida o'tkaziladi). CHSB esa — Choraklik summativ baholash bo'lib, o'quv choragi yakunida o'tkaziladigan va chorak bahosini belgilaydigan eng muhim nazorat turidir.",
  },
  {
    question: "Ballar tizimi qanday hisoblanadi?",
    answer:
      "O'zbekiston umumta'lim maktablarida yangi baholash mezonlariga ko'ra o'quvchining choraklik yakuniy bahosi 100 ballik shkalada hisoblanadi: formativ baholash va BSBlar ulushi hamda CHSB (odatda 40-50 ball) jamlanmasi asosida 5 baholik tizimga konvertatsiya qilinadi.",
  },
  {
    question: "Qaysi sinflarda BSB va CHSB topshiriladi?",
    answer:
      "Respublikamiz maktablarida 5-sinfdan boshlab 11-sinfgacha barcha asosiy tayanch fanlar (Matematika, Ona tili, Chet tili, Tarix, Fizika, Kimyo, Biologiya va b.) bo'yicha BSB va CHSB o'tkaziladi.",
  },
  {
    question: "Javoblarni ko'rish tugmasi qayerga yo'naltiradi?",
    answer:
      "Foydalanuvchilar qulayligi uchun 'Javoblarni ko'rish' tugmasi bosilganda to'g'ridan-to'g'ri rasmiy https://bsb-chsb.com platformasiga yo'naltiradi va u yerda kerakli namunalar bilan tanishishingiz mumkin.",
  },
  {
    question: "Topshiriqlarni yuklab olish bepulmi?",
    answer:
      "Ha, portalimizdagi ma'lumotlar, mezonlar, tavsiyalar va yo'naltiruvchi ko'rsatmalar barcha o'quvchilar, ustozlar va ota-onalar uchun to'liq bepul va ochiq hisoblanadi.",
  },
];
