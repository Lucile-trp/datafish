import { NavigationType } from "@/types/Navigation";
import Link from "next/link";

export const Navigation = (navigation: NavigationType) => {
  return (
    <nav className="flex flex-row gap-7 text-white">
      {Object.entries(navigation).map((item, i) => {
        return (
          <Link
            key={i}
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
