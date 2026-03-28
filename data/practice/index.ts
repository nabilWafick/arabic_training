/**
 * Practice Data Index
 * Exports all phase practice data and utilities
 */

// Types
export * from './types';

// Phase practice data
export { PHASE_1_PRACTICE } from './phase1-practice';
export { PHASE_2_PRACTICE } from './phase2-practice';
export { PHASE_3_PRACTICE } from './phase3-practice';
export { PHASE_4_PRACTICE } from './phase4-practice';
export { PHASE_5_PRACTICE } from './phase5-practice';

// Re-export phase info
export { PHASE_1_INFO, LETTER_ITEMS, HARAKAT_ITEMS, NUMBER_ITEMS, COLOR_ITEMS } from './phase1-practice';

// Utility to get practice data by phase
import { PHASE_1_PRACTICE } from './phase1-practice';
import { PHASE_2_PRACTICE } from './phase2-practice';
import { PHASE_3_PRACTICE } from './phase3-practice';
import { PHASE_4_PRACTICE } from './phase4-practice';
import { PHASE_5_PRACTICE } from './phase5-practice';
import type { PhasePracticeData, PhaseId } from './types';

/**
 * Get practice data for a specific phase
 * @param phaseId - Phase ID (1-5)
 * @returns Practice data for the phase
 */
export function getPracticeDataByPhase(phaseId: PhaseId): PhasePracticeData {
  const practiceDataMap: Record<PhaseId, PhasePracticeData> = {
    1: PHASE_1_PRACTICE,
    2: PHASE_2_PRACTICE,
    3: PHASE_3_PRACTICE,
    4: PHASE_4_PRACTICE,
    5: PHASE_5_PRACTICE,
  };
  
  return practiceDataMap[phaseId];
}

/**
 * Get all practice data
 * @returns Array of all phase practice data
 */
export function getAllPracticeData(): PhasePracticeData[] {
  return [
    PHASE_1_PRACTICE,
    PHASE_2_PRACTICE,
    PHASE_3_PRACTICE,
    PHASE_4_PRACTICE,
    PHASE_5_PRACTICE,
  ];
}

/**
 * Phase colors for consistent theming
 */
export const PHASE_COLORS: Record<PhaseId, string> = {
  1: '#c9a85c', // Gold - Foundations
  2: '#4a9c6d', // Green - Building Blocks
  3: '#5a7fb8', // Blue - Grammar Foundations
  4: '#9b59b6', // Purple - Intermediate Skills
  5: '#e74c3c', // Red - Advanced Fluency
};

/**
 * Phase icons (Arabic letters representing each phase)
 */
export const PHASE_ICONS: Record<PhaseId, string> = {
  1: 'أ',
  2: 'ب',
  3: 'ج',
  4: 'د',
  5: 'ه',
};
