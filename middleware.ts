// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { JWT } from "next-auth";

// Fonction middleware
export async function middleware(req: NextRequest) {
  // Obtenir le token JWT pour vérifier si l'utilisateur est connecté
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("Middleware log :", token);
  // L'URL actuelle que l'utilisateur essaie d'accéder
  const { pathname } = req.nextUrl;

  const role = token ? (token as JWT).role : null;

  // Vérifie si l'utilisateur est connecté
  const isLoggedIn = !!token;

  // VERIFICATION DE CONNEXIONS
  // Routes non accessible aux utilisateurs connectés
  if (isLoggedIn && pathname.startsWith("/auth")) {
    // Redirige l'utilisateur connecté vers l'acceuil
    return NextResponse.redirect(new URL("/user", req.url));
  }

  // Routes non accessible aux utilisateurs non connectés
  if (!isLoggedIn && pathname.startsWith("/user")) {
    // Redirige l'utilisateur non connecté vers la Home page
    return NextResponse.redirect(new URL("/", req.url));
  }

  // VERIFICATION DE ROLES
  if (!isLoggedIn && role !== "ADMIN" && pathname.startsWith("/admin")) {
    // Redirige l'utilisateur non connecté vers la Home page
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Laisser passer toutes les autres requêtes
  return NextResponse.next();
}

// Configuration pour définir les routes protégées ou publiques
export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"], // Routes surveillées par le middleware
};
