import { ReactNode } from "react";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col h-screen w-screen">
      <Header />
      <div className="grow p-8 lg:px-32 overflow-scroll">{children}</div>
      <Footer/>
    </main>
  );
};
