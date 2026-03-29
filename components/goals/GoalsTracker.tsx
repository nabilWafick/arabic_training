'use client';

import { useGoalsTracker } from '@/hooks/useGoalsTracker';

/**
 * Goals Tracker Component
 * Monitors goals and shows notifications
 */
export function GoalsTracker() {
  useGoalsTracker();
  return null;
}
