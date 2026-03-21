"use client";

import { useState } from "react";
import { Volume2, VolumeX, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useAudioStore } from "@/stores/useAudioStore";
import { cn } from "@/lib/utils";

/**
 * Props for the LetterDisplay component
 */
interface LetterDisplayProps {
  /** The Arabic letter to display */
  letter: string;
  /** English name of the letter */
  name: string;
  /** Transliteration (pronunciation guide) */
  transliteration: string;
  /** Isolated form of the letter */
  isolated?: string;
  /** Initial form (beginning of word) */
  initial?: string;
  /** Medial form (middle of word) */
  medial?: string;
  /** Final form (end of word) */
  final?: string;
  /** Letter type (sun/moon) */
  type?: string;
  /** Size variant */
  size?: "sm" | "md" | "lg" | "xl";
  /** Show all forms toggle */
  showForms?: boolean;
  /** Enable audio playback */
  enableAudio?: boolean;
  /** Interactive mode (hover effects) */
  interactive?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Display an Arabic letter with pronunciation, forms, and audio
 * Used in alphabet lessons and letter practice exercises
 */
export function LetterDisplay({
  letter,
  name,
  transliteration,
  isolated,
  initial,
  medial,
  final,
  type,
  size = "lg",
  showForms = true,
  enableAudio = true,
  interactive = true,
  className,
}: LetterDisplayProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAllForms, setShowAllForms] = useState(showForms);
  const { speak, isEnabled, toggleEnabled } = useAudioStore();
  
  const sizeClasses = {
    sm: "text-3xl",
    md: "text-5xl",
    lg: "text-7xl",
    xl: "text-9xl",
  };
  
  const handleSpeak = () => {
    if (enableAudio && isEnabled) {
      speak(letter);
    }
  };
  
  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all",
        interactive && "card-hover cursor-pointer",
        isHovered && interactive && "border-gold shadow-lg",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleSpeak}
    >
      {/* Main letter display */}
      <div className="relative">
        <span
          className={cn(
            "font-arabic text-foreground transition-all duration-300",
            sizeClasses[size],
            isHovered && interactive && "text-gold scale-110"
          )}
        >
          {letter}
        </span>
        
        {/* Type indicator */}
        {type && (
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                className={cn(
                  "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                  type === "sun letter"
                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                )}
              >
                {type === "sun letter" ? "☀" : "☽"}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{type === "sun letter" ? "Sun Letter (الحرف الشمسي)" : "Moon Letter (الحرف القمري)"}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      
      {/* Letter name and transliteration */}
      <div className="text-center">
        <p className="font-heading text-lg font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">/{transliteration}/</p>
      </div>
      
      {/* Letter forms */}
      {showAllForms && (isolated || initial || medial || final) && (
        <div className="mt-2 grid grid-cols-4 gap-3 text-center">
          {[
            { label: "Isolated", form: isolated || letter },
            { label: "Initial", form: initial || letter },
            { label: "Medial", form: medial || letter },
            { label: "Final", form: final || letter },
          ].map(({ label, form }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-arabic text-2xl text-foreground">{form}</span>
              <span className="mt-1 text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      )}
      
      {/* Action buttons */}
      <div className="mt-2 flex items-center gap-2">
        {enableAudio && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              handleSpeak();
            }}
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        )}
        
        {(isolated || initial || medial || final) && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              setShowAllForms(!showAllForms);
            }}
          >
            {showAllForms ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        )}
      </div>
    </div>
  );
}
