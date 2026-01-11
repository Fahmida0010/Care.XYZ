import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const authOptions = {
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("care_xyz");

        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (!user) return null;

        const match = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!match) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role:user.role || "user",
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
      async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role || "user";
      }
      return token;
    },

    // Add role to session so client can access
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const client = await clientPromise;
        const db = client.db("care_xyz");

        const exists = await db
          .collection("users")
          .findOne({ email: user.email });

        if (!exists) {
          await db.collection("users").insertOne({
            name: user.name,
            email: user.email,
            provider: "google",
            role: "user",
            createdAt: new Date(),
          });
        }
         else {
          user.role = exists.role || "user";
        }
      }
      return true;
    },
  },

  pages: {
    signIn: "/login",
  },

};

 export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
 

 