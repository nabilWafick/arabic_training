/**
 * Practice Progress Store
 * Tracks user's practice history, accuracy, and weak areas
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Exercise result for tracking
 */
export interface ExerciseResult {
  id: string;
  type: 'writing' | 'listening' | 'speaking' | 'reading' | 'vocabulary';
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  score: number; // 0-100
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // seconds
  completedAt: Date;
  phase: number;
}

/**
 * Topic progress tracking
 */
export interface TopicProgress {
  topic: string;
  phase: number;
  totalAttempts: number;
  averageScore: number;
  lastPracticed: Date;
  weakAreas: string[]; // Specific concepts within the topic
}

/**
 * Practice progress state
 */
interface PracticeProgressState {
  // Exercise history
  exerciseHistory: ExerciseResult[];
  
  // Topic progress
  topicProgress: Record<string, TopicProgress>;
  
  // Global statistics
  totalPracticeTime: number; // seconds
  totalExercisesCompleted: number;
  overallAccuracy: number; // 0-100
  
  // Actions
  recordExercise: (result: Omit<ExerciseResult, 'id' | 'completedAt'>) => void;
  updateTopicProgress: (topic: string, phase: number, score: number) => void;
  getWeakAreas: () => { topic: string; avgScore: number; phase: number }[];
  getTopicStats: (topic: string) => TopicProgress | null;
  clearHistory: () => void;
}

/**
 * Practice Progress Store
 */
export const usePracticeProgressStore = create<PracticeProgressState>()(
  persist(
    (set, get) => ({
      exerciseHistory: [],
      topicProgress: {},
      totalPracticeTime: 0,
      totalExercisesCompleted: 0,
      overallAccuracy: 0,

      /**
       * Record a completed exercise
       */
      recordExercise: (result) => {
        const newResult: ExerciseResult = {
          ...result,
          id: `ex_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          completedAt: new Date(),
        };

        set((state) => {
          const newHistory = [...state.exerciseHistory, newResult];
          
          // Calculate new overall accuracy
          const totalCorrect = newHistory.reduce((sum, ex) => sum + ex.correctAnswers, 0);
          const totalQuestions = newHistory.reduce((sum, ex) => sum + ex.totalQuestions, 0);
          const newAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

          return {
            exerciseHistory: newHistory,
            totalPracticeTime: state.totalPracticeTime + result.timeSpent,
            totalExercisesCompleted: state.totalExercisesCompleted + 1,
            overallAccuracy: newAccuracy,
          };
        });

        // Update topic progress
        get().updateTopicProgress(result.topic, result.phase, result.score);
      },

      /**
       * Update topic progress
       */
      updateTopicProgress: (topic, phase, score) => {
        set((state) => {
          const existing = state.topicProgress[topic];
          
          if (existing) {
            // Update existing
            const newTotalAttempts = existing.totalAttempts + 1;
            const newAverageScore = 
              (existing.averageScore * existing.totalAttempts + score) / newTotalAttempts;

            return {
              topicProgress: {
                ...state.topicProgress,
                [topic]: {
                  ...existing,
                  totalAttempts: newTotalAttempts,
                  averageScore: newAverageScore,
                  lastPracticed: new Date(),
                },
              },
            };
          } else {
            // Create new
            return {
              topicProgress: {
                ...state.topicProgress,
                [topic]: {
                  topic,
                  phase,
                  totalAttempts: 1,
                  averageScore: score,
                  lastPracticed: new Date(),
                  weakAreas: [],
                },
              },
            };
          }
        });
      },

      /**
       * Get weak areas (topics with <70% average score)
       */
      getWeakAreas: () => {
        const { topicProgress } = get();
        
        return Object.values(topicProgress)
          .filter((tp) => tp.averageScore < 70)
          .sort((a, b) => a.averageScore - b.averageScore)
          .map((tp) => ({
            topic: tp.topic,
            avgScore: tp.averageScore,
            phase: tp.phase,
          }));
      },

      /**
       * Get statistics for a specific topic
       */
      getTopicStats: (topic) => {
        return get().topicProgress[topic] || null;
      },

      /**
       * Clear all history (for reset/testing)
       */
      clearHistory: () => {
        set({
          exerciseHistory: [],
          topicProgress: {},
          totalPracticeTime: 0,
          totalExercisesCompleted: 0,
          overallAccuracy: 0,
        });
      },
    }),
    {
      name: 'practice-progress-storage',
    }
  )
);
