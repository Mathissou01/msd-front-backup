import type { AppProps } from "next/app";
import "@suezenv/react-theme-components/assets/css/main.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
