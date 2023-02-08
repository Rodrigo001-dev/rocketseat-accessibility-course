import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter();
  }, []);

  return <Component {...pageProps} />;
}
