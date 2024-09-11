import { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export const Providers = ({ children, session }: { children: ReactNode, session: Session }) => {
  return (
    <>
      <SessionProvider session={session}>
        <CookiesProvider>{children}</CookiesProvider>
      </SessionProvider>
    </>
  );
};
