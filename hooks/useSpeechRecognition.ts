/**
 * Speech Recognition Hook
 * Provides real-time speech recognition with pronunciation feedback
 * Uses Web Speech API with fallback handling
 */

'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

// Type definitions for Web Speech API
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

interface ISpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: ((this: ISpeechRecognition, ev: Event) => void) | null;
  onresult: ((this: ISpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
  onerror: ((this: ISpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
  onend: ((this: ISpeechRecognition, ev: Event) => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

interface ISpeechRecognitionConstructor {
  new (): ISpeechRecognition;
}

// Result type for callbacks
interface SpeechRecognitionHookResult {
  transcript: string;
  confidence: number;
  isFinal: boolean;
}

interface SpeechRecognitionState {
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  confidence: number;
  error: string | null;
  isSupported: boolean;
}

interface UseSpeechRecognitionOptions {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
  onResult?: (result: SpeechRecognitionHookResult) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
}

// Get SpeechRecognition constructor
function getSpeechRecognition(): ISpeechRecognitionConstructor | null {
  if (typeof window === 'undefined') return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
}

/**
 * Custom hook for speech recognition
 */
export function useSpeechRecognition(options: UseSpeechRecognitionOptions = {}) {
  const {
    language = 'ar-SA', // Arabic (Saudi Arabia) by default
    continuous = false,
    interimResults = true,
    onResult,
    onError,
    onEnd,
  } = options;

  const [state, setState] = useState<SpeechRecognitionState>({
    isListening: false,
    transcript: '',
    interimTranscript: '',
    confidence: 0,
    error: null,
    isSupported: false,
  });

  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const mountedRef = useRef(true);

  // Check for browser support
  useEffect(() => {
    const SpeechRecognitionClass = getSpeechRecognition();
    
    setState(prev => ({
      ...prev,
      isSupported: !!SpeechRecognitionClass,
    }));

    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Initialize recognition
  const initRecognition = useCallback(() => {
    const SpeechRecognitionClass = getSpeechRecognition();
    
    if (!SpeechRecognitionClass) {
      setState(prev => ({
        ...prev,
        error: 'Speech recognition not supported in this browser',
      }));
      return null;
    }

    const recognition = new SpeechRecognitionClass();
    recognition.lang = language;
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      if (mountedRef.current) {
        setState(prev => ({
          ...prev,
          isListening: true,
          error: null,
        }));
      }
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      if (!mountedRef.current) return;

      let finalTranscript = '';
      let interimTranscript = '';
      let confidence = 0;

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
          confidence = result[0].confidence;
        } else {
          interimTranscript += result[0].transcript;
        }
      }

      setState(prev => ({
        ...prev,
        transcript: prev.transcript + finalTranscript,
        interimTranscript,
        confidence,
      }));

      if (finalTranscript && onResult) {
        onResult({
          transcript: finalTranscript,
          confidence,
          isFinal: true,
        });
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (!mountedRef.current) return;

      const errorMessage = getErrorMessage(event.error);
      setState(prev => ({
        ...prev,
        error: errorMessage,
        isListening: false,
      }));
      
      if (onError) {
        onError(errorMessage);
      }
    };

    recognition.onend = () => {
      if (!mountedRef.current) return;

      setState(prev => ({
        ...prev,
        isListening: false,
        interimTranscript: '',
      }));
      
      if (onEnd) {
        onEnd();
      }
    };

    return recognition;
  }, [language, continuous, interimResults, onResult, onError, onEnd]);

  // Start listening
  const startListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }

    const recognition = initRecognition();
    if (!recognition) return;

    recognitionRef.current = recognition;
    
    setState(prev => ({
      ...prev,
      transcript: '',
      interimTranscript: '',
      confidence: 0,
      error: null,
    }));

    try {
      recognition.start();
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'Failed to start speech recognition',
      }));
    }
  }, [initRecognition]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
  }, []);

  // Abort listening (immediate stop)
  const abortListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
      recognitionRef.current = null;
    }
    
    setState(prev => ({
      ...prev,
      isListening: false,
      interimTranscript: '',
    }));
  }, []);

  // Reset transcript
  const resetTranscript = useCallback(() => {
    setState(prev => ({
      ...prev,
      transcript: '',
      interimTranscript: '',
      confidence: 0,
    }));
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  return {
    ...state,
    startListening,
    stopListening,
    abortListening,
    resetTranscript,
  };
}

/**
 * Get user-friendly error message
 */
function getErrorMessage(error: string): string {
  switch (error) {
    case 'no-speech':
      return 'No speech detected. Please try again.';
    case 'audio-capture':
      return 'Microphone not available. Please check your settings.';
    case 'not-allowed':
      return 'Microphone access denied. Please allow microphone access.';
    case 'network':
      return 'Network error. Please check your connection.';
    case 'aborted':
      return 'Recognition was aborted.';
    case 'language-not-supported':
      return 'Language not supported for speech recognition.';
    case 'service-not-allowed':
      return 'Speech recognition service not allowed.';
    default:
      return `Speech recognition error: ${error}`;
  }
}

/**
 * Check if speech recognition is supported
 */
export function isSpeechRecognitionSupported(): boolean {
  return !!getSpeechRecognition();
}
