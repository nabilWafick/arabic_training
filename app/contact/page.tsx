"use client";

import { useState } from "react";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar, Sidebar, Footer } from "@/components/layout";

export default function ContactPage() {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
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
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("contact.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("contact.description")}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>{t("contact.form.submit")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {submitStatus === "success" && (
                        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-700 text-sm">
                          Message sent successfully!
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          rows={6}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold text-background gap-2"
                      >
                        <Send className="h-4 w-4" />
                        {isSubmitting ? "Sending..." : t("contact.form.submit")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-base">
                      {t("contact.info.email")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                      <p className="text-sm">support@arabicmaster.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-base">
                      {t("contact.info.hours")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                      <p className="text-sm">Mon-Fri: 9 AM - 6 PM EST</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
