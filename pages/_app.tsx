import { AppLayout } from "@/components/layouts/AppLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "@/components/providers";

export default function App({ Component, pageProps: {session, pageProps} }: AppProps) {

  console.log("sess : ", session)
  return (
    <>
      <Providers session={session}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Providers>
    </>
  );
}
