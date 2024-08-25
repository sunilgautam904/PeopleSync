import axios from "axios";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const nextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await axios.post(
          "http://localhost:3000/api/auth/login",
          credentials,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        if (res.status === 200) {
            console.log('response', res.data);
          // Return the user object
          return res.data.data;
        } else {
          throw new Error("Login failed");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Attach user to the token if it exists
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach user from token to session
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  secret: 'NEXTAUTH_SECRET',
  debug: true,
  pages: {
    signIn: "/sign-in",
  },
} satisfies NextAuthOptions;

export default nextAuthOptions;
