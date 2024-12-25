import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_SECRET || "",
    }),
    Credentials({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        try {
          console.log("test");
          const { email, password } = credentials as {
            email: string;
            password: string;
          };
          console.log("email", email);
          console.log("password", password);

          if (email !== "ismayil@gmail.com" || password !== "qwerty123") {
            throw new Error("You entered wrong email or password");
          }

          return {
            id: "123",
            name: "Ismayil",
            email: "ismayil@gmail.com",
            avatar: "url to avatar",
          };
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
    signOut: "/auth/signOut",
  },
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
