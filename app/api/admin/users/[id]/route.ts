/**
 * GET /api/admin/users/[id]
 * Get a single user by ID
 *
 * Response: { user: User }
 *
 * DELETE /api/admin/users/[id]
 * Delete a user by ID
 *
 * Response: { success: boolean, message: string, deleted: boolean }
 *
 * PUT /api/admin/users/[id]
 * Ban/unban a user
 *
 * Body: { banned: boolean, reason?: string }
 * Response: { success: boolean, message: string }
 */

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { requireAdminSession, formatUserResponse, logAdminAction } from "../../helpers";
import { z } from "zod";

const BanSchema = z.object({
  banned: z.boolean(),
  reason: z.string().optional(),
});

type BanRequest = z.infer<typeof BanSchema>;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await params;

    // Verify admin session
    const { error, session } = await requireAdminSession();
    if (error) return error;

    // Validate ID format
    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        { error: "Invalid user ID" },
        { status: 400 }
      );
    }

    // Fetch user
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        stats: true,
        progress: {
          select: { completed: true },
        },
        achievements: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const formattedUser = formatUserResponse(user);
    return NextResponse.json(
      { user: formattedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("[GET /api/admin/users/:id] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await params;

    // Verify admin session
    const { error, session } = await requireAdminSession();
    if (error) return error;

    // Validate ID format
    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        { error: "Invalid user ID" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Check if trying to delete last admin
    if (user.role === "ADMIN") {
      const adminCount = await prisma.user.count({
        where: { role: "ADMIN" },
      });

      if (adminCount <= 1) {
        return NextResponse.json(
          { error: "Cannot delete the last admin user" },
          { status: 409 }
        );
      }
    }

    // Delete user (cascade deletes related records)
    await prisma.user.delete({
      where: { id: userId },
    });

    // Log admin action
    logAdminAction(session!.user!.id, "DELETE_USER", userId, {
      email: user.email,
      name: user.name,
    });

    return NextResponse.json(
      {
        success: true,
        message: `User ${user.email} deleted successfully`,
        deleted: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[DELETE /api/admin/users/:id] Error:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await params;

    // Verify admin session
    const { error, session } = await requireAdminSession();
    if (error) return error;

    // Validate ID format
    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        { error: "Invalid user ID" },
        { status: 400 }
      );
    }

    // Parse and validate request body
    let body: BanRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const validation = BanSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const { banned, reason } = validation.data;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        banned,
        banReason: banned ? reason || null : null,
      },
    });

    // Log admin action
    logAdminAction(session!.user!.id, banned ? "BAN_USER" : "UNBAN_USER", userId, {
      email: user.email,
      reason,
    });

    return NextResponse.json(
      {
        success: true,
        message: `User ${banned ? "banned" : "unbanned"} successfully`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[PUT /api/admin/users/:id] Error:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
