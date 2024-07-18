import { NavigationType } from "@/types/Navigation";
import Link from "next/link";

export const NavigationBar = (navigation: NavigationType) => {
  return (
    <nav className="md:flex flex-row gap-7 text-white hidden">
      {Object.entries(navigation).map((item, i) => {
        return (
          <Link
            key={item[1].title as string}
            href={`${item[1].href}`}
            className="h-6 hover:border-b hover:border-white "
          >
            {item[1].title}
          </Link>
        );
      })}
    </nav>
  );
};
