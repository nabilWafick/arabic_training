/**
 * Phase 1: Foundations - Practice Data
 * Focus: Arabic alphabet, vowel marks (harakat), and numbers
 * Comprehensive practice exercises for writing, listening, speaking, and vocabulary
 */

import type {
  PhasePracticeData,
  PhaseInfo,
  LetterItem,
  VocabularyItem,
  PracticeItem,
  LetterRecognitionExercise,
  LetterTracingExercise,
  MultipleChoiceExercise,
  FlashcardExercise,
  MatchingExercise,
  ListeningExercise,
  PronunciationExercise,
  Exercise,
} from './types';

import {
  ARABIC_ALPHABET,
  ARABIC_HARAKAT,
  ARABIC_NUMBERS,
} from '@/data/curriculum';

// ============================================
// PHASE INFO
// ============================================

const PHASE_1_INFO: PhaseInfo = {
  id: 1,
  name: 'Foundations',
  nameAr: 'الأساسيات',
  nameFr: 'Les Fondations',
  description: 'Master the Arabic alphabet, vowel marks, and basic reading skills',
  descriptionAr: 'إتقان الحروف العربية وعلامات التشكيل ومهارات القراءة الأساسية',
  descriptionFr: "Maîtrisez l'alphabet arabe, les signes vocaliques et les compétences de lecture de base",
  icon: 'أ',
  color: '#c9a85c',
  unlockRequirement: 0, // First phase, no requirement
};

// ============================================
// LETTER ITEMS (All 28 Arabic Letters)
// ============================================

const LETTER_ITEMS: LetterItem[] = ARABIC_ALPHABET.map((letter, index) => ({
  id: `letter-${index + 1}`,
  arabic: letter.letter,
  transliteration: letter.transliteration,
  meaning: letter.name,
  meaningAr: letter.name, // Arabic name (transliterated)
  meaningFr: letter.name, // French uses same transliteration
  category: 'alphabet',
  difficulty: index < 10 ? 'easy' : index < 20 ? 'medium' : 'hard',
  isolated: letter.isolated,
  initial: letter.initial,
  medial: letter.medial,
  final: letter.final,
  position: index + 1,
  soundType: letter.type === 'sun letter' ? 'sun' : 'moon',
  hint: `Letter ${index + 1} of 28 - ${letter.type}`,
  hintAr: `الحرف ${index + 1} من ٢٨ - ${letter.type === 'sun letter' ? 'حرف شمسي' : letter.type === 'moon letter' ? 'حرف قمري' : 'حرف علة'}`,
  hintFr: `Lettre ${index + 1} sur 28 - ${letter.type === 'sun letter' ? 'lettre solaire' : letter.type === 'moon letter' ? 'lettre lunaire' : 'voyelle longue'}`,
  strokeOrder: getStrokeOrderHints(letter.letter),
}));

// Stroke order hints for common letter patterns
function getStrokeOrderHints(letter: string): string[] {
  const strokePatterns: Record<string, string[]> = {
    'ا': ['Start from top', 'Draw straight line down'],
    'ب': ['Draw horizontal line', 'Curve up at end', 'Add dot below'],
    'ت': ['Draw horizontal line', 'Curve up at end', 'Add two dots above'],
    'ث': ['Draw horizontal line', 'Curve up at end', 'Add three dots above'],
    'ج': ['Draw curved body', 'Add dot inside'],
    'ح': ['Draw curved body', 'No dot'],
    'خ': ['Draw curved body', 'Add dot above'],
    'د': ['Small curve', 'Straight back'],
    'ذ': ['Small curve', 'Straight back', 'Add dot above'],
    'ر': ['Short curve down'],
    'ز': ['Short curve down', 'Add dot above'],
    'س': ['Three teeth', 'Long tail'],
    'ش': ['Three teeth', 'Long tail', 'Three dots above'],
    'ص': ['Closed loop', 'Long tail'],
    'ض': ['Closed loop', 'Long tail', 'Add dot above'],
    'ط': ['Vertical line', 'Horizontal base'],
    'ظ': ['Vertical line', 'Horizontal base', 'Add dot above'],
    'ع': ['Open hook shape'],
    'غ': ['Open hook shape', 'Add dot above'],
    'ف': ['Small loop', 'Dot above'],
    'ق': ['Small loop', 'Two dots above'],
    'ك': ['Vertical stroke', 'Interior mark'],
    'ل': ['Vertical line', 'Curved base'],
    'م': ['Curved body', 'Tail down'],
    'ن': ['Curved bowl', 'Dot above'],
    'ه': ['Closed loop'],
    'و': ['Round head', 'Tail down'],
    'ي': ['Curved body', 'Two dots below'],
  };
  return strokePatterns[letter] || ['Practice the basic shape'];
}

// ============================================
// HARAKAT PRACTICE ITEMS
// ============================================

const HARAKAT_ITEMS: PracticeItem[] = ARABIC_HARAKAT.map((mark, index) => ({
  id: `haraka-${index + 1}`,
  arabic: mark.mark,
  transliteration: mark.name,
  meaning: mark.description,
  meaningAr: mark.nameAr,
  meaningFr: translateHarakaToFrench(mark.name),
  category: 'harakat',
  difficulty: index < 4 ? 'easy' : 'medium',
  hint: `Sound: "${mark.sound || 'silent'}"`,
  hintAr: `الصوت: "${mark.sound || 'صامت'}"`,
  hintFr: `Son: "${mark.sound || 'muet'}"`,
}));

function translateHarakaToFrench(name: string): string {
  const translations: Record<string, string> = {
    'Fatḥa': 'Voyelle courte "a" placée au-dessus',
    'Kasra': 'Voyelle courte "i" placée en-dessous',
    'Ḍamma': 'Voyelle courte "ou" placée au-dessus',
    'Sukūn': 'Indique l\'absence de voyelle',
    'Shadda': 'Double la consonne (gémination)',
    'Fatḥatān': 'Nunation avec fatḥa (accusatif indéfini)',
    'Kasratān': 'Nunation avec kasra (génitif indéfini)',
    'Ḍammatān': 'Nunation avec ḍamma (nominatif indéfini)',
  };
  return translations[name] || name;
}

// ============================================
// NUMBER VOCABULARY ITEMS (0-10)
// ============================================

const NUMBER_ITEMS: VocabularyItem[] = ARABIC_NUMBERS.map((num) => ({
  id: `number-${num.number}`,
  arabic: num.word,
  transliteration: num.transliteration,
  meaning: num.number.toString(),
  meaningAr: num.arabic,
  meaningFr: translateNumberToFrench(num.number),
  category: 'numbers',
  difficulty: num.number <= 5 ? 'easy' : 'medium',
  partOfSpeech: 'noun' as const,
  hint: `Arabic numeral: ${num.arabic}`,
  hintAr: `الرقم العربي: ${num.arabic}`,
  hintFr: `Chiffre arabe: ${num.arabic}`,
}));

function translateNumberToFrench(num: number): string {
  const frenchNumbers = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'];
  return frenchNumbers[num] || num.toString();
}

// ============================================
// COLOR VOCABULARY ITEMS
// ============================================

const COLOR_ITEMS: VocabularyItem[] = [
  {
    id: 'color-1',
    arabic: 'أَحْمَر',
    transliteration: 'aḥmar',
    meaning: 'red',
    meaningAr: 'لون الدم',
    meaningFr: 'rouge',
    category: 'colors',
    difficulty: 'easy',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    plural: 'حُمْر',
    hint: 'Color of blood, fire',
    hintAr: 'لون الدم والنار',
    hintFr: 'Couleur du sang, du feu',
  },
  {
    id: 'color-2',
    arabic: 'أَزْرَق',
    transliteration: 'azraq',
    meaning: 'blue',
    meaningAr: 'لون السماء',
    meaningFr: 'bleu',
    category: 'colors',
    difficulty: 'easy',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    plural: 'زُرْق',
    hint: 'Color of the sky, sea',
    hintAr: 'لون السماء والبحر',
    hintFr: 'Couleur du ciel, de la mer',
  },
  {
    id: 'color-3',
    arabic: 'أَخْضَر',
    transliteration: 'akhḍar',
    meaning: 'green',
    meaningAr: 'لون العشب',
    meaningFr: 'vert',
    category: 'colors',
    difficulty: 'easy',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    plural: 'خُضْر',
    hint: 'Color of grass, trees',
    hintAr: 'لون العشب والأشجار',
    hintFr: 'Couleur de l\'herbe, des arbres',
  },
  {
    id: 'color-4',
    arabic: 'أَصْفَر',
    transliteration: 'aṣfar',
    meaning: 'yellow',
    meaningAr: 'لون الشمس',
    meaningFr: 'jaune',
    category: 'colors',
    difficulty: 'easy',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    plural: 'صُفْر',
    hint: 'Color of the sun, bananas',
    hintAr: 'لون الشمس والموز',
    hintFr: 'Couleur du soleil, des bananes',
  },
  {
    id: 'color-5',
    arabic: 'أَبْيَض',
    transliteration: 'abyaḍ',
    meaning: 'white',
    meaningAr: 'لون الثلج',
    meaningFr: 'blanc',
    category: 'colors',
    difficulty: 'easy',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    plural: 'بِيض',
    hint: 'Color of snow, milk',
    hintAr: 'لون الثلج والحليب',
    hintFr: 'Couleur de la neige, du lait',
  },
  {
    id: 'color-6',
    arabic: 'أَسْوَد',
    transliteration: 'aswad',
    meaning: 'black',
    meaningAr: 'لون الليل',
    meaningFr: 'noir',
    category: 'colors',
    difficulty: 'easy',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    plural: 'سُود',
    hint: 'Color of night',
    hintAr: 'لون الليل',
    hintFr: 'Couleur de la nuit',
  },
  {
    id: 'color-7',
    arabic: 'بُرْتُقَالِي',
    transliteration: 'burtuqālī',
    meaning: 'orange',
    meaningAr: 'لون البرتقال',
    meaningFr: 'orange',
    category: 'colors',
    difficulty: 'medium',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    hint: 'Color of oranges',
    hintAr: 'لون فاكهة البرتقال',
    hintFr: 'Couleur de l\'orange (fruit)',
  },
  {
    id: 'color-8',
    arabic: 'بُنِّي',
    transliteration: 'bunnī',
    meaning: 'brown',
    meaningAr: 'لون القهوة',
    meaningFr: 'marron',
    category: 'colors',
    difficulty: 'medium',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    hint: 'Color of coffee, chocolate',
    hintAr: 'لون القهوة والشوكولاتة',
    hintFr: 'Couleur du café, du chocolat',
  },
  {
    id: 'color-9',
    arabic: 'وَرْدِي',
    transliteration: 'wardī',
    meaning: 'pink',
    meaningAr: 'لون الورد',
    meaningFr: 'rose',
    category: 'colors',
    difficulty: 'medium',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    hint: 'Color of roses',
    hintAr: 'لون الورود',
    hintFr: 'Couleur des roses',
  },
  {
    id: 'color-10',
    arabic: 'بَنَفْسَجِي',
    transliteration: 'banafsajī',
    meaning: 'purple',
    meaningAr: 'لون البنفسج',
    meaningFr: 'violet',
    category: 'colors',
    difficulty: 'medium',
    partOfSpeech: 'adjective',
    gender: 'masculine',
    hint: 'Color of violets, grapes',
    hintAr: 'لون البنفسج والعنب',
    hintFr: 'Couleur des violettes, du raisin',
  },
];

// ============================================
// WRITING EXERCISES
// ============================================

const WRITING_EXERCISES: Exercise[] = [
  // Letter Recognition Exercises
  ...createLetterRecognitionExercises(),
  // Letter Tracing Exercises
  ...createLetterTracingExercises(),
  // Letter Forms Multiple Choice
  ...createLetterFormsExercises(),
];

function createLetterRecognitionExercises(): LetterRecognitionExercise[] {
  const selectedLetters = [0, 4, 10, 14, 22]; // ا، ج، س، ض، ل
  return selectedLetters.map((idx, i) => ({
    id: `writing-recognition-${i + 1}`,
    type: 'letter_recognition' as const,
    phaseId: 1 as const,
    practiceType: 'writing' as const,
    difficulty: i < 3 ? 'easy' as const : 'medium' as const,
    points: 10,
    timeLimit: 30,
    instructions: `Identify the letter "${ARABIC_ALPHABET[idx].name}"`,
    instructionsAr: `حدد الحرف "${ARABIC_ALPHABET[idx].letter}"`,
    instructionsFr: `Identifiez la lettre "${ARABIC_ALPHABET[idx].name}"`,
    letter: LETTER_ITEMS[idx],
    options: generateLetterOptions(idx),
    correctIndex: Math.floor(Math.random() * 4),
  }));
}

function generateLetterOptions(correctIdx: number): string[] {
  const options = [ARABIC_ALPHABET[correctIdx].letter];
  const usedIndices = new Set([correctIdx]);
  
  while (options.length < 4) {
    const randomIdx = Math.floor(Math.random() * ARABIC_ALPHABET.length);
    if (!usedIndices.has(randomIdx)) {
      usedIndices.add(randomIdx);
      options.push(ARABIC_ALPHABET[randomIdx].letter);
    }
  }
  
  // Shuffle options
  return options.sort(() => Math.random() - 0.5);
}

function createLetterTracingExercises(): LetterTracingExercise[] {
  const selectedLetters = [0, 1, 2, 6, 22]; // ا، ب، ت، خ، ل
  return selectedLetters.map((idx, i) => ({
    id: `writing-tracing-${i + 1}`,
    type: 'letter_tracing' as const,
    phaseId: 1 as const,
    practiceType: 'writing' as const,
    difficulty: 'easy' as const,
    points: 15,
    timeLimit: 60,
    instructions: `Trace the letter "${ARABIC_ALPHABET[idx].name}" following the guide`,
    instructionsAr: `ارسم الحرف "${ARABIC_ALPHABET[idx].letter}" باتباع الدليل`,
    instructionsFr: `Tracez la lettre "${ARABIC_ALPHABET[idx].name}" en suivant le guide`,
    letter: LETTER_ITEMS[idx],
    strokePaths: getStrokeOrderHints(ARABIC_ALPHABET[idx].letter),
    acceptanceThreshold: 0.7,
  }));
}

function createLetterFormsExercises(): MultipleChoiceExercise[] {
  return [
    {
      id: 'writing-forms-1',
      type: 'multiple_choice' as const,
      phaseId: 1 as const,
      practiceType: 'writing' as const,
      difficulty: 'medium' as const,
      points: 15,
      timeLimit: 45,
      instructions: 'Select the correct initial form of the letter Ba (ب)',
      instructionsAr: 'اختر الشكل الصحيح لحرف الباء في بداية الكلمة',
      instructionsFr: 'Sélectionnez la forme initiale correcte de la lettre Ba (ب)',
      question: 'What is the initial form of ب?',
      questionAr: 'ما هو شكل حرف الباء في بداية الكلمة؟',
      questionFr: 'Quelle est la forme initiale de ب?',
      options: [
        { text: 'بـ', textAr: 'بـ', textFr: 'بـ' },
        { text: 'ـبـ', textAr: 'ـبـ', textFr: 'ـبـ' },
        { text: 'ـب', textAr: 'ـب', textFr: 'ـب' },
        { text: 'ب', textAr: 'ب', textFr: 'ب' },
      ],
      correctIndex: 0,
      explanation: 'The initial form connects to the following letter.',
      explanationAr: 'الشكل الأول يتصل بالحرف التالي.',
      explanationFr: 'La forme initiale se connecte à la lettre suivante.',
    },
    {
      id: 'writing-forms-2',
      type: 'multiple_choice' as const,
      phaseId: 1 as const,
      practiceType: 'writing' as const,
      difficulty: 'medium' as const,
      points: 15,
      timeLimit: 45,
      instructions: 'Select the correct medial form of the letter Mim (م)',
      instructionsAr: 'اختر الشكل الصحيح لحرف الميم في وسط الكلمة',
      instructionsFr: 'Sélectionnez la forme médiane correcte de la lettre Mim (م)',
      question: 'What is the medial form of م?',
      questionAr: 'ما هو شكل حرف الميم في وسط الكلمة؟',
      questionFr: 'Quelle est la forme médiane de م?',
      options: [
        { text: 'مـ', textAr: 'مـ', textFr: 'مـ' },
        { text: 'ـمـ', textAr: 'ـمـ', textFr: 'ـمـ' },
        { text: 'ـم', textAr: 'ـم', textFr: 'ـم' },
        { text: 'م', textAr: 'م', textFr: 'م' },
      ],
      correctIndex: 1,
      explanation: 'The medial form connects on both sides.',
      explanationAr: 'الشكل الوسطي يتصل من الجانبين.',
      explanationFr: 'La forme médiane se connecte des deux côtés.',
    },
    {
      id: 'writing-forms-3',
      type: 'multiple_choice' as const,
      phaseId: 1 as const,
      practiceType: 'writing' as const,
      difficulty: 'medium' as const,
      points: 15,
      timeLimit: 45,
      instructions: 'Which letters do NOT connect to the following letter?',
      instructionsAr: 'أي الحروف لا تتصل بالحرف التالي؟',
      instructionsFr: 'Quelles lettres ne se connectent PAS à la lettre suivante?',
      question: 'Select the non-connecting letter',
      questionAr: 'اختر الحرف الذي لا يتصل',
      questionFr: 'Sélectionnez la lettre non-connective',
      options: [
        { text: 'ب', textAr: 'ب', textFr: 'ب' },
        { text: 'ر', textAr: 'ر', textFr: 'ر' },
        { text: 'س', textAr: 'س', textFr: 'س' },
        { text: 'ك', textAr: 'ك', textFr: 'ك' },
      ],
      correctIndex: 1,
      explanation: 'Ra (ر) is one of the six non-connecting letters (ا، د، ذ، ر، ز، و).',
      explanationAr: 'حرف الراء من الحروف الستة التي لا تتصل بما بعدها.',
      explanationFr: 'Ra (ر) est l\'une des six lettres non-connectives.',
    },
    {
      id: 'writing-forms-4',
      type: 'multiple_choice' as const,
      phaseId: 1 as const,
      practiceType: 'writing' as const,
      difficulty: 'hard' as const,
      points: 20,
      timeLimit: 45,
      instructions: 'Identify the final form of the letter Nun (ن)',
      instructionsAr: 'حدد الشكل النهائي لحرف النون',
      instructionsFr: 'Identifiez la forme finale de la lettre Nun (ن)',
      question: 'What is the final form of ن?',
      questionAr: 'ما هو شكل حرف النون في نهاية الكلمة؟',
      questionFr: 'Quelle est la forme finale de ن?',
      options: [
        { text: 'نـ', textAr: 'نـ', textFr: 'نـ' },
        { text: 'ـنـ', textAr: 'ـنـ', textFr: 'ـنـ' },
        { text: 'ـن', textAr: 'ـن', textFr: 'ـن' },
        { text: 'ن', textAr: 'ن', textFr: 'ن' },
      ],
      correctIndex: 2,
      explanation: 'The final form connects only to the preceding letter.',
      explanationAr: 'الشكل النهائي يتصل بالحرف السابق فقط.',
      explanationFr: 'La forme finale se connecte uniquement à la lettre précédente.',
    },
    {
      id: 'writing-forms-5',
      type: 'multiple_choice' as const,
      phaseId: 1 as const,
      practiceType: 'writing' as const,
      difficulty: 'hard' as const,
      points: 20,
      timeLimit: 45,
      instructions: 'How many dots does the letter Tha (ث) have?',
      instructionsAr: 'كم عدد نقاط حرف الثاء؟',
      instructionsFr: 'Combien de points possède la lettre Tha (ث)?',
      question: 'Count the dots on ث',
      questionAr: 'عد نقاط حرف الثاء',
      questionFr: 'Comptez les points sur ث',
      options: [
        { text: 'One dot', textAr: 'نقطة واحدة', textFr: 'Un point' },
        { text: 'Two dots', textAr: 'نقطتان', textFr: 'Deux points' },
        { text: 'Three dots', textAr: 'ثلاث نقاط', textFr: 'Trois points' },
        { text: 'No dots', textAr: 'بدون نقاط', textFr: 'Aucun point' },
      ],
      correctIndex: 2,
      explanation: 'Tha (ث) has three dots above, distinguishing it from Ta (ت) with two dots.',
      explanationAr: 'حرف الثاء له ثلاث نقاط فوقه، مما يميزه عن التاء.',
      explanationFr: 'Tha (ث) a trois points au-dessus, le distinguant de Ta (ت).',
    },
  ];
}

// ============================================
// LISTENING EXERCISES
// ============================================

const LISTENING_EXERCISES: Exercise[] = [
  // Letter sound recognition
  {
    id: 'listening-letter-1',
    type: 'listening_select' as const,
    phaseId: 1 as const,
    practiceType: 'listening' as const,
    difficulty: 'easy' as const,
    points: 10,
    timeLimit: 30,
    instructions: 'Listen and select the letter you hear',
    instructionsAr: 'استمع واختر الحرف الذي تسمعه',
    instructionsFr: 'Écoutez et sélectionnez la lettre que vous entendez',
    audioText: 'ب',
    options: ['ب', 'ت', 'ث', 'ن'],
    correctAnswer: 'ب',
  } as ListeningExercise,
  {
    id: 'listening-letter-2',
    type: 'listening_select' as const,
    phaseId: 1 as const,
    practiceType: 'listening' as const,
    difficulty: 'easy' as const,
    points: 10,
    timeLimit: 30,
    instructions: 'Listen and select the letter you hear',
    instructionsAr: 'استمع واختر الحرف الذي تسمعه',
    instructionsFr: 'Écoutez et sélectionnez la lettre que vous entendez',
    audioText: 'س',
    options: ['س', 'ش', 'ص', 'ض'],
    correctAnswer: 'س',
  } as ListeningExercise,
  // Vowel mark audio
  {
    id: 'listening-haraka-1',
    type: 'listening_select' as const,
    phaseId: 1 as const,
    practiceType: 'listening' as const,
    difficulty: 'medium' as const,
    points: 15,
    timeLimit: 30,
    instructions: 'Listen and identify the vowel mark (haraka)',
    instructionsAr: 'استمع وحدد علامة التشكيل',
    instructionsFr: 'Écoutez et identifiez le signe vocalique',
    audioText: 'بَ',
    options: ['فَتْحَة (a)', 'ضَمَّة (u)', 'كَسْرَة (i)', 'سُكُون'],
    correctAnswer: 'فَتْحَة (a)',
  } as ListeningExercise,
  {
    id: 'listening-haraka-2',
    type: 'listening_select' as const,
    phaseId: 1 as const,
    practiceType: 'listening' as const,
    difficulty: 'medium' as const,
    points: 15,
    timeLimit: 30,
    instructions: 'Listen and identify the vowel mark (haraka)',
    instructionsAr: 'استمع وحدد علامة التشكيل',
    instructionsFr: 'Écoutez et identifiez le signe vocalique',
    audioText: 'بُ',
    options: ['فَتْحَة (a)', 'ضَمَّة (u)', 'كَسْرَة (i)', 'سُكُون'],
    correctAnswer: 'ضَمَّة (u)',
  } as ListeningExercise,
  {
    id: 'listening-haraka-3',
    type: 'listening_select' as const,
    phaseId: 1 as const,
    practiceType: 'listening' as const,
    difficulty: 'medium' as const,
    points: 15,
    timeLimit: 30,
    instructions: 'Listen and identify the vowel mark (haraka)',
    instructionsAr: 'استمع وحدد علامة التشكيل',
    instructionsFr: 'Écoutez et identifiez le signe vocalique',
    audioText: 'بِ',
    options: ['فَتْحَة (a)', 'ضَمَّة (u)', 'كَسْرَة (i)', 'سُكُون'],
    correctAnswer: 'كَسْرَة (i)',
  } as ListeningExercise,
  // Number audio
  {
    id: 'listening-number-1',
    type: 'listening_select' as const,
    phaseId: 1 as const,
    practiceType: 'listening' as const,
    difficulty: 'easy' as const,
    points: 10,
    timeLimit: 30,
    instructions: 'Listen and select the number you hear',
    instructionsAr: 'استمع واختر الرقم الذي تسمعه',
    instructionsFr: 'Écoutez et sélectionnez le nombre que vous entendez',
    audioText: 'وَاحِد',
    options: ['٠', '١', '٢', '٣'],
    correctAnswer: '١',
  } as ListeningExercise,
  {
    id: 'listening-number-2',
    type: 'listening_select' as const,
    phaseId: 1 as const,
    practiceType: 'listening' as const,
    difficulty: 'easy' as const,
    points: 10,
    timeLimit: 30,
    instructions: 'Listen and select the number you hear',
    instructionsAr: 'استمع واختر الرقم الذي تسمعه',
    instructionsFr: 'Écoutez et sélectionnez le nombre que vous entendez',
    audioText: 'خَمْسَة',
    options: ['٤', '٥', '٦', '٧'],
    correctAnswer: '٥',
  } as ListeningExercise,
  {
    id: 'listening-number-3',
    type: 'listening_select' as const,
    phaseId: 1 as const,
    practiceType: 'listening' as const,
    difficulty: 'medium' as const,
    points: 15,
    timeLimit: 30,
    instructions: 'Listen and select the number you hear',
    instructionsAr: 'استمع واختر الرقم الذي تسمعه',
    instructionsFr: 'Écoutez et sélectionnez le nombre que vous entendez',
    audioText: 'عَشَرَة',
    options: ['٧', '٨', '٩', '١٠'],
    correctAnswer: '١٠',
  } as ListeningExercise,
];

// ============================================
// SPEAKING EXERCISES
// ============================================

const SPEAKING_EXERCISES: Exercise[] = [
  // Letter pronunciation drills
  {
    id: 'speaking-letter-1',
    type: 'pronunciation' as const,
    phaseId: 1 as const,
    practiceType: 'speaking' as const,
    difficulty: 'easy' as const,
    points: 15,
    timeLimit: 60,
    instructions: 'Pronounce the letter Alif',
    instructionsAr: 'انطق حرف الألف',
    instructionsFr: 'Prononcez la lettre Alif',
    targetText: 'ا',
    targetTextAr: 'ا',
    transliteration: 'ā / a',
    phonemeBreakdown: ['Open your mouth wide', 'Long "ah" sound'],
    commonMistakes: ['Making it too short', 'Confusing with English "a"'],
  } as PronunciationExercise,
  {
    id: 'speaking-letter-2',
    type: 'pronunciation' as const,
    phaseId: 1 as const,
    practiceType: 'speaking' as const,
    difficulty: 'easy' as const,
    points: 15,
    timeLimit: 60,
    instructions: 'Pronounce the letter Ba',
    instructionsAr: 'انطق حرف الباء',
    instructionsFr: 'Prononcez la lettre Ba',
    targetText: 'ب',
    targetTextAr: 'ب',
    transliteration: 'b',
    phonemeBreakdown: ['Close lips together', 'Release with voice'],
    commonMistakes: ['Too soft', 'Confusing with Pa'],
  } as PronunciationExercise,
  {
    id: 'speaking-letter-3',
    type: 'pronunciation' as const,
    phaseId: 1 as const,
    practiceType: 'speaking' as const,
    difficulty: 'medium' as const,
    points: 20,
    timeLimit: 60,
    instructions: 'Pronounce the letter Ayn - a unique Arabic sound',
    instructionsAr: 'انطق حرف العين',
    instructionsFr: 'Prononcez la lettre Ayn - un son arabe unique',
    targetText: 'ع',
    targetTextAr: 'ع',
    transliteration: "'",
    phonemeBreakdown: ['Constrict throat', 'Voiced pharyngeal fricative'],
    commonMistakes: ['Using glottal stop', 'Not deep enough in throat'],
  } as PronunciationExercise,
  // Vowel sound practice
  {
    id: 'speaking-haraka-1',
    type: 'pronunciation' as const,
    phaseId: 1 as const,
    practiceType: 'speaking' as const,
    difficulty: 'easy' as const,
    points: 15,
    timeLimit: 60,
    instructions: 'Pronounce Ba with Fatha (بَ)',
    instructionsAr: 'انطق الباء مع الفتحة',
    instructionsFr: 'Prononcez Ba avec Fatha (بَ)',
    targetText: 'بَ',
    targetTextAr: 'بَ',
    transliteration: 'ba',
    phonemeBreakdown: ['Say "b"', 'Add short "a" sound'],
    commonMistakes: ['Making vowel too long', 'Wrong vowel sound'],
  } as PronunciationExercise,
  {
    id: 'speaking-haraka-2',
    type: 'pronunciation' as const,
    phaseId: 1 as const,
    practiceType: 'speaking' as const,
    difficulty: 'easy' as const,
    points: 15,
    timeLimit: 60,
    instructions: 'Pronounce Ba with Kasra (بِ)',
    instructionsAr: 'انطق الباء مع الكسرة',
    instructionsFr: 'Prononcez Ba avec Kasra (بِ)',
    targetText: 'بِ',
    targetTextAr: 'بِ',
    transliteration: 'bi',
    phonemeBreakdown: ['Say "b"', 'Add short "i" sound'],
    commonMistakes: ['Making vowel too long', 'Confusing with "ee"'],
  } as PronunciationExercise,
  {
    id: 'speaking-haraka-3',
    type: 'pronunciation' as const,
    phaseId: 1 as const,
    practiceType: 'speaking' as const,
    difficulty: 'easy' as const,
    points: 15,
    timeLimit: 60,
    instructions: 'Pronounce Ba with Damma (بُ)',
    instructionsAr: 'انطق الباء مع الضمة',
    instructionsFr: 'Prononcez Ba avec Damma (بُ)',
    targetText: 'بُ',
    targetTextAr: 'بُ',
    transliteration: 'bu',
    phonemeBreakdown: ['Say "b"', 'Add short "u" sound'],
    commonMistakes: ['Making vowel too long', 'Confusing with "oo"'],
  } as PronunciationExercise,
  // Basic sound combinations
  {
    id: 'speaking-combo-1',
    type: 'pronunciation' as const,
    phaseId: 1 as const,
    practiceType: 'speaking' as const,
    difficulty: 'medium' as const,
    points: 20,
    timeLimit: 60,
    instructions: 'Pronounce the syllable combination',
    instructionsAr: 'انطق المقطع',
    instructionsFr: 'Prononcez la combinaison de syllabes',
    targetText: 'بَابَ',
    targetTextAr: 'بَابَ',
    transliteration: 'bāba',
    phonemeBreakdown: ['ba', 'long ā', 'ba'],
    commonMistakes: ['Not holding the long vowel'],
  } as PronunciationExercise,
  {
    id: 'speaking-combo-2',
    type: 'pronunciation' as const,
    phaseId: 1 as const,
    practiceType: 'speaking' as const,
    difficulty: 'medium' as const,
    points: 20,
    timeLimit: 60,
    instructions: 'Pronounce the number five',
    instructionsAr: 'انطق الرقم خمسة',
    instructionsFr: 'Prononcez le nombre cinq',
    targetText: 'خَمْسَة',
    targetTextAr: 'خَمْسَة',
    transliteration: 'khamsa',
    phonemeBreakdown: ['kha', 'm', 'sa'],
    commonMistakes: ['Skipping the guttural kh sound'],
  } as PronunciationExercise,
];

// ============================================
// VOCABULARY EXERCISES
// ============================================

const VOCABULARY_EXERCISES: Exercise[] = [
  // Flashcard exercises
  ...createFlashcardExercises(),
  // Matching exercises
  ...createMatchingExercises(),
  // Multiple choice for colors
  ...createColorExercises(),
];

function createFlashcardExercises(): FlashcardExercise[] {
  return COLOR_ITEMS.slice(0, 5).map((color, i) => ({
    id: `vocab-flashcard-${i + 1}`,
    type: 'flashcard' as const,
    phaseId: 1 as const,
    practiceType: 'vocabulary' as const,
    difficulty: 'easy' as const,
    points: 5,
    instructions: 'Review the vocabulary word',
    instructionsAr: 'راجع الكلمة',
    instructionsFr: 'Révisez le mot de vocabulaire',
    item: color,
    showTransliteration: true,
    showExample: false,
  }));
}

function createMatchingExercises(): MatchingExercise[] {
  const numberPairs = NUMBER_ITEMS.slice(1, 6).map((n) => ({
    left: n.arabic,
    right: n.meaning,
  }));
  
  const colorPairs = COLOR_ITEMS.slice(0, 5).map((c) => ({
    left: c.arabic,
    right: c.meaning,
  }));

  return [
    {
      id: 'vocab-matching-numbers',
      type: 'matching' as const,
      phaseId: 1 as const,
      practiceType: 'vocabulary' as const,
      difficulty: 'easy' as const,
      points: 25,
      timeLimit: 120,
      instructions: 'Match the Arabic numbers with their values',
      instructionsAr: 'طابق الأرقام العربية مع قيمها',
      instructionsFr: 'Associez les nombres arabes à leurs valeurs',
      pairs: numberPairs,
      shuffledLeft: numberPairs.map(p => p.left).sort(() => Math.random() - 0.5),
      shuffledRight: numberPairs.map(p => p.right).sort(() => Math.random() - 0.5),
    },
    {
      id: 'vocab-matching-colors',
      type: 'matching' as const,
      phaseId: 1 as const,
      practiceType: 'vocabulary' as const,
      difficulty: 'easy' as const,
      points: 25,
      timeLimit: 120,
      instructions: 'Match the Arabic colors with their English meanings',
      instructionsAr: 'طابق الألوان العربية مع معانيها',
      instructionsFr: 'Associez les couleurs arabes à leurs significations',
      pairs: colorPairs,
      shuffledLeft: colorPairs.map(p => p.left).sort(() => Math.random() - 0.5),
      shuffledRight: colorPairs.map(p => p.right).sort(() => Math.random() - 0.5),
    },
  ];
}

function createColorExercises(): MultipleChoiceExercise[] {
  return [
    {
      id: 'vocab-color-1',
      type: 'multiple_choice' as const,
      phaseId: 1 as const,
      practiceType: 'vocabulary' as const,
      difficulty: 'easy' as const,
      points: 10,
      timeLimit: 30,
      instructions: 'Select the correct translation',
      instructionsAr: 'اختر الترجمة الصحيحة',
      instructionsFr: 'Sélectionnez la traduction correcte',
      question: 'What does أَحْمَر mean?',
      questionAr: 'ما معنى أَحْمَر؟',
      questionFr: 'Que signifie أَحْمَر?',
      options: [
        { text: 'Blue', textAr: 'أزرق', textFr: 'Bleu' },
        { text: 'Red', textAr: 'أحمر', textFr: 'Rouge' },
        { text: 'Green', textAr: 'أخضر', textFr: 'Vert' },
        { text: 'Yellow', textAr: 'أصفر', textFr: 'Jaune' },
      ],
      correctIndex: 1,
      explanation: 'أَحْمَر (aḥmar) means "red"',
      explanationAr: 'أَحْمَر يعني اللون الأحمر',
      explanationFr: 'أَحْمَر (aḥmar) signifie "rouge"',
    },
    {
      id: 'vocab-color-2',
      type: 'multiple_choice' as const,
      phaseId: 1 as const,
      practiceType: 'vocabulary' as const,
      difficulty: 'easy' as const,
      points: 10,
      timeLimit: 30,
      instructions: 'Select the Arabic word for the color',
      instructionsAr: 'اختر الكلمة العربية للون',
      instructionsFr: 'Sélectionnez le mot arabe pour la couleur',
      question: 'How do you say "green" in Arabic?',
      questionAr: 'كيف تقول "أخضر" بالعربية؟',
      questionFr: 'Comment dit-on "vert" en arabe?',
      options: [
        { text: 'أَصْفَر', textAr: 'أَصْفَر', textFr: 'أَصْفَر' },
        { text: 'أَزْرَق', textAr: 'أَزْرَق', textFr: 'أَزْرَق' },
        { text: 'أَخْضَر', textAr: 'أَخْضَر', textFr: 'أَخْضَر' },
        { text: 'أَبْيَض', textAr: 'أَبْيَض', textFr: 'أَبْيَض' },
      ],
      correctIndex: 2,
      explanation: 'أَخْضَر (akhḍar) means "green"',
      explanationAr: 'أَخْضَر يعني اللون الأخضر',
      explanationFr: 'أَخْضَر (akhḍar) signifie "vert"',
    },
    {
      id: 'vocab-number-1',
      type: 'multiple_choice' as const,
      phaseId: 1 as const,
      practiceType: 'vocabulary' as const,
      difficulty: 'easy' as const,
      points: 10,
      timeLimit: 30,
      instructions: 'Select the correct number',
      instructionsAr: 'اختر الرقم الصحيح',
      instructionsFr: 'Sélectionnez le nombre correct',
      question: 'What number is ثَلَاثَة?',
      questionAr: 'ما هو الرقم ثَلَاثَة؟',
      questionFr: 'Quel nombre est ثَلَاثَة?',
      options: [
        { text: '2', textAr: '٢', textFr: '2' },
        { text: '3', textAr: '٣', textFr: '3' },
        { text: '4', textAr: '٤', textFr: '4' },
        { text: '5', textAr: '٥', textFr: '5' },
      ],
      correctIndex: 1,
      explanation: 'ثَلَاثَة (thalātha) means "three"',
      explanationAr: 'ثَلَاثَة تعني الرقم ٣',
      explanationFr: 'ثَلَاثَة (thalātha) signifie "trois"',
    },
  ];
}

// ============================================
// MAIN EXPORT: PHASE 1 PRACTICE DATA
// ============================================

export const PHASE_1_PRACTICE: PhasePracticeData = {
  phaseId: 1,
  info: PHASE_1_INFO,
  
  writing: {
    description: 'Master writing Arabic letters in all their forms',
    descriptionAr: 'إتقان كتابة الحروف العربية بجميع أشكالها',
    descriptionFr: "Maîtrisez l'écriture des lettres arabes sous toutes leurs formes",
    items: LETTER_ITEMS,
    exercises: WRITING_EXERCISES,
  },
  
  listening: {
    description: 'Train your ear to recognize Arabic sounds',
    descriptionAr: 'درب أذنك على التعرف على الأصوات العربية',
    descriptionFr: 'Entraînez votre oreille à reconnaître les sons arabes',
    items: [...HARAKAT_ITEMS, ...NUMBER_ITEMS.map(n => ({
      id: n.id,
      arabic: n.arabic,
      transliteration: n.transliteration,
      meaning: n.meaning,
      meaningAr: n.meaningAr,
      meaningFr: n.meaningFr,
      category: n.category,
      difficulty: n.difficulty,
    }))],
    exercises: LISTENING_EXERCISES,
  },
  
  speaking: {
    description: 'Practice pronouncing Arabic sounds correctly',
    descriptionAr: 'تدرب على نطق الأصوات العربية بشكل صحيح',
    descriptionFr: 'Pratiquez la prononciation correcte des sons arabes',
    items: [...LETTER_ITEMS.slice(0, 10).map(l => ({
      id: l.id,
      arabic: l.arabic,
      transliteration: l.transliteration,
      meaning: l.meaning,
      meaningAr: l.meaningAr,
      meaningFr: l.meaningFr,
      category: l.category,
      difficulty: l.difficulty,
    })), ...HARAKAT_ITEMS],
    exercises: SPEAKING_EXERCISES,
  },
  
  vocabulary: {
    description: 'Build your foundational Arabic vocabulary',
    descriptionAr: 'ابنِ مفرداتك العربية الأساسية',
    descriptionFr: 'Construisez votre vocabulaire arabe de base',
    items: [...COLOR_ITEMS, ...NUMBER_ITEMS],
    exercises: VOCABULARY_EXERCISES,
    categories: ['colors', 'numbers', 'alphabet'],
  },
};

// Helper exports for external use
export {
  LETTER_ITEMS,
  HARAKAT_ITEMS,
  NUMBER_ITEMS,
  COLOR_ITEMS,
  PHASE_1_INFO,
};
