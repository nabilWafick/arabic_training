/**
 * POST /api/admin/users/[id]/role
 * Change user role (ADMIN or USER)
 *
 * Body: { role: 'ADMIN' | 'USER' }
 * Response: { success: boolean, message: string }
 */

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { requireAdminSession, logAdminAction } from "../../../helpers";
import { z } from "zod";

const RoleSchema = z.object({
  role: z.enum(["ADMIN", "USER"]),
});

type RoleRequest = z.infer<typeof RoleSchema>;

export async function POST(
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
    let body: RoleRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const validation = RoleSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Role must be 'ADMIN' or 'USER'" },
        { status: 400 }
      );
    }

    const { role } = validation.data;

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

    // Prevent removing last admin
    if (user.role === "ADMIN" && role === "USER") {
      const adminCount = await prisma.user.count({
        where: { role: "ADMIN" },
      });

      if (adminCount <= 1) {
        return NextResponse.json(
          { error: "Cannot remove role from the last admin user" },
          { status: 409 }
        );
      }
    }

    // Update user role
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role },
    });

    // Log admin action
    logAdminAction(session!.user!.id, "CHANGE_ROLE", userId, {
      email: user.email,
      oldRole: user.role,
      newRole: role,
    });

    return NextResponse.json(
      {
        success: true,
        message: `User role updated from ${user.role} to ${role}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[POST /api/admin/users/:id/role] Error:", error);
    return NextResponse.json(
      { error: "Failed to update user role" },
      { status: 500 }
    );
  }
}
