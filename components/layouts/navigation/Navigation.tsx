import { NavigationType } from "@/types/Navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

// Le composant récupère directement l'état de la session via `useSession`
export const NavigationBar = ({
  navigation,
}: {
  navigation: NavigationType;
}) => {
  // Utilisation de `useSession` pour vérifier si l'utilisateur est connecté
  const { data: session } = useSession();
  const isAuthenticated = !!session; // Si la session existe, l'utilisateur est connecté

  const handleLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/", // Rediriger vers la page d'accueil après la déconnexion
    });
  };

  return (
    <nav className="md:flex flex-row gap-7 text-white hidden">
      {navigation
        // Filtrer en fonction de l'état d'authentification
        .filter((item) => {
          if (item.requiresAuth && !isAuthenticated) return false; // Ne pas afficher pour les non-connectés
          if (item.requiresNoAuth && isAuthenticated) return false; // Ne pas afficher pour les connectés
          return true;
        })
        .map((item) => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className="h-6 hover:border-b hover:border-white"
            >
              {item.title}
            </Link>
          );
        })}
        {isAuthenticated && (
        <button onClick={handleLogout} className="h-6 hover:border-b hover:border-white">
          Se déconnecter
        </button>
      )}
    </nav>
  );
};
