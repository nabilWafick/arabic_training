/**
 * Daily Challenge Generator
 * Creates unique daily challenges based on user's current phase
 */

import type { PhaseId } from '@/data/practice/types';
import { getPracticeDataByPhase } from '@/data/practice';
import {
  type DailyChallenge,
  type ChallengeExercise,
  CHALLENGE_TEMPLATES,
  getExercisePoints,
  generateChallengeId,
  getTodayDateString,
} from './challenge-templates';

/**
 * Seeded random number generator for consistent daily challenges
 */
function seededRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state / 0x7fffffff;
  };
}

/**
 * Generate a seed from a date string
 */
function dateToSeed(dateString: string): number {
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    const char = dateString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/**
 * Shuffle an array using a seeded random
 */
function shuffleArray<T>(array: T[], random: () => number): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generate daily challenge for a specific phase
 */
export function generateDailyChallenge(
  phaseId: PhaseId,
  date: Date = new Date()
): DailyChallenge {
  const dateString = date.toISOString().split('T')[0];
  const seed = dateToSeed(dateString + phaseId.toString());
  const random = seededRandom(seed);
  
  const template = CHALLENGE_TEMPLATES[phaseId];
  const practiceData = getPracticeDataByPhase(phaseId);
  
  const exercises: ChallengeExercise[] = [];
  
  // Generate exercises for each type in the template
  for (const exerciseTemplate of template.exercises) {
    const { type, count, difficulty } = exerciseTemplate;
    
    // Get available items based on type
    let availableItems: Array<{ id: string }> = [];
    
    switch (type) {
      case 'vocabulary':
        availableItems = practiceData?.vocabulary.items.map((item, idx) => ({ 
          id: `vocab-${idx}` 
        })) || [];
        break;
      case 'writing':
        availableItems = practiceData?.writing.items.map((item, idx) => ({ 
          id: `writing-${idx}` 
        })) || [];
        break;
      case 'listening':
        availableItems = practiceData?.listening.items.map((item, idx) => ({ 
          id: `listening-${idx}` 
        })) || [];
        break;
      case 'speaking':
        availableItems = practiceData?.speaking.items.map((item, idx) => ({ 
          id: `speaking-${idx}` 
        })) || [];
        break;
    }
    
    // Shuffle and select items
    const shuffled = shuffleArray(availableItems, random);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));
    
    // Create exercise entries
    for (const item of selected) {
      exercises.push({
        type,
        phaseId,
        itemId: item.id,
        difficulty,
        points: getExercisePoints(difficulty),
      });
    }
  }
  
  // Calculate total points
  const totalPoints = exercises.reduce((sum, ex) => sum + ex.points, 0);
  
  return {
    id: generateChallengeId(date),
    date: dateString,
    type: 'mixed',
    phaseId,
    exercises,
    totalPoints,
    bonusMultiplier: 2,
    requirements: {
      minAccuracy: template.minAccuracy,
      timeLimit: undefined, // No time limit by default
    },
  };
}

/**
 * Get today's challenge for a phase
 */
export function getTodayChallenge(phaseId: PhaseId): DailyChallenge {
  return generateDailyChallenge(phaseId, new Date());
}

/**
 * Check if user has completed today's challenge
 */
export function hasCompletedTodayChallenge(
  lastCompletedDate: string | null
): boolean {
  if (!lastCompletedDate) return false;
  return lastCompletedDate === getTodayDateString();
}
