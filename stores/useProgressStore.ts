import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { 
  UserStats, 
  PhaseProgress, 
  LessonProgress, 
  ProgressUpdate,
  GuestProgress 
} from '@/types';

// ============================================
// PROGRESS STORE
// ============================================

// Practice type definitions
export type PracticeType = 'writing' | 'listening' | 'speaking' | 'vocabulary';

export interface PracticeStats {
  completed: number;
  bestScore: number;
  lastPracticed: string | null;
}

export type PracticeProgressRecord = Record<PracticeType, PracticeStats>;
export type PhasePracticeProgress = Record<number, PracticeProgressRecord>;

const defaultPracticeStats = (): PracticeStats => ({
  completed: 0,
  bestScore: 0,
  lastPracticed: null,
});

const defaultPracticeProgressForPhase = (): PracticeProgressRecord => ({
  writing: defaultPracticeStats(),
  listening: defaultPracticeStats(),
  speaking: defaultPracticeStats(),
  vocabulary: defaultPracticeStats(),
});

interface ProgressState {
  // State
  phases: Record<number, PhaseProgress>;
  currentPhaseId: number;
  currentPhase?: number; // Convenience alias for currentPhaseId
  currentLessonId: string | null;
  isLoading: boolean;
  lastSynced: string | null;
  
  // Practice-specific progress state
  practiceProgress: PhasePracticeProgress;

  // Actions
  initProgress: () => void;
  updateProgress: (update: ProgressUpdate) => void;
  completeLesson: (lessonId: string, score: number, timeSpent: number) => void;
  completeExercise: (lessonId: string, exerciseId: string, score: number) => void;
  setCurrentLesson: (lessonId: string | null) => void;
  setCurrentPhase: (phaseId: number) => void;
  getPhaseProgress: (phaseId: number) => PhaseProgress | null;
  getLessonProgress: (phaseId: number, lessonId: string) => LessonProgress | null;
  getOverallProgress: () => number;
  resetProgress: () => void;
  syncWithServer: () => Promise<void>;
  
  // Practice-specific actions
  updatePracticeProgress: (
    phaseId: number, 
    type: PracticeType, 
    exercisesCompleted: number, 
    score: number
  ) => void;
  getPracticeProgress: (phaseId: number, type: PracticeType) => PracticeStats;
}

const defaultPhaseProgress = (phaseId: number): PhaseProgress => ({
  phaseId,
  started: false,
  completed: false,
  lessonsProgress: {},
  overallProgress: 0,
});

const defaultLessonProgress = (lessonId: string): LessonProgress => ({
  lessonId,
  started: false,
  completed: false,
  score: 0,
  progress: 0,
  timeSpent: 0,
  exercisesCompleted: 0,
  totalExercises: 0,
  lastAttemptAt: null,
});

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      // Initial state
      phases: {
        1: defaultPhaseProgress(1),
        2: defaultPhaseProgress(2),
        3: defaultPhaseProgress(3),
        4: defaultPhaseProgress(4),
        5: defaultPhaseProgress(5),
      },
      currentPhaseId: 1,
      currentPhase: 1,
      currentLessonId: null,
      isLoading: false,
      lastSynced: null,
      
      // Practice progress for all 5 phases
      practiceProgress: {
        1: defaultPracticeProgressForPhase(),
        2: defaultPracticeProgressForPhase(),
        3: defaultPracticeProgressForPhase(),
        4: defaultPracticeProgressForPhase(),
        5: defaultPracticeProgressForPhase(),
      },

      // Initialize progress (called on app load)
      initProgress: () => {
        const { phases, practiceProgress } = get();
        const updates: Partial<ProgressState> = {};
        
        if (Object.keys(phases).length === 0) {
          updates.phases = {
            1: defaultPhaseProgress(1),
            2: defaultPhaseProgress(2),
            3: defaultPhaseProgress(3),
            4: defaultPhaseProgress(4),
            5: defaultPhaseProgress(5),
          };
        }
        
        if (!practiceProgress || Object.keys(practiceProgress).length === 0) {
          updates.practiceProgress = {
            1: defaultPracticeProgressForPhase(),
            2: defaultPracticeProgressForPhase(),
            3: defaultPracticeProgressForPhase(),
            4: defaultPracticeProgressForPhase(),
            5: defaultPracticeProgressForPhase(),
          };
        }
        
        if (Object.keys(updates).length > 0) {
          set(updates);
        }
      },

      // Update progress for a lesson/exercise
      updateProgress: (update: ProgressUpdate) => {
        const { phases } = get();
        const phaseId = parseInt(update.lessonId.split('-')[0]);
        const phase = phases[phaseId] || defaultPhaseProgress(phaseId);
        
        const lessonProgress = phase.lessonsProgress[update.lessonId] || 
          defaultLessonProgress(update.lessonId);

        const updatedLessonProgress: LessonProgress = {
          ...lessonProgress,
          started: true,
          completed: update.completed || lessonProgress.completed,
          score: update.score ?? lessonProgress.score,
          timeSpent: lessonProgress.timeSpent + (update.timeSpent || 0),
          lastAttemptAt: new Date().toISOString(),
        };

        const updatedPhase: PhaseProgress = {
          ...phase,
          started: true,
          lessonsProgress: {
            ...phase.lessonsProgress,
            [update.lessonId]: updatedLessonProgress,
          },
        };

        // Calculate overall phase progress
        const lessonsInPhase = Object.values(updatedPhase.lessonsProgress);
        const completedLessons = lessonsInPhase.filter(l => l.completed).length;
        updatedPhase.overallProgress = lessonsInPhase.length > 0 
          ? Math.round((completedLessons / lessonsInPhase.length) * 100)
          : 0;
        updatedPhase.completed = updatedPhase.overallProgress === 100;

        set({
          phases: {
            ...phases,
            [phaseId]: updatedPhase,
          },
        });
      },

      // Complete a lesson
      completeLesson: (lessonId: string, score: number, timeSpent: number) => {
        get().updateProgress({
          lessonId,
          completed: true,
          score,
          timeSpent,
        });
      },

      // Complete an exercise
      completeExercise: (lessonId: string, exerciseId: string, score: number) => {
        const { phases } = get();
        const phaseId = parseInt(lessonId.split('-')[0]);
        const phase = phases[phaseId];
        
        if (!phase) return;

        const lessonProgress = phase.lessonsProgress[lessonId] || 
          defaultLessonProgress(lessonId);

        set({
          phases: {
            ...phases,
            [phaseId]: {
              ...phase,
              started: true,
              lessonsProgress: {
                ...phase.lessonsProgress,
                [lessonId]: {
                  ...lessonProgress,
                  started: true,
                  exercisesCompleted: lessonProgress.exercisesCompleted + 1,
                  score: Math.round((lessonProgress.score + score) / 2),
                  lastAttemptAt: new Date().toISOString(),
                },
              },
            },
          },
        });
      },

      // Set current lesson
      setCurrentLesson: (lessonId: string | null) => {
        set({ currentLessonId: lessonId });
      },

      // Set current phase
      setCurrentPhase: (phaseId: number) => {
        set({ currentPhaseId: phaseId, currentPhase: phaseId });
      },

      // Get phase progress
      getPhaseProgress: (phaseId: number) => {
        return get().phases[phaseId] || null;
      },

      // Get lesson progress
      getLessonProgress: (phaseId: number, lessonId: string) => {
        const phase = get().phases[phaseId];
        return phase?.lessonsProgress[lessonId] || null;
      },

      // Get overall progress across all phases
      getOverallProgress: () => {
        const { phases } = get();
        const phaseProgresses = Object.values(phases);
        if (phaseProgresses.length === 0) return 0;
        
        const totalProgress = phaseProgresses.reduce(
          (sum, phase) => sum + phase.overallProgress, 
          0
        );
        return Math.round(totalProgress / phaseProgresses.length);
      },

      // Update practice progress for a specific type
      updatePracticeProgress: (
        phaseId: number, 
        type: PracticeType, 
        exercisesCompleted: number, 
        score: number
      ) => {
        const { practiceProgress } = get();
        
        // Ensure the phase exists
        const phaseProgress = practiceProgress[phaseId] || defaultPracticeProgressForPhase();
        const currentStats = phaseProgress[type] || defaultPracticeStats();
        
        const updatedStats: PracticeStats = {
          completed: currentStats.completed + exercisesCompleted,
          bestScore: Math.max(currentStats.bestScore, score),
          lastPracticed: new Date().toISOString(),
        };
        
        set({
          practiceProgress: {
            ...practiceProgress,
            [phaseId]: {
              ...phaseProgress,
              [type]: updatedStats,
            },
          },
        });
      },

      // Get practice progress for a specific phase and type
      getPracticeProgress: (phaseId: number, type: PracticeType): PracticeStats => {
        const { practiceProgress } = get();
        const phaseData = practiceProgress[phaseId];
        
        if (!phaseData || !phaseData[type]) {
          return defaultPracticeStats();
        }
        
        return phaseData[type];
      },

      // Reset all progress
      resetProgress: () => {
        set({
          phases: {
            1: defaultPhaseProgress(1),
            2: defaultPhaseProgress(2),
            3: defaultPhaseProgress(3),
            4: defaultPhaseProgress(4),
            5: defaultPhaseProgress(5),
          },
          currentPhaseId: 1,
          currentLessonId: null,
          lastSynced: null,
          practiceProgress: {
            1: defaultPracticeProgressForPhase(),
            2: defaultPracticeProgressForPhase(),
            3: defaultPracticeProgressForPhase(),
            4: defaultPracticeProgressForPhase(),
            5: defaultPracticeProgressForPhase(),
          },
        });
      },

      // Sync with server (for authenticated users)
      syncWithServer: async () => {
        set({ isLoading: true });
        try {
          // TODO: Implement API call to sync progress
          // const response = await fetch('/api/progress/sync', {
          //   method: 'POST',
          //   body: JSON.stringify(get().phases),
          // });
          set({ lastSynced: new Date().toISOString() });
        } catch (error) {
          console.error('Failed to sync progress:', error);
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'arabicmaster-progress',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        phases: state.phases,
        currentPhaseId: state.currentPhaseId,
        currentLessonId: state.currentLessonId,
        lastSynced: state.lastSynced,
        practiceProgress: state.practiceProgress,
      }),
    }
  )
);
