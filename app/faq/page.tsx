"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar, Sidebar, Footer } from "@/components/layout";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How long does it take to learn Arabic?",
    answer: "The curriculum is designed for approximately 185 hours of study.",
  },
];

export default function FAQPage() {
  const t = useTranslations();
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("faq.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("faq.description")}
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => (
                <Card key={item.id} className="border-border/50">
                  <CardHeader>
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === item.id ? null : item.id)
                      }
                      className="w-full text-left"
                    >
                      <CardTitle className="text-base">
                        {item.question}
                      </CardTitle>
                    </button>
                  </CardHeader>
                  {expandedId === item.id && (
                    <CardContent className="border-t border-border/50 pt-4 space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {item.answer}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
