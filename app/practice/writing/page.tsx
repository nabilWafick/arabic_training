"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  PenTool,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Eraser,
  Download,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useTranslations } from "next-intl";
import { ARABIC_ALPHABET } from "@/data/curriculum";

/**
 * Writing Practice Page - Practice Arabic handwriting
 * Canvas-based drawing with letter tracing and recognition
 */
export default function WritingPracticePage() {
  const [mounted, setMounted] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { addXP } = useGamificationStore();
  const t = useTranslations();

  const currentLetter = ARABIC_ALPHABET[currentLetterIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Initialize canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw guide lines
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    // Horizontal center line
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Vertical center line
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    ctx.setLineDash([]);
  }, [currentLetterIndex, mounted]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = "#c9a85c";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Redraw guide lines
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
  };

  const nextLetter = () => {
    if (currentLetterIndex < ARABIC_ALPHABET.length - 1) {
      setCurrentLetterIndex((prev) => prev + 1);
      setShowHint(false);
      clearCanvas();
    }
  };

  const prevLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex((prev) => prev - 1);
      setShowHint(false);
      clearCanvas();
    }
  };

  const handleComplete = () => {
    addXP(10);
    nextLetter();
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Link href="/practice" className="text-muted-foreground hover:text-gold">
                    <ChevronLeft className="h-5 w-5" />
                  </Link>
                  <h1 className="font-heading text-3xl font-bold text-foreground">
                    {t("arabic.writing")} {t("navigation.practice")}
                  </h1>
                </div>
                <p className="mt-1 text-muted-foreground">
                  {t("learning.practiceWritingLetters")}
                </p>
              </div>
              <Badge variant="secondary" className="text-lg">
                {currentLetterIndex + 1} / {ARABIC_ALPHABET.length}
              </Badge>
            </div>

            {/* Progress */}
            <Progress
              value={(currentLetterIndex / ARABIC_ALPHABET.length) * 100}
              className="h-2"
            />

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Letter to Write */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-center">
                    {t("learning.writeThisLetter")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-gold/10">
                    <span className="font-arabic text-9xl text-gold">
                      {currentLetter.letter}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold">{currentLetter.name}</p>
                    <p className="text-muted-foreground">
                      {currentLetter.transliteration}
                    </p>
                  </div>

                  {/* Letter Forms Reference */}
                  <div className="mt-4 w-full">
                    <p className="mb-2 text-sm font-medium text-center text-muted-foreground">
                      {t("learning.letterForms")}
                    </p>
                    <div className="flex justify-center gap-4">
                      {[
                        { label: t("learning.isolated"), value: currentLetter.isolated },
                        { label: t("learning.initial"), value: currentLetter.initial },
                        { label: t("learning.medial"), value: currentLetter.medial },
                        { label: t("learning.final"), value: currentLetter.final },
                      ].map((form) => (
                        <div
                          key={form.label}
                          className="rounded-lg border border-border/50 bg-background p-2 text-center"
                        >
                          <span className="font-arabic text-2xl text-foreground">
                            {form.value}
                          </span>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {form.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hint Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 gap-2"
                    onClick={() => setShowHint(!showHint)}
                  >
                    <Lightbulb className="h-4 w-4" />
                    {showHint ? t("common.hideHint") : t("common.showHint")}
                  </Button>

                  {showHint && (
                    <div className="w-full rounded-lg bg-gold/5 p-4 text-center text-sm text-muted-foreground">
                      {t("learning.writeFromRightToLeft")}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Drawing Canvas */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <PenTool className="h-5 w-5 text-gold" />
                      {t("learning.drawHere")}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={clearCanvas}>
                        <Eraser className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <canvas
                    ref={canvasRef}
                    className="w-full h-80 rounded-lg cursor-crosshair touch-none"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                  />

                  {/* Actions */}
                  <div className="mt-6 flex justify-between">
                    <Button
                      variant="outline"
                      onClick={prevLetter}
                      disabled={currentLetterIndex === 0}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      {t("common.previous")}
                    </Button>
                    <Button
                      className="bg-gold text-background hover:bg-gold-dark"
                      onClick={handleComplete}
                    >
                      {currentLetterIndex < ARABIC_ALPHABET.length - 1 ? (
                        <>
                          {t("common.next")}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          {t("common.done")}
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Letter Grid for Quick Navigation */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>{t("learning.allLetters")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 sm:grid-cols-14">
                  {ARABIC_ALPHABET.map((letter, index) => (
                    <button
                      key={letter.letter}
                      onClick={() => {
                        setCurrentLetterIndex(index);
                        clearCanvas();
                        setShowHint(false);
                      }}
                      className={`flex h-12 w-12 items-center justify-center rounded-lg font-arabic text-xl transition-all ${
                        index === currentLetterIndex
                          ? "bg-gold text-background"
                          : index < currentLetterIndex
                          ? "bg-green-500/20 text-green-500"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {letter.letter}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
