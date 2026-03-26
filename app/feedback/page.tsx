"use client";

import { useState } from "react";
import { Send, Heart } from "lucide-react";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar, Sidebar, Footer } from "@/components/layout";

export default function FeedbackPage() {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setMessage("");
      setSelectedRating(null);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-2xl space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("feedback.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("feedback.description")}
              </p>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>{t("feedback.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {submitStatus === "success" && (
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-700 text-sm">
                      Thank you for your feedback!
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-4">
                      {t("feedback.form.rating")}
                    </label>
                    <div className="flex justify-between gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setSelectedRating(rating)}
                          className="flex flex-col items-center gap-2 flex-1"
                        >
                          <div
                            className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${
                              selectedRating === rating
                                ? "bg-gold text-background"
                                : "bg-muted hover:bg-muted/80"
                            }`}
                          >
                            <Heart
                              className={`h-6 w-6 ${
                                selectedRating === rating ? "fill-current" : ""
                              }`}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground text-center">
                            {["Poor", "Fair", "Good", "Very Good", "Excellent"][
                              rating - 1
                            ]}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("feedback.form.message")}
                    </label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t("feedback.form.messagePlaceholder")}
                      rows={8}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-background gap-2"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Submitting..." : t("feedback.form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-gold/5 to-gold/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Your feedback matters!</h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for helping us improve ArabicMaster Pro.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
