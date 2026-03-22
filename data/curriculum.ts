/**
 * Complete Arabic curriculum - Main export file
 * Imports all phases from modular files and provides utility functions
 */

import type { Phase, Lesson } from "@/types";
import { PHASE_1_LESSONS } from "./phases/phase1";
import { PHASE_2_LESSONS } from "./phases/phase2";
import { PHASE_3_LESSONS } from "./phases/phase3";
import { PHASE_4_LESSONS } from "./phases/phase4";
import { PHASE_5_LESSONS } from "./phases/phase5";
import { ARABIC_ALPHABET, ARABIC_HARAKAT, ARABIC_NUMBERS } from "./phases/constants";

// Re-export constants for backwards compatibility
export { ARABIC_ALPHABET, ARABIC_HARAKAT, ARABIC_NUMBERS };

/**
 * Phase definitions with metadata
 */
const PHASE_DEFINITIONS: Omit<Phase, "lessons">[] = [
  {
    id: 1,
    title: "Foundations",
    titleAr: "الأساسيات",
    description: "Master the Arabic alphabet, vowel marks, and basic reading skills",
    descriptionAr: "إتقان الحروف العربية وعلامات التشكيل ومهارات القراءة الأساسية",
    duration: "25 hours",
    color: "emerald",
    icon: "book",
    totalLessons: 30,
  },
  {
    id: 2,
    title: "Building Blocks",
    titleAr: "اللبنات الأساسية",
    description: "Build vocabulary, learn basic grammar, and form simple sentences",
    descriptionAr: "بناء المفردات وتعلم القواعد الأساسية وتكوين جمل بسيطة",
    duration: "35 hours",
    color: "blue",
    icon: "layers",
    totalLessons: 30,
  },
  {
    id: 3,
    title: "Expansion",
    titleAr: "التوسع",
    description: "Expand your knowledge with complex grammar and extended vocabulary",
    descriptionAr: "توسيع معرفتك بالقواعد المعقدة والمفردات الموسعة",
    duration: "45 hours",
    color: "purple",
    icon: "trending-up",
    totalLessons: 30,
  },
  {
    id: 4,
    title: "Fluency",
    titleAr: "الطلاقة",
    description: "Achieve reading fluency with advanced texts and cultural understanding",
    descriptionAr: "تحقيق الطلاقة في القراءة مع نصوص متقدمة وفهم ثقافي",
    duration: "50 hours",
    color: "orange",
    icon: "zap",
    totalLessons: 30,
  },
  {
    id: 5,
    title: "Mastery",
    titleAr: "الإتقان",
    description: "Master Arabic with classical texts, poetry, and native-like fluency",
    descriptionAr: "إتقان اللغة العربية مع النصوص الكلاسيكية والشعر والطلاقة",
    duration: "60 hours",
    color: "gold",
    icon: "crown",
    totalLessons: 30,
  },
];

/**
 * Map of all lessons by phase
 */
const PHASE_LESSONS: Record<number, Lesson[]> = {
  1: PHASE_1_LESSONS,
  2: PHASE_2_LESSONS,
  3: PHASE_3_LESSONS,
  4: PHASE_4_LESSONS,
  5: PHASE_5_LESSONS,
};

/**
 * Complete curriculum with all phases and lessons
 */
export const CURRICULUM: Phase[] = PHASE_DEFINITIONS.map((phaseDef) => ({
  ...phaseDef,
  lessons: PHASE_LESSONS[phaseDef.id] || [],
}));

/**
 * Get a specific phase by ID
 */
export function getPhase(phaseId: number): Phase | undefined {
  return CURRICULUM.find((p) => p.id === phaseId);
}

/**
 * Get a specific lesson by its full ID (e.g., "1-5")
 */
export function getLesson(lessonId: string): Lesson | undefined {
  for (const phase of CURRICULUM) {
    const lesson = phase.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

/**
 * Get all lessons for a phase
 */
export function getPhaseLessons(phaseId: number): Lesson[] {
  return PHASE_LESSONS[phaseId] || [];
}

/**
 * Get next lesson after the given one
 */
export function getNextLesson(currentLessonId: string): Lesson | undefined {
  const [phaseId, lessonNum] = currentLessonId.split("-").map(Number);
  const phaseLessons = PHASE_LESSONS[phaseId] || [];
  const currentIndex = phaseLessons.findIndex((l) => l.id === currentLessonId);
  
  if (currentIndex < phaseLessons.length - 1) {
    return phaseLessons[currentIndex + 1];
  }
  
  // Check next phase
  const nextPhaseLessons = PHASE_LESSONS[phaseId + 1];
  if (nextPhaseLessons && nextPhaseLessons.length > 0) {
    return nextPhaseLessons[0];
  }
  
  return undefined;
}

/**
 * Get previous lesson before the given one
 */
export function getPrevLesson(currentLessonId: string): Lesson | undefined {
  const [phaseId, lessonNum] = currentLessonId.split("-").map(Number);
  const phaseLessons = PHASE_LESSONS[phaseId] || [];
  const currentIndex = phaseLessons.findIndex((l) => l.id === currentLessonId);
  
  if (currentIndex > 0) {
    return phaseLessons[currentIndex - 1];
  }
  
  // Check previous phase
  const prevPhaseLessons = PHASE_LESSONS[phaseId - 1];
  if (prevPhaseLessons && prevPhaseLessons.length > 0) {
    return prevPhaseLessons[prevPhaseLessons.length - 1];
  }
  
  return undefined;
}

/**
 * Calculate total stats across all phases
 */
export function getCurriculumStats() {
  let totalLessons = 0;
  
  for (const phase of CURRICULUM) {
    totalLessons += phase.lessons.length;
  }
  
  return {
    totalPhases: CURRICULUM.length,
    totalLessons,
  };
}
