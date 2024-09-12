import { ReactNode } from "react";

import { ToastContainer } from "react-toastify";
import { Session } from "next-auth";

// Providers
import { CookiesProvider } from "react-cookie";
import { ErrorProvider } from "@/contexts/ErrorContext";
import { SessionProvider } from "next-auth/react";

// CSS
import "react-toastify/dist/ReactToastify.css";

export const Providers = ({
  children,
  session,
}: {
  children: ReactNode;
  session?: Session | null;
}) => {
  return (
    <>
      <ErrorProvider>
        <ToastContainer /> {/* Composant pour afficher les notifications */}
        <CookiesProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </CookiesProvider>
      </ErrorProvider>
    </>
  );
};
