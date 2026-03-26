/**
 * GET /api/admin/activity
 * Return recent user activity
 *
 * Query params:
 * - limit: number (default: 50, max: 500)
 * - type: lesson | achievement | level (optional, filter by activity type)
 *
 * Response: { activities: Activity[], total: number }
 * Activity: { userId: string, userName: string, action: string, timestamp: Date, details: object }
 */

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { requireAdminSession } from "../helpers";
import { z } from "zod";

const ActivityFilterSchema = z.object({
  limit: z.coerce.number().int().positive().max(500).default(50),
  type: z.enum(["lesson", "achievement", "level"]).optional(),
});

type ActivityFilter = z.infer<typeof ActivityFilterSchema>;

interface Activity {
  userId: string;
  userName: string;
  action: string;
  timestamp: Date;
  details: Record<string, any>;
}

export async function GET(request: NextRequest) {
  try {
    // Verify admin session
    const { error } = await requireAdminSession();
    if (error) return error;

    // Get filter params
    const searchParams = Object.fromEntries(request.nextUrl.searchParams);
    const parsedParams = {
      limit: typeof searchParams.limit === 'string' ? parseInt(searchParams.limit, 10) : undefined,
      type: typeof searchParams.type === 'string' ? searchParams.type : undefined,
    };

    const params = ActivityFilterSchema.safeParse(parsedParams);

    if (!params.success) {
      return NextResponse.json(
        { error: "Invalid query parameters" },
        { status: 400 }
      );
    }

    const { limit, type } = params.data;
    const activities: Activity[] = [];

    // Fetch different activity types
    if (!type || type === "lesson") {
      const recentLessons = await prisma.progress.findMany({
        orderBy: { updatedAt: "desc" },
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      recentLessons.forEach((lesson) => {
        activities.push({
          userId: lesson.userId,
          userName: lesson.user.name || "Unknown",
          action: lesson.completed ? "lesson_completed" : "lesson_started",
          timestamp: lesson.updatedAt,
          details: {
            phaseId: lesson.phaseId,
            lessonId: lesson.lessonId,
            score: lesson.score,
            timeSpent: lesson.timeSpent,
            attempts: lesson.attempts,
          },
        });
      });
    }

    if (!type || type === "achievement") {
      const recentAchievements = await prisma.userAchievement.findMany({
        orderBy: { unlockedAt: "desc" },
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      recentAchievements.forEach((achievement) => {
        activities.push({
          userId: achievement.userId,
          userName: achievement.user.name || "Unknown",
          action: "achievement_unlocked",
          timestamp: achievement.unlockedAt,
          details: {
            achievementId: achievement.achievementId,
          },
        });
      });
    }

    if (!type || type === "level") {
      // Get users who recently leveled up by checking level changes
      const recentStats = await prisma.userStats.findMany({
        orderBy: { updatedAt: "desc" },
        take: limit,
        where: {
          level: {
            gt: 1,
          },
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      recentStats.forEach((stat) => {
        activities.push({
          userId: stat.userId,
          userName: stat.user.name || "Unknown",
          action: "level_up",
          timestamp: stat.updatedAt,
          details: {
            level: stat.level,
            xp: stat.xp,
          },
        });
      });
    }

    // Sort all activities by timestamp (newest first)
    activities.sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    // Limit results
    const limitedActivities = activities.slice(0, limit);

    return NextResponse.json(
      {
        activities: limitedActivities,
        total: activities.length,
        limit,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[GET /api/admin/activity] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch activity" },
      { status: 500 }
    );
  }
}
