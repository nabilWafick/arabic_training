import { PrismaClient } from "@/prisma/generated/prisma/client/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * Prisma client singleton for Prisma 7+
 * Uses the PostgreSQL adapter with driver adapters pattern
 * In development, we use a global variable to preserve the client across hot reloads
 */
function createPrismaClient(): PrismaClient {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL || "postgresql://arabicmaster:arabicmaster_secret@localhost:5437/arabicmaster?schema=public",
  });
  
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
