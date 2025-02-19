import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div className="h-[65px] lg:h-[150px] px-[80px] w-full flex items-center justify-between bg-gradient-to-b from-black/0 via-black/0 to-black/5 lg:bg-none ">
      <div className="flex gap-5 items-center h-full items-center">
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
          <ul className="flex gap-3">
            <li>
              <Link href="#">Datavisualisation</Link>
            </li>
            <li>
              <Link href="/encyclopedia" className="">
                Encyclopédie
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
