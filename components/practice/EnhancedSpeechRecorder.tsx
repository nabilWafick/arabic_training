'use client';

/**
 * Enhanced Speech Recorder Component
 * Premium UI with real MediaRecorder API, visual feedback, scoring, and gamification
 * Designed for Arabic Master Pro speaking practice
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic2,
  MicOff,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Zap,
  TrendingUp,
  Sparkles,
  Loader2,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface EnhancedSpeechRecorderProps {
  targetText: string;
  targetTextAr: string;
  onRecordingComplete: (result: RecordingResult) => void;
  isSubmitting?: boolean;
  language?: 'en' | 'ar' | 'fr';
  difficulty?: 'easy' | 'medium' | 'hard';
  maxRecordingTime?: number; // seconds
}

export interface RecordingResult {
  audioBlob: Blob;
  transcription: string;
  similarityScore: number; // 0-100
  confidenceScore: number; // 0-100
  recordingDuration: number; // seconds
  timestamp: Date;
}

interface ProcessingState {
  isProcessing: boolean;
  progress: number; // 0-100
  stage: 'idle' | 'recording' | 'processing' | 'analyzing' | 'complete';
  message: string;
}

export default function EnhancedSpeechRecorder({
  targetText,
  targetTextAr,
  onRecordingComplete,
  isSubmitting = false,
  language = 'ar',
  difficulty = 'medium',
  maxRecordingTime = 60,
}: EnhancedSpeechRecorderProps) {
  // Recording state
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);
  
  // Processing state
  const [processing, setProcessing] = useState<ProcessingState>({
    isProcessing: false,
    progress: 0,
    stage: 'idle',
    message: '',
  });

  // Analysis results
  const [analysisResult, setAnalysisResult] = useState<RecordingResult | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // References
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const playbackAudioRef = useRef<HTMLAudioElement | null>(null);

  // Timer effect
  useEffect(() => {
    if (isRecording && recordingTime < maxRecordingTime) {
      timerIntervalRef.current = setInterval(() => {
        setRecordingTime((prev) => {
          const next = prev + 1;
          if (next >= maxRecordingTime) {
            stopRecording();
          }
          return next;
        });
      }, 1000);
    } else if (!isRecording && timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isRecording, recordingTime, maxRecordingTime]);

  // Start recording
  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      
      audioChunksRef.current = [];

      mediaRecorder.addEventListener('dataavailable', (event) => {
        audioChunksRef.current.push(event.data);
      });

      mediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setRecordedAudio(audioBlob);
      });

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      setRecordedAudio(null);
      setAnalysisResult(null);
      setShowFeedback(false);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setProcessing({
        isProcessing: false,
        progress: 0,
        stage: 'idle',
        message: 'Microphone access denied. Please enable permissions.',
      });
    }
  }, []);

  // Stop recording
  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
      
      // Simulate processing
      analyzeRecording();
    }
  }, [isRecording]);

  // Analyze recording (simulated - would integrate with AI API in production)
  const analyzeRecording = async () => {
    setProcessing({
      isProcessing: true,
      progress: 20,
      stage: 'processing',
      message: 'Analyzing pronunciation...',
    });

    // Simulate API processing
    await new Promise((resolve) => setTimeout(resolve, 800));

    setProcessing({
      isProcessing: true,
      progress: 50,
      stage: 'analyzing',
      message: 'Comparing with target...',
    });

    await new Promise((resolve) => setTimeout(resolve, 600));

    // Simulate similarity calculation (in production, use AI API)
    const similarityScore = calculateSimilarity();
    const confidenceScore = Math.max(50, 70 + Math.random() * 30); // 70-100

    setProcessing({
      isProcessing: true,
      progress: 90,
      stage: 'analyzing',
      message: 'Generating feedback...',
    });

    await new Promise((resolve) => setTimeout(resolve, 400));

    const result: RecordingResult = {
      audioBlob: recordedAudio || new Blob(),
      transcription: targetText,
      similarityScore: Math.round(similarityScore),
      confidenceScore: Math.round(confidenceScore),
      recordingDuration: recordingTime,
      timestamp: new Date(),
    };

    setAnalysisResult(result);
    setProcessing({
      isProcessing: true,
      progress: 100,
      stage: 'complete',
      message: 'Analysis complete!',
    });

    setTimeout(() => {
      setProcessing({
        isProcessing: false,
        progress: 0,
        stage: 'idle',
        message: '',
      });
      setShowFeedback(true);
    }, 500);
  };

  // Calculate similarity score
  const calculateSimilarity = (): number => {
    // Simulate comparison (in production, use actual speech-to-text + comparison)
    const baseScore = 75;
    const difficultyMultiplier = { easy: 1.1, medium: 1.0, hard: 0.9 }[difficulty];
    const variance = (Math.random() - 0.5) * 20;
    return Math.min(100, Math.max(50, baseScore * difficultyMultiplier + variance));
  };

  // Play recording
  const playRecording = () => {
    if (recordedAudio && !isPlayingRecording) {
      const audioUrl = URL.createObjectURL(recordedAudio);
      const audio = new Audio(audioUrl);
      playbackAudioRef.current = audio;
      
      setIsPlayingRecording(true);
      audio.play();
      
      audio.addEventListener('ended', () => {
        setIsPlayingRecording(false);
        URL.revokeObjectURL(audioUrl);
      });
    }
  };

  // Reset recording
  const resetRecording = () => {
    setRecordedAudio(null);
    setRecordingTime(0);
    setAnalysisResult(null);
    setShowFeedback(false);
    setProcessing({
      isProcessing: false,
      progress: 0,
      stage: 'idle',
      message: '',
    });
  };

  // Submit result
  const submitResult = () => {
    if (analysisResult) {
      onRecordingComplete(analysisResult);
    }
  };

  // Format time
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Get color based on score
  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'from-emerald-500 to-green-500';
    if (score >= 80) return 'from-blue-500 to-cyan-500';
    if (score >= 70) return 'from-amber-500 to-orange-500';
    return 'from-red-500 to-rose-500';
  };

  // Get feedback message
  const getFeedbackMessage = (score: number): string => {
    if (score >= 95) return 'Perfect! Excellent pronunciation!';
    if (score >= 85) return 'Great! Very close to the target.';
    if (score >= 75) return 'Good! Keep practicing this sound.';
    if (score >= 65) return 'Nice try! Practice more to improve.';
    return 'Keep practicing! You\'ll get it.';
  };

  return (
    <div className="w-full space-y-6">
      {/* Main Recording Card */}
      <Card className="border-border/50 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-gold/10 via-transparent to-transparent pb-4">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Mic2 className="h-5 w-5 text-gold" />
                Record Your Pronunciation
              </CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Click the mic button to start recording, then click again to stop
              </p>
            </div>
            {difficulty && (
              <Badge 
                className={cn(
                  'ml-2',
                  difficulty === 'easy' && 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400',
                  difficulty === 'medium' && 'bg-amber-500/20 text-amber-700 dark:text-amber-400',
                  difficulty === 'hard' && 'bg-red-500/20 text-red-700 dark:text-red-400',
                )}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          {/* Target Text Display */}
          <div className="rounded-lg bg-muted/50 p-6 text-center">
            <p className="text-sm font-medium text-muted-foreground mb-2">Say this:</p>
            <p className="font-arabic text-4xl font-bold text-foreground mb-2">{targetTextAr}</p>
            <p className="text-lg text-muted-foreground">{targetText}</p>
          </div>

          {/* Recording Controls */}
          <div className="flex flex-col items-center gap-4">
            {/* Main Record Button */}
            <motion.div
              className="relative"
              whileHover={{ scale: isRecording ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={isRecording ? stopRecording : startRecording}
                disabled={processing.isProcessing}
                className={cn(
                  'flex h-40 w-40 items-center justify-center rounded-full transition-all duration-300 shadow-lg',
                  isRecording
                    ? 'bg-gradient-to-br from-red-500 to-red-600 text-white animate-pulse'
                    : 'bg-gradient-to-br from-gold to-gold/80 text-white hover:shadow-gold/50 hover:shadow-2xl',
                  processing.isProcessing && 'opacity-50 cursor-not-allowed',
                )}
              >
                {isRecording ? (
                  <MicOff className="h-20 w-20" />
                ) : (
                  <Mic2 className="h-20 w-20" />
                )}
              </button>

              {/* Pulse Ring Animation */}
              {isRecording && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-red-500"
                    animate={{ scale: [1, 1.3], opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-red-500"
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  />
                </>
              )}
            </motion.div>

            {/* Timer Display */}
            <div className="text-center">
              <div className="font-mono text-5xl font-bold text-gold mb-2">
                {formatTime(recordingTime)}
              </div>
              <p className="text-sm text-muted-foreground">
                {isRecording ? 'Recording...' : 'Ready to record'}
                {recordingTime > 0 && ` (${recordingTime}s)`}
              </p>
            </div>

            {/* Progress Bar */}
            {recordingTime > 0 && (
              <Progress
                value={(recordingTime / maxRecordingTime) * 100}
                className="w-full h-2"
              />
            )}

            {/* Recording Status */}
            {isRecording && (
              <motion.div
                className="flex items-center gap-2 text-red-500"
                animate={{ opacity: [1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <span className="text-sm font-medium">Live Recording</span>
              </motion.div>
            )}
          </div>

          {/* Playback Controls */}
          <AnimatePresence>
            {recordedAudio && !isRecording && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-3 justify-center border-t pt-4"
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={playRecording}
                  disabled={isPlayingRecording || processing.isProcessing}
                  className="gap-2"
                >
                  {isPlayingRecording ? (
                    <>
                      <Pause className="h-4 w-4" />
                      Playing...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Play Recording
                    </>
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  onClick={resetRecording}
                  disabled={processing.isProcessing}
                  className="gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Record Again
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Processing State */}
      <AnimatePresence>
        {processing.isProcessing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 dark:border-blue-800/50 p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
              <p className="font-medium text-foreground">{processing.message}</p>
            </div>
            <Progress value={processing.progress} className="h-2" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Analysis Results & Feedback */}
      <AnimatePresence>
        {showFeedback && analysisResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {/* Score Card */}
            <Card className="overflow-hidden border-border/50">
              <div className={`bg-gradient-to-r ${getScoreColor(analysisResult.similarityScore)} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Pronunciation Analysis</h3>
                    <p className="text-white/80 text-sm mt-1">
                      {getFeedbackMessage(analysisResult.similarityScore)}
                    </p>
                  </div>
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                {/* Score Display */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold">{analysisResult.similarityScore}%</div>
                    <p className="text-white/70 text-sm">Similarity Score</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{analysisResult.confidenceScore}%</div>
                    <p className="text-white/70 text-sm">Confidence</p>
                  </div>
                </div>
              </div>

              <CardContent className="pt-6 space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">{analysisResult.recordingDuration}s</div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-6 w-6 text-emerald-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Good Progress</p>
                  </div>
                  <div className="text-center">
                    <Sparkles className="h-6 w-6 text-amber-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">+15 XP</p>
                  </div>
                </div>

                {/* Feedback Text */}
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Detailed Feedback:</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Your pronunciation was {analysisResult.similarityScore >= 80 ? 'excellent' : 'good'}. 
                    Keep practicing to improve your accuracy and fluency. 
                    Listen to native speakers and repeat regularly for best results.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={resetRecording}
                    className="flex-1"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                  <Button
                    onClick={submitResult}
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-gold to-gold/80"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit & Continue
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
