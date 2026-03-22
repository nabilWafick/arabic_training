import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, BookOpen, BarChart3 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f3ea] via-white to-[#f8f3ea] p-4">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a85c] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse duration-7000"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0d1b2a] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse duration-9000"></div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        <Card className="border-[#c9a85c]/20 bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="pt-12 pb-8 px-6 text-center">
            {/* 404 Text with animation */}
            <div className="mb-4">
              <div className="text-8xl font-bold bg-gradient-to-r from-[#c9a85c] to-[#0d1b2a] bg-clip-text text-transparent animate-bounce">
                404
              </div>
            </div>

            {/* Arabic text */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-3">
                الصفحة غير موجودة
              </h1>
              <p className="text-gray-600 text-lg font-medium">
                Page Not Found
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-500 mb-8 leading-relaxed">
              عذراً، الصفحة التي تبحث عنها غير متوفرة. لم نتمكن من العثور على المحتوى المطلوب.
            </p>

            {/* Action buttons */}
            <div className="space-y-3">
              <Link href="/" className="block">
                <Button 
                  className="w-full bg-[#c9a85c] hover:bg-[#b8925c] text-white font-semibold py-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                  size="lg"
                >
                  <Home className="w-5 h-5 mr-2" />
                  العودة للصفحة الرئيسية
                </Button>
              </Link>

              <Link href="/learn" className="block">
                <Button 
                  variant="outline"
                  className="w-full border-[#c9a85c] text-[#c9a85c] hover:bg-[#c9a85c]/10 font-semibold py-6 rounded-lg transition-all duration-300"
                  size="lg"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  ابدأ التعلم
                </Button>
              </Link>

              <Link href="/dashboard" className="block">
                <Button 
                  variant="ghost"
                  className="w-full text-[#0d1b2a] hover:bg-[#0d1b2a]/5 font-semibold py-6 rounded-lg transition-all duration-300"
                  size="lg"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  لوحة التحكم
                </Button>
              </Link>
            </div>

            {/* Decorative element */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-400">
                أو اتصل بنا إذا كنت تعتقد أن هذا خطأ
              </p>
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
