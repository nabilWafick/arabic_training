import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// ============================================
// CERTIFICATION STORE
// ============================================

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Certificate {
  id: string;
  phase: number;
  cefrLevel: CEFRLevel;
  score: number;
  passingScore: number;
  earnedAt: string;
  userName: string;
  verificationCode: string;
}

export interface AssessmentAttempt {
  phaseId: number;
  score: number;
  passed: boolean;
  attemptedAt: string;
  timeSpent: number; // in seconds
  totalQuestions: number;
  correctAnswers: number;
}

interface CertificationState {
  // State
  certificates: Certificate[];
  assessmentAttempts: AssessmentAttempt[];
  currentCEFRLevel: CEFRLevel | null;
  isLoading: boolean;

  // Actions
  addCertificate: (certificate: Omit<Certificate, 'id' | 'verificationCode' | 'earnedAt'>) => Certificate;
  addAssessmentAttempt: (attempt: Omit<AssessmentAttempt, 'attemptedAt'>) => void;
  getCertificateForPhase: (phaseId: number) => Certificate | undefined;
  getAttemptsForPhase: (phaseId: number) => AssessmentAttempt[];
  hasCertificateForPhase: (phaseId: number) => boolean;
  updateCEFRLevel: () => void;
  getHighestCEFRLevel: () => CEFRLevel | null;
  resetCertifications: () => void;
}

// CEFR level mapping
export const PHASE_TO_CEFR: Record<number, CEFRLevel> = {
  1: 'A1',
  2: 'A2',
  3: 'B1',
  4: 'B2',
  5: 'C1', // Phase 5 can lead to C1 or C2 depending on score
};

// Generate a unique verification code
function generateVerificationCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const segments = 4;
  const segmentLength = 4;
  const parts: string[] = [];
  
  for (let i = 0; i < segments; i++) {
    let segment = '';
    for (let j = 0; j < segmentLength; j++) {
      segment += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    parts.push(segment);
  }
  
  return parts.join('-');
}

// Generate a unique certificate ID
function generateCertificateId(): string {
  return `CERT-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

// CEFR level hierarchy for comparison
const CEFR_HIERARCHY: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function compareCEFRLevels(a: CEFRLevel, b: CEFRLevel): number {
  return CEFR_HIERARCHY.indexOf(a) - CEFR_HIERARCHY.indexOf(b);
}

export const useCertificationStore = create<CertificationState>()(
  persist(
    (set, get) => ({
      // Initial state
      certificates: [],
      assessmentAttempts: [],
      currentCEFRLevel: null,
      isLoading: false,

      // Add a new certificate
      addCertificate: (certificateData) => {
        const certificate: Certificate = {
          ...certificateData,
          id: generateCertificateId(),
          verificationCode: generateVerificationCode(),
          earnedAt: new Date().toISOString(),
        };

        set((state) => ({
          certificates: [...state.certificates, certificate],
        }));

        // Update CEFR level after adding certificate
        get().updateCEFRLevel();

        return certificate;
      },

      // Add an assessment attempt
      addAssessmentAttempt: (attemptData) => {
        const attempt: AssessmentAttempt = {
          ...attemptData,
          attemptedAt: new Date().toISOString(),
        };

        set((state) => ({
          assessmentAttempts: [...state.assessmentAttempts, attempt],
        }));
      },

      // Get certificate for a specific phase
      getCertificateForPhase: (phaseId: number) => {
        return get().certificates.find((cert) => cert.phase === phaseId);
      },

      // Get all attempts for a specific phase
      getAttemptsForPhase: (phaseId: number) => {
        return get().assessmentAttempts.filter((attempt) => attempt.phaseId === phaseId);
      },

      // Check if user has certificate for a phase
      hasCertificateForPhase: (phaseId: number) => {
        return get().certificates.some((cert) => cert.phase === phaseId);
      },

      // Update current CEFR level based on earned certificates
      updateCEFRLevel: () => {
        const { certificates } = get();
        
        if (certificates.length === 0) {
          set({ currentCEFRLevel: null });
          return;
        }

        // Find the highest CEFR level from earned certificates
        let highestLevel: CEFRLevel = 'A1';
        
        for (const cert of certificates) {
          if (compareCEFRLevels(cert.cefrLevel, highestLevel) > 0) {
            highestLevel = cert.cefrLevel;
          }
        }

        set({ currentCEFRLevel: highestLevel });
      },

      // Get highest CEFR level
      getHighestCEFRLevel: () => {
        const { certificates } = get();
        
        if (certificates.length === 0) {
          return null;
        }

        let highestLevel: CEFRLevel = 'A1';
        
        for (const cert of certificates) {
          if (compareCEFRLevels(cert.cefrLevel, highestLevel) > 0) {
            highestLevel = cert.cefrLevel;
          }
        }

        return highestLevel;
      },

      // Reset all certifications
      resetCertifications: () => {
        set({
          certificates: [],
          assessmentAttempts: [],
          currentCEFRLevel: null,
        });
      },
    }),
    {
      name: 'arabicmaster-certification',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        certificates: state.certificates,
        assessmentAttempts: state.assessmentAttempts,
        currentCEFRLevel: state.currentCEFRLevel,
      }),
    }
  )
);
