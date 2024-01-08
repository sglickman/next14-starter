import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { sql } from "@vercel/postgres";
import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("callback");
      console.log(user, account, profile);
      if (account?.provider === "google") {
        try {
          const res = await sql`
            SELECT contest_users.*, contest_emails.*
            FROM contest_users
              INNER JOIN contest_emails
              ON contest_users.id = contest_emails.user_id
            WHERE LOWER(contest_emails.email) = LOWER(${user.email})
          `;

          if (res.rowCount === 0) {
            if (!user || !profile) {
              return false;
            }
            // Create a new user.
            const shortname = profile.given_name;
            const name = profile.name;
            const createUser = await sql`
              INSERT INTO contest_users (id, shortname, name)
              VALUES (DEFAULT, ${shortname}, ${name})
              RETURNING *
            `;
            const userId = createUser.rows[0].id;
            const email = user.email;
            const createEmail = await sql`
              INSERT INTO contest_emails (id, user_id, email)
              VALUES (DEFAULT, ${userId}, ${email})
            `;
            return true;
          }
        } catch (error) {
          console.log("Unable to authenticate user internally.");
          console.log(error);
          return false;
        }
      }
      return true;
    },
    async session({ session, user, token }) {
      try {
        const res = await sql`
          SELECT contest_users.*
          FROM contest_users
            INNER JOIN contest_emails
            ON contest_users.id = contest_emails.user_id
          WHERE LOWER(contest_emails.email) = LOWER(${session?.user?.email})
        `;
        if (res.rowCount === 0) {
          throw new Error("Unable to find user.");
        }
        const userId = res.rows[0].id;
        const shortname = res.rows[0].shortname;
        if (session?.user) {
          session.user.id = userId;
          session.user.name = shortname;
        }
        return session;
      } catch (err) {
        console.log("Error getting session: ", err);
        throw err;
      }
    },
    ...authConfig.callbacks,
  },
});
