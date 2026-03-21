"use client";

import { useState, useMemo, useCallback } from "react";
import { Check, X, RotateCcw, Shuffle, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { cn } from "@/lib/utils";
import type { Exercise, ExerciseResult } from "@/types";

/**
 * Match pair structure
 */
interface MatchPair {
  id: string;
  left: string;
  right: string;
}

/**
 * Props for MatchingExercise component
 */
interface MatchingExerciseProps {
  /** Exercise data */
  exercise: Exercise;
  /** Callback when exercise is completed */
  onComplete: (result: ExerciseResult) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Matching exercise component
 * Connect items from left column to right column
 */
export function MatchingExercise({
  exercise,
  onComplete,
  className,
}: MatchingExerciseProps) {
  // Parse match pairs from exercise data
  const pairs: MatchPair[] = useMemo(() => {
    if (exercise.matchPairs) {
      return exercise.matchPairs;
    }
    // Fallback: create pairs from options
    if (exercise.options && exercise.options.length >= 2) {
      return exercise.options.slice(0, Math.floor(exercise.options.length / 2)).map((item, i) => ({
        id: `pair-${i}`,
        left: String(item),
        right: String(exercise.options![i + Math.floor(exercise.options!.length / 2)]),
      }));
    }
    return [];
  }, [exercise]);
  
  // Shuffle right column
  const [shuffledRight, setShuffledRight] = useState<string[]>(() => {
    const rights = pairs.map((p) => p.right);
    return [...rights].sort(() => Math.random() - 0.5);
  });
  
  // Track user's matches: { leftId: rightValue }
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [startTime] = useState(Date.now());
  
  const { addXP } = useGamificationStore();
  
  // Check if all pairs are matched
  const allMatched = Object.keys(matches).length === pairs.length;
  
  // Count correct matches
  const correctCount = useMemo(() => {
    return pairs.filter((p) => matches[p.id] === p.right).length;
  }, [pairs, matches]);
  
  /**
   * Handle left item click
   */
  const handleLeftClick = (pairId: string) => {
    if (isAnswered || matches[pairId]) return;
    setSelectedLeft(pairId);
  };
  
  /**
   * Handle right item click
   */
  const handleRightClick = (rightValue: string) => {
    if (isAnswered || !selectedLeft) return;
    
    // Check if this right value is already used
    const isUsed = Object.values(matches).includes(rightValue);
    if (isUsed) return;
    
    // Create match
    setMatches((prev) => ({
      ...prev,
      [selectedLeft]: rightValue,
    }));
    setSelectedLeft(null);
  };
  
  /**
   * Remove a match
   */
  const handleRemoveMatch = (pairId: string) => {
    if (isAnswered) return;
    setMatches((prev) => {
      const newMatches = { ...prev };
      delete newMatches[pairId];
      return newMatches;
    });
  };
  
  /**
   * Shuffle right column
   */
  const handleShuffle = () => {
    setShuffledRight((prev) => [...prev].sort(() => Math.random() - 0.5));
    setMatches({});
    setSelectedLeft(null);
  };
  
  /**
   * Submit answers
   */
  const handleSubmit = useCallback(() => {
    if (!allMatched) return;
    
    // Check each match
    const newResults: Record<string, boolean> = {};
    pairs.forEach((p) => {
      newResults[p.id] = matches[p.id] === p.right;
    });
    setResults(newResults);
    setIsAnswered(true);
    
    const correct = correctCount === pairs.length;
    const score = Math.round((correctCount / pairs.length) * 100);
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    
    const xpEarned = correct
      ? exercise.difficulty === "easy"
        ? 20
        : exercise.difficulty === "medium"
        ? 35
        : 50
      : Math.floor(
          (correctCount / pairs.length) *
            (exercise.difficulty === "easy" ? 15 : exercise.difficulty === "medium" ? 25 : 35)
        );
    
    if (xpEarned > 0) {
      addXP(xpEarned);
    }
    
    onComplete({
      exerciseId: exercise.id,
      correct,
      score,
      timeSpent,
      answer: JSON.stringify(matches),
      xpEarned,
    });
  }, [allMatched, pairs, matches, correctCount, startTime, exercise, addXP, onComplete]);
  
  /**
   * Reset the exercise
   */
  const handleReset = () => {
    setMatches({});
    setSelectedLeft(null);
    setIsAnswered(false);
    setResults({});
    handleShuffle();
  };
  
  // Difficulty badge color
  const difficultyColor = {
    easy: "bg-sage/20 text-sage",
    medium: "bg-gold/20 text-gold",
    hard: "bg-rust/20 text-rust",
  };
  
  // Check if a right value is used
  const isRightUsed = (rightValue: string) => Object.values(matches).includes(rightValue);
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={difficultyColor[exercise.difficulty]}>
            {exercise.difficulty}
          </Badge>
          <Badge variant="outline">
            <Link2 className="mr-1 h-3 w-3" />
            Matching
          </Badge>
        </div>
        
        <CardTitle className="mt-2">
          <p className="text-lg text-foreground">{exercise.question}</p>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            Match items from the left column with the right column
          </p>
          {!isAnswered && (
            <Button variant="ghost" size="sm" onClick={handleShuffle}>
              <Shuffle className="mr-1 h-4 w-4" />
              Shuffle
            </Button>
          )}
        </div>
        
        {/* Matching grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left column */}
          <div className="space-y-2">
            {pairs.map((pair) => {
              const hasMatch = matches[pair.id];
              const isSelected = selectedLeft === pair.id;
              const isCorrectMatch = isAnswered && results[pair.id];
              const isWrongMatch = isAnswered && hasMatch && !results[pair.id];
              
              return (
                <div
                  key={pair.id}
                  className={cn(
                    "relative rounded-lg border-2 p-3 transition-all cursor-pointer",
                    !hasMatch && !isSelected && "hover:border-gold hover:bg-gold/5",
                    isSelected && "border-gold bg-gold/10 ring-2 ring-gold ring-offset-2",
                    hasMatch && !isAnswered && "border-teal bg-teal/10",
                    isCorrectMatch && "border-sage bg-sage/10",
                    isWrongMatch && "border-rust bg-rust/10"
                  )}
                  onClick={() =>
                    hasMatch ? handleRemoveMatch(pair.id) : handleLeftClick(pair.id)
                  }
                >
                  <span
                    className={cn(
                      pair.left.match(/[\u0600-\u06FF]/) && "font-arabic text-xl"
                    )}
                  >
                    {pair.left}
                  </span>
                  
                  {/* Match indicator */}
                  {hasMatch && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2">
                      {isAnswered ? (
                        isCorrectMatch ? (
                          <Check className="h-5 w-5 text-sage" />
                        ) : (
                          <X className="h-5 w-5 text-rust" />
                        )
                      ) : (
                        <span className="text-xs text-teal">✓</span>
                      )}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Right column */}
          <div className="space-y-2">
            {shuffledRight.map((rightValue, index) => {
              const isUsed = isRightUsed(rightValue);
              const matchedPair = pairs.find((p) => matches[p.id] === rightValue);
              const isCorrectMatch = isAnswered && matchedPair && results[matchedPair.id];
              const isWrongMatch = isAnswered && matchedPair && !results[matchedPair.id];
              
              return (
                <div
                  key={`right-${index}`}
                  className={cn(
                    "rounded-lg border-2 p-3 transition-all",
                    !isUsed && selectedLeft && "cursor-pointer hover:border-gold hover:bg-gold/5",
                    !isUsed && !selectedLeft && "opacity-80",
                    isUsed && !isAnswered && "border-teal bg-teal/10",
                    isCorrectMatch && "border-sage bg-sage/10",
                    isWrongMatch && "border-rust bg-rust/10"
                  )}
                  onClick={() => handleRightClick(rightValue)}
                >
                  <span
                    className={cn(
                      rightValue.match(/[\u0600-\u06FF]/) && "font-arabic text-xl"
                    )}
                  >
                    {rightValue}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Progress */}
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {Object.keys(matches).length} of {pairs.length} matched
          </span>
          {isAnswered && (
            <Badge className={correctCount === pairs.length ? "bg-sage" : "bg-gold"}>
              {correctCount}/{pairs.length} correct
            </Badge>
          )}
        </div>
        
        {/* Explanation (after answer) */}
        {isAnswered && exercise.explanation && (
          <div
            className={cn(
              "mt-4 rounded-lg p-4 border",
              correctCount === pairs.length
                ? "bg-sage/10 border-sage/30"
                : "bg-gold/10 border-gold/30"
            )}
          >
            <p className="flex items-center gap-2 font-medium">
              {correctCount === pairs.length ? (
                <>
                  <Check className="h-5 w-5 text-sage" />
                  <span className="text-sage">All correct!</span>
                </>
              ) : (
                <>
                  <span className="text-gold">{correctCount}/{pairs.length} correct</span>
                </>
              )}
            </p>
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
            disabled={!allMatched}
          >
            Submit Matches
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
