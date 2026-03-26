"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mail size={32} />
            <h1 className="text-4xl font-bold">{t("contact")}</h1>
          </div>
          <p className="text-pink-100 text-lg">Get in touch with our support team</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={24} className="text-pink-600" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Email</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">support@arabicmaster.com</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone size={24} className="text-pink-600" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Phone</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={24} className="text-pink-600" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Location</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">Available 24/7 Online</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
