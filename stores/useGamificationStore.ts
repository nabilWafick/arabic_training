import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserStats, Achievement, LevelInfo, XPGain } from '@/types';

// ============================================
// GAMIFICATION STORE
// ============================================

// XP required for each level: level^2 * 100
const calculateLevelXP = (level: number): number => level * level * 100;

// Calculate level from XP
const calculateLevel = (xp: number): number => {
  return Math.floor(Math.sqrt(xp / 100)) + 1;
};

interface GamificationState {
  // Stats
  stats: UserStats;
  
  // Achievements
  achievements: Achievement[]; // All available achievements
  unlockedAchievements: string[];
  recentAchievement: Achievement | null;
  
  // XP History
  xpHistory: XPGain[];
  
  // Streak
  streakActive: boolean;
  
  // Actions
  addXP: (amount: number, reason?: string) => void;
  checkStreak: () => void;
  updateStreak: () => void;
  unlockAchievement: (achievement: Achievement) => void;
  clearRecentAchievement: () => void;
  incrementStat: (stat: keyof Pick<UserStats, 'lessonsCompleted' | 'exercisesCompleted' | 'perfectScores' | 'wordsLearned'>) => void;
  addTimeSpent: (seconds: number) => void;
  getLevelInfo: () => LevelInfo;
  resetStats: () => void;
}

const defaultStats: UserStats = {
  xp: 0,
  level: 1,
  streak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  totalTimeSpent: 0,
  lessonsCompleted: 0,
  exercisesCompleted: 0,
  perfectScores: 0,
  wordsLearned: 0,
};

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set, get) => ({
      // Initial state
      stats: defaultStats,
      achievements: [], // Will be populated from data/achievements.ts
      unlockedAchievements: [],
      recentAchievement: null,
      xpHistory: [],
      streakActive: false,

      // Add XP
      addXP: (amount: number, reason?: string) => {
        const { stats, xpHistory } = get();
        const newXP = stats.xp + amount;
        const newLevel = calculateLevel(newXP);
        
        const xpGain: XPGain = {
          amount,
          reason: reason || "XP earned",
          timestamp: new Date(),
        };

        set({
          stats: {
            ...stats,
            xp: newXP,
            level: newLevel,
          },
          xpHistory: [...xpHistory.slice(-49), xpGain], // Keep last 50 entries
        });
      },

      // Check if streak is still active (called on app load)
      checkStreak: () => {
        const { stats } = get();
        const lastActive = stats.lastActiveDate 
          ? new Date(stats.lastActiveDate) 
          : null;
        
        if (!lastActive) {
          set({ streakActive: false });
          return;
        }

        const now = new Date();
        const diffHours = (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60);
        
        // Streak is active if last activity was within 36 hours
        const isActive = diffHours < 36;
        
        if (!isActive && stats.streak > 0) {
          // Reset streak if more than 36 hours
          set({
            stats: {
              ...stats,
              streak: 0,
            },
            streakActive: false,
          });
        } else {
          set({ streakActive: isActive });
        }
      },

      // Update streak (called when user completes activity)
      updateStreak: () => {
        const { stats } = get();
        const lastActive = stats.lastActiveDate 
          ? new Date(stats.lastActiveDate) 
          : null;
        
        const now = new Date();
        const today = now.toDateString();
        const lastActiveDay = lastActive?.toDateString();

        // If already active today, don't increment
        if (today === lastActiveDay) {
          return;
        }

        // Check if it's a consecutive day
        const isConsecutive = lastActive && 
          (now.getTime() - lastActive.getTime()) < 36 * 60 * 60 * 1000;

        const newStreak = isConsecutive ? stats.streak + 1 : 1;
        const newLongestStreak = Math.max(newStreak, stats.longestStreak);

        set({
          stats: {
            ...stats,
            streak: newStreak,
            longestStreak: newLongestStreak,
            lastActiveDate: now,
          },
          streakActive: true,
        });

        // Bonus XP for streaks
        if (newStreak === 7) {
          get().addXP(150, '7-day streak bonus! 🔥');
        } else if (newStreak === 30) {
          get().addXP(500, '30-day streak bonus! 🏆');
        } else if (newStreak % 100 === 0) {
          get().addXP(1000, `${newStreak}-day streak milestone! 🌟`);
        }
      },

      // Unlock achievement
      unlockAchievement: (achievement: Achievement) => {
        const { unlockedAchievements } = get();
        
        if (unlockedAchievements.includes(achievement.id)) {
          return; // Already unlocked
        }

        set({
          unlockedAchievements: [...unlockedAchievements, achievement.id],
          recentAchievement: achievement,
        });

        // Add XP reward
        get().addXP(achievement.xpReward, `Achievement: ${achievement.nameEn}`);
      },

      // Clear recent achievement (after showing notification)
      clearRecentAchievement: () => {
        set({ recentAchievement: null });
      },

      // Increment a stat
      incrementStat: (stat) => {
        const { stats } = get();
        set({
          stats: {
            ...stats,
            [stat]: stats[stat] + 1,
          },
        });
      },

      // Add time spent
      addTimeSpent: (seconds: number) => {
        const { stats } = get();
        set({
          stats: {
            ...stats,
            totalTimeSpent: stats.totalTimeSpent + seconds,
          },
        });
      },

      // Get level info
      getLevelInfo: (): LevelInfo => {
        const { stats } = get();
        const currentLevel = stats.level;
        const currentLevelXP = calculateLevelXP(currentLevel - 1);
        const nextLevelXP = calculateLevelXP(currentLevel);
        const xpInCurrentLevel = stats.xp - currentLevelXP;
        const xpRequiredForLevel = nextLevelXP - currentLevelXP;

        return {
          level: currentLevel,
          currentXP: xpInCurrentLevel,
          requiredXP: xpRequiredForLevel,
          progress: Math.round((xpInCurrentLevel / xpRequiredForLevel) * 100),
        };
      },

      // Reset all stats
      resetStats: () => {
        set({
          stats: defaultStats,
          unlockedAchievements: [],
          recentAchievement: null,
          xpHistory: [],
          streakActive: false,
        });
      },
    }),
    {
      name: 'arabicmaster-gamification',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        stats: state.stats,
        unlockedAchievements: state.unlockedAchievements,
        xpHistory: state.xpHistory,
      }),
    }
  )
);
