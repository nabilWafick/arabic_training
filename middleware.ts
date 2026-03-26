import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

/**
 * Middleware for protecting admin API routes
 * - Checks admin access on /api/admin/* routes using JWT token
 * - Page routes (/admin) are protected via NextAuth's authorized() callback
 * Note: i18n is handled client-side via Zustand + next-intl provider
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect API admin routes here (middleware can't use auth() which needs Prisma)
  // Page routes are protected by NextAuth's authorized() callback in config
  const isAdminApiRoute = pathname.startsWith('/api/admin/');

  if (isAdminApiRoute) {
    const token = await getToken({ 
      req: request, 
      secret: process.env.AUTH_SECRET 
    });

    // Not authenticated
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized: Authentication required' },
        { status: 401 }
      );
    }

    // Not an admin
    if (token.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Forbidden: Admin access required' },
        { status: 403 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  // Run middleware on API admin routes only
  // Page routes handled by NextAuth's authorized callback
  matcher: ['/api/admin/:path*'],
};
