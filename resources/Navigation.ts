import { NavigationType } from "@/types/Navigation";

export const navigation: NavigationType = [
    {
      title: "Datavisualisation",
      href: "/",
      children: [],
    },
    {
      title: "Encyclopédie",
      href: "/encyclopedie/",
      children: [],
    },
    {
      title: "Informations",
      href: "/informations",
      children: [
        {
          title: "Nous contacter",
          href: "/",
        },
      ],
    },
    {
      title: "Se connecter",
      href: "/auth/login",
      children: [],
    },
    {
      title: "S'inscrire",
      href: "/auth/register",
      children: [],
    },
  ];