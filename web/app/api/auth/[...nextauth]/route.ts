import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const username = credentials?.username as string | undefined;
        const password = credentials?.password as string | undefined;
        if (username === "demo" && password === "demo") {
          return { id: "demo", name: "Demo User", email: "demo@example.com" } as any;
        }
        return null;
      }
    })
  ],
  pages: { signIn: "/signin" },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
