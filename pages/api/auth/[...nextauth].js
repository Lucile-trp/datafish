import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { passwordVerify } from "@/lib/bcypt";
import prisma from "@/lib/prisma";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            throw new Error("Utilisateur non trouvé");
          }

          // Vérification mot de passe
          const isMatch = await passwordVerify(
            credentials.email,
            credentials.password,
            user
          );

          if (!isMatch) {
            throw new Error("Mot de passe incorrect");
          }

          // Retourne l'utilisateur si tout est correct
          return { id: user._id, name: user.name, username: user.pseudo };
        } catch (error) {
          console.error("Erreur lors de la connexion", error);
        }
      },
    }),
  ],
  pages: {
    signIn: "auth/login",
  },
  session: {
    jwt: true,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("youpiii");
      return true;
    },
  },
};

export default NextAuth(authOptions);
