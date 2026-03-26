import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth/config";

/**
 * Admin middleware - validates authentication and admin role
 */
export async function requireAdminSession() {
  const session = await auth();

  if (!session) {
    return {
      error: NextResponse.json(
        { error: "Unauthorized: Authentication required" },
        { status: 401 }
      ),
      session: null,
    };
  }

  if (session.user?.role !== "ADMIN") {
    return {
      error: NextResponse.json(
        { error: "Forbidden: Admin access required" },
        { status: 403 }
      ),
      session: null,
    };
  }

  return { error: null, session };
}

/**
 * Pagination params schema
 */
const PaginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1).catch(1),
  limit: z.coerce.number().int().positive().max(100).default(20).catch(20),
  sort: z.string().default("createdAt"),
  order: z.enum(["asc", "desc"]).default("desc"),
});

export type PaginationParams = z.infer<typeof PaginationSchema>;

/**
 * Extract and validate pagination params from query string
 */
export function getPaginationParams(
  searchParams: Record<string, string | string[] | undefined>
): PaginationParams {
  const params = {
    page: Array.isArray(searchParams.page)
      ? searchParams.page[0]
      : searchParams.page,
    limit: Array.isArray(searchParams.limit)
      ? searchParams.limit[0]
      : searchParams.limit,
    sort: Array.isArray(searchParams.sort)
      ? searchParams.sort[0]
      : searchParams.sort,
    order: Array.isArray(searchParams.order)
      ? searchParams.order[0]
      : searchParams.order,
  };

  const result = PaginationSchema.safeParse(params);
  if (!result.success) {
    return PaginationSchema.parse({});
  }

  return result.data;
}

/**
 * Format pagination response
 */
export function formatPaginationResponse<T>(
  items: T[],
  total: number,
  page: number,
  limit: number
) {
  const pages = Math.ceil(total / limit);
  return {
    items,
    total,
    page,
    limit,
    pages,
  };
}

/**
 * Format user response with stats
 */
export function formatUserResponse(user: any) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    banned: user.banned,
    banReason: user.banReason,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    lastLogin: user.lastLogin,
    stats: user.stats
      ? {
          xp: user.stats.xp,
          level: user.stats.level,
          streak: user.stats.streak,
          longestStreak: user.stats.longestStreak,
          totalTimeSpent: user.stats.totalTimeSpent,
          lessonsCompleted: user.stats.lessonsCompleted,
          exercisesCompleted: user.stats.exercisesCompleted,
          perfectScores: user.stats.perfectScores,
          wordsLearned: user.stats.wordsLearned,
        }
      : null,
  };
}

/**
 * Calculate seconds to readable time format
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  }
  return `${secs}s`;
}

/**
 * Log admin action for audit trail
 */
export function logAdminAction(
  adminId: string,
  action: string,
  targetId: string,
  details?: Record<string, any>
) {
  const timestamp = new Date().toISOString();
  const log = {
    timestamp,
    adminId,
    action,
    targetId,
    details,
  };
  console.log("[ADMIN_ACTION]", JSON.stringify(log));
  return log;
}
