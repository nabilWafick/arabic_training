/**
 * Empty State Component
 * Illustrated placeholders for empty or zero states
 */

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  GraduationCap,
  Trophy,
  Target,
  MessageCircle,
  Sparkles,
  Calendar,
  Users,
  Search,
  FolderOpen,
} from 'lucide-react';

interface EmptyStateProps {
  icon?: ReactNode;
  iconType?: 'learn' | 'practice' | 'achievement' | 'challenge' | 'chat' | 'review' | 'search' | 'folder' | 'community';
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

const ICON_MAP = {
  learn: BookOpen,
  practice: Target,
  achievement: Trophy,
  challenge: Calendar,
  chat: MessageCircle,
  review: GraduationCap,
  search: Search,
  folder: FolderOpen,
  community: Users,
};

const ICON_COLORS = {
  learn: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30',
  practice: 'text-green-500 bg-green-100 dark:bg-green-900/30',
  achievement: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
  challenge: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30',
  chat: 'text-primary bg-primary/10',
  review: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30',
  search: 'text-muted-foreground bg-muted',
  folder: 'text-muted-foreground bg-muted',
  community: 'text-pink-500 bg-pink-100 dark:bg-pink-900/30',
};

export function EmptyState({
  icon,
  iconType = 'folder',
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  const IconComponent = ICON_MAP[iconType];
  const iconColors = ICON_COLORS[iconType];
  
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center', className)}>
      <div className={cn('w-16 h-16 rounded-full flex items-center justify-center mb-4', iconColors)}>
        {icon || <IconComponent className="w-8 h-8" />}
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      
      {description && (
        <p className="text-muted-foreground text-sm max-w-sm mb-6">
          {description}
        </p>
      )}
      
      {action && (
        <Button onClick={action.onClick}>
          <Sparkles className="w-4 h-4 mr-2" />
          {action.label}
        </Button>
      )}
    </div>
  );
}

// Pre-built empty states
export function NoLessonsState({ onStart }: { onStart?: () => void }) {
  return (
    <EmptyState
      iconType="learn"
      title="No lessons yet"
      description="Start your Arabic learning journey by exploring the curriculum."
      action={onStart ? { label: 'Start Learning', onClick: onStart } : undefined}
    />
  );
}

export function NoPracticeState({ onStart }: { onStart?: () => void }) {
  return (
    <EmptyState
      iconType="practice"
      title="No practice sessions"
      description="Complete some lessons first to unlock practice exercises."
      action={onStart ? { label: 'View Lessons', onClick: onStart } : undefined}
    />
  );
}

export function NoAchievementsState() {
  return (
    <EmptyState
      iconType="achievement"
      title="No achievements yet"
      description="Complete lessons and challenges to earn your first achievement!"
    />
  );
}

export function NoSearchResultsState() {
  return (
    <EmptyState
      iconType="search"
      title="No results found"
      description="Try adjusting your search terms or filters."
    />
  );
}
