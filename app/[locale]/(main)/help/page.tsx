"use client";

import { useTranslations } from "next-intl";
import { Search, HelpCircle } from "lucide-react";
import { useState } from "react";

interface HelpArticle {
  id: string;
  title: string;
  category: string;
  content: string;
}

const helpArticles: HelpArticle[] = [
  {
    id: "1",
    title: "Getting Started",
    category: "Basics",
    content: "Learn how to create an account and start your Arabic learning journey with ArabicMaster Pro.",
  },
  {
    id: "2",
    title: "Understanding Phases",
    category: "Learning",
    content: "Discover the 5 phases of learning and how to progress through them at your own pace.",
  },
  {
    id: "3",
    title: "Gamification System",
    category: "Features",
    content: "Understand XP, levels, streaks, and achievements to maximize your learning motivation.",
  },
];

export default function HelpPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = helpArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle size={32} />
            <h1 className="text-4xl font-bold">{t("help")}</h1>
          </div>
          <p className="text-cyan-100 text-lg">Find answers and learn how to use ArabicMaster Pro</p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-slate-700 dark:text-white"
            />
          </div>
        </div>

        {/* Articles */}
        <div className="grid gap-4">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {article.title}
                </h3>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
