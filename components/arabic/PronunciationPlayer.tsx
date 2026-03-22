"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { useAudioStore } from "@/stores/useAudioStore";
import { cn } from "@/lib/utils";

/**
 * Props for PronunciationPlayer component
 */
interface PronunciationPlayerProps {
  /** Arabic text to pronounce */
  text: string;
  /** Transliteration for display */
  transliteration?: string;
  /** English translation */
  translation?: string;
  /** Auto-play on mount */
  autoPlay?: boolean;
  /** Show text display */
  showText?: boolean;
  /** Compact mode */
  compact?: boolean;
  /** Repeat count (0 = no repeat) */
  repeatCount?: number;
  /** Delay between repeats (ms) */
  repeatDelay?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Audio player for Arabic pronunciation using Web Speech API
 * Includes speed controls and repeat functionality
 */
export function PronunciationPlayer({
  text,
  transliteration,
  translation,
  autoPlay = false,
  showText = true,
  compact = false,
  repeatCount = 0,
  repeatDelay = 1500,
  className,
}: PronunciationPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRepeat, setCurrentRepeat] = useState(0);
  const repeatTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const {
    isEnabled,
    rate,
    pitch,
    volume,
    selectedVoice,
    toggleEnabled,
    setRate,
    setPitch,
    setVolume,
    speak,
    stop,
  } = useAudioStore();
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      stop();
      if (repeatTimeoutRef.current) {
        clearTimeout(repeatTimeoutRef.current);
      }
    };
  }, [stop]);
  
  // Auto-play on mount if enabled
  useEffect(() => {
    if (autoPlay && isEnabled) {
      handlePlay();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  /**
   * Play the pronunciation
   */
  const handlePlay = () => {
    if (!isEnabled) return;
    
    setIsPlaying(true);
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    utterance.lang = "ar-SA";
    
    // Find Arabic voice
    const voices = speechSynthesis.getVoices();
    const arabicVoice = voices.find(
      (v) => v.lang.startsWith("ar") && (selectedVoice ? v.name === selectedVoice.name : true)
    );
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }
    
    utterance.onend = () => {
      if (repeatCount > 0 && currentRepeat < repeatCount) {
        // Schedule next repeat
        repeatTimeoutRef.current = setTimeout(() => {
          setCurrentRepeat((prev) => prev + 1);
          handlePlay();
        }, repeatDelay);
      } else {
        setIsPlaying(false);
        setCurrentRepeat(0);
      }
    };
    
    utterance.onerror = () => {
      setIsPlaying(false);
      setCurrentRepeat(0);
    };
    
    speechSynthesis.speak(utterance);
  };
  
  /**
   * Stop playback
   */
  const handleStop = () => {
    stop();
    setIsPlaying(false);
    setCurrentRepeat(0);
    if (repeatTimeoutRef.current) {
      clearTimeout(repeatTimeoutRef.current);
    }
  };
  
  /**
   * Toggle play/pause
   */
  const togglePlay = () => {
    if (isPlaying) {
      handleStop();
    } else {
      handlePlay();
    }
  };
  
  if (compact) {
    return (
      <div className={cn("inline-flex items-center gap-2", className)}>
        {showText && (
          <span className="font-arabic text-xl">{text}</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={togglePlay}
          disabled={!isEnabled}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>
      </div>
    );
  }
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-4">
        {/* Text display */}
        {showText && (
          <div className="mb-4 text-center">
            <p className="font-arabic text-4xl text-foreground">{text}</p>
            {transliteration && (
              <p className="mt-1 text-sm text-muted-foreground">
                /{transliteration}/
              </p>
            )}
            {translation && (
              <p className="mt-1 text-sm italic text-muted-foreground">
                {translation}
              </p>
            )}
          </div>
        )}
        
        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          {/* Enable/disable audio */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleEnabled}
            className={cn(!isEnabled && "text-muted-foreground")}
          >
            {isEnabled ? (
              <Volume2 className="h-5 w-5" />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
          </Button>
          
          {/* Play/Pause button */}
          <Button
            size="lg"
            className={cn(
              "h-14 w-14 rounded-full",
              isPlaying
                ? "bg-rust hover:bg-rust/90"
                : "bg-gold hover:bg-gold-dark"
            )}
            onClick={togglePlay}
            disabled={!isEnabled}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-white" />
            ) : (
              <Play className="ml-1 h-6 w-6 text-background" />
            )}
          </Button>
          
          {/* Restart button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              handleStop();
              handlePlay();
            }}
            disabled={!isEnabled}
          >
            <RotateCcw className="h-5 w-5" />
          </Button>
          
          {/* Settings popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings2 className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-4">
                {/* Speed control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Speed</Label>
                    <span className="text-xs text-muted-foreground">
                      {rate.toFixed(1)}x
                    </span>
                  </div>
                  <Slider
                    value={[rate]}
                    onValueChange={(v) => setRate(v[0])}
                    min={0.3}
                    max={1.5}
                    step={0.1}
                  />
                </div>
                
                {/* Pitch control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Pitch</Label>
                    <span className="text-xs text-muted-foreground">
                      {pitch.toFixed(1)}
                    </span>
                  </div>
                  <Slider
                    value={[pitch]}
                    onValueChange={(v) => setPitch(v[0])}
                    min={0.5}
                    max={1.5}
                    step={0.1}
                  />
                </div>
                
                {/* Volume control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Volume</Label>
                    <span className="text-xs text-muted-foreground">
                      {Math.round(volume * 100)}%
                    </span>
                  </div>
                  <Slider
                    value={[volume]}
                    onValueChange={(v) => setVolume(v[0])}
                    min={0}
                    max={1}
                    step={0.1}
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Repeat indicator */}
        {repeatCount > 0 && isPlaying && (
          <div className="mt-3 text-center">
            <span className="text-xs text-muted-foreground">
              Repeat {currentRepeat + 1} of {repeatCount + 1}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
