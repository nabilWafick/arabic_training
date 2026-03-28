/**
 * Challenge Store
 * Manages daily challenges, streaks, and challenge history
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { PhaseId } from '@/data/practice/types';
import { 
  getTodayDateString, 
  getMilestoneForStreak,
  getNextMilestone,
  type StreakMilestone 
} from '@/data/challenges/challenge-templates';

// ============================================
// TYPES
// ============================================

export interface ChallengeCompletion {
  date: string;
  phaseId: PhaseId;
  score: number;
  accuracy: number;
  xpEarned: number;
  timeSpent: number; // in seconds
  exercisesCompleted: number;
  exercisesTotal: number;
}

export interface ChallengeState {
  // Streak data
  currentStreak: number;
  bestStreak: number;
  lastCompletedDate: string | null;
  
  // Challenge history
  completedChallenges: ChallengeCompletion[];
  
  // Today's challenge state
  todayChallengeStarted: boolean;
  todayChallengeCompleted: boolean;
  todayChallengeProgress: {
    exercisesCompleted: number;
    correctAnswers: number;
    startTime: number | null;
  };
  
  // Milestone tracking
  lastMilestoneReached: number;
  milestonesUnlocked: number[];
}

export interface ChallengeActions {
  // Challenge actions
  startTodayChallenge: () => void;
  completeExercise: (isCorrect: boolean) => void;
  completeChallenge: (phaseId: PhaseId, accuracy: number, xpEarned: number, totalExercises: number) => ChallengeCompletion;
  
  // Streak actions
  checkAndUpdateStreak: () => void;
  
  // Getters
  getTodayProgress: () => ChallengeState['todayChallengeProgress'];
  getStreakInfo: () => {
    current: number;
    best: number;
    nextMilestone: StreakMilestone | null;
    currentMilestone: StreakMilestone | null;
  };
  getChallengeHistory: (limit?: number) => ChallengeCompletion[];
  getCalendarData: (month: number, year: number) => Record<string, ChallengeCompletion>;
  
  // Reset
  resetTodayProgress: () => void;
  resetAllData: () => void;
}

// ============================================
// INITIAL STATE
// ============================================

const initialState: ChallengeState = {
  currentStreak: 0,
  bestStreak: 0,
  lastCompletedDate: null,
  completedChallenges: [],
  todayChallengeStarted: false,
  todayChallengeCompleted: false,
  todayChallengeProgress: {
    exercisesCompleted: 0,
    correctAnswers: 0,
    startTime: null,
  },
  lastMilestoneReached: 0,
  milestonesUnlocked: [],
};

// ============================================
// STORE
// ============================================

export const useChallengeStore = create<ChallengeState & ChallengeActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      /**
       * Start today's challenge
       */
      startTodayChallenge: () => {
        const today = getTodayDateString();
        const { lastCompletedDate, todayChallengeCompleted } = get();
        
        // If already completed today, don't reset
        if (lastCompletedDate === today && todayChallengeCompleted) {
          return;
        }
        
        set({
          todayChallengeStarted: true,
          todayChallengeProgress: {
            exercisesCompleted: 0,
            correctAnswers: 0,
            startTime: Date.now(),
          },
        });
      },

      /**
       * Complete a single exercise in the challenge
       */
      completeExercise: (isCorrect: boolean) => {
        set(state => ({
          todayChallengeProgress: {
            ...state.todayChallengeProgress,
            exercisesCompleted: state.todayChallengeProgress.exercisesCompleted + 1,
            correctAnswers: state.todayChallengeProgress.correctAnswers + (isCorrect ? 1 : 0),
          },
        }));
      },

      /**
       * Complete the daily challenge
       */
      completeChallenge: (phaseId, accuracy, xpEarned, totalExercises) => {
        const today = getTodayDateString();
        const { todayChallengeProgress, currentStreak, bestStreak, lastCompletedDate, milestonesUnlocked } = get();
        
        // Calculate time spent
        const timeSpent = todayChallengeProgress.startTime 
          ? Math.round((Date.now() - todayChallengeProgress.startTime) / 1000)
          : 0;
        
        // Create completion record
        const completion: ChallengeCompletion = {
          date: today,
          phaseId,
          score: Math.round(accuracy),
          accuracy,
          xpEarned,
          timeSpent,
          exercisesCompleted: todayChallengeProgress.exercisesCompleted,
          exercisesTotal: totalExercises,
        };
        
        // Calculate new streak
        let newStreak = currentStreak;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (lastCompletedDate === yesterdayStr) {
          // Continuing streak
          newStreak = currentStreak + 1;
        } else if (lastCompletedDate !== today) {
          // Starting new streak (or first challenge)
          newStreak = 1;
        }
        
        // Check for milestone
        const milestone = getMilestoneForStreak(newStreak);
        const newMilestones = milestone && !milestonesUnlocked.includes(newStreak)
          ? [...milestonesUnlocked, newStreak]
          : milestonesUnlocked;
        
        set(state => ({
          todayChallengeCompleted: true,
          lastCompletedDate: today,
          currentStreak: newStreak,
          bestStreak: Math.max(newStreak, bestStreak),
          lastMilestoneReached: milestone ? newStreak : state.lastMilestoneReached,
          milestonesUnlocked: newMilestones,
          completedChallenges: [...state.completedChallenges, completion],
        }));
        
        return completion;
      },

      /**
       * Check and update streak (call on app load)
       */
      checkAndUpdateStreak: () => {
        const today = getTodayDateString();
        const { lastCompletedDate, currentStreak } = get();
        
        if (!lastCompletedDate) return;
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        // If last completion was not today or yesterday, reset streak
        if (lastCompletedDate !== today && lastCompletedDate !== yesterdayStr) {
          set({ currentStreak: 0 });
        }
        
        // Check if today's challenge is already completed
        if (lastCompletedDate === today) {
          set({ todayChallengeCompleted: true });
        }
      },

      /**
       * Get today's progress
       */
      getTodayProgress: () => get().todayChallengeProgress,

      /**
       * Get streak information
       */
      getStreakInfo: () => {
        const { currentStreak, bestStreak } = get();
        return {
          current: currentStreak,
          best: bestStreak,
          nextMilestone: getNextMilestone(currentStreak),
          currentMilestone: getMilestoneForStreak(currentStreak),
        };
      },

      /**
       * Get challenge history
       */
      getChallengeHistory: (limit) => {
        const { completedChallenges } = get();
        const sorted = [...completedChallenges].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        return limit ? sorted.slice(0, limit) : sorted;
      },

      /**
       * Get calendar data for a specific month
       */
      getCalendarData: (month, year) => {
        const { completedChallenges } = get();
        const data: Record<string, ChallengeCompletion> = {};
        
        for (const challenge of completedChallenges) {
          const date = new Date(challenge.date);
          if (date.getMonth() === month && date.getFullYear() === year) {
            data[challenge.date] = challenge;
          }
        }
        
        return data;
      },

      /**
       * Reset today's progress
       */
      resetTodayProgress: () => {
        set({
          todayChallengeStarted: false,
          todayChallengeProgress: {
            exercisesCompleted: 0,
            correctAnswers: 0,
            startTime: null,
          },
        });
      },

      /**
       * Reset all challenge data
       */
      resetAllData: () => {
        set(initialState);
      },
    }),
    {
      name: 'arabic-master-challenges',
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);
