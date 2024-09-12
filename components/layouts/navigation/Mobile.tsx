import { NavigationType } from "@/types/Navigation";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { useState } from "react";

export const MobileMenuNavigation = ({
  navigation,
}: {
  navigation: NavigationType;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="inline-flex text-white items-center md:hidden">
      <button
        className="inline-flex items-center md:hidden gap-x-3"
        onClick={toggleMenu}
      >
        <span className="sr-only">Ouvrir le menu</span>
        {!isMenuOpen ? (
          <>
            <span className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 btn__colors">
              <MenuAlt1Icon className="w-8 h-8" />
            </span>
          </>
        ) : (
          <span className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 btn__colors">
            <XIcon className="w-8 h-8" />
          </span>
        )}
      </button>
      {isMenuOpen ? <MobileMenuPanel navigation={navigation} /> : null}
    </div>
  );
};

const MobileMenuPanel = ({ navigation }: { navigation: NavigationType }) => {
  const { data: session } = useSession();
  const isAuthenticated = !!session;

  return (
    <div className="absolute bg-white/90 top-24 border-1 left-0 rounded w-full h-fit text-black">
      <nav className="flex flex-col mx-8 my-4">
        {navigation
          .filter((item) => {
            // Filtrer les éléments en fonction de l'état de connexion
            if (item.requiresAuth && !isAuthenticated) return false; // Exclure pour les non-connectés
            if (item.requiresNoAuth && isAuthenticated) return false; // Exclure pour les connectés
            return true;
          })
          .map((item, i) => {
            return (
              <div key={i} className="m-1 flex flex-col">
                <Link href={item.href} className="h-6 m-3">
                  {item.title}
                </Link>
                <div className="divider-solid border-t-black" />
              </div>
            );
          })}
      </nav>
    </div>
  );
};
