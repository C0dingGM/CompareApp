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
        if (!username || !password) {
          throw new Error("Please provide both username and password");
        }
        const user = await findUser(username);
        if (!user) {
          throw new Error("No user found with this username");
        }
        if (!verifyPassword(password, user)) {
          throw new Error("Incorrect password");
        }
        return { id: user.username, name: user.username } as any;
      },
    }),
  ],
  pages: { signIn: "/signin" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn() {
      return true;
    },
  },
};
