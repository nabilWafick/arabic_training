"use client";

import { ChevronUp, ChevronDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface RankChangeProps {
  currentRank: number;
  previousRank?: number;
  className?: string;
  showValue?: boolean;
}

export function RankChange({
  currentRank,
  previousRank,
  className,
  showValue = true,
}: RankChangeProps) {
  if (previousRank === undefined || previousRank === currentRank) {
    return (
      <div
        className={cn(
          "flex items-center gap-0.5 text-muted-foreground",
          className
        )}
      >
        <Minus className="h-3 w-3" />
        {showValue && <span className="text-xs">-</span>}
      </div>
    );
  }

  const change = previousRank - currentRank;
  const isUp = change > 0;

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 animate-in fade-in slide-in-from-bottom-1 duration-300",
        isUp ? "text-emerald-500" : "text-red-500",
        className
      )}
    >
      {isUp ? (
        <ChevronUp className="h-4 w-4 animate-bounce" />
      ) : (
        <ChevronDown className="h-4 w-4 animate-bounce" />
      )}
      {showValue && (
        <span className="text-xs font-medium">{Math.abs(change)}</span>
      )}
    </div>
  );
}
