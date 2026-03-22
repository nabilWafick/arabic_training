"use client";

import { useState, useEffect, useCallback } from "react";
import { Play, Pause, RotateCcw, Volume2, Check, X, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useAudioStore } from "@/stores/useAudioStore";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { cn } from "@/lib/utils";
import type { Exercise, ExerciseResult } from "@/types";

/**
 * Props for ListeningExercise component
 */
interface ListeningExerciseProps {
  /** Exercise data */
  exercise: Exercise;
  /** Callback when answer is submitted */
  onComplete: (result: ExerciseResult) => void;
  /** Maximum number of audio plays */
  maxPlays?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Listening comprehension exercise component
 * Plays audio and tests comprehension with multiple choice
 */
export function ListeningExercise({
  exercise,
  onComplete,
  maxPlays = 3,
  className,
}: ListeningExerciseProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [attempts, setAttempts] = useState(1);
  const [startTime] = useState(Date.now());
  
  const { speak, stop, rate, setRate, isEnabled } = useAudioStore();
  const { addXP } = useGamificationStore();
  
  // The text to speak (use audioText or questionAr)
  const audioText = exercise.audioText || exercise.questionAr || "";
  
  /**
   * Play the audio
   */
  const handlePlay = useCallback(() => {
    if (!isEnabled || !audioText || playCount >= maxPlays) return;
    
    setIsPlaying(true);
    
    const utterance = new SpeechSynthesisUtterance(audioText);
    utterance.rate = rate;
    utterance.lang = "ar-SA";
    
    // Find Arabic voice
    const voices = speechSynthesis.getVoices();
    const arabicVoice = voices.find((v) => v.lang.startsWith("ar"));
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }
    
    utterance.onend = () => {
      setIsPlaying(false);
      setPlayCount((prev) => prev + 1);
      setHasPlayedOnce(true);
    };
    
    utterance.onerror = () => {
      setIsPlaying(false);
    };
    
    speechSynthesis.speak(utterance);
  }, [audioText, isEnabled, rate, playCount, maxPlays]);
  
  /**
   * Stop the audio
   */
  const handleStop = () => {
    stop();
    setIsPlaying(false);
  };
  
  /**
   * Handle option selection
   */
  const handleSelect = (index: number) => {
    if (isAnswered || !hasPlayedOnce) return;
    setSelectedOption(index);
  };
  
  /**
   * Submit the answer
   */
  const handleSubmit = useCallback(() => {
    if (selectedOption === null) return;
    
    const correct = selectedOption === exercise.correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);
    
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    
    // XP based on difficulty and play count
    let xpEarned = 0;
    if (correct) {
      const baseXP =
        exercise.difficulty === "easy"
          ? 15
          : exercise.difficulty === "medium"
          ? 25
          : 40;
      // Bonus for fewer plays
      const playBonus = Math.max(0, (maxPlays - playCount) * 5);
      xpEarned = baseXP + playBonus;
      addXP(xpEarned);
    }
    
    onComplete({
      exerciseId: exercise.id,
      correct,
      score: correct ? 100 : 0,
      timeSpent,
      answer: selectedOption.toString(),
      xpEarned,
      attempts,
    });
  }, [selectedOption, exercise, startTime, playCount, maxPlays, addXP, onComplete, attempts]);
  
  /**
   * Reset the exercise
   */
  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setPlayCount(0);
    setHasPlayedOnce(false);
    setAttempts((prev) => prev + 1);
    handleStop();
  };
  
  // Difficulty badge color
  const difficultyColor = {
    easy: "bg-sage/20 text-sage",
    medium: "bg-gold/20 text-gold",
    hard: "bg-rust/20 text-rust",
  };
  
  const remainingPlays = maxPlays - playCount;
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={difficultyColor[exercise.difficulty]}>
            {exercise.difficulty}
          </Badge>
          <Badge variant="outline">
            <Volume2 className="mr-1 h-3 w-3" />
            Listening
          </Badge>
        </div>
        
        <CardTitle className="mt-2">
          <p className="text-lg text-foreground">{exercise.question}</p>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Audio player */}
        <div className="rounded-lg border bg-muted/30 p-4">
          <div className="flex items-center justify-center gap-4">
            <Button
              size="lg"
              className={cn(
                "h-16 w-16 rounded-full",
                isPlaying
                  ? "bg-rust hover:bg-rust/90"
                  : "bg-gold hover:bg-gold-dark"
              )}
              onClick={isPlaying ? handleStop : handlePlay}
              disabled={!isEnabled || remainingPlays === 0}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 text-white" />
              ) : (
                <Play className="ml-1 h-6 w-6 text-background" />
              )}
            </Button>
          </div>
          
          {/* Play count and speed */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {remainingPlays > 0
                  ? `${remainingPlays} plays remaining`
                  : "No more plays"}
              </span>
            </div>
            
            {/* Speed control */}
            <div className="flex items-center gap-2">
              <Label className="text-xs">Speed:</Label>
              <Slider
                value={[rate]}
                onValueChange={(v) => setRate(v[0])}
                min={0.5}
                max={1.5}
                step={0.1}
                className="w-20"
              />
              <span className="text-xs text-muted-foreground">{rate}x</span>
            </div>
          </div>
          
          {/* Audio not enabled warning */}
          {!isEnabled && (
            <p className="mt-2 text-center text-sm text-destructive">
              Audio is disabled. Enable it in settings to use this exercise.
            </p>
          )}
        </div>
        
        {/* Instructions */}
        {!hasPlayedOnce && (
          <p className="text-center text-sm text-muted-foreground">
            Listen to the audio, then select your answer
          </p>
        )}
        
        {/* Options */}
        {exercise.options && (
          <div className="space-y-3">
            {exercise.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrectOption = index === exercise.correctAnswer;
              
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={isAnswered || !hasPlayedOnce}
                  className={cn(
                    "w-full rounded-lg border-2 p-4 text-left transition-all",
                    !hasPlayedOnce && "opacity-50 cursor-not-allowed",
                    hasPlayedOnce && "hover:border-gold hover:bg-gold/5",
                    isSelected && !isAnswered && "border-gold bg-gold/10",
                    isAnswered && isCorrectOption && "border-sage bg-sage/10 correct-answer",
                    isAnswered && isSelected && !isCorrectOption && "border-rust bg-rust/10 wrong-answer",
                    !isAnswered && !isSelected && "border-border"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {/* Option letter */}
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold",
                        isSelected && !isAnswered && "border-gold text-gold",
                        isAnswered && isCorrectOption && "border-sage bg-sage text-white",
                        isAnswered && isSelected && !isCorrectOption && "border-rust bg-rust text-white",
                        !isSelected && !isAnswered && "border-muted text-muted-foreground"
                      )}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    
                    {/* Option text */}
                    <span
                      className={cn(
                        "flex-1",
                        typeof option === "string" && option.match(/[\u0600-\u06FF]/) &&
                          "font-arabic text-xl"
                      )}
                    >
                      {option}
                    </span>
                    
                    {/* Result icon */}
                    {isAnswered && isCorrectOption && (
                      <Check className="h-5 w-5 text-sage" />
                    )}
                    {isAnswered && isSelected && !isCorrectOption && (
                      <X className="h-5 w-5 text-rust" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
        
        {/* Explanation (after answer) */}
        {isAnswered && exercise.explanation && (
          <div
            className={cn(
              "mt-4 rounded-lg p-4 border",
              isCorrect ? "bg-sage/10 border-sage/30" : "bg-rust/10 border-rust/30"
            )}
          >
            <p className="flex items-center gap-2 font-medium">
              {isCorrect ? (
                <>
                  <Check className="h-5 w-5 text-sage" />
                  <span className="text-sage">Correct!</span>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-rust" />
                  <span className="text-rust">Incorrect</span>
                </>
              )}
            </p>
            
            {/* Transcript */}
            {audioText && (
              <div className="mt-3 rounded-lg bg-background/50 p-3">
                <p className="text-sm font-medium">Audio transcript:</p>
                <p className="mt-1 font-arabic text-xl" dir="rtl">
                  {audioText}
                </p>
              </div>
            )}
            
            <p className="mt-2 text-muted-foreground">{exercise.explanation}</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between gap-2 bg-muted/30">
        {isAnswered ? (
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        ) : (
          <Button
            className="bg-gold hover:bg-gold-dark text-background"
            onClick={handleSubmit}
            disabled={selectedOption === null || !hasPlayedOnce}
          >
            Submit Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
