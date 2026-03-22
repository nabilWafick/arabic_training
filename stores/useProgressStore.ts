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

interface ProgressState {
  // State
  phases: Record<number, PhaseProgress>;
  currentPhaseId: number;
  currentPhase?: number; // Convenience alias for currentPhaseId
  currentLessonId: string | null;
  isLoading: boolean;
  lastSynced: string | null;

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

      // Initialize progress (called on app load)
      initProgress: () => {
        const { phases } = get();
        if (Object.keys(phases).length === 0) {
          set({
            phases: {
              1: defaultPhaseProgress(1),
              2: defaultPhaseProgress(2),
              3: defaultPhaseProgress(3),
              4: defaultPhaseProgress(4),
              5: defaultPhaseProgress(5),
            },
          });
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
      }),
    }
  )
);
