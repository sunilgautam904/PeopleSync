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
        if (credentials === null) return null;
        try {
          const res = await fetch(`http://localhost:3000/api/auth/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          if (!res.ok) {
            return null;
          }
          const { data } = await res.json();
          // console.log("parsedResponse", data);

          const accessToken = data.accessToken;
          const refreshToken = data.refreshToken;
          const name = data?.name;

          console.log(refreshToken);
          return {
            accessToken,
            refreshToken,
            name,
          };
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: any;
      account: any;
      user: any;
    }) {
      console.log(`In jwt callback - Token isa ${user})}`);

      // Attach user to the token if it exists
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken as string,
        refreshToken: token.refreshToken as string,
        name: token.name as string,
      };
console.log('session((((', session);
      return session;
    },
  },
  secret: "NEXTAUTH_SECRET",
  debug: true,
  pages: {
    signIn: "/sign-in",
  },
} satisfies NextAuthOptions;

export default nextAuthOptions;
