"use client";

import { useState, useRef, useEffect } from "react";
import { Send, RotateCcw, Volume2, Check, X, Loader2, Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useAudioStore } from "@/stores/useAudioStore";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { cn } from "@/lib/utils";
import type { Exercise, ExerciseResult } from "@/types";

/**
 * Arabic keyboard layout for virtual keyboard
 */
const ARABIC_KEYBOARD = [
  ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د"],
  ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط"],
  ["ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ"],
];

/**
 * Arabic diacritics for harakat
 */
const ARABIC_DIACRITICS = ["َ", "ِ", "ُ", "ْ", "ّ", "ً", "ٍ", "ٌ"];

/**
 * Props for WritingExercise component
 */
interface WritingExerciseProps {
  /** Exercise data */
  exercise: Exercise;
  /** Callback when answer is submitted */
  onComplete: (result: ExerciseResult) => void;
  /** Enable AI verification */
  enableAIVerification?: boolean;
  /** Show virtual Arabic keyboard */
  showKeyboard?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Writing exercise component for text input answers
 * Supports Arabic virtual keyboard and AI verification
 */
export function WritingExercise({
  exercise,
  onComplete,
  enableAIVerification = false,
  showKeyboard = true,
  className,
}: WritingExerciseProps) {
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [attempts, setAttempts] = useState(1);
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    score: number;
    message: string;
    suggestions?: string[];
  } | null>(null);
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(showKeyboard);
  const [startTime] = useState(Date.now());
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { speak, isEnabled: audioEnabled } = useAudioStore();
  const { addXP } = useGamificationStore();
  
  /**
   * Insert character at cursor position
   */
  const insertCharacter = (char: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = answer.slice(0, start) + char + answer.slice(end);
    
    setAnswer(newValue);
    
    // Move cursor after inserted character
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + char.length;
      textarea.focus();
    }, 0);
  };
  
  /**
   * Delete character before cursor
   */
  const deleteCharacter = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    if (start === end && start > 0) {
      setAnswer(answer.slice(0, start - 1) + answer.slice(end));
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start - 1;
        textarea.focus();
      }, 0);
    } else if (start !== end) {
      setAnswer(answer.slice(0, start) + answer.slice(end));
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start;
        textarea.focus();
      }, 0);
    }
  };
  
  /**
   * Submit answer for verification
   */
  const handleSubmit = async () => {
    if (!answer.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      let correct = false;
      let score = 0;
      let message = "";
      let suggestions: string[] = [];
      
      if (enableAIVerification) {
        // Call AI verification API
        const response = await fetch("/api/ai/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            exerciseId: exercise.id,
            expectedAnswer: exercise.correctAnswer,
            studentAnswer: answer,
            exerciseType: exercise.type,
            context: exercise.question,
          }),
        });
        
        if (response.ok) {
          const data = await response.json();
          correct = data.correct;
          score = data.score || (correct ? 100 : 0);
          message = data.feedback || (correct ? "Correct!" : "Not quite right.");
          suggestions = data.suggestions || [];
        }
      } else {
        // Simple string comparison
        const normalizedAnswer = answer.trim().toLowerCase();
        const normalizedCorrect = String(exercise.correctAnswer).trim().toLowerCase();
        correct = normalizedAnswer === normalizedCorrect;
        score = correct ? 100 : 0;
        message = correct ? "Correct!" : `The correct answer is: ${exercise.correctAnswer}`;
      }
      
      setFeedback({ correct, score, message, suggestions });
      setIsAnswered(true);
      
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      const xpEarned = correct
        ? exercise.difficulty === "easy"
          ? 15
          : exercise.difficulty === "medium"
          ? 25
          : 40
        : 0;
      
      if (correct && xpEarned > 0) {
        addXP(xpEarned);
      }
      
      onComplete({
        exerciseId: exercise.id,
        correct,
        score,
        timeSpent,
        answer,
        xpEarned,
        attempts,
      });
    } catch (error) {
      console.error("Error verifying answer:", error);
      setFeedback({
        correct: false,
        score: 0,
        message: "Error verifying answer. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  /**
   * Reset the exercise
   */
  const handleReset = () => {
    setAnswer("");
    setIsAnswered(false);
    setFeedback(null);
    setAttempts((prev) => prev + 1);
    textareaRef.current?.focus();
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
          <Badge variant="outline">Writing</Badge>
        </div>
        
        <CardTitle className="mt-2">
          {/* Arabic question */}
          {exercise.questionAr && (
            <p className="font-arabic text-2xl text-foreground mb-2" dir="rtl">
              {exercise.questionAr}
            </p>
          )}
          
          {/* English/French question */}
          <p className="text-lg text-foreground">{exercise.question}</p>
          
          {/* Audio button */}
          {exercise.audioText && audioEnabled && (
            <Button
              variant="ghost"
              size="sm"
              className="mt-2"
              onClick={() => speak(exercise.audioText!)}
            >
              <Volume2 className="mr-2 h-4 w-4" />
              Listen
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Answer textarea */}
        <div className="space-y-2">
          <Textarea
            ref={textareaRef}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className={cn(
              "min-h-[100px] font-arabic text-xl resize-none",
              isAnswered && feedback?.correct && "border-sage bg-sage/5",
              isAnswered && !feedback?.correct && "border-rust bg-rust/5"
            )}
            dir="rtl"
            disabled={isAnswered}
          />
          
          {/* Character count */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{answer.length} characters</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowVirtualKeyboard(!showVirtualKeyboard)}
            >
              <Keyboard className="mr-1 h-4 w-4" />
              {showVirtualKeyboard ? "Hide" : "Show"} Arabic Keyboard
            </Button>
          </div>
        </div>
        
        {/* Virtual Arabic keyboard */}
        {showVirtualKeyboard && !isAnswered && (
          <div className="rounded-lg border bg-muted/30 p-3 space-y-2">
            {/* Main keys */}
            {ARABIC_KEYBOARD.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-1">
                {row.map((char) => (
                  <Button
                    key={char}
                    variant="outline"
                    size="sm"
                    className="h-10 w-10 font-arabic text-lg p-0"
                    onClick={() => insertCharacter(char)}
                  >
                    {char}
                  </Button>
                ))}
              </div>
            ))}
            
            {/* Diacritics row */}
            <div className="flex justify-center gap-1 pt-2 border-t">
              {ARABIC_DIACRITICS.map((mark) => (
                <Tooltip key={mark}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 w-10 font-arabic text-xl p-0"
                      onClick={() => insertCharacter(mark)}
                    >
                      ـ{mark}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Add diacritic</TooltipContent>
                </Tooltip>
              ))}
              
              {/* Backspace */}
              <Button
                variant="outline"
                size="sm"
                className="h-10 px-3"
                onClick={deleteCharacter}
              >
                ⌫
              </Button>
              
              {/* Space */}
              <Button
                variant="outline"
                size="sm"
                className="h-10 px-6"
                onClick={() => insertCharacter(" ")}
              >
                Space
              </Button>
            </div>
          </div>
        )}
        
        {/* Feedback */}
        {isAnswered && feedback && (
          <div
            className={cn(
              "rounded-lg p-4 border",
              feedback.correct
                ? "bg-sage/10 border-sage/30"
                : "bg-rust/10 border-rust/30"
            )}
          >
            <p className="flex items-center gap-2 font-medium">
              {feedback.correct ? (
                <>
                  <Check className="h-5 w-5 text-sage" />
                  <span className="text-sage">Correct!</span>
                  <Badge className="ml-2 bg-sage">{feedback.score}%</Badge>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-rust" />
                  <span className="text-rust">Not quite right</span>
                  {feedback.score > 0 && (
                    <Badge className="ml-2 bg-gold">{feedback.score}%</Badge>
                  )}
                </>
              )}
            </p>
            
            <p className="mt-2 text-muted-foreground">{feedback.message}</p>
            
            {/* Suggestions */}
            {feedback.suggestions && feedback.suggestions.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-medium">Suggestions:</p>
                <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
                  {feedback.suggestions.map((suggestion, i) => (
                    <li key={i}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Correct answer (if wrong) */}
            {!feedback.correct && exercise.correctAnswer && (
              <div className="mt-3 rounded-lg bg-background/50 p-3">
                <p className="text-sm font-medium">Expected answer:</p>
                <p className="mt-1 font-arabic text-xl" dir="rtl">
                  {exercise.correctAnswer}
                </p>
              </div>
            )}
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
            disabled={!answer.trim() || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
