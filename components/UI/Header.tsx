"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const Header: React.FC = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <div className="absolute w-full flex justify-between mt-12 px-[120px]">
      <div className="flex gap-5 h-full items-center">
        <Link href="/">
          <Image
            src="/logo/logo-white.svg"
            alt="logo of datafish"
            width={60}
            height={10}
          ></Image>
        </Link>
        <div className="border-r border-white h-10 lg:h-16"></div>
        <div>
          <h1 className="text-4xl">Datafish</h1>
          <p className="test-xl hidden lg:block">
            Encyclopédie de la faune maritime
          </p>
        </div>
      </div>
      {/* NAVIGATION */}
      <div>
        <nav>
          <ul className="gap-2 h-full text-white/40 flex flex-col items-end">
            <li>
              <Link
                href="#"
                className="text-lg hover:text-white transition duration-300 ease-in-out"
              >
                Datavisualisation
              </Link>
            </li>
            <li>
              <Link
                href="/encyclopedia"
                className=" text-lg hover:text-white transition duration-300 ease-in-out"
              >
                Encyclopédie
              </Link>
            </li>
            <li>
              {status !== "authenticated" && (
                <Link
                  href="/auth/login"
                  className="text-lg hover:text-white transition duration-300 ease-in-out"
                >
                  Connexion
                </Link>
              )}
            </li>

            {status === "authenticated" && (
              <button
                onClick={handleLogout}
                className="text-lg hover:text-white transition duration-300 ease-in-out"
              >
                Deconnexion
              </button>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
