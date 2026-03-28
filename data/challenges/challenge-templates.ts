/**
 * Daily Challenge Templates
 * Defines challenge types and generation logic for daily exercises
 */

import type { PhaseId } from '@/data/practice/types';

export type ChallengeType = 'mixed' | 'writing' | 'listening' | 'speaking' | 'vocabulary';
export type ChallengeDifficulty = 'easy' | 'medium' | 'hard';

export interface ChallengeExercise {
  type: 'writing' | 'listening' | 'speaking' | 'vocabulary';
  phaseId: PhaseId;
  itemId: string;
  difficulty: ChallengeDifficulty;
  points: number;
}

export interface DailyChallenge {
  id: string;
  date: string; // YYYY-MM-DD
  type: ChallengeType;
  phaseId: PhaseId;
  exercises: ChallengeExercise[];
  totalPoints: number;
  bonusMultiplier: number; // Usually 2x for daily challenges
  requirements: {
    minAccuracy: number; // Minimum accuracy percentage to get full XP
    timeLimit?: number; // Optional time limit in seconds
  };
}

export interface StreakMilestone {
  days: number;
  reward: {
    xp: number;
    badge?: string;
    title?: string;
  };
  icon: string;
  color: string;
}

/**
 * Streak milestone rewards
 */
export const STREAK_MILESTONES: StreakMilestone[] = [
  {
    days: 3,
    reward: { xp: 100, title: '3-Day Warrior' },
    icon: '🔥',
    color: '#f97316',
  },
  {
    days: 7,
    reward: { xp: 250, badge: 'week-streak', title: 'Week Champion' },
    icon: '⚡',
    color: '#eab308',
  },
  {
    days: 14,
    reward: { xp: 500, badge: 'two-week-streak', title: 'Fortnight Master' },
    icon: '💪',
    color: '#84cc16',
  },
  {
    days: 30,
    reward: { xp: 1000, badge: 'month-streak', title: 'Monthly Legend' },
    icon: '🏆',
    color: '#22c55e',
  },
  {
    days: 60,
    reward: { xp: 2000, badge: 'two-month-streak', title: 'Dedication Hero' },
    icon: '🌟',
    color: '#10b981',
  },
  {
    days: 90,
    reward: { xp: 3000, badge: 'quarter-streak', title: 'Quarterly Elite' },
    icon: '👑',
    color: '#14b8a6',
  },
  {
    days: 180,
    reward: { xp: 5000, badge: 'half-year-streak', title: 'Semester Pro' },
    icon: '💎',
    color: '#06b6d4',
  },
  {
    days: 365,
    reward: { xp: 10000, badge: 'year-streak', title: 'Annual Champion' },
    icon: '🎯',
    color: '#8b5cf6',
  },
];

/**
 * Challenge templates by phase
 */
export const CHALLENGE_TEMPLATES: Record<PhaseId, {
  exercises: Array<{
    type: ChallengeExercise['type'];
    count: number;
    difficulty: ChallengeDifficulty;
  }>;
  minAccuracy: number;
}> = {
  1: {
    exercises: [
      { type: 'writing', count: 5, difficulty: 'easy' },
      { type: 'vocabulary', count: 10, difficulty: 'easy' },
      { type: 'listening', count: 3, difficulty: 'easy' },
    ],
    minAccuracy: 70,
  },
  2: {
    exercises: [
      { type: 'writing', count: 8, difficulty: 'medium' },
      { type: 'vocabulary', count: 12, difficulty: 'medium' },
      { type: 'listening', count: 5, difficulty: 'medium' },
      { type: 'speaking', count: 3, difficulty: 'easy' },
    ],
    minAccuracy: 75,
  },
  3: {
    exercises: [
      { type: 'writing', count: 10, difficulty: 'medium' },
      { type: 'vocabulary', count: 15, difficulty: 'medium' },
      { type: 'listening', count: 6, difficulty: 'medium' },
      { type: 'speaking', count: 4, difficulty: 'medium' },
    ],
    minAccuracy: 80,
  },
  4: {
    exercises: [
      { type: 'writing', count: 12, difficulty: 'hard' },
      { type: 'vocabulary', count: 18, difficulty: 'hard' },
      { type: 'listening', count: 8, difficulty: 'hard' },
      { type: 'speaking', count: 5, difficulty: 'medium' },
    ],
    minAccuracy: 85,
  },
  5: {
    exercises: [
      { type: 'writing', count: 15, difficulty: 'hard' },
      { type: 'vocabulary', count: 20, difficulty: 'hard' },
      { type: 'listening', count: 10, difficulty: 'hard' },
      { type: 'speaking', count: 6, difficulty: 'hard' },
    ],
    minAccuracy: 90,
  },
};

/**
 * Calculate XP for an exercise based on difficulty
 */
export function getExercisePoints(difficulty: ChallengeDifficulty): number {
  const basePoints = { easy: 10, medium: 15, hard: 20 };
  return basePoints[difficulty];
}

/**
 * Get the next milestone for a given streak
 */
export function getNextMilestone(currentStreak: number): StreakMilestone | null {
  return STREAK_MILESTONES.find(m => m.days > currentStreak) || null;
}

/**
 * Check if a streak day qualifies for a milestone
 */
export function getMilestoneForStreak(streak: number): StreakMilestone | null {
  return STREAK_MILESTONES.find(m => m.days === streak) || null;
}

/**
 * Calculate total XP for completing a challenge
 */
export function calculateChallengeXP(
  exercises: ChallengeExercise[],
  accuracy: number,
  bonusMultiplier: number = 2
): number {
  const baseXP = exercises.reduce((sum, ex) => sum + ex.points, 0);
  const accuracyMultiplier = accuracy / 100;
  return Math.round(baseXP * accuracyMultiplier * bonusMultiplier);
}

/**
 * Generate a unique challenge ID based on date
 */
export function generateChallengeId(date: Date): string {
  const dateStr = date.toISOString().split('T')[0];
  return `challenge-${dateStr}`;
}

/**
 * Get today's date string (YYYY-MM-DD)
 */
export function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Check if a challenge is from today
 */
export function isChallengeToday(challengeDate: string): boolean {
  return challengeDate === getTodayDateString();
}
