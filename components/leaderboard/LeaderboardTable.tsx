"use client";

import { useTranslations } from "next-intl";
import { Crown, Medal, Award, UserPlus, UserMinus, Flame } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { RankChange } from "./RankChange";
import { type LeaderboardUser, type LeagueTier, LEAGUES } from "@/stores/useLeaderboardStore";

interface LeaderboardTableProps {
  users: LeaderboardUser[];
  currentUserId?: string;
  isLoading?: boolean;
  showWeeklyXP?: boolean;
  onAddFriend?: (userId: string) => void;
  onRemoveFriend?: (userId: string) => void;
  className?: string;
}

const RANK_STYLES = {
  1: {
    icon: Crown,
    bg: "bg-gradient-to-r from-yellow-500/20 via-yellow-400/10 to-yellow-500/20",
    border: "border-yellow-500/50 shadow-yellow-500/20 shadow-lg",
    iconColor: "text-yellow-500",
    medal: "🥇",
  },
  2: {
    icon: Medal,
    bg: "bg-gradient-to-r from-gray-400/20 via-gray-300/10 to-gray-400/20",
    border: "border-gray-400/50 shadow-gray-400/20 shadow-lg",
    iconColor: "text-gray-400",
    medal: "🥈",
  },
  3: {
    icon: Award,
    bg: "bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-amber-600/20",
    border: "border-amber-600/50 shadow-amber-500/20 shadow-lg",
    iconColor: "text-amber-600",
    medal: "🥉",
  },
};

const LEAGUE_COLORS: Record<LeagueTier, string> = {
  bronze: "bg-amber-700/20 text-amber-600 border-amber-600/30",
  silver: "bg-gray-400/20 text-gray-400 border-gray-400/30",
  gold: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
  platinum: "bg-purple-400/20 text-purple-400 border-purple-400/30",
  diamond: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30",
};

function LeaderboardSkeleton() {
  return (
    <div className="space-y-2 p-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border p-3"
        >
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
          <Skeleton className="h-6 w-20" />
        </div>
      ))}
    </div>
  );
}

export function LeaderboardTable({
  users,
  currentUserId,
  isLoading = false,
  showWeeklyXP = false,
  onAddFriend,
  onRemoveFriend,
  className,
}: LeaderboardTableProps) {
  const t = useTranslations("leaderboard");

  if (isLoading) {
    return <LeaderboardSkeleton />;
  }

  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 text-4xl">🏆</div>
        <p className="text-muted-foreground">{t("noUsers")}</p>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <ScrollArea className={cn("h-[500px]", className)}>
        <div className="space-y-2 p-4">
          {users.map((user) => {
            const isCurrentUser = user.id === currentUserId;
            const rankStyle = RANK_STYLES[user.rank as 1 | 2 | 3];
            const isTopThree = user.rank <= 3;
            const leagueData = LEAGUES[user.league];

            return (
              <div
                key={user.id}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl border p-3 transition-all duration-200",
                  isTopThree && rankStyle?.bg,
                  isTopThree && rankStyle?.border,
                  isCurrentUser && "ring-2 ring-emerald-500 ring-offset-2 ring-offset-background",
                  !isTopThree && "hover:bg-muted/50 border-border/50",
                  "hover:scale-[1.01]"
                )}
              >
                {/* Rank */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  {isTopThree && rankStyle ? (
                    <span className="text-2xl">{rankStyle.medal}</span>
                  ) : (
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-muted-foreground">
                        #{user.rank}
                      </span>
                      <RankChange
                        currentRank={user.rank}
                        previousRank={user.previousRank}
                        showValue={false}
                      />
                    </div>
                  )}
                </div>

                {/* Avatar */}
                <div className="relative">
                  <Avatar className={cn(
                    "h-12 w-12 border-2",
                    isTopThree ? "border-current" : "border-background",
                    rankStyle?.iconColor
                  )}>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-emerald-500/20 text-emerald-500 font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {user.country && (
                    <span className="absolute -bottom-1 -right-1 text-sm">
                      {user.country}
                    </span>
                  )}
                </div>

                {/* User Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className={cn(
                      "truncate font-medium",
                      isCurrentUser && "text-emerald-500"
                    )}>
                      {user.name}
                      {isCurrentUser && (
                        <span className="ml-1 text-xs">({t("you")})</span>
                      )}
                    </p>
                    {user.isFriend && !isCurrentUser && (
                      <Badge variant="outline" className="text-[10px] h-5 px-1.5">
                        {t("friend")}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1">
                    {/* League Badge */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-[10px] px-1.5 h-5 gap-0.5",
                            LEAGUE_COLORS[user.league]
                          )}
                        >
                          <span>{leagueData.icon}</span>
                          {t(`leagues.${user.league}`)}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("leagueTooltip", { league: t(`leagues.${user.league}`) })}</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Level */}
                    <Badge variant="secondary" className="text-[10px] h-5 px-1.5">
                      Lv.{user.level}
                    </Badge>

                    {/* Streak */}
                    {user.streak && user.streak > 0 && (
                      <span className="flex items-center gap-0.5 text-xs text-orange-500">
                        <Flame className="h-3 w-3" />
                        {user.streak}
                      </span>
                    )}
                  </div>
                </div>

                {/* XP & Actions */}
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className={cn(
                      "text-lg font-bold",
                      isTopThree ? rankStyle?.iconColor : "text-emerald-500"
                    )}>
                      {(showWeeklyXP ? user.weeklyXP : user.xp).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {showWeeklyXP ? t("weeklyXP") : "XP"}
                    </p>
                  </div>

                  {/* Friend Actions */}
                  {!isCurrentUser && (onAddFriend || onRemoveFriend) && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {user.isFriend ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-red-500"
                              onClick={() => onRemoveFriend?.(user.id)}
                            >
                              <UserMinus className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t("removeFriend")}</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-emerald-500"
                              onClick={() => onAddFriend?.(user.id)}
                            >
                              <UserPlus className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t("addFriend")}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  )}
                </div>

                {/* Rank change for top 3 */}
                {isTopThree && (
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2">
                    <RankChange
                      currentRank={user.rank}
                      previousRank={user.previousRank}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
}
