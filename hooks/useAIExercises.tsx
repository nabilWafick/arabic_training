'use client';

/**
 * Hook for generating AI exercises
 * Calls the /api/ai/generate endpoint
 */

import { useState } from 'react';
import axios from 'axios';

export interface AIExerciseParams {
  type: 'MULTIPLE_CHOICE' | 'WRITING' | 'LISTENING' | 'ORAL' | 'MATCHING' | 'FILL_BLANK' | 'TRANSLATION';
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  lessonContext: string;
  phaseLevel: number;
  count?: number;
  language?: 'en' | 'fr' | 'ar';
}

export interface GeneratedExercise {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  hint?: string;
}

export interface AIExerciseResponse {
  success: boolean;
  exercises: GeneratedExercise[];
  metadata: {
    type: string;
    difficulty: string;
    topic: string;
    count: number;
    generatedAt: string;
  };
}

export function useAIExercises() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exercises, setExercises] = useState<GeneratedExercise[]>([]);

  /**
   * Generate exercises using AI
   */
  const generateExercises = async (params: AIExerciseParams): Promise<GeneratedExercise[]> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<AIExerciseResponse>('/api/ai/generate', params);
      
      if (response.data.success) {
        setExercises(response.data.exercises);
        return response.data.exercises;
      } else {
        throw new Error('Failed to generate exercises');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('AI exercise generation error:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  /**
   * Reset state
   */
  const reset = () => {
    setExercises([]);
    setError(null);
    setLoading(false);
  };

  return {
    generateExercises,
    loading,
    error,
    exercises,
    reset,
  };
}