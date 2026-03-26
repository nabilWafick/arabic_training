"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { ARABIC_ALPHABET } from "@/data/curriculum";

export default function AlphabetPage() {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlphabet = useMemo(() => {
    return ARABIC_ALPHABET.filter((item) => {
      return (
        !searchQuery ||
        item.letter.includes(searchQuery) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-6xl space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("alphabet.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("alphabet.description")}
              </p>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search letters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredAlphabet.map((item, idx) => (
                <Card key={idx} className="border-border/50">
                  <CardHeader className="pb-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-4xl font-bold text-gold">
                          {item.letter}
                        </div>
                        <Badge>
                          {item.type === "sun letter" ? "☀️" : "🌙"}
                        </Badge>
                      </div>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.transliteration}
                        </p>
                      </div>
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
