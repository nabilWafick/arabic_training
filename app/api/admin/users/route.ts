/**
 * GET /api/admin/users
 * List all users with pagination
 *
 * Query params:
 * - page: number (default: 1)
 * - limit: number (default: 20, max: 100)
 * - sort: string (default: createdAt, options: createdAt, email, name, role)
 * - order: asc | desc (default: desc)
 *
 * Response: { users: User[], total: number, page: number, pages: number }
 */

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { requireAdminSession, getPaginationParams, formatUserResponse } from "../helpers";

const ALLOWED_SORT_FIELDS = ["createdAt", "email", "name", "role", "updatedAt"];

export async function GET(request: NextRequest) {
  try {
    // Verify admin session
    const { error, session } = await requireAdminSession();
    if (error) return error;

    // Get pagination params from URL
    const searchParams = Object.fromEntries(request.nextUrl.searchParams);
    const { page, limit, sort, order } = getPaginationParams(searchParams);

    // Validate sort field
    const sortField = ALLOWED_SORT_FIELDS.includes(sort) ? sort : "createdAt";

    // Calculate offset
    const offset = (page - 1) * limit;

    // Query users with stats
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip: offset,
        take: limit,
        orderBy: {
          [sortField]: order,
        },
        include: {
          stats: true,
        },
      }),
      prisma.user.count(),
    ]);

    const formattedUsers = users.map(formatUserResponse);
    const pages = Math.ceil(total / limit);

    return NextResponse.json(
      {
        users: formattedUsers,
        total,
        page,
        pages,
        limit,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[GET /api/admin/users] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
