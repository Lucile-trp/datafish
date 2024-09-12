import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { passwordVerify } from "@/lib/bcypt";
import prisma from "@/lib/prisma";

export const authOptions = {
  debug: true,
  // Configuration des providers
  providers: [
    // EMAIL / MDP
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        //TODO GESTION DES ERREURS
        if (credentials.email == null || credentials.password == null) {
          throw new Error("Champs manquants");
        }

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
            credentials.password,
            user.password
          );

          if (!isMatch) {
            throw new Error("Mot de passe incorrect");
          }

          // Retourne l'utilisateur si tout est correct
          return { id: user.id, email: user.email, username: user.pseudo };
        } catch (error) {
          return error;
        }
      },
    }),
  ],
  pages: {
    signIn: "auth/login",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
  callbacks: {
    // gestion du JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    // Callback pour inclure des infos supplémentaires dans la session côté client
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
        session.email = token.email;
      }
      return session;
    },
    // Callback de connexion
    async signIn({ user, account, profile, email, credentials }) {
      console.log("probleme ?")
      return true;
    },
  },

  cookies: {
    sessionToken: {
      name:
        process.env.NODE_ENV === "production"
          ? "__Secure-next-auth.session-token"
          : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production", // Assurez-vous que le cookie est sécurisé en production
      },
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
