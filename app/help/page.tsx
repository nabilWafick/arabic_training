"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar, Sidebar, Footer } from "@/components/layout";

const HELP_TOPICS = [
  { id: 1, question: "How do I get started?", answer: "Create an account and start with Phase 1." },
];

export default function HelpPage() {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("help.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("help.description")}
              </p>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("help.searchFaq")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="space-y-3">
              {HELP_TOPICS.map((topic) => (
                <Card key={topic.id} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-base">
                      {topic.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {topic.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-gold/5 to-gold/10">
              <CardContent className="p-8">
                <Button className="bg-gold text-background">
                  {t("contact.title")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
