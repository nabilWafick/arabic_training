/**
 * SM-2 Spaced Repetition Algorithm
 * Implementation of the SuperMemo 2 algorithm for optimal review scheduling
 */

// Quality ratings for SM-2 algorithm
export type QualityRating = 0 | 1 | 2 | 3 | 4 | 5;

export interface SRSItem {
  id: string;
  word: string;
  wordAr: string;
  translation: string;
  phaseId: number;
  // SRS metadata
  repetitions: number;
  easeFactor: number;
  interval: number;
  nextReview: number; // timestamp
  lastReview: number; // timestamp
  // Stats
  correctCount: number;
  incorrectCount: number;
}

export interface ReviewResult {
  item: SRSItem;
  quality: QualityRating;
  responseTime?: number; // milliseconds
}

/**
 * Calculate next review based on SM-2 algorithm
 * 
 * Quality ratings:
 * 5 - Perfect response
 * 4 - Correct with hesitation
 * 3 - Correct with difficulty
 * 2 - Incorrect but close
 * 1 - Incorrect, remembered after seeing answer
 * 0 - Complete blackout
 */
export function calculateNextReview(item: SRSItem, quality: QualityRating): SRSItem {
  let { repetitions, easeFactor, interval } = item;
  
  // Calculate new ease factor
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = Math.max(
    1.3, // Minimum ease factor
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );
  
  if (quality < 3) {
    // Failed - reset repetitions
    repetitions = 0;
    interval = 1;
  } else {
    // Passed
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }
  
  // Calculate next review date (in milliseconds)
  const now = Date.now();
  const nextReview = now + interval * 24 * 60 * 60 * 1000;
  
  return {
    ...item,
    repetitions,
    easeFactor: Math.round(easeFactor * 100) / 100,
    interval,
    nextReview,
    lastReview: now,
    correctCount: quality >= 3 ? item.correctCount + 1 : item.correctCount,
    incorrectCount: quality < 3 ? item.incorrectCount + 1 : item.incorrectCount,
  };
}

/**
 * Create a new SRS item with default values
 */
export function createSRSItem(
  id: string,
  word: string,
  wordAr: string,
  translation: string,
  phaseId: number
): SRSItem {
  return {
    id,
    word,
    wordAr,
    translation,
    phaseId,
    repetitions: 0,
    easeFactor: 2.5, // Default SM-2 ease factor
    interval: 0,
    nextReview: Date.now(), // Due immediately
    lastReview: 0,
    correctCount: 0,
    incorrectCount: 0,
  };
}

/**
 * Get items due for review
 */
export function getDueItems(items: SRSItem[], limit?: number): SRSItem[] {
  const now = Date.now();
  const dueItems = items
    .filter(item => item.nextReview <= now)
    .sort((a, b) => a.nextReview - b.nextReview);
  
  return limit ? dueItems.slice(0, limit) : dueItems;
}

/**
 * Get items by urgency (most overdue first)
 */
export function getItemsByUrgency(items: SRSItem[]): SRSItem[] {
  const now = Date.now();
  return [...items].sort((a, b) => {
    // Overdue items first, then by how overdue
    const overdueA = now - a.nextReview;
    const overdueB = now - b.nextReview;
    return overdueB - overdueA;
  });
}

/**
 * Calculate retention rate for items
 */
export function calculateRetentionRate(items: SRSItem[]): number {
  if (items.length === 0) return 0;
  
  const totalCorrect = items.reduce((sum, item) => sum + item.correctCount, 0);
  const totalAttempts = items.reduce(
    (sum, item) => sum + item.correctCount + item.incorrectCount,
    0
  );
  
  return totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
}

/**
 * Get review statistics
 */
export function getReviewStats(items: SRSItem[]) {
  const now = Date.now();
  
  const dueToday = items.filter(item => item.nextReview <= now).length;
  const dueTomorrow = items.filter(item => {
    const tomorrow = now + 24 * 60 * 60 * 1000;
    return item.nextReview > now && item.nextReview <= tomorrow;
  }).length;
  const dueThisWeek = items.filter(item => {
    const weekFromNow = now + 7 * 24 * 60 * 60 * 1000;
    return item.nextReview > now && item.nextReview <= weekFromNow;
  }).length;
  
  const mastered = items.filter(item => item.repetitions >= 5 && item.easeFactor > 2.0).length;
  const learning = items.filter(item => item.repetitions > 0 && item.repetitions < 5).length;
  const newItems = items.filter(item => item.repetitions === 0).length;
  
  return {
    dueToday,
    dueTomorrow,
    dueThisWeek,
    mastered,
    learning,
    newItems,
    total: items.length,
    retentionRate: calculateRetentionRate(items),
  };
}

/**
 * Get quality rating description
 */
export function getQualityDescription(quality: QualityRating): string {
  switch (quality) {
    case 5:
      return 'Perfect';
    case 4:
      return 'Good';
    case 3:
      return 'Hard';
    case 2:
      return 'Almost';
    case 1:
      return 'Wrong';
    case 0:
      return 'Forgot';
    default:
      return 'Unknown';
  }
}

/**
 * Calculate estimated time to next review
 */
export function getTimeUntilReview(item: SRSItem): string {
  const now = Date.now();
  const diff = item.nextReview - now;
  
  if (diff <= 0) return 'Now';
  
  const minutes = Math.floor(diff / (60 * 1000));
  const hours = Math.floor(diff / (60 * 60 * 1000));
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  
  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  return 'Soon';
}
