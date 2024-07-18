import { NavigationType } from "@/types/Navigation";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";

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
      {isMenuOpen ? <MobileMenuPanel {...navigation} /> : null}
    </div>
  );
};

const MobileMenuPanel = (navigation: NavigationType) => {
  return (
    <div className="absolute bg-white/90 top-24 border-1 left-0 rounded w-full h-fit text-black">
      <nav className="flex flex-col mx-8 my-4">
        {Object.entries(navigation).map((item, i) => {
          return (
            <div key={i} className="m-1 flex flex-col">
              <Link
                key={item[1].title as string}
                href={`${item[1].href}`}
                className="h-6 m-3"
              >
                {item[1].title}
              </Link>
              <div className="divider-solid border-t-black " />
            </div>
          );
        })}
      </nav>
    </div>
  );
};
