import { Logo } from "./logo_white";
import { NavigationBar } from "../layouts/navigation/Navigation";
import { MobileMenuNavigation } from "../layouts/navigation/Mobile";
import { navigation } from "@/resources/Navigation";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-row w-full p-8 items-center justify-between lg:px-32 lg:pt-8 ">
        <div className="flex items-center">
          <Logo className="h-[40px] lg:h-[80px] lg:w-[70px]"></Logo>
          <div className="hidden lg:block lg:h-10 lg:w-[1px] lg:bg-white lg:mx-5"></div>
          <h1 className="text-white font-bold text-2xl">Datafish</h1>
        </div>
        <div className="flex">
          <NavigationBar navigation={navigation}></NavigationBar>
          <MobileMenuNavigation {...navigation}></MobileMenuNavigation>
          {/* <Link href="/" className="text-white font-bold ml-8">Se connecter</Link> */}
        </div>
      </div>
    </header>
  );
};
