"use client";

import { useState } from "react";
import { Volume2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { useAudioStore } from "@/stores/useAudioStore";
import { cn } from "@/lib/utils";

/**
 * Haraka (vowel mark) data structure
 */
interface Haraka {
  mark: string;
  name: string;
  nameAr: string;
  sound: string;
  description: string;
}

/**
 * Default harakat data
 */
const DEFAULT_HARAKAT: Haraka[] = [
  { mark: "َ", name: "Fatḥa", nameAr: "فَتْحَة", sound: "a", description: "Short 'a' vowel" },
  { mark: "ِ", name: "Kasra", nameAr: "كَسْرَة", sound: "i", description: "Short 'i' vowel" },
  { mark: "ُ", name: "Ḍamma", nameAr: "ضَمَّة", sound: "u", description: "Short 'u' vowel" },
  { mark: "ْ", name: "Sukūn", nameAr: "سُكُون", sound: "", description: "No vowel" },
  { mark: "ّ", name: "Shadda", nameAr: "شَدَّة", sound: "double", description: "Doubles consonant" },
  { mark: "ً", name: "Fatḥatān", nameAr: "فَتْحَتَان", sound: "an", description: "Nunation -an" },
  { mark: "ٍ", name: "Kasratān", nameAr: "كَسْرَتَان", sound: "in", description: "Nunation -in" },
  { mark: "ٌ", name: "Ḍammatān", nameAr: "ضَمَّتَان", sound: "un", description: "Nunation -un" },
];

/**
 * Props for VowelMarks component
 */
interface VowelMarksProps {
  /** Base letter to show marks on */
  baseLetter?: string;
  /** Harakat data to display */
  harakat?: Haraka[];
  /** Show interactive mode */
  interactive?: boolean;
  /** Show descriptions */
  showDescriptions?: boolean;
  /** Display layout */
  layout?: "grid" | "list" | "inline";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Interactive display of Arabic vowel marks (harakat/tashkeel)
 * Used in diacritics lessons and practice
 */
export function VowelMarks({
  baseLetter = "ب",
  harakat = DEFAULT_HARAKAT,
  interactive = true,
  showDescriptions = true,
  layout = "grid",
  className,
}: VowelMarksProps) {
  const [selectedMark, setSelectedMark] = useState<Haraka | null>(null);
  const { speak, isEnabled } = useAudioStore();
  
  const handleSelect = (mark: Haraka) => {
    setSelectedMark(mark);
    if (isEnabled) {
      // Speak the letter with the vowel mark
      speak(baseLetter + mark.mark);
    }
  };
  
  const renderMark = (mark: Haraka, index: number) => {
    const isSelected = selectedMark?.name === mark.name;
    const letterWithMark = baseLetter + mark.mark;
    
    return (
      <div
        key={mark.name}
        className={cn(
          "flex flex-col items-center gap-2 rounded-lg border p-4 transition-all",
          interactive && "cursor-pointer hover:border-gold hover:shadow-md",
          isSelected && "border-gold bg-gold/5 shadow-md"
        )}
        onClick={() => interactive && handleSelect(mark)}
      >
        {/* Letter with diacritic */}
        <div className="relative">
          <span className="font-arabic text-5xl text-foreground">{letterWithMark}</span>
        </div>
        
        {/* Mark name */}
        <div className="text-center">
          <p className="font-arabic text-lg text-foreground">{mark.nameAr}</p>
          <p className="text-sm font-medium text-muted-foreground">{mark.name}</p>
        </div>
        
        {/* Sound representation */}
        <Badge variant="secondary" className="text-xs">
          {mark.sound ? `/${mark.sound}/` : "silent"}
        </Badge>
        
        {/* Description (optional) */}
        {showDescriptions && (
          <p className="mt-1 text-center text-xs text-muted-foreground">
            {mark.description}
          </p>
        )}
        
        {/* Audio button */}
        {interactive && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 h-7"
            onClick={(e) => {
              e.stopPropagation();
              if (isEnabled) speak(letterWithMark);
            }}
          >
            <Volume2 className="mr-1 h-3 w-3" />
            Listen
          </Button>
        )}
      </div>
    );
  };
  
  return (
    <div className={cn("w-full", className)}>
      {/* Header with base letter selector */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Base letter:</span>
          <span className="font-arabic text-2xl text-gold">{baseLetter}</span>
        </div>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Info className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>
              Harakat (حَرَكَات) are diacritical marks that indicate vowel sounds.
              Click on each mark to hear its pronunciation.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      {/* Marks grid */}
      {layout === "grid" && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {harakat.map(renderMark)}
        </div>
      )}
      
      {layout === "list" && (
        <div className="space-y-3">
          {harakat.map((mark, index) => (
            <div
              key={mark.name}
              className={cn(
                "flex items-center gap-4 rounded-lg border p-3 transition-all",
                interactive && "cursor-pointer hover:border-gold",
                selectedMark?.name === mark.name && "border-gold bg-gold/5"
              )}
              onClick={() => interactive && handleSelect(mark)}
            >
              <span className="font-arabic text-4xl text-foreground">
                {baseLetter + mark.mark}
              </span>
              <div className="flex-1">
                <p className="font-medium">{mark.name}</p>
                <p className="text-sm text-muted-foreground">{mark.description}</p>
              </div>
              <Badge variant="secondary">{mark.sound || "silent"}</Badge>
            </div>
          ))}
        </div>
      )}
      
      {layout === "inline" && (
        <div className="flex flex-wrap items-center gap-4">
          {harakat.map((mark) => (
            <Tooltip key={mark.name}>
              <TooltipTrigger asChild>
                <span
                  className={cn(
                    "font-arabic text-4xl transition-all",
                    interactive && "cursor-pointer hover:text-gold",
                    selectedMark?.name === mark.name && "text-gold scale-110"
                  )}
                  onClick={() => interactive && handleSelect(mark)}
                >
                  {baseLetter + mark.mark}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-arabic">{mark.nameAr}</p>
                <p>{mark.name} - {mark.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      )}
      
      {/* Selected mark details */}
      {selectedMark && showDescriptions && (
        <Card className="mt-6 border-gold/30 bg-gold/5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-lg">
              <span className="font-arabic text-3xl">{baseLetter + selectedMark.mark}</span>
              <span>{selectedMark.name}</span>
              <span className="font-arabic text-lg text-muted-foreground">
                ({selectedMark.nameAr})
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{selectedMark.description}</p>
            <div className="mt-3 flex items-center gap-4">
              <Badge>Sound: {selectedMark.sound || "none"}</Badge>
              <Button
                size="sm"
                variant="outline"
                onClick={() => isEnabled && speak(baseLetter + selectedMark.mark)}
              >
                <Volume2 className="mr-2 h-4 w-4" />
                Pronounce
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
