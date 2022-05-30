import "@fontsource/saira/400.css";
import "@fontsource/saira/500.css";
import "@fontsource/saira/600.css";
import "@fontsource/saira/700.css";
import "@fontsource/saira/800.css";
import "@/styles/globals.css";
import { SizeObserver } from "@/utils/size-observer";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SizeObserver>
      <Component {...pageProps} />
    </SizeObserver>
  )
}

export default MyApp;
