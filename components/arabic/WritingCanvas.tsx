"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Eraser, RotateCcw, Download, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/**
 * Props for the WritingCanvas component
 */
interface WritingCanvasProps {
  /** Target letter/word to practice */
  targetText?: string;
  /** Show guide overlay */
  showGuide?: boolean;
  /** Callback when drawing is submitted */
  onSubmit?: (imageData: string) => void;
  /** Enable AI verification */
  enableVerification?: boolean;
  /** Canvas width */
  width?: number;
  /** Canvas height */
  height?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Interactive canvas for Arabic handwriting practice
 * Supports touch devices and provides stroke guidance
 */
export function WritingCanvas({
  targetText = "ب",
  showGuide = true,
  onSubmit,
  enableVerification = false,
  width = 400,
  height = 300,
  className,
}: WritingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const guideCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(8);
  const [strokeColor, setStrokeColor] = useState("#1a1208");
  const [hasDrawing, setHasDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState<{ x: number; y: number } | null>(null);
  
  /**
   * Initialize canvas contexts
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    const guideCanvas = guideCanvasRef.current;
    
    if (!canvas || !guideCanvas) return;
    
    // Set up main canvas
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = brushSize;
    }
    
    // Draw guide text
    if (showGuide) {
      const guideCtx = guideCanvas.getContext("2d");
      if (guideCtx) {
        guideCtx.clearRect(0, 0, width, height);
        guideCtx.font = `${height * 0.6}px Amiri`;
        guideCtx.fillStyle = "rgba(201, 168, 92, 0.15)";
        guideCtx.textAlign = "center";
        guideCtx.textBaseline = "middle";
        guideCtx.fillText(targetText, width / 2, height / 2);
      }
    }
  }, [targetText, showGuide, width, height, strokeColor, brushSize]);
  
  /**
   * Get canvas coordinates from event
   */
  const getCoordinates = useCallback(
    (e: React.MouseEvent | React.TouchEvent): { x: number; y: number } | null => {
      const canvas = canvasRef.current;
      if (!canvas) return null;
      
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      if ("touches" in e) {
        const touch = e.touches[0];
        return {
          x: (touch.clientX - rect.left) * scaleX,
          y: (touch.clientY - rect.top) * scaleY,
        };
      }
      
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    },
    []
  );
  
  /**
   * Start drawing
   */
  const startDrawing = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      const coords = getCoordinates(e);
      if (!coords) return;
      
      setIsDrawing(true);
      setLastPosition(coords);
      setHasDrawing(true);
      
      // Draw a single point
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, brushSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    [getCoordinates, brushSize]
  );
  
  /**
   * Continue drawing
   */
  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDrawing || !lastPosition) return;
      e.preventDefault();
      
      const coords = getCoordinates(e);
      if (!coords) return;
      
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(lastPosition.x, lastPosition.y);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
      }
      
      setLastPosition(coords);
    },
    [isDrawing, lastPosition, getCoordinates]
  );
  
  /**
   * Stop drawing
   */
  const stopDrawing = useCallback(() => {
    setIsDrawing(false);
    setLastPosition(null);
  }, []);
  
  /**
   * Clear the canvas
   */
  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHasDrawing(false);
    }
  }, []);
  
  /**
   * Download the drawing
   */
  const downloadDrawing = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const link = document.createElement("a");
    link.download = `arabic-writing-${targetText}-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [targetText]);
  
  /**
   * Submit drawing for verification
   */
  const handleSubmit = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !onSubmit) return;
    
    const imageData = canvas.toDataURL("image/png");
    onSubmit(imageData);
  }, [onSubmit]);
  
  return (
    <Card className={cn("w-full overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span>Practice Writing</span>
          <span className="font-arabic text-3xl text-gold">{targetText}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Canvas container */}
        <div
          className="relative mx-auto overflow-hidden rounded-lg border-2 border-dashed border-gold/50 bg-gradient-to-br from-card to-cream dark:to-navy-light"
          style={{ width, height }}
        >
          {/* Guide layer */}
          {showGuide && (
            <canvas
              ref={guideCanvasRef}
              width={width}
              height={height}
              className="pointer-events-none absolute inset-0"
            />
          )}
          
          {/* Drawing layer */}
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="relative z-10 touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          
          {/* Instructions overlay */}
          {!hasDrawing && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
                Draw the character here
              </p>
            </div>
          )}
        </div>
        
        {/* Brush controls */}
        <div className="flex items-center gap-4">
          <Label className="text-sm">Brush Size</Label>
          <Slider
            value={[brushSize]}
            onValueChange={(v) => setBrushSize(v[0])}
            min={2}
            max={20}
            step={1}
            className="flex-1"
          />
          <span className="w-8 text-sm text-muted-foreground">{brushSize}px</span>
        </div>
        
        {/* Color selection */}
        <div className="flex items-center gap-4">
          <Label className="text-sm">Ink Color</Label>
          <div className="flex gap-2">
            {["#1a1208", "#0d1b2a", "#8b3a2a", "#4a6741"].map((color) => (
              <button
                key={color}
                className={cn(
                  "h-8 w-8 rounded-full border-2 transition-transform",
                  strokeColor === color
                    ? "scale-110 border-gold"
                    : "border-transparent hover:scale-105"
                )}
                style={{ backgroundColor: color }}
                onClick={() => setStrokeColor(color)}
              />
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between gap-2">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={clearCanvas}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear
          </Button>
          <Button variant="outline" size="sm" onClick={downloadDrawing} disabled={!hasDrawing}>
            <Download className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
        
        {enableVerification && (
          <Button
            size="sm"
            className="bg-gold hover:bg-gold-dark text-background"
            onClick={handleSubmit}
            disabled={!hasDrawing}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Check
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
