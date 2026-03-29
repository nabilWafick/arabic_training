"use client";

import { useState } from "react";
import {
  Target,
  BookOpen,
  Clock,
  Flame,
  Zap,
  Calendar,
  Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useGoalsStore, type GoalType } from "@/stores/useGoalsStore";
import { useTranslations } from "next-intl";

interface GoalFormProps {
  onClose?: () => void;
  className?: string;
}

const GOAL_TYPES: { type: GoalType; icon: React.ElementType; color: string }[] = [
  { type: "xp", icon: Zap, color: "text-amber-500" },
  { type: "words", icon: BookOpen, color: "text-blue-500" },
  { type: "lessons", icon: Target, color: "text-emerald-500" },
  { type: "time", icon: Clock, color: "text-purple-500" },
  { type: "streak", icon: Flame, color: "text-orange-500" },
];

const DEFAULT_TARGETS: Record<GoalType, number[]> = {
  xp: [100, 250, 500, 1000],
  words: [10, 25, 50, 100],
  lessons: [3, 5, 10, 20],
  time: [30, 60, 120, 300], // in minutes
  streak: [3, 7, 14, 30],
};

function formatTimeLabel(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = minutes / 60;
  return `${hours}h`;
}

export function GoalForm({ onClose, className }: GoalFormProps) {
  const [selectedType, setSelectedType] = useState<GoalType>("xp");
  const [target, setTarget] = useState<number>(100);
  const [customTarget, setCustomTarget] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [isCustomTarget, setIsCustomTarget] = useState(false);
  
  const { addGoal } = useGoalsStore();
  const t = useTranslations();

  const handleTypeChange = (type: GoalType) => {
    setSelectedType(type);
    setTarget(DEFAULT_TARGETS[type][0]);
    setIsCustomTarget(false);
    setCustomTarget("");
  };

  const handleSubmit = () => {
    const finalTarget = isCustomTarget ? parseInt(customTarget, 10) : target;
    
    if (!finalTarget || finalTarget <= 0) return;

    addGoal({
      type: selectedType,
      title: t(`goals.goalTypes.${selectedType}`),
      target: finalTarget,
      deadline: deadline || null,
    });

    // Reset form
    setSelectedType("xp");
    setTarget(100);
    setCustomTarget("");
    setDeadline("");
    setIsCustomTarget(false);
    
    onClose?.();
  };

  const selectedTypeConfig = GOAL_TYPES.find((g) => g.type === selectedType);
  const Icon = selectedTypeConfig?.icon || Target;
  const iconColor = selectedTypeConfig?.color || "text-muted-foreground";

  return (
    <div className={cn("space-y-6", className)}>
      {/* Goal Type Selection */}
      <div className="space-y-3">
        <Label>{t("goals.selectType")}</Label>
        <div className="grid grid-cols-5 gap-2">
          {GOAL_TYPES.map(({ type, icon: TypeIcon, color }) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={cn(
                "flex flex-col items-center gap-2 rounded-lg border-2 p-3 transition-all",
                selectedType === type
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-border hover:border-muted-foreground/50"
              )}
            >
              <TypeIcon className={cn("h-5 w-5", color)} />
              <span className="text-xs font-medium">
                {t(`goals.goalTypes.${type}`)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Target Value */}
      <div className="space-y-3">
        <Label>{t("goals.setTarget")}</Label>
        <div className="flex flex-wrap gap-2">
          {DEFAULT_TARGETS[selectedType].map((value) => (
            <Button
              key={value}
              variant={!isCustomTarget && target === value ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setTarget(value);
                setIsCustomTarget(false);
                setCustomTarget("");
              }}
              className={cn(
                !isCustomTarget && target === value && "bg-emerald-500 hover:bg-emerald-600"
              )}
            >
              {selectedType === "time" ? formatTimeLabel(value) : value}
            </Button>
          ))}
          <Button
            variant={isCustomTarget ? "default" : "outline"}
            size="sm"
            onClick={() => setIsCustomTarget(true)}
            className={cn(isCustomTarget && "bg-emerald-500 hover:bg-emerald-600")}
          >
            {t("goals.custom")}
          </Button>
        </div>
        
        {isCustomTarget && (
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder={t("goals.enterTarget")}
              value={customTarget}
              onChange={(e) => setCustomTarget(e.target.value)}
              min="1"
              className="w-32"
            />
            {selectedType === "time" && (
              <span className="text-sm text-muted-foreground">
                {t("common.minutes")}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Deadline */}
      <div className="space-y-3">
        <Label className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {t("goals.deadline")} ({t("goals.optional")})
        </Label>
        <Input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="w-48"
        />
      </div>

      {/* Preview */}
      <div className="rounded-lg border border-dashed border-border/70 bg-muted/30 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
            <Icon className={cn("h-5 w-5", iconColor)} />
          </div>
          <div>
            <p className="font-medium">
              {t(`goals.goalTypes.${selectedType}`)}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("goals.target")}: {isCustomTarget ? (customTarget || "...") : target}
              {selectedType === "time" && ` ${t("common.minutes")}`}
              {deadline && ` • ${t("goals.by")} ${new Date(deadline).toLocaleDateString()}`}
            </p>
          </div>
        </div>
      </div>

      {/* Submit */}
      <Button
        onClick={handleSubmit}
        disabled={isCustomTarget && (!customTarget || parseInt(customTarget, 10) <= 0)}
        className="w-full bg-emerald-500 hover:bg-emerald-600"
      >
        <Plus className="mr-2 h-4 w-4" />
        {t("goals.createGoal")}
      </Button>
    </div>
  );
}

interface GoalFormDialogProps {
  trigger?: React.ReactNode;
}

export function GoalFormDialog({ trigger }: GoalFormDialogProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <Plus className="mr-2 h-4 w-4" />
            {t("goals.createGoal")}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{t("goals.createGoal")}</DialogTitle>
          <DialogDescription>
            {t("goals.createGoalDescription")}
          </DialogDescription>
        </DialogHeader>
        <GoalForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
