"use client";

import { useState, useEffect } from "react";
import { Trophy, Crown, Medal, Award, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/**
 * Leaderboard entry type
 */
interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  avatar?: string;
  xp: number;
  level: number;
  streak?: number;
  isCurrentUser?: boolean;
}

/**
 * Props for Leaderboard component
 */
interface LeaderboardProps {
  /** Leaderboard entries */
  entries?: LeaderboardEntry[];
  /** Current user's entry (for highlighting) */
  currentUserId?: string;
  /** Loading state */
  isLoading?: boolean;
  /** Time period tabs */
  showTabs?: boolean;
  /** Max entries to show */
  maxEntries?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Mock data for demo purposes
 */
const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, userId: "1", name: "أحمد محمد", xp: 15420, level: 12, streak: 45 },
  { rank: 2, userId: "2", name: "Sarah Johnson", xp: 14200, level: 11, streak: 32 },
  { rank: 3, userId: "3", name: "محمد علي", xp: 13850, level: 11, streak: 28 },
  { rank: 4, userId: "4", name: "Emma Wilson", xp: 12100, level: 10, streak: 21 },
  { rank: 5, userId: "5", name: "فاطمة حسن", xp: 11450, level: 10, streak: 19 },
  { rank: 6, userId: "6", name: "James Brown", xp: 10200, level: 9, streak: 15 },
  { rank: 7, userId: "7", name: "ليلى أحمد", xp: 9800, level: 9, streak: 14 },
  { rank: 8, userId: "8", name: "Michael Chen", xp: 8900, level: 8, streak: 12 },
  { rank: 9, userId: "9", name: "نور الدين", xp: 8500, level: 8, streak: 10 },
  { rank: 10, userId: "10", name: "Lisa Taylor", xp: 7800, level: 7, streak: 8 },
];

/**
 * Get rank icon based on position
 */
function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Crown className="h-5 w-5 text-yellow-500" />;
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />;
    case 3:
      return <Medal className="h-5 w-5 text-amber-600" />;
    default:
      return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
  }
}

/**
 * Get rank background class
 */
function getRankClass(rank: number) {
  switch (rank) {
    case 1:
      return "bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border-yellow-500/30";
    case 2:
      return "bg-gradient-to-r from-gray-400/10 to-gray-400/5 border-gray-400/30";
    case 3:
      return "bg-gradient-to-r from-amber-600/10 to-amber-600/5 border-amber-600/30";
    default:
      return "";
  }
}

/**
 * Display leaderboard with rankings
 * Shows top learners by XP, level, or streak
 */
export function Leaderboard({
  entries = MOCK_LEADERBOARD,
  currentUserId,
  isLoading = false,
  showTabs = true,
  maxEntries = 10,
  className,
}: LeaderboardProps) {
  const [activeTab, setActiveTab] = useState("weekly");
  
  // Mark current user
  const leaderboardWithUser = entries
    .slice(0, maxEntries)
    .map((entry) => ({
      ...entry,
      isCurrentUser: entry.userId === currentUserId,
    }));
  
  // Find current user if not in top entries
  const currentUserEntry = entries.find((e) => e.userId === currentUserId);
  const isCurrentUserInTop =
    currentUserEntry && currentUserEntry.rank <= maxEntries;
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-gold" />
          <span>Leaderboard</span>
          <Badge variant="secondary" className="ml-auto">
            <Users className="mr-1 h-3 w-3" />
            {entries.length} learners
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        {showTabs && (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mx-4 mb-2 grid w-[calc(100%-2rem)] grid-cols-3">
              <TabsTrigger value="weekly">This Week</TabsTrigger>
              <TabsTrigger value="monthly">This Month</TabsTrigger>
              <TabsTrigger value="alltime">All Time</TabsTrigger>
            </TabsList>
          </Tabs>
        )}
        
        <ScrollArea className="h-[400px]">
          <div className="space-y-1 px-4 pb-4">
            {isLoading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border p-3"
                  >
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <Skeleton className="h-6 w-16" />
                  </div>
                ))
              : leaderboardWithUser.map((entry) => (
                  <div
                    key={entry.userId}
                    className={cn(
                      "flex items-center gap-3 rounded-lg border p-3 transition-all",
                      getRankClass(entry.rank),
                      entry.isCurrentUser && "ring-2 ring-gold ring-offset-2",
                      "hover:bg-muted/50"
                    )}
                  >
                    {/* Rank */}
                    <div className="flex h-8 w-8 items-center justify-center">
                      {getRankIcon(entry.rank)}
                    </div>
                    
                    {/* Avatar */}
                    <Avatar className="h-10 w-10 border-2 border-background">
                      <AvatarImage src={entry.avatar} alt={entry.name} />
                      <AvatarFallback className="bg-gold/20 text-gold">
                        {entry.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    
                    {/* Name and level */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">
                        {entry.name}
                        {entry.isCurrentUser && (
                          <span className="ml-1 text-xs text-gold">(You)</span>
                        )}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="secondary" className="h-5 px-1.5">
                          Lv.{entry.level}
                        </Badge>
                        {entry.streak && entry.streak > 0 && (
                          <span className="flex items-center gap-0.5 text-orange-500">
                            🔥 {entry.streak}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* XP */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-gold">
                        {entry.xp.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">XP</p>
                    </div>
                  </div>
                ))}
          </div>
          
          {/* Current user (if not in top) */}
          {!isLoading && !isCurrentUserInTop && currentUserEntry && (
            <div className="sticky bottom-0 border-t bg-background/95 px-4 py-2 backdrop-blur">
              <div className="flex items-center gap-3">
                <p className="text-sm text-muted-foreground">Your rank:</p>
                <div
                  className={cn(
                    "flex flex-1 items-center gap-3 rounded-lg border p-2",
                    "ring-2 ring-gold ring-offset-2"
                  )}
                >
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="text-sm font-bold">
                      #{currentUserEntry.rank}
                    </span>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={currentUserEntry.avatar}
                      alt={currentUserEntry.name}
                    />
                    <AvatarFallback className="bg-gold/20 text-gold text-xs">
                      {currentUserEntry.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="flex-1 truncate text-sm font-medium">
                    {currentUserEntry.name}
                  </p>
                  <p className="font-bold text-gold">
                    {currentUserEntry.xp.toLocaleString()} XP
                  </p>
                </div>
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
