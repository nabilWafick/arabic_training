"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Clock, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WeeklyCountdownProps {
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getNextMonday(): Date {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
  const nextMonday = new Date(now);
  nextMonday.setDate(now.getDate() + daysUntilMonday);
  nextMonday.setHours(0, 0, 0, 0);
  return nextMonday;
}

function calculateTimeLeft(): TimeLeft {
  const nextMonday = getNextMonday();
  const now = new Date();
  const difference = nextMonday.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function WeeklyCountdown({ className }: WeeklyCountdownProps) {
  const t = useTranslations("leaderboard");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <Card className={cn("border-dashed", className)}>
        <CardContent className="flex items-center justify-center gap-3 p-4">
          <RefreshCw className="h-5 w-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  const TimeBlock = ({
    value,
    label,
    isLast = false,
  }: {
    value: number;
    label: string;
    isLast?: boolean;
  }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-xl font-bold text-emerald-500 shadow-inner">
          {String(value).padStart(2, "0")}
        </div>
        {!isLast && (
          <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-lg font-bold text-muted-foreground">
            :
          </span>
        )}
      </div>
      <span className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <Card
      className={cn(
        "border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent",
        className
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="h-4 w-4 text-emerald-500" />
          <span className="text-sm font-medium text-foreground">
            {t("weeklyReset")}
          </span>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <TimeBlock value={timeLeft.days} label={t("days")} />
          <TimeBlock value={timeLeft.hours} label={t("hours")} />
          <TimeBlock value={timeLeft.minutes} label={t("minutes")} />
          <TimeBlock value={timeLeft.seconds} label={t("seconds")} isLast />
        </div>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          {t("resetInfo")}
        </p>
      </CardContent>
    </Card>
  );
}
