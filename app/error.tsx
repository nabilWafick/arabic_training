'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Copy, RotateCcw, Home, ChevronDown } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');

  useEffect(() => {
    // Format error information
    const info = `
Error: ${error.message}
${error.stack || 'No stack trace available'}
Digest: ${error.digest || 'N/A'}
Timestamp: ${new Date().toISOString()}
    `.trim();
    setErrorInfo(info);
  }, [error]);

  const handleCopyError = async () => {
    try {
      await navigator.clipboard.writeText(errorInfo);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f3ea] via-white to-[#f8f3ea] p-4">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a85c] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse duration-7000"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse duration-9000"></div>

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <Card className="border-red-200/50 bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader className="border-b border-red-100/50 bg-gradient-to-r from-red-50/50 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-100/50">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <CardTitle className="text-2xl text-[#0d1b2a]">
                  خطأ غير متوقع
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  An unexpected error occurred
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6 pb-6 space-y-6">
            {/* Error message */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-red-900 mb-2">
                Error Message:
              </p>
              <p className="text-sm text-red-800 break-words font-mono">
                {error.message || 'An unknown error occurred'}
              </p>
            </div>

            {/* Stack trace (collapsible) */}
            <div className="space-y-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 w-full px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 text-left text-sm font-medium text-gray-700"
              >
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
                Technical Details
              </button>

              {isExpanded && (
                <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 max-h-60 overflow-auto">
                  <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap break-words">
                    {error.stack || 'No stack trace available'}
                  </pre>
                </div>
              )}
            </div>

            {/* Error info display */}
            <div className="hidden">
              <p className="text-xs text-gray-500">{errorInfo}</p>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
              <Button
                onClick={handleCopyError}
                variant="outline"
                className="border-[#c9a85c] text-[#c9a85c] hover:bg-[#c9a85c]/10 font-semibold py-6 rounded-lg transition-all duration-300"
                size="lg"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copied ? 'تم النسخ' : 'نسخ معلومات الخطأ'}
              </Button>

              <Button
                onClick={reset}
                className="bg-[#c9a85c] hover:bg-[#b8925c] text-white font-semibold py-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                size="lg"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                حاول مجدداً
              </Button>
            </div>

            {/* Additional help */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 mb-3">
                <span className="font-semibold">ماذا يمكنك أن تفعل؟</span>
              </p>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• جرّب تحديث الصفحة</li>
                <li>• امسح ذاكرة التخزين المؤقت والملفات</li>
                <li>• حاول من متصفح مختلف</li>
                <li>• أبلغنا عن المشكلة إذا استمرت</li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex gap-2 pt-2">
              <Link href="/" className="flex-1">
                <Button
                  variant="ghost"
                  className="w-full text-[#0d1b2a] hover:bg-[#0d1b2a]/5 font-semibold py-6 rounded-lg transition-all duration-300"
                  size="lg"
                >
                  <Home className="w-4 h-4 mr-2" />
                  الصفحة الرئيسية
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Subtle pattern decoration */}
        <div className="mt-6 flex justify-center gap-2 opacity-50">
          <div className="w-2 h-2 rounded-full bg-[#c9a85c]"></div>
          <div className="w-2 h-2 rounded-full bg-[#0d1b2a]"></div>
          <div className="w-2 h-2 rounded-full bg-[#c9a85c]"></div>
        </div>
      </div>
    </div>
  );
}
