import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div className="absolute h-[65px] md:h-[150px] px-[80px] w-full flex justify-between mt-12">
      <div className="flex gap-5 h-full">
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
          <ul className="gap-2 h-full text-white/20 flex flex-col items-end">
            <li>
              <Link href="#" className="text-lg hover:text-white transition duration-300 ease-in-out">Datavisualisation</Link>
            </li>
            <li>
              <Link href="/encyclopedia" className=" text-lg hover:text-white transition duration-300 ease-in-out">
                Encyclopédie
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg hover:text-white transition duration-300 ease-in-out">
                Connexion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
