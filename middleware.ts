import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/auth/config';

/**
 * Middleware for protecting admin routes
 * - Checks admin access on /admin pages and /api/admin/* routes
 * - Redirects unauthorized users
 * Note: i18n is handled client-side via Zustand + next-intl provider
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if this is an admin route
  const isAdminPageRoute = pathname.startsWith('/admin');
  const isAdminApiRoute = pathname.startsWith('/api/admin/');

  if (isAdminPageRoute || isAdminApiRoute) {
    const session = await auth();

    // Not authenticated
    if (!session) {
      if (isAdminApiRoute) {
        return NextResponse.json(
          { error: 'Unauthorized: Authentication required' },
          { status: 401 }
        );
      }
      return NextResponse.redirect(new URL('/auth/signin?callbackUrl=/admin', request.url));
    }

    // Not an admin
    if (session.user?.role !== 'ADMIN') {
      if (isAdminApiRoute) {
        return NextResponse.json(
          { error: 'Forbidden: Admin access required' },
          { status: 403 }
        );
      }
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Run middleware on admin routes only (page and API)
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
