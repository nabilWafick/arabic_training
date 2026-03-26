"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Search, Volume2, BookOpen } from "lucide-react";

interface VocabularyWord {
  id: string;
  arabic: string;
  french: string;
  english: string;
  pronunciation: string;
  example: string;
  category: string;
}

const vocabularyData: VocabularyWord[] = [
  {
    id: "1",
    arabic: "كتاب",
    french: "Livre",
    english: "Book",
    pronunciation: "Kitaab",
    example: "أنا أقرأ كتاب جميل",
    category: "الأشياء",
  },
  {
    id: "2",
    arabic: "منزل",
    french: "Maison",
    english: "House",
    pronunciation: "Manzil",
    example: "بيتي كبير وجميل",
    category: "الأماكن",
  },
  {
    id: "3",
    arabic: "السلام عليكم",
    french: "Bonjour",
    english: "Hello",
    pronunciation: "Assalamu Alaikum",
    example: "السلام عليكم ورحمة الله وبركاته",
    category: "التحيات",
  },
  {
    id: "4",
    arabic: "شكراً",
    french: "Merci",
    english: "Thank You",
    pronunciation: "Shukran",
    example: "شكراً جزيلاً على مساعدتك",
    category: "التحيات",
  },
  {
    id: "5",
    arabic: "أم",
    french: "Mère",
    english: "Mother",
    pronunciation: "Umm",
    example: "أمي تحب الطبخ",
    category: "الأسرة",
  },
];

export default function VocabularyPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "الأشياء",
    "الأماكن",
    "التحيات",
    "الأسرة",
  ];

  const filteredWords = vocabularyData.filter((word) => {
    const matchesSearch =
      word.arabic.includes(searchTerm) ||
      word.french.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.english.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || word.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={32} />
            <h1 className="text-4xl font-bold">{t("vocabulary")}</h1>
          </div>
          <p className="text-blue-100 text-lg">
            {t("vocabulary_description") || "Learn essential Arabic vocabulary with examples and pronunciation"}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <input
              type="text"
              placeholder={t("search_vocabulary") || "Search vocabulary..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
            />
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
              >
                {category === "all" ? t("all_categories") || "All" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Vocabulary Cards */}
        <div className="grid gap-6">
          {filteredWords.map((word) => (
            <div
              key={word.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2 text-right rtl:text-right ltr:text-left">
                    {word.arabic}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    {t("pronunciation")}: {word.pronunciation}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {word.french}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      {word.english}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t("example")}:
                  </p>
                  <p className="text-lg text-slate-800 dark:text-slate-200 mb-4 text-right">
                    {word.example}
                  </p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Volume2 size={18} />
                    {t("listen") || "Listen"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {t("no_results") || "No vocabulary found"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
