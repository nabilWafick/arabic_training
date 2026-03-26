"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "Is ArabicMaster Pro free?",
    answer: "Yes! ArabicMaster Pro is completely free. We believe quality Arabic education should be accessible to everyone.",
    category: "Pricing",
  },
  {
    id: "2",
    question: "How long does it take to complete a phase?",
    answer: "Each phase takes approximately 25-60 hours depending on your pace. You can learn at your own speed without any time constraints.",
    category: "Learning",
  },
  {
    id: "3",
    question: "Can I practice offline?",
    answer: "Currently, ArabicMaster Pro requires an internet connection for full functionality, but we're working on offline mode.",
    category: "Features",
  },
];

export default function FAQPage() {
  const t = useTranslations();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle size={32} />
            <h1 className="text-4xl font-bold">{t("faq")}</h1>
          </div>
          <p className="text-indigo-100 text-lg">Find answers to commonly asked questions</p>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {faq.category}
                  </span>
                </div>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform ${
                    expandedId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedId === faq.id && (
                <div className="border-t border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
