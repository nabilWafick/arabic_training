import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/config";
import { Navbar, Footer } from "@/components/layout";
import AdminDashboardContent from "@/components/admin/AdminDashboardContent";

/**
 * Admin Dashboard - Overview of platform metrics and user management
 * Server component that enforces role-based access control
 */
export default async function AdminDashboardPage() {
  // Check authentication and admin role
  const session = await auth();

  if (!session) {
    redirect("/auth/signin?callbackUrl=/admin");
  }

  if (session.user?.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 p-6 lg:p-8">
        <AdminDashboardContent />
      </main>
      <Footer />
    </div>
  );
}
