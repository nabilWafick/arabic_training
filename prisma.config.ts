// Prisma configuration for Prisma 7+
// This file configures database connections for migrations

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL || "postgresql://arabicmaster:arabicmaster_secret@localhost:5437/arabicmaster?schema=public",
  },
});
