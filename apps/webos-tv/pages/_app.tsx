import type { AppProps } from "next/app";
import Script from "next/script";
import "ui/global.css";

const MyAppWebOsTv = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
      <Script
        src="https://cdn.jsdelivr.net/gh/dalalRohit/nextjs-lg-webos-demo@dev/public/webOSTVjs-1.2.4/webOSTV-dev.js"
        id="webos-dev"
      />
      <Script
        src="https://cdn.jsdelivr.net/gh/dalalRohit/nextjs-lg-webos-demo@dev/public/webOSTVjs-1.2.4/webOSTV.js"
        id="webos"
      />
    </div>
  );
};
export default MyAppWebOsTv;
