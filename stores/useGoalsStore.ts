import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { celebrate } from '@/lib/confetti';

// ============================================
// GOALS STORE
// ============================================

export type GoalType = 'xp' | 'words' | 'lessons' | 'time' | 'streak';

export interface Goal {
  id: string;
  type: GoalType;
  title: string;
  target: number;
  current: number;
  deadline: string | null;
  completed: boolean;
  completedAt: string | null;
  createdAt: string;
}

export interface SuggestedGoal {
  type: GoalType;
  target: number;
  titleKey: string;
  level: number;
}

interface GoalsState {
  goals: Goal[];
  recentlyCompletedGoal: Goal | null;
  
  // CRUD
  addGoal: (goal: Omit<Goal, 'id' | 'current' | 'completed' | 'completedAt' | 'createdAt'>) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;
  
  // Progress tracking
  updateProgress: (type: GoalType, amount: number) => void;
  checkGoalCompletion: (goalId: string) => boolean;
  
  // Helpers
  getActiveGoals: () => Goal[];
  getCompletedGoals: () => Goal[];
  getSuggestedGoals: (level: number) => SuggestedGoal[];
  clearRecentlyCompletedGoal: () => void;
  resetGoals: () => void;
}

const generateId = (): string => {
  return `goal_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

// Suggested goals based on user level
const SUGGESTED_GOALS_CONFIG: SuggestedGoal[] = [
  // Beginner (levels 1-5)
  { type: 'xp', target: 100, titleKey: 'suggestions.earn100xp', level: 1 },
  { type: 'words', target: 10, titleKey: 'suggestions.learn10words', level: 1 },
  { type: 'lessons', target: 3, titleKey: 'suggestions.complete3lessons', level: 1 },
  { type: 'streak', target: 3, titleKey: 'suggestions.maintain3streak', level: 1 },
  
  // Intermediate (levels 6-10)
  { type: 'xp', target: 500, titleKey: 'suggestions.earn500xp', level: 6 },
  { type: 'words', target: 50, titleKey: 'suggestions.learn50words', level: 6 },
  { type: 'lessons', target: 10, titleKey: 'suggestions.complete10lessons', level: 6 },
  { type: 'time', target: 120, titleKey: 'suggestions.study2hours', level: 6 },
  { type: 'streak', target: 7, titleKey: 'suggestions.maintain7streak', level: 6 },
  
  // Advanced (levels 11+)
  { type: 'xp', target: 1000, titleKey: 'suggestions.earn1000xp', level: 11 },
  { type: 'words', target: 100, titleKey: 'suggestions.learn100words', level: 11 },
  { type: 'lessons', target: 20, titleKey: 'suggestions.complete20lessons', level: 11 },
  { type: 'time', target: 300, titleKey: 'suggestions.study5hours', level: 11 },
  { type: 'streak', target: 30, titleKey: 'suggestions.maintain30streak', level: 11 },
];

export const useGoalsStore = create<GoalsState>()(
  persist(
    (set, get) => ({
      goals: [],
      recentlyCompletedGoal: null,

      // Add a new goal
      addGoal: (goalData) => {
        const newGoal: Goal = {
          id: generateId(),
          type: goalData.type,
          title: goalData.title,
          target: goalData.target,
          current: 0,
          deadline: goalData.deadline,
          completed: false,
          completedAt: null,
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          goals: [...state.goals, newGoal],
        }));
      },

      // Update an existing goal
      updateGoal: (id, updates) => {
        set((state) => ({
          goals: state.goals.map((goal) =>
            goal.id === id ? { ...goal, ...updates } : goal
          ),
        }));
      },

      // Delete a goal
      deleteGoal: (id) => {
        set((state) => ({
          goals: state.goals.filter((goal) => goal.id !== id),
        }));
      },

      // Update progress for a specific goal type
      updateProgress: (type, amount) => {
        const { goals } = get();
        const updatedGoals = goals.map((goal) => {
          if (goal.type === type && !goal.completed) {
            const newCurrent = goal.current + amount;
            const completed = newCurrent >= goal.target;
            
            if (completed && !goal.completed) {
              // Fire celebration
              if (typeof window !== 'undefined') {
                celebrate('achievement');
              }
              
              // Set recently completed goal
              set({ 
                recentlyCompletedGoal: { 
                  ...goal, 
                  current: Math.min(newCurrent, goal.target),
                  completed: true,
                  completedAt: new Date().toISOString(),
                } 
              });
            }
            
            return {
              ...goal,
              current: Math.min(newCurrent, goal.target),
              completed,
              completedAt: completed ? new Date().toISOString() : null,
            };
          }
          return goal;
        });

        set({ goals: updatedGoals });
      },

      // Check if a specific goal is completed
      checkGoalCompletion: (goalId) => {
        const goal = get().goals.find((g) => g.id === goalId);
        return goal ? goal.completed : false;
      },

      // Get active (non-completed) goals
      getActiveGoals: () => {
        return get().goals.filter((goal) => !goal.completed);
      },

      // Get completed goals
      getCompletedGoals: () => {
        return get().goals.filter((goal) => goal.completed);
      },

      // Get suggested goals based on user level
      getSuggestedGoals: (level: number) => {
        const { goals } = get();
        const activeGoalTypes = new Set(
          goals.filter((g) => !g.completed).map((g) => g.type)
        );

        // Filter suggestions based on level and exclude already active types
        return SUGGESTED_GOALS_CONFIG
          .filter((suggestion) => {
            const isAppropriateLevel = suggestion.level <= level;
            const notAlreadyActive = !activeGoalTypes.has(suggestion.type);
            return isAppropriateLevel && notAlreadyActive;
          })
          .slice(0, 3); // Return top 3 suggestions
      },

      // Clear recently completed goal notification
      clearRecentlyCompletedGoal: () => {
        set({ recentlyCompletedGoal: null });
      },

      // Reset all goals
      resetGoals: () => {
        set({
          goals: [],
          recentlyCompletedGoal: null,
        });
      },
    }),
    {
      name: 'arabicmaster-goals',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        goals: state.goals,
      }),
    }
  )
);
