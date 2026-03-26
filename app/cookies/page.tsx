"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar, Sidebar, Footer } from "@/components/layout";

export default function CookiesPage() {
  const t = useTranslations();

  const cookieTypes = [
    {
      name: t("cookies.essential"),
      duration: "Session or 1 year",
      examples: ["Session ID", "Authentication token"],
    },
    {
      name: t("cookies.analytics"),
      duration: "2 years",
      examples: ["Page visits", "User interactions"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("cookies.title")}
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                {t("cookies.description")}: January 1, 2024
              </p>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>{t("cookies.introduction")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Cookies are small text files that help improve your experience
                on our platform.
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{t("cookies.typesOfCookies")}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {cookieTypes.map((type, idx) => (
                  <Card key={idx} className="border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-base">{type.name}</CardTitle>
                        <Badge>{type.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {type.examples.map((ex, exIdx) => (
                        <p key={exIdx} className="text-xs text-muted-foreground">
                          • {ex}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-gold/5 to-gold/10">
              <CardContent className="p-6">
                <p className="text-sm">
                  <span className="font-semibold">{t("cookies.effective")}:</span>{" "}
                  January 1, 2024
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
