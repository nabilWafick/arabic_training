import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ============================================
// AUDIO STORE (for Web Speech API)
// ============================================

export type VoiceType = 'male' | 'female';
export type AccentType = 'msa' | 'egyptian' | 'levantine' | 'gulf';

// Accent to language code mapping
export const ACCENT_LANG_MAP: Record<AccentType, string> = {
  msa: 'ar-SA',      // Modern Standard Arabic (Saudi)
  egyptian: 'ar-EG', // Egyptian Arabic
  levantine: 'ar-LB', // Lebanese (Levantine)
  gulf: 'ar-AE',     // Gulf Arabic (UAE)
};

interface AudioState {
  // State
  isPlaying: boolean;
  currentText: string | null;
  rate: number; // 0.1 to 10, default 1
  pitch: number; // 0 to 2, default 1
  volume: number; // 0 to 1, default 1
  voice: SpeechSynthesisVoice | null;
  selectedVoice: SpeechSynthesisVoice | null;
  availableVoices: SpeechSynthesisVoice[];
  arabicVoices: SpeechSynthesisVoice[];
  isEnabled: boolean; // Global toggle for audio
  
  // New advanced settings
  voiceType: VoiceType;
  speechRate: number; // 0.5 to 2.0, default 1.0
  accentType: AccentType;
  backgroundMusic: boolean;
  musicVolume: number; // 0 to 1
  effectsVolume: number; // 0 to 1
  
  // Background music state
  isMusicPlaying: boolean;
  musicElement: HTMLAudioElement | null;
  
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
  toggleEnabled: () => void;
  
  // New actions
  setVoiceType: (type: VoiceType) => void;
  setSpeechRate: (rate: number) => void;
  setAccentType: (accent: AccentType) => void;
  toggleBackgroundMusic: () => void;
  setBackgroundMusic: (enabled: boolean) => void;
  setMusicVolume: (volume: number) => void;
  setEffectsVolume: (volume: number) => void;
  playBackgroundMusic: () => void;
  pauseBackgroundMusic: () => void;
  lowerMusicForSpeech: () => void;
  restoreMusicVolume: () => void;
  getVoiceForSettings: () => SpeechSynthesisVoice | null;
  speakWithSettings: (text: string) => void;
}

// Helper to detect voice gender from name
const detectVoiceGender = (voice: SpeechSynthesisVoice): VoiceType | null => {
  const name = voice.name.toLowerCase();
  // Common female name patterns
  if (name.includes('female') || name.includes('woman') || 
      name.includes('samantha') || name.includes('victoria') ||
      name.includes('sara') || name.includes('laila') || 
      name.includes('maged') === false && name.includes('zira') ||
      name.includes('helena') || name.includes('hazel')) {
    return 'female';
  }
  // Common male name patterns
  if (name.includes('male') || name.includes('man') || 
      name.includes('david') || name.includes('alex') ||
      name.includes('maged') || name.includes('tarik') ||
      name.includes('omar') || name.includes('majed')) {
    return 'male';
  }
  return null;
};

export const useAudioStore = create<AudioState>()(
  persist(
    (set, get) => ({
      // Initial state
      isPlaying: false,
      currentText: null,
      rate: 0.9, // Slightly slower for Arabic learning
      pitch: 1,
      volume: 1,
      voice: null,
      selectedVoice: null,
      availableVoices: [],
      arabicVoices: [],
      isEnabled: true,
      
      // New advanced settings with defaults
      voiceType: 'female' as VoiceType,
      speechRate: 1.0,
      accentType: 'msa' as AccentType,
      backgroundMusic: false,
      musicVolume: 0.3,
      effectsVolume: 0.8,
      
      // Background music state
      isMusicPlaying: false,
      musicElement: null,

      // Toggle audio on/off
      toggleEnabled: () => {
        const { isEnabled, stop } = get();
        if (isEnabled) {
          stop(); // Stop any playing audio when disabling
        }
        set({ isEnabled: !isEnabled });
      },

      // Speak text
      speak: (text: string, lang: string = 'ar-SA') => {
        const { isEnabled, lowerMusicForSpeech, restoreMusicVolume } = get();
        
        if (!isEnabled) {
          console.warn('Audio is disabled');
          return;
        }
        
        if (typeof window === 'undefined' || !window.speechSynthesis) {
          console.warn('Speech synthesis not supported');
          return;
        }

        // Stop any current speech
        window.speechSynthesis.cancel();
        
        // Lower background music during speech
        lowerMusicForSpeech();

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
          restoreMusicVolume();
        };

        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event);
          set({ isPlaying: false, currentText: null });
          restoreMusicVolume();
        };

        window.speechSynthesis.speak(utterance);
      },

      // Stop speaking
      stop: () => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          window.speechSynthesis.cancel();
          set({ isPlaying: false, currentText: null });
          get().restoreMusicVolume();
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
        set({ voice, selectedVoice: voice });
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

          const defaultVoice = arabicVoices.length > 0 ? arabicVoices[0] : null;
          set({
            availableVoices: voices,
            arabicVoices,
            voice: defaultVoice,
            selectedVoice: defaultVoice,
          });
        };

        // Load voices immediately if available
        loadVoiceList();

        // Also listen for voiceschanged event (some browsers load asynchronously)
        window.speechSynthesis.onvoiceschanged = loadVoiceList;
      },
      
      // New actions for advanced settings
      setVoiceType: (type: VoiceType) => {
        set({ voiceType: type });
      },
      
      setSpeechRate: (rate: number) => {
        const clampedRate = Math.max(0.5, Math.min(2.0, rate));
        set({ speechRate: clampedRate, rate: clampedRate });
      },
      
      setAccentType: (accent: AccentType) => {
        set({ accentType: accent });
      },
      
      toggleBackgroundMusic: () => {
        const { backgroundMusic, playBackgroundMusic, pauseBackgroundMusic } = get();
        if (backgroundMusic) {
          pauseBackgroundMusic();
        } else {
          playBackgroundMusic();
        }
        set({ backgroundMusic: !backgroundMusic });
      },
      
      setBackgroundMusic: (enabled: boolean) => {
        const { playBackgroundMusic, pauseBackgroundMusic } = get();
        if (enabled) {
          playBackgroundMusic();
        } else {
          pauseBackgroundMusic();
        }
        set({ backgroundMusic: enabled });
      },
      
      setMusicVolume: (volume: number) => {
        const clampedVolume = Math.max(0, Math.min(1, volume));
        const { musicElement } = get();
        if (musicElement) {
          musicElement.volume = clampedVolume;
        }
        set({ musicVolume: clampedVolume });
      },
      
      setEffectsVolume: (volume: number) => {
        set({ effectsVolume: Math.max(0, Math.min(1, volume)) });
      },
      
      playBackgroundMusic: () => {
        if (typeof window === 'undefined') return;
        
        let { musicElement, musicVolume } = get();
        
        if (!musicElement) {
          // Create audio element with placeholder (silent audio or ambient track)
          musicElement = new Audio('/audio/ambient-arabic.mp3');
          musicElement.loop = true;
          musicElement.volume = musicVolume;
          set({ musicElement });
        }
        
        musicElement.play().catch((e) => {
          console.warn('Background music autoplay blocked:', e);
        });
        set({ isMusicPlaying: true });
      },
      
      pauseBackgroundMusic: () => {
        const { musicElement } = get();
        if (musicElement) {
          musicElement.pause();
        }
        set({ isMusicPlaying: false });
      },
      
      lowerMusicForSpeech: () => {
        const { musicElement, musicVolume } = get();
        if (musicElement && musicElement.volume > 0) {
          // Lower to 20% of current volume during speech
          musicElement.volume = musicVolume * 0.2;
        }
      },
      
      restoreMusicVolume: () => {
        const { musicElement, musicVolume } = get();
        if (musicElement) {
          musicElement.volume = musicVolume;
        }
      },
      
      // Get best matching voice for current settings
      getVoiceForSettings: () => {
        const { arabicVoices, voiceType, accentType } = get();
        const targetLang = ACCENT_LANG_MAP[accentType];
        
        // First, try to find a voice matching both accent and gender
        let matchingVoices = arabicVoices.filter((v) => {
          const langMatch = v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0]);
          const genderMatch = detectVoiceGender(v) === voiceType;
          return langMatch && genderMatch;
        });
        
        if (matchingVoices.length > 0) {
          return matchingVoices[0];
        }
        
        // Fall back to just accent match
        matchingVoices = arabicVoices.filter((v) => 
          v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0])
        );
        
        if (matchingVoices.length > 0) {
          return matchingVoices[0];
        }
        
        // Fall back to just gender match
        matchingVoices = arabicVoices.filter((v) => 
          detectVoiceGender(v) === voiceType
        );
        
        if (matchingVoices.length > 0) {
          return matchingVoices[0];
        }
        
        // Fall back to any Arabic voice
        return arabicVoices.length > 0 ? arabicVoices[0] : null;
      },
      
      // Speak with current settings applied
      speakWithSettings: (text: string) => {
        const { isEnabled, speechRate, accentType, effectsVolume, getVoiceForSettings, lowerMusicForSpeech, restoreMusicVolume } = get();
        
        if (!isEnabled) {
          console.warn('Audio is disabled');
          return;
        }
        
        if (typeof window === 'undefined' || !window.speechSynthesis) {
          console.warn('Speech synthesis not supported');
          return;
        }

        // Stop any current speech
        window.speechSynthesis.cancel();
        
        // Lower background music during speech
        lowerMusicForSpeech();

        const voice = getVoiceForSettings();
        const lang = ACCENT_LANG_MAP[accentType];
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = speechRate;
        utterance.pitch = 1;
        utterance.volume = effectsVolume;

        if (voice) {
          utterance.voice = voice;
        }

        utterance.onstart = () => {
          set({ isPlaying: true, currentText: text });
        };

        utterance.onend = () => {
          set({ isPlaying: false, currentText: null });
          restoreMusicVolume();
        };

        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event);
          set({ isPlaying: false, currentText: null });
          restoreMusicVolume();
        };

        window.speechSynthesis.speak(utterance);
      },
    }),
    {
      name: 'audio-settings',
      partialize: (state) => ({
        voiceType: state.voiceType,
        speechRate: state.speechRate,
        accentType: state.accentType,
        backgroundMusic: state.backgroundMusic,
        musicVolume: state.musicVolume,
        effectsVolume: state.effectsVolume,
        isEnabled: state.isEnabled,
      }),
    }
  )
);

// Helper hook to initialize audio on mount
export const initializeAudio = () => {
  const loadVoices = useAudioStore.getState().loadVoices;
  if (typeof window !== 'undefined') {
    loadVoices();
  }
};
