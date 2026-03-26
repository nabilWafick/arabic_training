"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar, Sidebar, Footer } from "@/components/layout";

export default function TermsPage() {
  const t = useTranslations();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("terms.title")}
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                {t("terms.description")}: January 1, 2024
              </p>
            </div>

            <Card className="border-gold/20 bg-gold/5">
              <CardContent className="p-6 text-sm">
                <span className="font-semibold">Important:</span> Please read
                these Terms of Service carefully.
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>{t("terms.agreement")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                By using ArabicMaster Pro, you agree to be bound by these terms.
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>{t("terms.userResponsibilities")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Maintain confidentiality of your account</p>
                <p>• Use the Service for lawful purposes only</p>
                <p>• Not post abusive or harmful content</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-gold/5 to-gold/10">
              <CardContent className="p-6">
                <p className="text-sm">
                  <span className="font-semibold">{t("terms.effective")}:</span>{" "}
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
