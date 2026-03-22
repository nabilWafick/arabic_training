'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Home } from 'lucide-react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f3ea] via-white to-[#f8f3ea] p-4 font-sans">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a85c] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="relative z-10 w-full max-w-lg mx-auto">
          <Card className="border-red-300/50 bg-white/90 backdrop-blur-sm shadow-2xl">
            <CardContent className="pt-8 pb-8 px-6 text-center">
              {/* Critical error icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-red-100/50 border-2 border-red-200">
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                </div>
              </div>

              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-2">
                  خطأ حرج
                </h1>
                <p className="text-gray-600 font-medium">
                  Critical System Error
                </p>
              </div>

              {/* Error description */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-900 font-mono break-words">
                  {error.message || 'An unexpected critical error occurred'}
                </p>
              </div>

              {/* Message */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                حدث خطأ حرج في النظام. يرجى محاولة إعادة تحميل الصفحة أو العودة للصفحة الرئيسية.
              </p>

              {/* Error digest if available */}
              {error.digest && (
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 mb-6 text-left">
                  <p className="text-xs text-gray-600 font-mono break-all">
                    <span className="font-semibold">Error ID:</span> {error.digest}
                  </p>
                </div>
              )}

              {/* Action buttons */}
              <div className="space-y-3">
                <Button
                  onClick={reset}
                  className="w-full bg-[#c9a85c] hover:bg-[#b8925c] text-white font-semibold py-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                  size="lg"
                >
                  حاول مجدداً
                </Button>

                <Link href="/" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-[#0d1b2a] text-[#0d1b2a] hover:bg-[#0d1b2a]/5 font-semibold py-6 rounded-lg transition-all duration-300"
                    size="lg"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    العودة للصفحة الرئيسية
                  </Button>
                </Link>
              </div>

              {/* Support message */}
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-xs text-gray-500">
                  إذا استمرت المشكلة، يرجى الاتصال بفريق الدعم
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inline styles for animations */}
        <style>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.15;
            }
          }
          
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </body>
    </html>
  );
}
