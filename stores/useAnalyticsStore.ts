import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// ============================================
// ANALYTICS STORE
// ============================================

export type SkillType = 'reading' | 'writing' | 'speaking' | 'listening';
export type ExerciseType = 'letter-trace' | 'letter-forms' | 'word-write' | 'sentence-build' | 'vocabulary' | 'pronunciation' | 'dictation' | 'conversation';

export interface SessionLog {
  id: string;
  startTime: Date;
  endTime: Date | null;
  phaseId: number;
  skill: SkillType;
  exerciseType: ExerciseType;
  exercisesCompleted: number;
  correctAnswers: number;
  totalQuestions: number;
}

export interface DailyStats {
  date: string; // ISO date string YYYY-MM-DD
  timeSpentSeconds: number;
  exercisesCompleted: number;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  skillsTime: Record<SkillType, number>;
  phaseTime: Record<number, number>;
}

export interface AnalyticsState {
  // Session tracking
  currentSession: SessionLog | null;
  sessionLogs: SessionLog[];
  
  // Daily aggregated stats
  dailyStats: Record<string, DailyStats>;
  
  // Skill-specific accuracy tracking
  skillAccuracy: Record<SkillType, { correct: number; total: number }>;
  
  // Phase-specific tracking
  phaseStats: Record<number, { timeSpent: number; exercisesCompleted: number; accuracy: number }>;
  
  // Learning velocity (lessons completed per week)
  weeklyLessons: { weekStart: string; count: number }[];
  
  // Actions
  startSession: (phaseId: number, skill: SkillType, exerciseType: ExerciseType) => void;
  endSession: () => void;
  recordExerciseResult: (correct: boolean) => void;
  addXPToDaily: (amount: number) => void;
  getStudyTime: (period: 'today' | 'week' | 'month' | 'all') => number;
  getAccuracyTrend: (days: number) => { date: string; accuracy: number }[];
  getTimeDistribution: () => { phase: number; time: number; name: string }[];
  getSkillBalance: () => { skill: SkillType; value: number }[];
  getWeakAreas: () => { area: string; accuracy: number; recommendation: string }[];
  getPredictedMasteryDates: () => { phase: number; name: string; predictedDate: string | null }[];
  getWeeklyActivity: () => { day: string; time: number; exercises: number }[];
  getStreakHistory: () => { date: string; active: boolean }[];
  getLearningVelocity: () => number;
  resetAnalytics: () => void;
}

const SKILL_NAMES: Record<SkillType, string> = {
  reading: 'Reading',
  writing: 'Writing',
  speaking: 'Speaking',
  listening: 'Listening',
};

const PHASE_NAMES: Record<number, string> = {
  1: 'Foundations',
  2: 'Building Blocks',
  3: 'Grammar Foundations',
  4: 'Intermediate',
  5: 'Advanced Fluency',
};

function getDateKey(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}

function getWeekStartKey(date: Date = new Date()): string {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d.toISOString().split('T')[0];
}

function createEmptyDailyStats(): DailyStats {
  return {
    date: getDateKey(),
    timeSpentSeconds: 0,
    exercisesCompleted: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    xpEarned: 0,
    skillsTime: { reading: 0, writing: 0, speaking: 0, listening: 0 },
    phaseTime: {},
  };
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export const useAnalyticsStore = create<AnalyticsState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentSession: null,
      sessionLogs: [],
      dailyStats: {},
      skillAccuracy: {
        reading: { correct: 0, total: 0 },
        writing: { correct: 0, total: 0 },
        speaking: { correct: 0, total: 0 },
        listening: { correct: 0, total: 0 },
      },
      phaseStats: {},
      weeklyLessons: [],

      // Start a practice session
      startSession: (phaseId: number, skill: SkillType, exerciseType: ExerciseType) => {
        const session: SessionLog = {
          id: generateId(),
          startTime: new Date(),
          endTime: null,
          phaseId,
          skill,
          exerciseType,
          exercisesCompleted: 0,
          correctAnswers: 0,
          totalQuestions: 0,
        };
        set({ currentSession: session });
      },

      // End current session and save stats
      endSession: () => {
        const { currentSession, sessionLogs, dailyStats, phaseStats, weeklyLessons } = get();
        
        if (!currentSession) return;

        const endTime = new Date();
        const sessionDuration = Math.floor(
          (endTime.getTime() - new Date(currentSession.startTime).getTime()) / 1000
        );

        const completedSession: SessionLog = {
          ...currentSession,
          endTime,
        };

        // Update daily stats
        const dateKey = getDateKey();
        const todayStats = dailyStats[dateKey] || createEmptyDailyStats();
        
        todayStats.timeSpentSeconds += sessionDuration;
        todayStats.exercisesCompleted += currentSession.exercisesCompleted;
        todayStats.correctAnswers += currentSession.correctAnswers;
        todayStats.totalQuestions += currentSession.totalQuestions;
        todayStats.skillsTime[currentSession.skill] = 
          (todayStats.skillsTime[currentSession.skill] || 0) + sessionDuration;
        todayStats.phaseTime[currentSession.phaseId] = 
          (todayStats.phaseTime[currentSession.phaseId] || 0) + sessionDuration;

        // Update phase stats
        const currentPhaseStats = phaseStats[currentSession.phaseId] || {
          timeSpent: 0,
          exercisesCompleted: 0,
          accuracy: 0,
        };
        const totalPhaseQuestions = currentPhaseStats.exercisesCompleted + currentSession.totalQuestions;
        const totalPhaseCorrect = 
          (currentPhaseStats.accuracy / 100) * currentPhaseStats.exercisesCompleted + 
          currentSession.correctAnswers;
        
        currentPhaseStats.timeSpent += sessionDuration;
        currentPhaseStats.exercisesCompleted += currentSession.totalQuestions;
        currentPhaseStats.accuracy = totalPhaseQuestions > 0 
          ? Math.round((totalPhaseCorrect / totalPhaseQuestions) * 100) 
          : 0;

        // Update weekly lessons
        const weekStart = getWeekStartKey();
        let weekEntry = weeklyLessons.find(w => w.weekStart === weekStart);
        if (!weekEntry) {
          weekEntry = { weekStart, count: 0 };
          weeklyLessons.push(weekEntry);
        }
        weekEntry.count += currentSession.exercisesCompleted;

        set({
          currentSession: null,
          sessionLogs: [...sessionLogs.slice(-99), completedSession], // Keep last 100 sessions
          dailyStats: { ...dailyStats, [dateKey]: todayStats },
          phaseStats: { ...phaseStats, [currentSession.phaseId]: currentPhaseStats },
          weeklyLessons: weeklyLessons.slice(-12), // Keep last 12 weeks
        });
      },

      // Record an exercise result
      recordExerciseResult: (correct: boolean) => {
        const { currentSession, skillAccuracy } = get();
        
        if (!currentSession) return;

        const updatedSession = {
          ...currentSession,
          exercisesCompleted: currentSession.exercisesCompleted + 1,
          correctAnswers: currentSession.correctAnswers + (correct ? 1 : 0),
          totalQuestions: currentSession.totalQuestions + 1,
        };

        // Update skill accuracy
        const skillStats = skillAccuracy[currentSession.skill];
        const updatedSkillAccuracy = {
          ...skillAccuracy,
          [currentSession.skill]: {
            correct: skillStats.correct + (correct ? 1 : 0),
            total: skillStats.total + 1,
          },
        };

        set({ 
          currentSession: updatedSession,
          skillAccuracy: updatedSkillAccuracy,
        });
      },

      // Add XP to daily stats
      addXPToDaily: (amount: number) => {
        const { dailyStats } = get();
        const dateKey = getDateKey();
        const todayStats = dailyStats[dateKey] || createEmptyDailyStats();
        todayStats.xpEarned += amount;
        
        set({ dailyStats: { ...dailyStats, [dateKey]: todayStats } });
      },

      // Get total study time for a period
      getStudyTime: (period: 'today' | 'week' | 'month' | 'all') => {
        const { dailyStats } = get();
        const now = new Date();
        let totalSeconds = 0;

        Object.entries(dailyStats).forEach(([dateStr, stats]) => {
          const date = new Date(dateStr);
          const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
          
          switch (period) {
            case 'today':
              if (diffDays === 0) totalSeconds += stats.timeSpentSeconds;
              break;
            case 'week':
              if (diffDays < 7) totalSeconds += stats.timeSpentSeconds;
              break;
            case 'month':
              if (diffDays < 30) totalSeconds += stats.timeSpentSeconds;
              break;
            case 'all':
              totalSeconds += stats.timeSpentSeconds;
              break;
          }
        });

        return totalSeconds;
      },

      // Get accuracy trend over last N days
      getAccuracyTrend: (days: number) => {
        const { dailyStats } = get();
        const result: { date: string; accuracy: number }[] = [];
        const now = new Date();

        for (let i = days - 1; i >= 0; i--) {
          const date = new Date(now);
          date.setDate(date.getDate() - i);
          const dateKey = getDateKey(date);
          const stats = dailyStats[dateKey];

          if (stats && stats.totalQuestions > 0) {
            result.push({
              date: dateKey,
              accuracy: Math.round((stats.correctAnswers / stats.totalQuestions) * 100),
            });
          } else {
            result.push({ date: dateKey, accuracy: 0 });
          }
        }

        return result;
      },

      // Get time distribution by phase
      getTimeDistribution: () => {
        const { phaseStats } = get();
        return Object.entries(phaseStats).map(([phaseId, stats]) => ({
          phase: parseInt(phaseId),
          time: Math.round(stats.timeSpent / 60), // Convert to minutes
          name: PHASE_NAMES[parseInt(phaseId)] || `Phase ${phaseId}`,
        }));
      },

      // Get skill balance for radar chart
      getSkillBalance: () => {
        const { skillAccuracy } = get();
        return (Object.keys(skillAccuracy) as SkillType[]).map(skill => {
          const stats = skillAccuracy[skill];
          const accuracy = stats.total > 0 
            ? Math.round((stats.correct / stats.total) * 100) 
            : 0;
          return { skill, value: accuracy };
        });
      },

      // Get weak areas with recommendations
      getWeakAreas: () => {
        const { skillAccuracy, phaseStats } = get();
        const weakAreas: { area: string; accuracy: number; recommendation: string }[] = [];

        // Check skills
        (Object.keys(skillAccuracy) as SkillType[]).forEach(skill => {
          const stats = skillAccuracy[skill];
          if (stats.total > 5) { // Only consider if enough data
            const accuracy = Math.round((stats.correct / stats.total) * 100);
            if (accuracy < 70) {
              weakAreas.push({
                area: SKILL_NAMES[skill],
                accuracy,
                recommendation: `Practice more ${skill} exercises to improve`,
              });
            }
          }
        });

        // Check phases
        Object.entries(phaseStats).forEach(([phaseId, stats]) => {
          if (stats.exercisesCompleted > 10 && stats.accuracy < 70) {
            weakAreas.push({
              area: PHASE_NAMES[parseInt(phaseId)] || `Phase ${phaseId}`,
              accuracy: stats.accuracy,
              recommendation: `Review ${PHASE_NAMES[parseInt(phaseId)]} concepts`,
            });
          }
        });

        return weakAreas.sort((a, b) => a.accuracy - b.accuracy).slice(0, 5);
      },

      // Predict mastery dates based on current velocity
      getPredictedMasteryDates: () => {
        const { phaseStats, weeklyLessons } = get();
        const velocity = get().getLearningVelocity();
        
        // Assume 100 exercises needed per phase for mastery
        const EXERCISES_FOR_MASTERY = 100;
        const predictions: { phase: number; name: string; predictedDate: string | null }[] = [];

        for (let phase = 1; phase <= 5; phase++) {
          const stats = phaseStats[phase] || { exercisesCompleted: 0, accuracy: 0 };
          const remaining = Math.max(0, EXERCISES_FOR_MASTERY - stats.exercisesCompleted);
          
          if (remaining === 0 && stats.accuracy >= 80) {
            predictions.push({
              phase,
              name: PHASE_NAMES[phase],
              predictedDate: 'Mastered',
            });
          } else if (velocity > 0) {
            const weeksNeeded = remaining / velocity;
            const futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + Math.ceil(weeksNeeded * 7));
            predictions.push({
              phase,
              name: PHASE_NAMES[phase],
              predictedDate: futureDate.toISOString().split('T')[0],
            });
          } else {
            predictions.push({
              phase,
              name: PHASE_NAMES[phase],
              predictedDate: null,
            });
          }
        }

        return predictions;
      },

      // Get weekly activity data
      getWeeklyActivity: () => {
        const { dailyStats } = get();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const result: { day: string; time: number; exercises: number }[] = [];
        const now = new Date();

        for (let i = 6; i >= 0; i--) {
          const date = new Date(now);
          date.setDate(date.getDate() - i);
          const dateKey = getDateKey(date);
          const stats = dailyStats[dateKey];
          
          result.push({
            day: days[date.getDay()],
            time: stats ? Math.round(stats.timeSpentSeconds / 60) : 0,
            exercises: stats ? stats.exercisesCompleted : 0,
          });
        }

        return result;
      },

      // Get streak history (last 30 days)
      getStreakHistory: () => {
        const { dailyStats } = get();
        const result: { date: string; active: boolean }[] = [];
        const now = new Date();

        for (let i = 29; i >= 0; i--) {
          const date = new Date(now);
          date.setDate(date.getDate() - i);
          const dateKey = getDateKey(date);
          const stats = dailyStats[dateKey];
          
          result.push({
            date: dateKey,
            active: stats ? stats.exercisesCompleted > 0 : false,
          });
        }

        return result;
      },

      // Get learning velocity (exercises per week)
      getLearningVelocity: () => {
        const { weeklyLessons } = get();
        if (weeklyLessons.length === 0) return 0;
        
        const recentWeeks = weeklyLessons.slice(-4);
        const total = recentWeeks.reduce((sum, week) => sum + week.count, 0);
        return Math.round(total / recentWeeks.length);
      },

      // Reset all analytics
      resetAnalytics: () => {
        set({
          currentSession: null,
          sessionLogs: [],
          dailyStats: {},
          skillAccuracy: {
            reading: { correct: 0, total: 0 },
            writing: { correct: 0, total: 0 },
            speaking: { correct: 0, total: 0 },
            listening: { correct: 0, total: 0 },
          },
          phaseStats: {},
          weeklyLessons: [],
        });
      },
    }),
    {
      name: 'arabicmaster-analytics',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        sessionLogs: state.sessionLogs,
        dailyStats: state.dailyStats,
        skillAccuracy: state.skillAccuracy,
        phaseStats: state.phaseStats,
        weeklyLessons: state.weeklyLessons,
      }),
    }
  )
);
