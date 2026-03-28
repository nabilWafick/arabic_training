/**
 * Practice System Types
 * Comprehensive type definitions for the phase-based practice system
 */

// ============================================
// PHASE & PRACTICE TYPE ENUMS
// ============================================

export type PhaseId = 1 | 2 | 3 | 4 | 5;

export type PracticeType = 'writing' | 'listening' | 'speaking' | 'vocabulary';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type ExerciseStatus = 'not_started' | 'in_progress' | 'completed' | 'skipped';

// ============================================
// PHASE METADATA
// ============================================

export interface PhaseInfo {
  id: PhaseId;
  name: string;
  nameAr: string;
  nameFr: string;
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  icon: string;
  color: string;
  unlockRequirement: number; // % completion of previous phase
}

// ============================================
// PRACTICE CONTENT TYPES
// ============================================

export interface PracticeItem {
  id: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  meaningAr: string;
  meaningFr: string;
  audioUrl?: string;
  imageUrl?: string;
  category: string;
  difficulty: DifficultyLevel;
  hint?: string;
  hintAr?: string;
  hintFr?: string;
}

export interface VocabularyItem extends PracticeItem {
  plural?: string;
  gender?: 'masculine' | 'feminine' | 'neutral';
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'pronoun' | 'other';
  example?: string;
  exampleAr?: string;
  exampleFr?: string;
}

export interface LetterItem extends PracticeItem {
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  position: number; // 1-28
  soundType: 'sun' | 'moon';
  strokeOrder?: string[]; // SVG paths for stroke animation
}

export interface SentenceItem extends PracticeItem {
  words: string[];
  grammar?: string;
  grammarAr?: string;
  grammarFr?: string;
}

// ============================================
// EXERCISE TYPES
// ============================================

export type ExerciseType = 
  | 'letter_recognition'    // Identify letter from audio/image
  | 'letter_tracing'        // Draw letter on canvas
  | 'letter_forms'          // Match letter forms (isolated/initial/medial/final)
  | 'word_building'         // Combine letters to form words
  | 'flashcard'             // Basic vocabulary flashcard
  | 'multiple_choice'       // Choose correct answer
  | 'matching'              // Match pairs (Arabic ↔ meaning)
  | 'fill_blank'            // Complete the sentence
  | 'listening_select'      // Listen and select correct word
  | 'listening_type'        // Listen and type what you hear
  | 'pronunciation'         // Record and compare pronunciation
  | 'sentence_order'        // Arrange words to form sentence
  | 'translation'           // Translate sentence/phrase
  | 'dictation'             // Write what you hear
  | 'conversation'          // Interactive dialogue practice
  | 'reading_comprehension' // Read passage and answer questions
  | 'essay_writing';        // Free-form writing exercise

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  phaseId: PhaseId;
  practiceType: PracticeType;
  difficulty: DifficultyLevel;
  points: number;
  timeLimit?: number; // seconds
  instructions: string;
  instructionsAr: string;
  instructionsFr: string;
}

export interface LetterRecognitionExercise extends BaseExercise {
  type: 'letter_recognition';
  letter: LetterItem;
  options: string[];
  correctIndex: number;
}

export interface LetterTracingExercise extends BaseExercise {
  type: 'letter_tracing';
  letter: LetterItem;
  strokePaths: string[];
  acceptanceThreshold: number; // 0-1, how accurate the tracing needs to be
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple_choice';
  question: string;
  questionAr: string;
  questionFr: string;
  options: Array<{
    text: string;
    textAr: string;
    textFr: string;
  }>;
  correctIndex: number;
  explanation?: string;
  explanationAr?: string;
  explanationFr?: string;
}

export interface FlashcardExercise extends BaseExercise {
  type: 'flashcard';
  item: VocabularyItem;
  showTransliteration: boolean;
  showExample: boolean;
}

export interface MatchingExercise extends BaseExercise {
  type: 'matching';
  pairs: Array<{
    left: string;
    right: string;
  }>;
  shuffledLeft: string[];
  shuffledRight: string[];
}

export interface FillBlankExercise extends BaseExercise {
  type: 'fill_blank';
  sentence: string;
  sentenceAr: string;
  sentenceFr: string;
  blanks: Array<{
    position: number;
    answer: string;
    alternatives?: string[];
  }>;
}

export interface ListeningExercise extends BaseExercise {
  type: 'listening_select' | 'listening_type' | 'dictation';
  audioText: string; // What will be spoken via TTS
  options?: string[]; // For select type
  correctAnswer: string;
  acceptableAnswers?: string[];
}

export interface PronunciationExercise extends BaseExercise {
  type: 'pronunciation';
  targetText: string;
  targetTextAr: string;
  transliteration: string;
  phonemeBreakdown?: string[];
  commonMistakes?: string[];
}

export interface SentenceOrderExercise extends BaseExercise {
  type: 'sentence_order';
  correctOrder: string[];
  shuffledWords: string[];
  translation: string;
  translationAr: string;
  translationFr: string;
}

export type Exercise = 
  | LetterRecognitionExercise
  | LetterTracingExercise
  | MultipleChoiceExercise
  | FlashcardExercise
  | MatchingExercise
  | FillBlankExercise
  | ListeningExercise
  | PronunciationExercise
  | SentenceOrderExercise;

// ============================================
// PRACTICE SESSION
// ============================================

export interface PracticeSession {
  id: string;
  phaseId: PhaseId;
  practiceType: PracticeType;
  exercises: Exercise[];
  currentIndex: number;
  startedAt: Date;
  completedAt?: Date;
  results: ExerciseResult[];
  totalPoints: number;
  streak: number;
}

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  userAnswer: string | string[];
  correctAnswer: string | string[];
  timeSpent: number; // seconds
  attempts: number;
  pointsEarned: number;
  completedAt: Date;
}

// ============================================
// PROGRESS TRACKING
// ============================================

export interface PracticePhaseProgress {
  phaseId: PhaseId;
  writing: PracticeTypeProgress;
  listening: PracticeTypeProgress;
  speaking: PracticeTypeProgress;
  vocabulary: PracticeTypeProgress;
  lastPracticedAt: Date | null;
  totalSessions: number;
  totalTimeSpent: number; // minutes
}

export interface PracticeTypeProgress {
  exercisesCompleted: number;
  exercisesTotal: number;
  correctAnswers: number;
  totalAttempts: number;
  accuracy: number; // percentage
  bestStreak: number;
  currentStreak: number;
  masteredItems: string[]; // item IDs that user has mastered
  weakItems: string[]; // items that need more practice
  lastScore: number;
  averageScore: number;
}

// ============================================
// PRACTICE DATA STRUCTURE
// ============================================

export interface PhasePracticeData {
  phaseId: PhaseId;
  info: PhaseInfo;
  writing: {
    description: string;
    descriptionAr: string;
    descriptionFr: string;
    items: (LetterItem | SentenceItem | PracticeItem)[];
    exercises: Exercise[];
  };
  listening: {
    description: string;
    descriptionAr: string;
    descriptionFr: string;
    items: PracticeItem[];
    exercises: Exercise[];
  };
  speaking: {
    description: string;
    descriptionAr: string;
    descriptionFr: string;
    items: PracticeItem[];
    exercises: Exercise[];
  };
  vocabulary: {
    description: string;
    descriptionAr: string;
    descriptionFr: string;
    items: VocabularyItem[];
    exercises: Exercise[];
    categories: string[];
  };
}

// ============================================
// UI STATE TYPES
// ============================================

export interface PracticeUIState {
  selectedPhase: PhaseId;
  selectedType: PracticeType | null;
  isSessionActive: boolean;
  currentSession: PracticeSession | null;
  showHint: boolean;
  isMuted: boolean;
  playbackSpeed: number;
}

export interface PracticeStats {
  phaseId: PhaseId;
  totalExercises: number;
  completedExercises: number;
  accuracy: number;
  totalTimeSpent: number;
  currentStreak: number;
  bestStreak: number;
  rank: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  xpEarned: number;
}

// ============================================
// AI GENERATION TYPES
// ============================================

export interface AIExerciseRequest {
  phaseId: PhaseId;
  practiceType: PracticeType;
  exerciseType: ExerciseType;
  difficulty: DifficultyLevel;
  topics?: string[];
  excludeIds?: string[]; // Don't repeat these exercises
  count?: number;
}

export interface AIExerciseResponse {
  exercises: Exercise[];
  generatedAt: Date;
  model: string;
}

export interface AIFeedbackRequest {
  exerciseType: ExerciseType;
  userAnswer: string;
  correctAnswer: string;
  context?: string;
}

export interface AIFeedbackResponse {
  isCorrect: boolean;
  score: number; // 0-100
  feedback: string;
  feedbackAr: string;
  feedbackFr: string;
  suggestions?: string[];
}
