import { ApolloProvider } from "@apollo/client";
import React from "react";
import type { AppProps } from "next/app";
import client from "../graphql/client";
import useScreenWidth, { IsDesktopContext } from "../hooks/useScreenWidth";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const { isDesktop } = useScreenWidth();

  return (
    <ApolloProvider client={client}>
      <IsDesktopContext.Provider value={isDesktop}>
        <div id={"app"}>
          <Header />
          <div className="o-Page__Container">
            <main role="main" className="o-Page__Main">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
          <div id="modal-portal" />
        </div>
      </IsDesktopContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
