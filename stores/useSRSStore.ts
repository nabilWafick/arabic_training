/**
 * SRS (Spaced Repetition System) Store
 * Manages vocabulary review items with SM-2 algorithm
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  type SRSItem,
  type QualityRating,
  calculateNextReview,
  createSRSItem,
  getDueItems,
  getReviewStats,
} from '@/lib/srs/algorithm';

// Sample vocabulary to seed
const SEED_VOCABULARY = [
  // Phase 1 - Basic words
  { word: 'kitaab', wordAr: 'كِتَاب', translation: 'Book', phaseId: 1 },
  { word: 'baab', wordAr: 'بَاب', translation: 'Door', phaseId: 1 },
  { word: 'qalam', wordAr: 'قَلَم', translation: 'Pen', phaseId: 1 },
  { word: 'bayt', wordAr: 'بَيْت', translation: 'House', phaseId: 1 },
  { word: 'maa', wordAr: 'مَاء', translation: 'Water', phaseId: 1 },
  // Phase 2 - Common words
  { word: 'shukran', wordAr: 'شُكْراً', translation: 'Thank you', phaseId: 2 },
  { word: 'marhaba', wordAr: 'مَرْحَبَا', translation: 'Hello', phaseId: 2 },
  { word: 'sabah', wordAr: 'صَبَاح', translation: 'Morning', phaseId: 2 },
  { word: 'masaa', wordAr: 'مَسَاء', translation: 'Evening', phaseId: 2 },
  { word: 'naam', wordAr: 'نَعَم', translation: 'Yes', phaseId: 2 },
  // Phase 3 - Verbs
  { word: 'akala', wordAr: 'أَكَلَ', translation: 'He ate', phaseId: 3 },
  { word: 'shariba', wordAr: 'شَرِبَ', translation: 'He drank', phaseId: 3 },
  { word: 'kataba', wordAr: 'كَتَبَ', translation: 'He wrote', phaseId: 3 },
  { word: 'qara\'a', wordAr: 'قَرَأَ', translation: 'He read', phaseId: 3 },
  { word: 'dhahaba', wordAr: 'ذَهَبَ', translation: 'He went', phaseId: 3 },
];

interface SRSState {
  items: SRSItem[];
  currentReviewIndex: number;
  sessionStats: {
    reviewed: number;
    correct: number;
    incorrect: number;
    startTime: number;
  };
  
  // Actions
  initializeItems: () => void;
  addItem: (word: string, wordAr: string, translation: string, phaseId: number) => void;
  removeItem: (id: string) => void;
  reviewItem: (id: string, quality: QualityRating) => void;
  
  // Review session
  startReviewSession: () => void;
  endReviewSession: () => { reviewed: number; correct: number; incorrect: number; duration: number };
  getNextReviewItem: () => SRSItem | null;
  
  // Queries
  getDueCount: () => number;
  getStats: () => ReturnType<typeof getReviewStats>;
  getItemsByPhase: (phaseId: number) => SRSItem[];
}

export const useSRSStore = create<SRSState>()(
  persist(
    (set, get) => ({
      items: [],
      currentReviewIndex: 0,
      sessionStats: {
        reviewed: 0,
        correct: 0,
        incorrect: 0,
        startTime: 0,
      },
      
      initializeItems: () => {
        const { items } = get();
        if (items.length === 0) {
          // Seed initial vocabulary
          const seededItems = SEED_VOCABULARY.map((v, i) =>
            createSRSItem(
              `seed-${i}`,
              v.word,
              v.wordAr,
              v.translation,
              v.phaseId
            )
          );
          set({ items: seededItems });
        }
      },
      
      addItem: (word, wordAr, translation, phaseId) => {
        const id = `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newItem = createSRSItem(id, word, wordAr, translation, phaseId);
        set(state => ({ items: [...state.items, newItem] }));
      },
      
      removeItem: (id) => {
        set(state => ({
          items: state.items.filter(item => item.id !== id),
        }));
      },
      
      reviewItem: (id, quality) => {
        set(state => {
          const itemIndex = state.items.findIndex(item => item.id === id);
          if (itemIndex === -1) return state;
          
          const updatedItem = calculateNextReview(state.items[itemIndex], quality);
          const newItems = [...state.items];
          newItems[itemIndex] = updatedItem;
          
          return {
            items: newItems,
            sessionStats: {
              ...state.sessionStats,
              reviewed: state.sessionStats.reviewed + 1,
              correct: quality >= 3 ? state.sessionStats.correct + 1 : state.sessionStats.correct,
              incorrect: quality < 3 ? state.sessionStats.incorrect + 1 : state.sessionStats.incorrect,
            },
          };
        });
      },
      
      startReviewSession: () => {
        set({
          currentReviewIndex: 0,
          sessionStats: {
            reviewed: 0,
            correct: 0,
            incorrect: 0,
            startTime: Date.now(),
          },
        });
      },
      
      endReviewSession: () => {
        const { sessionStats } = get();
        const duration = Date.now() - sessionStats.startTime;
        return {
          reviewed: sessionStats.reviewed,
          correct: sessionStats.correct,
          incorrect: sessionStats.incorrect,
          duration,
        };
      },
      
      getNextReviewItem: () => {
        const { items, currentReviewIndex } = get();
        const dueItems = getDueItems(items);
        
        if (currentReviewIndex >= dueItems.length) {
          return null;
        }
        
        set({ currentReviewIndex: currentReviewIndex + 1 });
        return dueItems[currentReviewIndex];
      },
      
      getDueCount: () => {
        const { items } = get();
        return getDueItems(items).length;
      },
      
      getStats: () => {
        const { items } = get();
        return getReviewStats(items);
      },
      
      getItemsByPhase: (phaseId) => {
        const { items } = get();
        return items.filter(item => item.phaseId === phaseId);
      },
    }),
    {
      name: 'arabic-master-srs',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);
