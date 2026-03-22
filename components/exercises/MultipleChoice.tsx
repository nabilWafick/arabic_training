"use client";

import { useState, useEffect, useCallback } from "react";
import { Check, X, RotateCcw, Volume2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAudioStore } from "@/stores/useAudioStore";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { cn } from "@/lib/utils";
import type { Exercise, ExerciseResult } from "@/types";

/**
 * Props for MultipleChoice component
 */
interface MultipleChoiceProps {
  /** Exercise data */
  exercise: Exercise;
  /** Callback when answer is submitted */
  onComplete: (result: ExerciseResult) => void;
  /** Show explanation after answer */
  showExplanation?: boolean;
  /** Time limit in seconds (0 = no limit) */
  timeLimit?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Multiple choice exercise component
 * Supports Arabic text, audio, and explanations
 */
export function MultipleChoice({
  exercise,
  onComplete,
  showExplanation = true,
  timeLimit = 0,
  className,
}: MultipleChoiceProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [attempts, setAttempts] = useState(1);
  const [startTime] = useState(Date.now());
  
  const { speak, isEnabled: audioEnabled } = useAudioStore();
  const { addXP } = useGamificationStore();
  
  // Timer countdown
  useEffect(() => {
    if (timeLimit === 0 || isAnswered) return;
    
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLimit, isAnswered]); // eslint-disable-line react-hooks/exhaustive-deps
  
  /**
   * Handle option selection
   */
  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };
  
  /**
   * Submit the answer
   */
  const handleSubmit = useCallback(() => {
    if (selectedOption === null && timeRemaining > 0) return;
    
    const correct = selectedOption === exercise.correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);
    
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const xpEarned = correct
      ? exercise.difficulty === "easy"
        ? 10
        : exercise.difficulty === "medium"
        ? 20
        : 30
      : 0;
    
    if (correct && xpEarned > 0) {
      addXP(xpEarned);
    }
    
    onComplete({
      exerciseId: exercise.id,
      correct,
      score: correct ? 100 : 0,
      timeSpent,
      answer: selectedOption?.toString() || "",
      xpEarned,
      attempts,
    });
  }, [selectedOption, exercise, startTime, addXP, onComplete, timeRemaining, attempts]);
  
  /**
   * Reset the exercise
   */
  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
    setTimeRemaining(timeLimit);
    setAttempts((prev) => prev + 1);
  };
  
  /**
   * Play audio for the question
   */
  const handlePlayAudio = () => {
    if (audioEnabled && exercise.audioText) {
      speak(exercise.audioText);
    } else if (audioEnabled && exercise.questionAr) {
      speak(exercise.questionAr);
    }
  };
  
  // Difficulty badge color
  const difficultyColor = {
    easy: "bg-sage/20 text-sage",
    medium: "bg-gold/20 text-gold",
    hard: "bg-rust/20 text-rust",
  };
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={difficultyColor[exercise.difficulty]}>
            {exercise.difficulty}
          </Badge>
          
          {timeLimit > 0 && !isAnswered && (
            <div className="flex items-center gap-2">
              <Progress
                value={(timeRemaining / timeLimit) * 100}
                className={cn(
                  "h-2 w-20",
                  timeRemaining <= 5 && "animate-pulse"
                )}
              />
              <span
                className={cn(
                  "text-sm font-mono",
                  timeRemaining <= 5 && "text-rust font-bold"
                )}
              >
                {timeRemaining}s
              </span>
            </div>
          )}
        </div>
        
        <CardTitle className="mt-2 text-xl">
          {/* Arabic question */}
          {exercise.questionAr && (
            <p className="font-arabic text-2xl text-foreground mb-2" dir="rtl">
              {exercise.questionAr}
            </p>
          )}
          
          {/* English/French question */}
          <p className="text-lg text-foreground">
            {exercise.question}
          </p>
          
          {/* Audio button */}
          {(exercise.audioText || exercise.questionAr) && audioEnabled && (
            <Button
              variant="ghost"
              size="sm"
              className="mt-2"
              onClick={handlePlayAudio}
            >
              <Volume2 className="mr-2 h-4 w-4" />
              Listen
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* Options */}
        {exercise.options?.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrectOption = index === exercise.correctAnswer;
          
          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={isAnswered}
              className={cn(
                "w-full rounded-lg border-2 p-4 text-left transition-all",
                "hover:border-gold hover:bg-gold/5",
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
                <span className={cn(
                  "flex-1",
                  typeof option === "string" && option.match(/[\u0600-\u06FF]/) && "font-arabic text-xl"
                )}>
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
        
        {/* Hint */}
        {!isAnswered && exercise.hint && (
          <div className="pt-2">
            {showHint ? (
              <div className="rounded-lg bg-muted/50 p-3 text-sm">
                <p className="flex items-center gap-2 font-medium">
                  <Lightbulb className="h-4 w-4 text-gold" />
                  Hint
                </p>
                <p className="mt-1 text-muted-foreground">{exercise.hint}</p>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(true)}
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                Show hint
              </Button>
            )}
          </div>
        )}
        
        {/* Explanation (after answer) */}
        {isAnswered && showExplanation && exercise.explanation && (
          <div
            className={cn(
              "mt-4 rounded-lg p-4",
              isCorrect ? "bg-sage/10 border border-sage/30" : "bg-rust/10 border border-rust/30"
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
            
            {/* Arabic explanation */}
            {exercise.explanationAr && (
              <p className="mt-2 font-arabic text-lg" dir="rtl">
                {exercise.explanationAr}
              </p>
            )}
            
            {/* English/French explanation */}
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
            disabled={selectedOption === null}
          >
            Submit Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
