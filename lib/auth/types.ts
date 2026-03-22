import { type DefaultSession } from "next-auth";

/**
 * Extended session user type with custom properties
 */
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
  }

  interface JWT {
    role?: string;
  }
}
