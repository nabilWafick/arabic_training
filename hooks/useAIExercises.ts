/**
 * useAIExercises Hook
 * Generates Arabic learning exercises dynamically using Mistral AI
 * Falls back to static exercises when AI generation fails
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { PhaseId, PracticeType, DifficultyLevel } from '@/data/practice/types';
import type { AIExercise } from '@/lib/ai/schemas';

// Exercise types that can be generated
type ExerciseApiType = 
  | 'MULTIPLE_CHOICE' 
  | 'WRITING' 
  | 'LISTENING' 
  | 'ORAL' 
  | 'MATCHING' 
  | 'FILL_BLANK' 
  | 'TRANSLATION';

// Vocabulary item structure matching the practice page format
export interface VocabExercise {
  id: string;
  arabic: string;
  transliteration: string;
  english: string;
  french: string;
  category: string;
  difficulty: DifficultyLevel;
  hint?: string;
  explanation?: string;
}

// Hook state
interface AIExercisesState {
  exercises: VocabExercise[];
  isLoading: boolean;
  error: string | null;
  isAIGenerated: boolean;
}

// Phase-level context for AI prompts
const PHASE_CONTEXT: Record<PhaseId, { topic: string; lessonContext: string }> = {
  1: {
    topic: 'Arabic alphabet, colors, and numbers',
    lessonContext: 'Learning the foundations: Arabic letters (الحروف العربية), basic colors (الألوان), and numbers 1-10 (الأرقام). Focus on recognition and basic pronunciation.',
  },
  2: {
    topic: 'Family members, everyday objects, and common places',
    lessonContext: 'Building vocabulary for daily life: family terms (العائلة), household items (الأشياء المنزلية), food and drink (الطعام والشراب), and common locations.',
  },
  3: {
    topic: 'Basic verbs, adjectives, and simple sentences',
    lessonContext: 'Learning grammar foundations: past tense verbs (الفعل الماضي), descriptive adjectives (الصفات), and constructing simple Arabic sentences.',
  },
  4: {
    topic: 'Emotions, complex vocabulary, and professional terms',
    lessonContext: 'Intermediate skills: expressing feelings (المشاعر), places like hospital/airport, and modal verbs like يريد (wants) and يستطيع (can).',
  },
  5: {
    topic: 'Professional vocabulary, cultural expressions, and academic terms',
    lessonContext: 'Advanced fluency: formal/professional Arabic, cultural expressions (إن شاء الله، الحمد لله), and academic/intellectual vocabulary.',
  },
};

// Map practice types to API exercise types
const PRACTICE_TYPE_TO_API_TYPE: Record<PracticeType, ExerciseApiType> = {
  vocabulary: 'MULTIPLE_CHOICE',
  writing: 'WRITING',
  listening: 'LISTENING',
  speaking: 'ORAL',
};

// Map difficulty based on phase
const PHASE_TO_DIFFICULTY: Record<PhaseId, DifficultyLevel> = {
  1: 'easy',
  2: 'easy',
  3: 'medium',
  4: 'medium',
  5: 'hard',
};

/**
 * Transform AI-generated exercises to VocabExercise format
 */
function transformAIExercises(aiExercises: AIExercise[]): VocabExercise[] {
  return aiExercises.map((exercise, index) => {
    // Extract Arabic text from questionAr or question
    const arabic = exercise.questionAr || extractArabicText(exercise.question) || '';
    
    // Extract English meaning from options or question
    const english = typeof exercise.correctAnswer === 'number' && exercise.options
      ? exercise.options[exercise.correctAnswer]
      : typeof exercise.correctAnswer === 'string' 
        ? exercise.correctAnswer 
        : '';

    return {
      id: exercise.id || `ai-vocab-${index + 1}`,
      arabic,
      transliteration: generateBasicTransliteration(arabic),
      english,
      french: translateToFrench(english),
      category: inferCategory(exercise),
      difficulty: exercise.difficulty as DifficultyLevel,
      hint: exercise.hint,
      explanation: exercise.explanation,
    };
  });
}

/**
 * Extract Arabic text from a mixed-language string
 */
function extractArabicText(text: string): string {
  // Match Arabic Unicode range
  const arabicMatch = text.match(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g);
  return arabicMatch ? arabicMatch.join(' ') : '';
}

/**
 * Generate basic transliteration (simplified)
 */
function generateBasicTransliteration(arabic: string): string {
  const basicMap: Record<string, string> = {
    'ا': 'a', 'أ': "'a", 'إ': "'i", 'آ': 'aa', 'ب': 'b', 'ت': 't', 'ث': 'th',
    'ج': 'j', 'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z',
    'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'zh', 'ع': "'",
    'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
    'ه': 'h', 'و': 'w', 'ي': 'y', 'ى': 'a', 'ة': 'a', 'ء': "'",
    // Harakat (vowel marks)
    '\u064E': 'a', '\u064F': 'u', '\u0650': 'i', '\u0652': '', '\u0651': '',
  };
  
  return arabic
    .split('')
    .map(char => basicMap[char] || '')
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Basic English to French translation for common vocabulary
 */
function translateToFrench(english: string): string {
  const translations: Record<string, string> = {
    // Colors
    'red': 'rouge', 'blue': 'bleu', 'green': 'vert', 'yellow': 'jaune',
    'white': 'blanc', 'black': 'noir', 'orange': 'orange', 'purple': 'violet',
    // Numbers
    'one': 'un', 'two': 'deux', 'three': 'trois', 'four': 'quatre',
    'five': 'cinq', 'six': 'six', 'seven': 'sept', 'eight': 'huit',
    'nine': 'neuf', 'ten': 'dix',
    // Family
    'father': 'père', 'mother': 'mère', 'brother': 'frère', 'sister': 'sœur',
    'son': 'fils', 'daughter': 'fille', 'family': 'famille',
    // Common
    'house': 'maison', 'book': 'livre', 'pen': 'stylo', 'water': 'eau',
    'bread': 'pain', 'car': 'voiture', 'school': 'école', 'teacher': 'professeur',
    'happy': 'heureux', 'sad': 'triste', 'big': 'grand', 'small': 'petit',
    'beautiful': 'beau', 'fast': 'rapide', 'slow': 'lent',
  };
  
  const lowerEnglish = english.toLowerCase();
  return translations[lowerEnglish] || english;
}

/**
 * Infer category from exercise content
 */
function inferCategory(exercise: AIExercise): string {
  const content = `${exercise.question} ${exercise.explanation || ''}`.toLowerCase();
  
  if (content.includes('color') || content.includes('لون')) return 'colors';
  if (content.includes('number') || content.includes('رقم')) return 'numbers';
  if (content.includes('family') || content.includes('عائلة')) return 'family';
  if (content.includes('food') || content.includes('طعام')) return 'food';
  if (content.includes('verb') || content.includes('فعل')) return 'verbs';
  if (content.includes('adjective') || content.includes('صفة')) return 'adjectives';
  if (content.includes('emotion') || content.includes('مشاعر')) return 'emotions';
  
  return 'vocabulary';
}

/**
 * Hook options
 */
interface UseAIExercisesOptions {
  count?: number;
  autoGenerate?: boolean;
}

/**
 * useAIExercises Hook
 * Generates exercises using AI or falls back to static data
 */
export function useAIExercises(
  phaseId: PhaseId,
  practiceType: PracticeType,
  staticExercises: VocabExercise[],
  options: UseAIExercisesOptions = {}
) {
  const { count = 10, autoGenerate = false } = options;
  
  const [state, setState] = useState<AIExercisesState>({
    exercises: staticExercises,
    isLoading: false,
    error: null,
    isAIGenerated: false,
  });
  
  const [useAI, setUseAI] = useState(autoGenerate);
  const abortControllerRef = useRef<AbortController | null>(null);
  const hasGeneratedRef = useRef(false);

  /**
   * Generate exercises via AI API
   */
  const generateExercises = useCallback(async () => {
    // Cancel any in-flight request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    const controller = new AbortController();
    abortControllerRef.current = controller;
    
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const context = PHASE_CONTEXT[phaseId];
      const difficulty = PHASE_TO_DIFFICULTY[phaseId];
      const exerciseType = PRACTICE_TYPE_TO_API_TYPE[practiceType];
      
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: exerciseType,
          difficulty,
          topic: context.topic,
          lessonContext: context.lessonContext,
          phaseLevel: phaseId,
          count: Math.min(count, 10), // API limit
          language: 'en',
        }),
        signal: controller.signal,
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success || !data.exercises || data.exercises.length === 0) {
        throw new Error('No exercises generated');
      }
      
      const transformedExercises = transformAIExercises(data.exercises);
      
      setState({
        exercises: transformedExercises,
        isLoading: false,
        error: null,
        isAIGenerated: true,
      });
      
      hasGeneratedRef.current = true;
    } catch (err) {
      // Don't update state if request was aborted
      if (err instanceof Error && err.name === 'AbortError') {
        return;
      }
      
      console.error('AI exercise generation failed:', err);
      
      // Fall back to static exercises
      setState({
        exercises: staticExercises,
        isLoading: false,
        error: err instanceof Error ? err.message : 'Failed to generate exercises',
        isAIGenerated: false,
      });
    }
  }, [phaseId, practiceType, count, staticExercises]);

  /**
   * Toggle between AI and static exercises
   */
  const toggleAI = useCallback((enabled: boolean) => {
    setUseAI(enabled);
    
    if (!enabled) {
      // Switch back to static exercises
      setState({
        exercises: staticExercises,
        isLoading: false,
        error: null,
        isAIGenerated: false,
      });
    }
  }, [staticExercises]);

  /**
   * Regenerate exercises (refresh AI content)
   */
  const regenerate = useCallback(() => {
    if (useAI) {
      generateExercises();
    } else {
      // Shuffle static exercises
      setState(prev => ({
        ...prev,
        exercises: [...staticExercises].sort(() => Math.random() - 0.5),
      }));
    }
  }, [useAI, generateExercises, staticExercises]);

  // Auto-generate when AI is enabled
  useEffect(() => {
    if (useAI && !state.isLoading && !hasGeneratedRef.current) {
      generateExercises();
    }
    
    return () => {
      // Cleanup: abort any pending request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [useAI, generateExercises, state.isLoading]);

  // Reset generation flag when phase or practice type changes
  useEffect(() => {
    hasGeneratedRef.current = false;
    if (!useAI) {
      setState({
        exercises: staticExercises,
        isLoading: false,
        error: null,
        isAIGenerated: false,
      });
    }
  }, [phaseId, practiceType, staticExercises, useAI]);

  return {
    ...state,
    useAI,
    toggleAI,
    regenerate,
    generateExercises,
  };
}

export default useAIExercises;
