import type { AppProps } from "next/app";
import "ui/global.css";

export default function MyAppWebOsTv({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
