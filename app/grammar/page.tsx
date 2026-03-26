"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar, Sidebar, Footer } from "@/components/layout";

const GRAMMAR_TOPICS = [
  {
    id: 1,
    title: "Arabic Alphabet",
    category: "Fundamentals",
    rule: "The Arabic alphabet consists of 28 letters",
  },
];

export default function GrammarPage() {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = useMemo(() => {
    return GRAMMAR_TOPICS.filter((topic) => {
      return (
        !searchQuery ||
        topic.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("grammar.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("grammar.description")}
              </p>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("grammar.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid gap-4">
              {filteredTopics.map((topic) => (
                <Card key={topic.id} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle>{topic.title}</CardTitle>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {topic.rule}
                        </p>
                      </div>
                      <Badge>{topic.category}</Badge>
                    </div>
                  </CardHeader>
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
