'use client';

/**
 * AI Practice Integration Hook
 * Provides AI-powered exercise generation and verification for all practice types
 * Supports all 5 phases and 4 practice types
 */

import { useState, useCallback } from 'react';
import axios from 'axios';

// Practice types supported
export type PracticeType = 'WRITING' | 'LISTENING' | 'ORAL' | 'MULTIPLE_CHOICE' | 'TRANSLATION' | 'FILL_BLANK' | 'MATCHING';

// Phase configuration
export const PHASE_CONFIG = {
  1: { name: 'Phase A', topics: ['Arabic Alphabet', 'Basic Letters', 'Letter Forms', 'Short Vowels'], difficulty: 'easy' },
  2: { name: 'Phase B', topics: ['Word Formation', 'Basic Vocabulary', 'Simple Sentences', 'Numbers'], difficulty: 'easy' },
  3: { name: 'Phase C', topics: ['Grammar Basics', 'Verb Conjugation', 'Pronouns', 'Questions'], difficulty: 'medium' },
  4: { name: 'Phase D', topics: ['Complex Sentences', 'Advanced Grammar', 'Reading Comprehension', 'Writing'], difficulty: 'medium' },
  5: { name: 'Phase E', topics: ['Fluency', 'Conversation', 'Literature', 'Advanced Writing'], difficulty: 'hard' },
} as const;

// Exercise interface
export interface AIExercise {
  id: string;
  type: PracticeType;
  difficulty: string;
  question: string;
  questionAr?: string;
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
  explanationAr?: string;
  hint?: string;
  audioText?: string;
  matchPairs?: { left: string; right: string }[];
  xpReward: number;
}

// Verification result interface
export interface VerificationResult {
  correct: boolean;
  score: number;
  feedback: string;
  suggestions: string[];
  relatedConcepts: string[];
  correctAnswer?: string;
}

/**
 * Main hook for AI-powered practice
 */
export function useAIPractice() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exercises, setExercises] = useState<AIExercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Generate exercises for a specific practice type and phase
   */
  const generateExercises = useCallback(async (
    practiceType: PracticeType,
    phase: number,
    count: number = 5,
    language: 'en' | 'fr' | 'ar' = 'en'
  ): Promise<AIExercise[]> => {
    setLoading(true);
    setError(null);

    try {
      const phaseConfig = PHASE_CONFIG[phase as keyof typeof PHASE_CONFIG] || PHASE_CONFIG[1];
      const randomTopic = phaseConfig.topics[Math.floor(Math.random() * phaseConfig.topics.length)];

      const response = await axios.post('/api/ai/generate', {
        type: practiceType,
        difficulty: phaseConfig.difficulty,
        topic: randomTopic,
        lessonContext: `${phaseConfig.name}: ${randomTopic} practice exercises`,
        phaseLevel: phase,
        count,
        language,
      });

      if (response.data.success && response.data.exercises) {
        setExercises(response.data.exercises);
        setCurrentIndex(0);
        return response.data.exercises;
      } else {
        throw new Error('Failed to generate exercises');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate exercises';
      setError(errorMessage);
      console.error('AI exercise generation error:', err);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Verify a student's answer using AI
   */
  const verifyAnswer = useCallback(async (
    exerciseId: string,
    studentAnswer: string,
    expectedAnswer: string | number,
    exerciseType: PracticeType,
    question?: string,
    language: 'en' | 'fr' | 'ar' = 'en'
  ): Promise<VerificationResult> => {
    try {
      const response = await axios.post('/api/ai/verify', {
        exerciseId,
        studentAnswer,
        expectedAnswer,
        exerciseType,
        question,
        language,
      });

      return response.data;
    } catch (err) {
      console.error('AI verification error:', err);
      // Fallback to simple comparison
      const correct = String(studentAnswer).toLowerCase().trim() === String(expectedAnswer).toLowerCase().trim();
      return {
        correct,
        score: correct ? 100 : 0,
        feedback: correct ? 'Correct!' : 'Incorrect. Please try again.',
        suggestions: [],
        relatedConcepts: [],
      };
    }
  }, []);

  /**
   * Get AI tutor help for current exercise
   */
  const getAIHelp = useCallback(async (
    question: string,
    phase: number,
    language: 'en' | 'fr' | 'ar' = 'en'
  ): Promise<string> => {
    try {
      const response = await axios.post('/api/ai/chat', {
        message: `Help me understand: ${question}`,
        context: {
          phase: `Phase ${phase}`,
          level: phase,
          language,
        },
      });

      return response.data.response || 'I apologize, I could not generate help at this time.';
    } catch (err) {
      console.error('AI help error:', err);
      return 'Unable to get AI help at this time. Please try again.';
    }
  }, []);

  /**
   * Navigation helpers
   */
  const nextExercise = useCallback(() => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      return true;
    }
    return false;
  }, [currentIndex, exercises.length]);

  const previousExercise = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      return true;
    }
    return false;
  }, [currentIndex]);

  const resetExercises = useCallback(() => {
    setExercises([]);
    setCurrentIndex(0);
    setError(null);
  }, []);

  return {
    // State
    loading,
    error,
    exercises,
    currentExercise: exercises[currentIndex] || null,
    currentIndex,
    totalExercises: exercises.length,
    isLastExercise: currentIndex >= exercises.length - 1,
    isFirstExercise: currentIndex === 0,
    progress: exercises.length > 0 ? ((currentIndex + 1) / exercises.length) * 100 : 0,

    // Actions
    generateExercises,
    verifyAnswer,
    getAIHelp,
    nextExercise,
    previousExercise,
    resetExercises,
  };
}

/**
 * Hook for generating practice exercises for a specific phase
 */
export function usePhaseExercises(phase: number) {
  const aiPractice = useAIPractice();

  const generateWritingExercises = (count?: number) =>
    aiPractice.generateExercises('WRITING', phase, count);

  const generateListeningExercises = (count?: number) =>
    aiPractice.generateExercises('LISTENING', phase, count);

  const generateSpeakingExercises = (count?: number) =>
    aiPractice.generateExercises('ORAL', phase, count);

  const generateVocabularyExercises = (count?: number) =>
    aiPractice.generateExercises('MULTIPLE_CHOICE', phase, count);

  const generateTranslationExercises = (count?: number) =>
    aiPractice.generateExercises('TRANSLATION', phase, count);

  return {
    ...aiPractice,
    generateWritingExercises,
    generateListeningExercises,
    generateSpeakingExercises,
    generateVocabularyExercises,
    generateTranslationExercises,
  };
}
