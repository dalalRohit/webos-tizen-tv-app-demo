import type { AppProps } from "next/app";
import "ui/global.css";

const MyAppWebOsTv = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};
export default MyAppWebOsTv;
