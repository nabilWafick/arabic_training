import { create } from 'zustand';

// ============================================
// AUDIO STORE (for Web Speech API)
// ============================================

interface AudioState {
  // State
  isPlaying: boolean;
  currentText: string | null;
  rate: number; // 0.1 to 10, default 1
  pitch: number; // 0 to 2, default 1
  volume: number; // 0 to 1, default 1
  voice: SpeechSynthesisVoice | null;
  availableVoices: SpeechSynthesisVoice[];
  arabicVoices: SpeechSynthesisVoice[];
  
  // Actions
  speak: (text: string, lang?: string) => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  setRate: (rate: number) => void;
  setPitch: (pitch: number) => void;
  setVolume: (volume: number) => void;
  setVoice: (voice: SpeechSynthesisVoice | null) => void;
  loadVoices: () => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  // Initial state
  isPlaying: false,
  currentText: null,
  rate: 0.9, // Slightly slower for Arabic learning
  pitch: 1,
  volume: 1,
  voice: null,
  availableVoices: [],
  arabicVoices: [],

  // Speak text
  speak: (text: string, lang: string = 'ar-SA') => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();

    const { rate, pitch, volume, voice, arabicVoices } = get();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    // Try to use a specific voice, preferring Arabic voices
    if (voice) {
      utterance.voice = voice;
    } else if (arabicVoices.length > 0) {
      utterance.voice = arabicVoices[0];
    }

    utterance.onstart = () => {
      set({ isPlaying: true, currentText: text });
    };

    utterance.onend = () => {
      set({ isPlaying: false, currentText: null });
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      set({ isPlaying: false, currentText: null });
    };

    window.speechSynthesis.speak(utterance);
  },

  // Stop speaking
  stop: () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      set({ isPlaying: false, currentText: null });
    }
  },

  // Pause speaking
  pause: () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.pause();
      set({ isPlaying: false });
    }
  },

  // Resume speaking
  resume: () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.resume();
      set({ isPlaying: true });
    }
  },

  // Set speech rate
  setRate: (rate: number) => {
    set({ rate: Math.max(0.1, Math.min(10, rate)) });
  },

  // Set speech pitch
  setPitch: (pitch: number) => {
    set({ pitch: Math.max(0, Math.min(2, pitch)) });
  },

  // Set speech volume
  setVolume: (volume: number) => {
    set({ volume: Math.max(0, Math.min(1, volume)) });
  },

  // Set specific voice
  setVoice: (voice: SpeechSynthesisVoice | null) => {
    set({ voice });
  },

  // Load available voices
  loadVoices: () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      return;
    }

    const loadVoiceList = () => {
      const voices = window.speechSynthesis.getVoices();
      const arabicVoices = voices.filter(
        (voice) => 
          voice.lang.startsWith('ar') || 
          voice.name.toLowerCase().includes('arabic')
      );

      set({
        availableVoices: voices,
        arabicVoices,
        voice: arabicVoices.length > 0 ? arabicVoices[0] : null,
      });
    };

    // Load voices immediately if available
    loadVoiceList();

    // Also listen for voiceschanged event (some browsers load asynchronously)
    window.speechSynthesis.onvoiceschanged = loadVoiceList;
  },
}));

// Helper hook to initialize audio on mount
export const initializeAudio = () => {
  const loadVoices = useAudioStore.getState().loadVoices;
  if (typeof window !== 'undefined') {
    loadVoices();
  }
};
