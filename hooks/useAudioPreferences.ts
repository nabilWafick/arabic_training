'use client';

import { useEffect, useCallback } from 'react';
import { useAudioStore, VoiceType, AccentType, ACCENT_LANG_MAP } from '@/stores/useAudioStore';

/**
 * Hook to wrap audio store for components
 * Provides convenient access to audio preferences and speak functionality
 */
export function useAudioPreferences() {
  const {
    // State
    isPlaying,
    isEnabled,
    voiceType,
    speechRate,
    accentType,
    backgroundMusic,
    musicVolume,
    effectsVolume,
    arabicVoices,
    availableVoices,
    isMusicPlaying,
    
    // Actions
    loadVoices,
    speakWithSettings,
    speak,
    stop,
    setVoiceType,
    setSpeechRate,
    setAccentType,
    setBackgroundMusic,
    toggleBackgroundMusic,
    setMusicVolume,
    setEffectsVolume,
    toggleEnabled,
    getVoiceForSettings,
    playBackgroundMusic,
    pauseBackgroundMusic,
  } = useAudioStore();

  // Load voices on mount
  useEffect(() => {
    loadVoices();
  }, [loadVoices]);

  // Get filtered voices by gender
  const getVoicesByGender = useCallback((gender: VoiceType) => {
    return arabicVoices.filter((voice) => {
      const name = voice.name.toLowerCase();
      if (gender === 'female') {
        return name.includes('female') || name.includes('woman') || 
               name.includes('samantha') || name.includes('victoria') ||
               name.includes('sara') || name.includes('laila') ||
               name.includes('helena') || name.includes('hazel');
      }
      return name.includes('male') || name.includes('man') || 
             name.includes('david') || name.includes('alex') ||
             name.includes('maged') || name.includes('tarik') ||
             name.includes('omar') || name.includes('majed');
    });
  }, [arabicVoices]);

  // Get voices by accent
  const getVoicesByAccent = useCallback((accent: AccentType) => {
    const targetLang = ACCENT_LANG_MAP[accent];
    return arabicVoices.filter((voice) => 
      voice.lang === targetLang || voice.lang.startsWith(targetLang.split('-')[0])
    );
  }, [arabicVoices]);

  // Check if a specific voice type is available
  const isVoiceTypeAvailable = useCallback((type: VoiceType) => {
    return getVoicesByGender(type).length > 0;
  }, [getVoicesByGender]);

  // Check if a specific accent is available
  const isAccentAvailable = useCallback((accent: AccentType) => {
    return getVoicesByAccent(accent).length > 0;
  }, [getVoicesByAccent]);

  // Speak text with current settings
  const speakText = useCallback((text: string) => {
    speakWithSettings(text);
  }, [speakWithSettings]);

  // Speak with specific language (fallback to basic speak)
  const speakWithLanguage = useCallback((text: string, lang?: string) => {
    if (lang) {
      speak(text, lang);
    } else {
      speakWithSettings(text);
    }
  }, [speak, speakWithSettings]);

  // Preview a specific accent
  const previewAccent = useCallback((accent: AccentType, text: string = 'مرحبا') => {
    const lang = ACCENT_LANG_MAP[accent];
    const voices = getVoicesByAccent(accent);
    
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechRate;
    utterance.volume = effectsVolume;
    
    if (voices.length > 0) {
      utterance.voice = voices[0];
    }
    
    window.speechSynthesis.speak(utterance);
  }, [getVoicesByAccent, speechRate, effectsVolume]);

  // Preview voice type
  const previewVoiceType = useCallback((type: VoiceType, text: string = 'مرحبا') => {
    const voices = getVoicesByGender(type);
    
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = ACCENT_LANG_MAP[accentType];
    utterance.rate = speechRate;
    utterance.volume = effectsVolume;
    
    if (voices.length > 0) {
      utterance.voice = voices[0];
    }
    
    window.speechSynthesis.speak(utterance);
  }, [getVoicesByGender, accentType, speechRate, effectsVolume]);

  // Test current settings
  const testCurrentSettings = useCallback((text: string = 'السلام عليكم، مرحبا بكم في تعلم اللغة العربية') => {
    speakWithSettings(text);
  }, [speakWithSettings]);

  // Get current voice info
  const getCurrentVoice = useCallback(() => {
    return getVoiceForSettings();
  }, [getVoiceForSettings]);

  // Check overall voice availability
  const hasArabicVoices = arabicVoices.length > 0;
  const hasSpeechSynthesis = typeof window !== 'undefined' && 'speechSynthesis' in window;

  return {
    // State
    isPlaying,
    isEnabled,
    voiceType,
    speechRate,
    accentType,
    backgroundMusic,
    musicVolume,
    effectsVolume,
    arabicVoices,
    availableVoices,
    isMusicPlaying,
    hasArabicVoices,
    hasSpeechSynthesis,
    
    // Actions
    speakText,
    speakWithLanguage,
    stop,
    setVoiceType,
    setSpeechRate,
    setAccentType,
    setBackgroundMusic,
    toggleBackgroundMusic,
    setMusicVolume,
    setEffectsVolume,
    toggleEnabled,
    playBackgroundMusic,
    pauseBackgroundMusic,
    
    // Preview functions
    previewAccent,
    previewVoiceType,
    testCurrentSettings,
    
    // Utility functions
    getVoicesByGender,
    getVoicesByAccent,
    isVoiceTypeAvailable,
    isAccentAvailable,
    getCurrentVoice,
  };
}

export default useAudioPreferences;
