"use client";

import { useTranslations } from "next-intl";
import { MessageSquare, Send, Star } from "lucide-react";
import { useState } from "react";

export default function FeedbackPage() {
  const t = useTranslations();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", { rating, feedback });
    alert("Thank you for your feedback!");
    setRating(0);
    setFeedback("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare size={32} />
            <h1 className="text-4xl font-bold">{t("feedback")}</h1>
          </div>
          <p className="text-yellow-100 text-lg">Help us improve ArabicMaster Pro with your feedback</p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Rating Section */}
            <div>
              <label className="block text-lg font-bold text-slate-900 dark:text-white mb-4">
                How would you rate your experience?
              </label>
              <div className="flex gap-4 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`transition-transform transform hover:scale-110 ${
                      rating >= star ? "text-yellow-400" : "text-slate-300 dark:text-slate-600"
                    }`}
                  >
                    <Star size={40} fill="currentColor" />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-center mt-4 font-medium text-slate-600 dark:text-slate-400">
                  {rating} out of 5 stars
                </p>
              )}
            </div>

            {/* Feedback Text */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us what you think about ArabicMaster Pro..."
                required
                rows={6}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-slate-700 dark:text-white"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={rating === 0 || !feedback.trim()}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
          <p className="text-blue-900 dark:text-blue-100">
            💡 <strong>Your feedback matters!</strong> We read every submission and use it to improve ArabicMaster Pro.
          </p>
        </div>
      </div>
    </div>
  );
}
