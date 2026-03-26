/**
 * GET /api/admin/analytics
 * Return platform-wide analytics
 *
 * Response:
 * {
 *   totalUsers: number,
 *   activeToday: number,
 *   newThisWeek: number,
 *   lessonsCompleted: number,
 *   avgCompletionRate: number,
 *   totalXPAwarded: number,
 *   avgSessionTime: string,
 *   retention7Day: number,
 *   topPhases: Array<{ phaseId: number, usersStarted: number, usersCompleted: number }>
 * }
 */

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { requireAdminSession, formatDuration } from "../helpers";

export async function GET() {
  try {
    // Verify admin session
    const { error } = await requireAdminSession();
    if (error) return error;

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Fetch all analytics data in parallel
    const [
      totalUsers,
      activeToday,
      newThisWeek,
      allStats,
      allProgress,
      topPhasesData,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: {
          lastLogin: {
            gte: today,
          },
        },
      }),
      prisma.user.count({
        where: {
          createdAt: {
            gte: oneWeekAgo,
          },
        },
      }),
      prisma.userStats.findMany(),
      prisma.progress.findMany({
        where: {
          completed: true,
        },
      }),
      prisma.progress.groupBy({
        by: ["phaseId"],
        _count: true,
      }),
    ]);

    // Calculate aggregate stats
    const totalXPAwarded = allStats.reduce((sum, stat) => sum + stat.xp, 0);
    const totalTimeSpent = allStats.reduce((sum, stat) => sum + stat.totalTimeSpent, 0);
    const lessonsCompleted = allProgress.length;
    const avgSessionTime = formatDuration(
      totalTimeSpent / Math.max(allStats.length, 1)
    );

    // Calculate completion rate
    const uniqueUsers = new Set(allProgress.map((p) => p.userId)).size;
    const totalPossibleCompletions = totalUsers * 5; // Assuming 5 phases
    const avgCompletionRate = Math.round(
      (lessonsCompleted / Math.max(totalPossibleCompletions, 1)) * 100
    );

    // Calculate 7-day retention (users active in both this week and last week)
    const usersActiveLastWeek = await prisma.user.findMany({
      where: {
        lastLogin: {
          gte: new Date(oneWeekAgo.getTime() - 7 * 24 * 60 * 60 * 1000),
          lte: oneWeekAgo,
        },
      },
      select: { id: true },
    });

    const usersActiveThisWeek = await prisma.user.findMany({
      where: {
        lastLogin: {
          gte: oneWeekAgo,
        },
      },
      select: { id: true },
    });

    const lastWeekIds = new Set(usersActiveLastWeek.map((u) => u.id));
    const thisWeekIds = new Set(usersActiveThisWeek.map((u) => u.id));
    const retention = usersActiveThisWeek.filter((u) =>
      lastWeekIds.has(u.id)
    ).length;
    const retention7Day = Math.round(
      (retention / Math.max(usersActiveLastWeek.length, 1)) * 100
    );

    // Get top phases data
    const topPhases = topPhasesData
      .sort((a, b) => b._count - a._count)
      .slice(0, 5)
      .map((p) => ({
        phaseId: p.phaseId,
        usersStarted: p._count,
        usersCompleted: allProgress.filter(
          (prog) => prog.phaseId === p.phaseId && prog.completed
        ).length,
      }));

    return NextResponse.json(
      {
        totalUsers,
        activeToday: activeToday || 0,
        newThisWeek: newThisWeek || 0,
        lessonsCompleted,
        avgCompletionRate,
        totalXPAwarded,
        avgSessionTime,
        retention7Day: retention7Day || 0,
        topPhases,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[GET /api/admin/analytics] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
