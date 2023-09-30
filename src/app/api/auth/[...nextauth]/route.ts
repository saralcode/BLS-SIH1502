import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'
import connectMongo from '../../../../backend/connection/connection'
import NextAuth from "next-auth/next";

import { NextAuthOptions } from "next-auth";



import { User } from "next-auth/core/types";




const predefinedUsers: User[] = [
  { id: "000000000000000000000000", name: "Sonu Kumar", email: "sonukumarrasda@gmail.com" }
]


async function validateUser({ email }: { email: string, }): Promise<User | null> {
  const user = predefinedUsers.find((u) => u.email == email);

  if (user != undefined) {
    return user;

  }
  return null;
  // return false;


}


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile: async (profile: GoogleProfile, tokens) => {
        const user = await validateUser({ email: profile.email });
        if (user) {
          return user;
        }
        return { id: "0", }
        // throw new Error("CredentialsSignin");
      },

    }),

  ],

  theme: {

    logo: "/logo/logo.png",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user.id == "0") {
        throw new Error("AccessDenied");
      }
      // return true;
      return true;
    },
    jwt: async ({ token, user, profile, account }) => {

      if (user != undefined && user) {
        token.id = user.id;
      }
      return token;

    },
    session: ({ session, token, user }) => {
      // console.log("==================== Session ==================")

      if (session.user) {
        session.user.id = token.id!;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.name = token.name;

      }

      return session;
    },

  },

  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
