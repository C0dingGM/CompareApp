import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUser, verifyPassword } from "./userStore";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = (credentials?.username as string | undefined)?.trim();
        const password = credentials?.password as string | undefined;
        if (!username || !password) return null;
        const user = await findUser(username);
        if (user && verifyPassword(password, user)) {
          return { id: user.username, name: user.username } as any;
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/signin" },
  secret: process.env.NEXTAUTH_SECRET,
};
