import { NavigationType } from "@/types/Navigation";

export const navigation: NavigationType = [
  {
    title: "Datavisualisation",
    href: "/",
    children: [],
    requiresAuth: false, // Visible pour tous
    requiresNoAuth: false, // Visible pour tous
  },
  {
    title: "Encyclopédie",
    href: "/encyclopedie/",
    children: [],
    requiresAuth: false, // Visible pour tous
    requiresNoAuth: false, // Visible pour tous
  },
  {
    title: "Informations",
    href: "/informations",
    children: [
      {
        title: "Nous contacter",
        href: "/",
        requiresAuth: false, // Visible pour tous
        requiresNoAuth: false, // Visible pour tous
      },
    ],
    requiresAuth: false, // Visible pour tous
    requiresNoAuth: false, // Visible pour tous
  },
  {
    title: "Se connecter",
    href: "/auth/login",
    children: [],
    requiresAuth: false, // Visible uniquement pour les utilisateurs non connectés
    requiresNoAuth: true,
  },
  {
    title: "S'inscrire",
    href: "/auth/register",
    children: [],
    requiresAuth: false, // Visible uniquement pour les utilisateurs non connectés
    requiresNoAuth: true,
  },
  {
    title: "Déconnexion",
    href: "/auth/logout",
    children: [],
    requiresAuth: true, // Visible uniquement pour les utilisateurs connectés
    requiresNoAuth: false,
  },
];
