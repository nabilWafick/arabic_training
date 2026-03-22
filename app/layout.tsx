import type { Metadata, Viewport } from "next";
import { Playfair_Display, Crimson_Pro, Amiri } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { IntlProvider } from "@/components/providers/IntlProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const crimson = Crimson_Pro({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ArabicMaster Pro - Learn Arabic Online",
    template: "%s | ArabicMaster Pro",
  },
  description:
    "Master the Arabic language with our comprehensive, AI-powered learning platform. From alphabet to advanced literature, with personalized exercises and gamification.",
  keywords: [
    "Arabic",
    "Learn Arabic",
    "Arabic Language",
    "Arabic Lessons",
    "Arabic Course",
    "AI Language Learning",
    "Arabic Grammar",
    "Arabic Vocabulary",
  ],
  authors: [{ name: "ArabicMaster Pro" }],
  creator: "ArabicMaster Pro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arabicmaster.pro",
    siteName: "ArabicMaster Pro",
    title: "ArabicMaster Pro - Learn Arabic Online",
    description:
      "Master the Arabic language with our comprehensive, AI-powered learning platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArabicMaster Pro",
    description: "Learn Arabic with AI-powered exercises and gamification",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f3ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1b2a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${crimson.variable} ${amiri.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <IntlProvider>
          <TooltipProvider delayDuration={300}>
            {children}
          </TooltipProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
