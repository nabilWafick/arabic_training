// TypeScript types for the Arabic Learning Platform

// ============================================
// USER TYPES
// ============================================

export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
}

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  longestStreak: number;
  lastActiveDate: Date | null;
  totalTimeSpent: number;
  lessonsCompleted: number;
  exercisesCompleted: number;
  perfectScores: number;
  wordsLearned: number;
}

export interface GuestProgress {
  phases: Record<number, PhaseProgress>;
  stats: UserStats;
  achievements: string[];
  lastUpdated: string;
}

// ============================================
// CURRICULUM TYPES
// ============================================

export interface Phase {
  id: number;
  title: string;
  titleAr: string;
  titleFr: string;
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  duration: string;
  durationAr?: string;
  durationFr?: string;
  color: string;
  icon: string;
  totalLessons: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  phaseId: number;
  order: number;
  title: string;
  titleAr: string;
  titleFr: string;
  description: string;
  descriptionAr?: string;
  descriptionFr: string;
  objectives: string[];
  objectivesAr?: string[];
  objectivesFr?: string[];
  estimatedTime: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  content: LessonContent;
  exerciseCount: number;
  prerequisites?: string[];
}

export interface LessonContent {
  theory: TheoryItem[];
  vocabulary?: VocabularyItem[];
  examples?: ContentExample[];
}

export interface TheoryItem {
  title: string;
  titleAr?: string;
  titleFr?: string;
  content: string;
  contentAr?: string;
  contentFr?: string;
}

export interface VocabularyItem {
  arabic: string;
  transliteration: string;
  meaning: string;
  meaningAr?: string;
  meaningFr?: string;
}

export interface ContentExample {
  arabic: string;
  transliteration: string;
  translation: string;
}

// ============================================
// EXERCISE TYPES
// ============================================

export type ExerciseType = 
  | 'MULTIPLE_CHOICE'
  | 'WRITING'
  | 'LISTENING'
  | 'ORAL'
  | 'MATCHING'
  | 'FILL_BLANK'
  | 'TRANSLATION';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface ExerciseSet {
  easy: Exercise[];
  medium: Exercise[];
  hard: Exercise[];
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  difficulty: Difficulty;
  questionEn: string;
  questionFr: string;
  questionAr?: string;
  // Convenience aliases
  question?: string; // Alias for questionEn
  options?: string[];
  correctAnswer: string | number;
  explanationEn: string;
  explanationFr: string;
  explanationAr?: string;
  // Convenience alias
  explanation?: string; // Alias for explanationEn
  hint?: string;
  audioText?: string;
  imageUrl?: string;
  matchPairs?: MatchPair[];
}

export interface MatchPair {
  id?: string;
  left: string;
  right: string;
}

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  score: number;
  timeSpent: number;
  answer: string | number | string[]; // User's answer (required for review/analytics)
  xpEarned: number; // XP earned for this exercise (required for gamification)
  attempts?: number; // Number of attempts on this exercise (optional, defaults to 1)
  userAnswer?: string | number | string[]; // Alias for answer (for backward compatibility)
}

// ============================================
// PROGRESS TYPES
// ============================================

export interface PhaseProgress {
  phaseId: number;
  started: boolean;
  completed: boolean;
  lessonsProgress: Record<string, LessonProgress>;
  overallProgress: number; // 0-100
  completedLessons?: number; // Number of completed lessons in this phase
}

export interface LessonProgress {
  lessonId: string;
  started: boolean;
  completed: boolean;
  score: number;
  progress: number; // 0-100 completion percentage
  timeSpent: number;
  exercisesCompleted: number;
  totalExercises: number;
  lastAttemptAt: string | null;
}

export interface ProgressUpdate {
  lessonId: string;
  exerciseId?: string;
  completed: boolean;
  score?: number;
  timeSpent?: number;
}

// ============================================
// GAMIFICATION TYPES
// ============================================

export interface Achievement {
  id: string;
  nameEn: string;
  nameFr: string;
  nameAr: string;
  name?: string; // Convenience alias, defaults to nameEn
  descriptionEn: string;
  descriptionFr: string;
  descriptionAr: string;
  description?: string; // Convenience alias, defaults to descriptionEn
  icon: string;
  xpReward: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  condition: AchievementCondition;
  unlockedAt?: Date; // When the achievement was unlocked
}

export interface AchievementCondition {
  type: 'lesson_complete' | 'phase_complete' | 'streak' | 'xp' | 'perfect_score' | 'exercises' | 'time';
  value: number;
  lessonId?: string;
  phaseId?: number;
}

export interface XPGain {
  amount: number;
  reason: string;
  timestamp: Date;
}

export interface LevelInfo {
  level: number;
  currentXP: number;
  requiredXP: number;
  progress: number; // 0-100
}

// ============================================
// AI TYPES
// ============================================

export interface AIExerciseRequest {
  topic: string;
  phaseId: number;
  lessonId: string;
  type: ExerciseType;
  difficulty: Difficulty;
  count: number;
  language: 'en' | 'fr' | 'ar';
}

export interface AIExerciseResponse {
  exercises: Exercise[];
  generatedAt: string;
}

export interface AIVerificationRequest {
  exerciseId: string;
  type: ExerciseType;
  question: string;
  expectedAnswer: string;
  userAnswer: string;
  language: 'en' | 'fr' | 'ar';
}

export interface AIVerificationResponse {
  correct: boolean;
  score: number;
  feedback: string;
  suggestions: string[];
  relatedConcepts: string[];
}

// ============================================
// ARABIC SPECIFIC TYPES
// ============================================

export interface ArabicLetter {
  id: string;
  name: string;
  nameAr: string;
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  transliteration: string;
  sound: string;
  category: 'sun' | 'moon';
  connects: boolean;
  audioUrl?: string;
}

export interface VowelMark {
  id: string;
  name: string;
  nameAr: string;
  symbol: string;
  sound: string;
  position: 'above' | 'below';
  description: string;
}

/**
 * Haraka type used by VowelMarks component
 */
export interface Haraka {
  mark: string;
  name: string;
  nameAr: string;
  sound: string;
  description: string;
}

export interface ArabicWord {
  arabic: string;
  transliteration: string;
  meaningEn: string;
  meaningFr: string;
  category: string;
  audioUrl?: string;
  example?: {
    arabic: string;
    transliteration: string;
    translation: string;
  };
}

// ============================================
// UI / APP TYPES
// ============================================

export type Locale = 'en' | 'fr' | 'ar';

export interface AppSettings {
  locale: Locale;
  theme: 'light' | 'dark' | 'system';
  audioEnabled: boolean;
  autoPlayAudio: boolean;
  showTransliteration: boolean;
  fontSize: 'small' | 'medium' | 'large';
}

export interface NavigationItem {
  id: string;
  labelEn: string;
  labelFr: string;
  labelAr: string;
  href: string;
  icon: string;
  badge?: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
