import { NavigationType } from "@/types/Navigation";
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';

import { useState } from "react";

export const MobileMenuNavigation = (navigation: NavigationType) => {
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
      {isMenuOpen ? <MobileMenuPanel /> : null}
    </div>
  );
};

const MobileMenuPanel = () => {
   return (
    <div className=" ">
     <h1 className="absolute bg-white  top-24 opacity-10 border-1 rounded right-8 w-2/3">Menu open</h1>
    </div>
   )
}
