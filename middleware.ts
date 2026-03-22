import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for handling requests
 * Note: i18n is handled client-side via Zustand + next-intl provider
 */
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // Don't run middleware on static files, API routes, or _next
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
