import { ReactNode, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { CookiesProvider } from "react-cookie";

export const Providers = ({
  children,
  session,
}: {
  children: ReactNode;
  session?: Session | null;
}) => {
  return (
    <>
      <CookiesProvider>
        <SessionProvider session={session}>{children}</SessionProvider>
      </CookiesProvider>
    </>
  );
};
