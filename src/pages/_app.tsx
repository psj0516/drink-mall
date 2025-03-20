import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Do_Hyeon, Nanum_Gothic, Encode_Sans_Condensed } from "next/font/google";
import globalStyles from "@/styles/globalStyles";
import { Global } from "@emotion/react";
import { useState } from "react";

const fontDohyeon = Do_Hyeon({
  weight: "400",
  variable: "--do-hyeon",
  preload: true,
  subsets: ["latin"],
});

const fontNanum = Nanum_Gothic({
  weight: "400",
  variable: "--nanum-gothic",
  preload: false,
  subsets: ["latin"],
});

const fontEncode = Encode_Sans_Condensed({
  variable: "--encode-sans",
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export default function App({ Component, pageProps: { dehydratedState, ...pageProps } }: AppProps) {
  const [client] = useState(() => new QueryClient());

  return (
    <>
      <div className={`${fontNanum.variable} ${fontDohyeon.variable} ${fontEncode.variable}`}>
        <Global styles={globalStyles} />
        <QueryClientProvider client={client}>
          <Hydrate state={dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </div>
    </>
  );
}
