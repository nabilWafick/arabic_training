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
  slug: string;
  titleEn: string;
  titleFr: string;
  titleAr: string;
  numeral: string;
  duration: string;
  level: string;
  objectives: string[];
  competencies: string[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  phaseId: number;
  number: number;
  slug: string;
  titleEn: string;
  titleFr: string;
  titleAr: string;
  duration: number; // in minutes
  objectives: string[];
  theory: TheorySection[];
  weeklyPlan: WeeklyPlanItem[];
  exercises: ExerciseSet;
  resources: Resource[];
}

export interface TheorySection {
  id: string;
  titleEn: string;
  titleFr: string;
  titleAr?: string;
  contentEn: string;
  contentFr: string;
  contentAr?: string;
  examples?: Example[];
}

export interface Example {
  arabic: string;
  transliteration: string;
  translation: string;
  audio?: string;
}

export interface WeeklyPlanItem {
  day: string;
  activity: string;
  type: string;
  duration: string;
}

export interface Resource {
  icon: string;
  title: string;
  description: string;
  url?: string;
  type: 'video' | 'audio' | 'book' | 'website' | 'app' | 'worksheet';
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

export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

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
  options?: string[];
  correctAnswer: string | number;
  explanationEn: string;
  explanationFr: string;
  explanationAr?: string;
  audioText?: string;
  imageUrl?: string;
  matchPairs?: MatchPair[];
}

export interface MatchPair {
  left: string;
  right: string;
}

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  score: number;
  timeSpent: number;
  attempts: number;
  userAnswer: string | number | string[];
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
}

export interface LessonProgress {
  lessonId: string;
  started: boolean;
  completed: boolean;
  score: number;
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
  descriptionEn: string;
  descriptionFr: string;
  descriptionAr: string;
  icon: string;
  xpReward: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  condition: AchievementCondition;
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
