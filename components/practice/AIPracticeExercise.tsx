'use client';

/**
 * AI Practice Exercise Component
 * Reusable component for AI-generated exercises across all practice types
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Loader2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useAIPractice, PracticeType, AIExercise } from '@/hooks/useAIPractice';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { usePracticeProgressStore } from '@/stores/usePracticeProgressStore';
import { celebrate } from '@/lib/confetti';
import { toast } from 'sonner';

interface AIPracticeExerciseProps {
  phase: number;
  practiceType: PracticeType;
  title: string;
  onComplete?: (score: number, totalCorrect: number) => void;
  exerciseCount?: number;
}

export function AIPracticeExercise({
  phase,
  practiceType,
  title,
  onComplete,
  exerciseCount = 5,
}: AIPracticeExerciseProps) {
  const [answer, setAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [helpText, setHelpText] = useState('');
  const [sessionStartTime] = useState(Date.now());

  const {
    loading,
    error,
    currentExercise,
    currentIndex,
    totalExercises,
    progress,
    isLastExercise,
    generateExercises,
    verifyAnswer,
    getAIHelp,
    nextExercise,
    resetExercises,
  } = useAIPractice();

  const { addXP, incrementStat } = useGamificationStore();
  const { recordExercise } = usePracticeProgressStore();

  // Generate exercises on mount
  useEffect(() => {
    generateExercises(practiceType, phase, exerciseCount);
  }, [generateExercises, practiceType, phase, exerciseCount]);

  // Speak Arabic text
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  // Handle answer submission
  const handleSubmit = async () => {
    if (!currentExercise) return;

    const studentAnswer = practiceType === 'MULTIPLE_CHOICE' && selectedOption !== null
      ? String(selectedOption)
      : answer;

    if (!studentAnswer.trim()) {
      toast.error('Please provide an answer');
      return;
    }

    const result = await verifyAnswer(
      currentExercise.id,
      studentAnswer,
      currentExercise.correctAnswer,
      practiceType,
      currentExercise.question
    );

    setIsCorrect(result.correct);
    setFeedback(result.feedback);
    setShowResult(true);

    if (result.correct) {
      setScore(prev => prev + (currentExercise.xpReward || 10));
      setCorrectCount(prev => prev + 1);
      addXP(currentExercise.xpReward || 10);
      incrementStat('wordsLearned');
      
      if (result.score === 100) {
        celebrate('achievement');
      }
    }
  };

  // Handle next exercise
  const handleNext = () => {
    setAnswer('');
    setSelectedOption(null);
    setShowResult(false);
    setFeedback('');
    setShowHelp(false);
    setHelpText('');

    if (isLastExercise) {
      // Session complete
      const timeSpent = Math.floor((Date.now() - sessionStartTime) / 1000);
      const finalScore = (correctCount / totalExercises) * 100;

      recordExercise({
        type: practiceType.toLowerCase() as any,
        topic: title,
        difficulty: phase <= 2 ? 'easy' : phase <= 4 ? 'medium' : 'hard',
        score: finalScore,
        totalQuestions: totalExercises,
        correctAnswers: correctCount,
        timeSpent,
        phase,
      });

      if (finalScore >= 80) {
        celebrate('milestone');
        toast.success(`Excellent! You scored ${finalScore.toFixed(0)}%!`);
      }

      onComplete?.(finalScore, correctCount);
    } else {
      nextExercise();
    }
  };

  // Get AI help
  const handleGetHelp = async () => {
    if (!currentExercise) return;
    
    setShowHelp(true);
    const help = await getAIHelp(currentExercise.question, phase);
    setHelpText(help);
  };

  // Regenerate exercises
  const handleRegenerate = () => {
    resetExercises();
    setScore(0);
    setCorrectCount(0);
    generateExercises(practiceType, phase, exerciseCount);
  };

  // Loading state
  if (loading && totalExercises === 0) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center p-12">
          <div className="relative">
            <Brain className="w-16 h-16 text-purple-500 animate-pulse" />
            <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-2 -right-2 animate-bounce" />
          </div>
          <h3 className="text-xl font-bold mt-4">AI is generating exercises...</h3>
          <p className="text-muted-foreground mt-2">
            Creating personalized {practiceType.toLowerCase()} exercises for Phase {phase}
          </p>
          <Loader2 className="w-8 h-8 mt-6 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  // Error state
  if (error) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-red-200">
        <CardContent className="flex flex-col items-center justify-center p-12">
          <XCircle className="w-16 h-16 text-red-500" />
          <h3 className="text-xl font-bold mt-4 text-red-600">Failed to generate exercises</h3>
          <p className="text-muted-foreground mt-2">{error}</p>
          <Button onClick={handleRegenerate} className="mt-6">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  // No exercise state
  if (!currentExercise) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center p-12">
          <Brain className="w-16 h-16 text-gray-400" />
          <h3 className="text-xl font-bold mt-4">No exercises available</h3>
          <Button onClick={handleRegenerate} className="mt-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Generate Exercises
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-500" />
            {title} - Phase {phase}
          </CardTitle>
          <Badge variant="outline">
            {currentIndex + 1} / {totalExercises}
          </Badge>
        </div>
        <Progress value={progress} className="mt-2" />
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Exercise Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentExercise.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-xl">
              <p className="text-lg font-medium">{currentExercise.question}</p>
              
              {currentExercise.questionAr && (
                <div className="mt-4 flex items-center gap-2">
                  <p className="text-2xl font-arabic text-right" dir="rtl">
                    {currentExercise.questionAr}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => speak(currentExercise.questionAr || '')}
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {currentExercise.audioText && (
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-3xl font-arabic">{currentExercise.audioText}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => speak(currentExercise.audioText || '')}
                  >
                    <Volume2 className="w-4 h-4 mr-1" />
                    Listen
                  </Button>
                </div>
              )}
            </div>

            {/* Answer Input */}
            {!showResult && (
              <>
                {practiceType === 'MULTIPLE_CHOICE' && currentExercise.options ? (
                  <div className="grid gap-2">
                    {currentExercise.options.map((option, idx) => (
                      <Button
                        key={idx}
                        variant={selectedOption === idx ? 'default' : 'outline'}
                        className="justify-start h-auto p-4 text-left"
                        onClick={() => setSelectedOption(idx)}
                      >
                        <span className="mr-2 font-bold">{String.fromCharCode(65 + idx)}.</span>
                        {option}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Input
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Type your answer..."
                      className="text-lg h-14"
                      dir={practiceType === 'TRANSLATION' ? 'rtl' : 'ltr'}
                      onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    />
                    {currentExercise.hint && (
                      <p className="text-sm text-muted-foreground">
                        💡 Hint: {currentExercise.hint}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex gap-2">
                  <Button onClick={handleSubmit} className="flex-1" disabled={loading}>
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Check Answer
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={handleGetHelp} disabled={showHelp}>
                    <HelpCircle className="w-4 h-4 mr-1" />
                    Help
                  </Button>
                </div>
              </>
            )}

            {/* Result Display */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-xl ${
                  isCorrect
                    ? 'bg-green-50 dark:bg-green-950/20 border border-green-200'
                    : 'bg-red-50 dark:bg-red-950/20 border border-red-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h4 className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      {isCorrect ? 'Correct! +' + (currentExercise.xpReward || 10) + ' XP' : 'Not quite right'}
                    </h4>
                    <p className="mt-1 text-gray-700 dark:text-gray-300">{feedback}</p>
                    
                    {currentExercise.explanation && (
                      <div className="mt-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                        <p className="text-sm font-medium">Explanation:</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {currentExercise.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Button onClick={handleNext} className="w-full mt-4">
                  {isLastExercise ? 'Complete Session' : 'Next Exercise'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            )}

            {/* AI Help */}
            {showHelp && helpText && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-blue-700">AI Tutor Help</h4>
                </div>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {helpText.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Score Display */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="font-bold text-green-600">{correctCount}</span>
              <span className="text-muted-foreground"> / {currentIndex + (showResult ? 1 : 0)} correct</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="font-bold">{score} XP</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
