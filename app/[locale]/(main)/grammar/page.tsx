"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";

interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    arabic: string;
    translation: string;
    explanation: string;
  }>;
  difficulty: "beginner" | "intermediate" | "advanced";
}

const grammarTopics: GrammarTopic[] = [
  {
    id: "1",
    title: "Noun Genders",
    description: "Understanding masculine and feminine nouns in Arabic",
    difficulty: "beginner",
    examples: [
      {
        arabic: "كتاب (kitaab) - masculine",
        translation: "Book",
        explanation: "Most nouns ending in silent letters are masculine",
      },
      {
        arabic: "مدرسة (madrasa) - feminine",
        translation: "School",
        explanation: "Nouns ending in ة (ta marbuta) are feminine",
      },
    ],
  },
  {
    id: "2",
    title: "Verb Conjugation",
    description: "How to conjugate Arabic verbs in different tenses",
    difficulty: "intermediate",
    examples: [
      {
        arabic: "كتب (kataba) - he wrote",
        translation: "He wrote",
        explanation: "Past tense masculine singular",
      },
      {
        arabic: "يكتب (yaktub) - he writes",
        translation: "He writes",
        explanation: "Present tense masculine singular",
      },
    ],
  },
];

export default function GrammarPage() {
  const t = useTranslations();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");

  const filteredTopics = grammarTopics.filter(
    (topic) => difficultyFilter === "all" || topic.difficulty === difficultyFilter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={32} />
            <h1 className="text-4xl font-bold">{t("grammar")}</h1>
          </div>
          <p className="text-amber-100 text-lg">
            Master Arabic grammar rules and structures
          </p>
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8">
          {["all", "beginner", "intermediate", "advanced"].map((level) => (
            <button
              key={level}
              onClick={() => setDifficultyFilter(level)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                difficultyFilter === level
                  ? "bg-amber-600 text-white"
                  : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600"
              }`}
            >
              {level === "all" ? "All Levels" : level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        {/* Grammar Topics */}
        <div className="grid gap-4">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === topic.id ? null : topic.id)
                }
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {topic.description}
                  </p>
                </div>
                <ChevronDown
                  size={24}
                  className={`transition-transform ${
                    expandedId === topic.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedId === topic.id && (
                <div className="border-t border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-700">
                  {topic.examples.map((example, idx) => (
                    <div key={idx} className="mb-6 last:mb-0">
                      <p className="text-2xl font-bold text-amber-600 mb-2 text-right">
                        {example.arabic}
                      </p>
                      <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        {example.translation}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        💡 {example.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
