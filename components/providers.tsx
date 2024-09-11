import { ReactNode, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export const Providers = ({ children, session }: { children: ReactNode, session?: Session | null }) => {
  return (
    <>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </>
  );
};
