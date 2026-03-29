'use client';

/**
 * AI Practice Hub - Unified entry point for AI-powered practice
 * Accessible from all phase practice pages
 */

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, ArrowLeft, BookOpen, Headphones, Mic2, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AIPracticeExercise } from '@/components/practice/AIPracticeExercise';

interface AIPracticeHubProps {
  phaseId: number;
  phaseName: string;
  availablePracticeTypes?: Array<'writing' | 'listening' | 'speaking' | 'vocabulary'>;
}

export function AIPracticeHub({
  phaseId,
  phaseName,
  availablePracticeTypes = ['writing', 'listening', 'speaking', 'vocabulary']
}: AIPracticeHubProps) {
  const [selectedType, setSelectedType] = useState<'WRITING' | 'LISTENING' | 'ORAL' | 'MULTIPLE_CHOICE'>('WRITING');
  const [showResults, setShowResults] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);

  const practiceConfig = {
    'WRITING': {
      title: 'Writing Practice',
      icon: PenTool,
      description: 'AI-generated writing exercises with real-time feedback',
      color: 'text-blue-600'
    },
    'LISTENING': {
      title: 'Listening Practice',
      icon: Headphones,
      description: 'AI-generated audio comprehension exercises',
      color: 'text-purple-600'
    },
    'ORAL': {
      title: 'Speaking Practice',
      icon: Mic2,
      description: 'AI-powered speaking exercises with pronunciation feedback',
      color: 'text-green-600'
    },
    'MULTIPLE_CHOICE': {
      title: 'Vocabulary Practice',
      icon: BookOpen,
      description: 'AI-generated vocabulary exercises',
      color: 'text-orange-600'
    }
  };

  const handleComplete = (score: number, correct: number) => {
    setSessionScore(score);
    setSessionCorrect(correct);
    setShowResults(true);
  };

  if (showResults) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        <Card>
          <CardHeader>
            <CardTitle>Session Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Score</p>
                <p className="text-3xl font-bold text-green-600">{sessionScore.toFixed(0)}%</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Correct</p>
                <p className="text-3xl font-bold text-blue-600">{sessionCorrect}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => setShowResults(false)} className="flex-1">
                Try Again
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/practice/${phaseId}`}>Back to Phase</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <Brain className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">AI Practice</h2>
            <p className="text-sm text-muted-foreground">{phaseName} - Personalized exercises</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/practice/${phaseId}`}>
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
        </Button>
      </motion.div>

      <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as any)}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="WRITING">Writing</TabsTrigger>
          <TabsTrigger value="LISTENING">Listening</TabsTrigger>
          <TabsTrigger value="ORAL">Speaking</TabsTrigger>
          <TabsTrigger value="MULTIPLE_CHOICE">Vocab</TabsTrigger>
        </TabsList>

        {Object.entries(practiceConfig).map(([type, config]) => (
          <TabsContent key={type} value={type}>
            <AIPracticeExercise
              phase={phaseId}
              practiceType={type as any}
              title={config.title}
              onComplete={handleComplete}
              exerciseCount={5}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
