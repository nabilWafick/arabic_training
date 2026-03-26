"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Star,
  Send,
  CheckCircle,
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  Heart,
  Zap,
  Bug,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

/**
 * Feedback type options
 */
interface FeedbackType {
  id: string;
  icon: React.ElementType;
  label: string;
  labelAr: string;
  color: string;
  bgColor: string;
}

/**
 * Feature request category
 */
interface FeatureCategory {
  id: string;
  label: string;
  labelAr: string;
  votes: number;
}

/**
 * Feedback page - User feedback and feature requests
 */
export default function FeedbackPage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [votedFeatures, setVotedFeatures] = useState<Set<string>>(new Set());

  // Feedback types
  const feedbackTypes: FeedbackType[] = [
    {
      id: "love",
      icon: Heart,
      label: "I love it!",
      labelAr: "أحبه!",
      color: "text-pink-500",
      bgColor: "bg-pink-500/20",
    },
    {
      id: "suggestion",
      icon: Lightbulb,
      label: "Suggestion",
      labelAr: "اقتراح",
      color: "text-gold",
      bgColor: "bg-gold/20",
    },
    {
      id: "bug",
      icon: Bug,
      label: "Bug Report",
      labelAr: "خطأ",
      color: "text-red-500",
      bgColor: "bg-red-500/20",
    },
    {
      id: "improvement",
      icon: Zap,
      label: "Improvement",
      labelAr: "تحسين",
      color: "text-purple-500",
      bgColor: "bg-purple-500/20",
    },
  ];

  // Popular feature requests
  const [featureRequests, setFeatureRequests] = useState<FeatureCategory[]>([
    { id: "offline", label: "Offline Mode", labelAr: "وضع عدم الاتصال", votes: 234 },
    { id: "dialect", label: "Dialect Learning", labelAr: "تعلم اللهجات", votes: 189 },
    { id: "mobile", label: "Mobile App", labelAr: "تطبيق الجوال", votes: 156 },
    { id: "conversation", label: "AI Conversations", labelAr: "محادثات الذكاء الاصطناعي", votes: 142 },
    { id: "certificate", label: "Certificates", labelAr: "الشهادات", votes: 98 },
    { id: "community", label: "Community Forums", labelAr: "منتديات المجتمع", votes: 87 },
  ]);

  // Handle vote
  const handleVote = (id: string) => {
    if (votedFeatures.has(id)) return;
    
    setFeatureRequests((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, votes: f.votes + 1 } : f
      ).sort((a, b) => b.votes - a.votes)
    );
    setVotedFeatures((prev) => new Set([...prev, id]));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Rating labels
  const ratingLabels = [
    { label: "Very Poor", labelAr: "سيء جداً", emoji: "😞" },
    { label: "Poor", labelAr: "سيء", emoji: "😕" },
    { label: "Average", labelAr: "متوسط", emoji: "😐" },
    { label: "Good", labelAr: "جيد", emoji: "🙂" },
    { label: "Excellent", labelAr: "ممتاز", emoji: "😍" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

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

        <main className="flex-1 overflow-auto">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/20 via-background to-gold/10 px-6 py-16">
            {/* Decorative stars */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute animate-pulse text-gold/20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    transform: `scale(${0.5 + Math.random() * 1})`,
                  }}
                />
              ))}
            </div>

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-purple-500/20 p-4">
                <MessageCircle className="h-10 w-10 text-purple-500" />
              </div>

              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                {t("feedback.title") || "Share Your Feedback"}
              </h1>
              <p className="mt-2 font-arabic text-2xl text-purple-500">شاركنا رأيك</p>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("feedback.subtitle") || "Help us make ArabicMaster Pro even better!"}
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Feedback Form */}
              <div className="lg:col-span-3">
                {isSubmitted ? (
                  <Card className="border-green-500/50 bg-green-500/5">
                    <CardContent className="flex flex-col items-center py-16 text-center">
                      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {t("feedback.thankYou") || "Thank you for your feedback!"}
                      </h2>
                      <p className="font-arabic mt-2 text-xl text-green-500">شكراً لملاحظاتك</p>
                      <p className="mt-4 max-w-md text-muted-foreground">
                        {t("feedback.thankYouMessage") || "Your input helps us improve ArabicMaster Pro for everyone. We read every piece of feedback!"}
                      </p>
                      <div className="mt-8 flex gap-4">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsSubmitted(false);
                            setRating(0);
                            setSelectedType(null);
                            setFeedback("");
                          }}
                        >
                          {t("feedback.submitAnother") || "Submit Another"}
                        </Button>
                        <Button className="gap-2 bg-gold text-background hover:bg-gold-dark" asChild>
                          <Link href="/dashboard">
                            {t("feedback.backToDashboard") || "Back to Dashboard"}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-gold" />
                        {t("feedback.shareFeedback") || "Share Your Thoughts"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Star Rating */}
                        <div className="text-center">
                          <Label className="text-lg font-medium">
                            {t("feedback.rateExperience") || "How would you rate your experience?"}
                          </Label>
                          <div className="mt-6 flex items-center justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                className="group relative transition-transform hover:scale-110"
                                onMouseEnter={() => setHoveredRating(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                onClick={() => setRating(star)}
                              >
                                <Star
                                  className={cn(
                                    "h-12 w-12 transition-all",
                                    (hoveredRating || rating) >= star
                                      ? "fill-gold text-gold"
                                      : "text-muted-foreground/30"
                                  )}
                                />
                              </button>
                            ))}
                          </div>
                          {(rating > 0 || hoveredRating > 0) && (
                            <div className="mt-4 flex flex-col items-center gap-1">
                              <span className="text-4xl">
                                {ratingLabels[(hoveredRating || rating) - 1].emoji}
                              </span>
                              <span className="font-medium text-foreground">
                                {ratingLabels[(hoveredRating || rating) - 1].label}
                              </span>
                              <span className="font-arabic text-sm text-gold">
                                {ratingLabels[(hoveredRating || rating) - 1].labelAr}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Feedback Type */}
                        <div>
                          <Label className="text-sm font-medium">
                            {t("feedback.feedbackType") || "What type of feedback is this?"}
                          </Label>
                          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {feedbackTypes.map((type) => {
                              const Icon = type.icon;
                              return (
                                <div
                                  key={type.id}
                                  className={cn(
                                    "cursor-pointer rounded-lg border p-4 text-center transition-all",
                                    selectedType === type.id
                                      ? `border-2 ${type.bgColor}`
                                      : "border-border/50 hover:border-gold/30"
                                  )}
                                  onClick={() => setSelectedType(type.id)}
                                  style={{
                                    borderColor: selectedType === type.id ? type.color.replace('text-', '') : undefined,
                                  }}
                                >
                                  <div
                                    className={cn(
                                      "mx-auto w-fit rounded-lg p-2",
                                      type.bgColor
                                    )}
                                  >
                                    <Icon className={cn("h-5 w-5", type.color)} />
                                  </div>
                                  <p className="mt-2 text-sm font-medium text-foreground">
                                    {type.label}
                                  </p>
                                  <p className="font-arabic text-xs text-muted-foreground">
                                    {type.labelAr}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Feedback Text */}
                        <div className="space-y-2">
                          <Label htmlFor="feedback">
                            {t("feedback.details") || "Tell us more (optional)"}
                          </Label>
                          <Textarea
                            id="feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder={t("feedback.detailsPlaceholder") || "What's on your mind? Share your thoughts, ideas, or report issues..."}
                            rows={5}
                            className="resize-none border-border/50 focus:border-gold"
                          />
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          className="w-full gap-2 bg-gradient-to-r from-purple-500 to-gold text-background"
                          disabled={isSubmitting || rating === 0}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                              {t("feedback.submitting") || "Submitting..."}
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              {t("feedback.submit") || "Submit Feedback"}
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Feature Requests */}
              <div className="lg:col-span-2">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-gold" />
                        {t("feedback.featureRequests") || "Feature Requests"}
                      </span>
                      <Badge variant="secondary" className="font-normal">
                        {t("feedback.voteForFavorites") || "Vote for your favorites"}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {featureRequests.map((feature, index) => (
                        <div
                          key={feature.id}
                          className={cn(
                            "flex items-center justify-between rounded-lg border p-4 transition-all",
                            votedFeatures.has(feature.id)
                              ? "border-gold/50 bg-gold/5"
                              : "border-border/50 hover:border-gold/30"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                                index === 0
                                  ? "bg-gold/20 text-gold"
                                  : index === 1
                                  ? "bg-slate-300/20 text-slate-400"
                                  : index === 2
                                  ? "bg-amber-600/20 text-amber-600"
                                  : "bg-muted text-muted-foreground"
                              )}
                            >
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">
                                {feature.label}
                              </p>
                              <p className="font-arabic text-xs text-gold/80">
                                {feature.labelAr}
                              </p>
                            </div>
                          </div>
                          <button
                            className={cn(
                              "flex items-center gap-2 rounded-lg px-3 py-2 transition-all",
                              votedFeatures.has(feature.id)
                                ? "bg-gold text-background"
                                : "bg-muted hover:bg-gold/20"
                            )}
                            onClick={() => handleVote(feature.id)}
                            disabled={votedFeatures.has(feature.id)}
                          >
                            <ThumbsUp
                              className={cn(
                                "h-4 w-4",
                                votedFeatures.has(feature.id) && "fill-current"
                              )}
                            />
                            <span className="text-sm font-semibold">
                              {feature.votes}
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-lg border border-dashed border-border/50 p-4 text-center">
                      <Lightbulb className="mx-auto h-8 w-8 text-muted-foreground/50" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        {t("feedback.haveIdea") || "Have a feature idea?"}
                      </p>
                      <Button variant="link" className="mt-1 text-gold" asChild>
                        <Link href="/contact">
                          {t("feedback.suggestFeature") || "Suggest a feature"}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Card className="border-border/50">
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-gold">4.8</p>
                      <div className="mt-1 flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-3 w-3",
                              i < 5 ? "fill-gold text-gold" : "text-muted"
                            )}
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t("feedback.averageRating") || "Average Rating"}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50">
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-teal">2.4K</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t("feedback.totalFeedback") || "Total Feedback"}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
