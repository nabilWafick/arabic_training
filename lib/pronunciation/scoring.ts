/**
 * Pronunciation Scoring Library
 * Analyzes and scores Arabic pronunciation accuracy
 */

import type { PhaseId } from '@/data/practice/types';

// ============================================
// TYPES
// ============================================

export interface PronunciationScore {
  overall: number; // 0-100
  accuracy: number; // How close the pronunciation is
  clarity: number; // How clear the speech was
  timing: number; // Speaking speed/rhythm
  feedback: PronunciationFeedback[];
}

export interface PronunciationFeedback {
  type: 'positive' | 'improvement' | 'error';
  message: string;
  messageAr: string;
  messageFr: string;
  segment?: string;
}

export interface ArabicPhoneme {
  letter: string;
  transliteration: string;
  type: 'consonant' | 'vowel' | 'sun' | 'moon';
  difficulty: 1 | 2 | 3;
  commonMistakes: string[];
}

// ============================================
// ARABIC PHONEME DATA
// ============================================

export const ARABIC_PHONEMES: ArabicPhoneme[] = [
  { letter: 'ا', transliteration: 'a/aa', type: 'vowel', difficulty: 1, commonMistakes: ['Short vs long'] },
  { letter: 'ب', transliteration: 'b', type: 'consonant', difficulty: 1, commonMistakes: [] },
  { letter: 'ت', transliteration: 't', type: 'sun', difficulty: 1, commonMistakes: [] },
  { letter: 'ث', transliteration: 'th', type: 'sun', difficulty: 2, commonMistakes: ['Pronounced as s or t'] },
  { letter: 'ج', transliteration: 'j', type: 'moon', difficulty: 1, commonMistakes: ['Regional variations'] },
  { letter: 'ح', transliteration: 'ḥ', type: 'moon', difficulty: 3, commonMistakes: ['Confused with h or kh'] },
  { letter: 'خ', transliteration: 'kh', type: 'moon', difficulty: 2, commonMistakes: ['Confused with h'] },
  { letter: 'د', transliteration: 'd', type: 'sun', difficulty: 1, commonMistakes: [] },
  { letter: 'ذ', transliteration: 'dh', type: 'sun', difficulty: 2, commonMistakes: ['Pronounced as z or d'] },
  { letter: 'ر', transliteration: 'r', type: 'sun', difficulty: 2, commonMistakes: ['Too soft or rolled'] },
  { letter: 'ز', transliteration: 'z', type: 'sun', difficulty: 1, commonMistakes: [] },
  { letter: 'س', transliteration: 's', type: 'sun', difficulty: 1, commonMistakes: [] },
  { letter: 'ش', transliteration: 'sh', type: 'sun', difficulty: 1, commonMistakes: [] },
  { letter: 'ص', transliteration: 'ṣ', type: 'sun', difficulty: 3, commonMistakes: ['Not emphatic enough'] },
  { letter: 'ض', transliteration: 'ḍ', type: 'sun', difficulty: 3, commonMistakes: ['Not emphatic enough'] },
  { letter: 'ط', transliteration: 'ṭ', type: 'sun', difficulty: 3, commonMistakes: ['Not emphatic enough'] },
  { letter: 'ظ', transliteration: 'ẓ', type: 'sun', difficulty: 3, commonMistakes: ['Not emphatic enough'] },
  { letter: 'ع', transliteration: "'", type: 'moon', difficulty: 3, commonMistakes: ['Most difficult for non-natives'] },
  { letter: 'غ', transliteration: 'gh', type: 'moon', difficulty: 2, commonMistakes: ['Confused with g or kh'] },
  { letter: 'ف', transliteration: 'f', type: 'moon', difficulty: 1, commonMistakes: [] },
  { letter: 'ق', transliteration: 'q', type: 'moon', difficulty: 2, commonMistakes: ['Confused with k'] },
  { letter: 'ك', transliteration: 'k', type: 'moon', difficulty: 1, commonMistakes: [] },
  { letter: 'ل', transliteration: 'l', type: 'sun', difficulty: 1, commonMistakes: [] },
  { letter: 'م', transliteration: 'm', type: 'moon', difficulty: 1, commonMistakes: [] },
  { letter: 'ن', transliteration: 'n', type: 'sun', difficulty: 1, commonMistakes: [] },
  { letter: 'ه', transliteration: 'h', type: 'moon', difficulty: 2, commonMistakes: ['Too strong'] },
  { letter: 'و', transliteration: 'w/uu', type: 'vowel', difficulty: 1, commonMistakes: ['Short vs long'] },
  { letter: 'ي', transliteration: 'y/ii', type: 'vowel', difficulty: 1, commonMistakes: ['Short vs long'] },
];

// ============================================
// SCORING FUNCTIONS
// ============================================

/**
 * Calculate pronunciation score
 */
export function calculatePronunciationScore(
  expected: string,
  recognized: string,
  confidence: number,
  phaseId: PhaseId = 1
): PronunciationScore {
  const normalizedExpected = normalizeArabic(expected);
  const normalizedRecognized = normalizeArabic(recognized);

  const similarity = calculateSimilarity(normalizedExpected, normalizedRecognized);
  const adjustedAccuracy = similarity * 0.7 + confidence * 100 * 0.3;
  const clarity = confidence * 100;
  
  const expectedWords = normalizedExpected.split(' ').length;
  const recognizedWords = normalizedRecognized.split(' ').length;
  const timing = Math.max(0, 100 - Math.abs(expectedWords - recognizedWords) * 20);
  
  const overall = Math.round(adjustedAccuracy * 0.6 + clarity * 0.25 + timing * 0.15);

  const feedback = generateFeedback(normalizedExpected, normalizedRecognized, overall, phaseId);

  return {
    overall: Math.max(0, Math.min(100, overall)),
    accuracy: Math.round(adjustedAccuracy),
    clarity: Math.round(clarity),
    timing: Math.round(timing),
    feedback,
  };
}

function normalizeArabic(text: string): string {
  return text
    .replace(/[\u064B-\u065F]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ـ/g, '')
    .trim()
    .replace(/\s+/g, ' ');
}

function calculateSimilarity(str1: string, str2: string): number {
  if (str1 === str2) return 100;
  if (str1.length === 0 || str2.length === 0) return 0;

  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  
  return Math.max(0, Math.round((1 - distance / maxLength) * 100));
}

function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

function generateFeedback(
  expected: string,
  recognized: string,
  score: number,
  phaseId: PhaseId
): PronunciationFeedback[] {
  const feedback: PronunciationFeedback[] = [];

  if (score >= 90) {
    feedback.push({
      type: 'positive',
      message: 'Excellent pronunciation! Perfect clarity.',
      messageAr: 'نطق ممتاز! وضوح تام.',
      messageFr: 'Prononciation excellente ! Clarté parfaite.',
    });
  } else if (score >= 70) {
    feedback.push({
      type: 'positive',
      message: 'Good pronunciation! Keep practicing.',
      messageAr: 'نطق جيد! واصل التدريب.',
      messageFr: 'Bonne prononciation ! Continuez à pratiquer.',
    });
  } else if (score >= 50) {
    feedback.push({
      type: 'improvement',
      message: 'Getting better! Focus on clarity.',
      messageAr: 'تتحسن! ركز على الوضوح.',
      messageFr: 'Vous vous améliorez ! Concentrez-vous sur la clarté.',
    });
  } else {
    feedback.push({
      type: 'error',
      message: 'Try speaking more slowly and clearly.',
      messageAr: 'حاول التحدث ببطء ووضوح أكثر.',
      messageFr: 'Essayez de parler plus lentement et clairement.',
    });
  }

  return feedback;
}

export function getWordDifficulty(arabicWord: string): 1 | 2 | 3 {
  let maxDifficulty = 1;
  
  for (const char of arabicWord) {
    const phoneme = ARABIC_PHONEMES.find(p => p.letter === char);
    if (phoneme && phoneme.difficulty > maxDifficulty) {
      maxDifficulty = phoneme.difficulty as 1 | 2 | 3;
    }
  }
  
  return maxDifficulty as 1 | 2 | 3;
}

export function getPhonemeTips(letter: string): string[] {
  const phoneme = ARABIC_PHONEMES.find(p => p.letter === letter);
  if (!phoneme) return [];

  const tips: string[] = [];
  
  switch (letter) {
    case 'ح':
      tips.push('Breathe out from deep in the throat');
      break;
    case 'خ':
      tips.push('Like clearing your throat gently');
      break;
    case 'ع':
      tips.push('Tighten the throat muscles');
      break;
    case 'غ':
      tips.push('Like French "r" in "Paris"');
      break;
    case 'ق':
      tips.push('Deep "k" sound from back of throat');
      break;
    case 'ص':
    case 'ض':
    case 'ط':
    case 'ظ':
      tips.push('Emphatic sound - press tongue to roof of mouth');
      break;
  }
  
  if (phoneme.commonMistakes.length > 0) {
    tips.push(`Common mistake: ${phoneme.commonMistakes[0]}`);
  }
  
  return tips;
}
