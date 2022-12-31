import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ENavigationPages, NavigationContext } from "../hooks/useNavigation";
import client from "../graphql/client";
import useScreenWidth, { IsDesktopContext } from "../hooks/useScreenWidth";
import CommonSvgDefs from "../components/Common/CommonSvgDefs/CommonSvgDefs";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/main.scss";
import CommonBreadcrumb from "../components/Common/CommonBreadcrumb/CommonBreadcrumb";

function MsdFrontApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { isDesktop } = useScreenWidth();
  const [currentPage, setCurrentPage] = useState<ENavigationPages | string>(
    router.route as ENavigationPages | string,
  );

  return (
    <ApolloProvider client={client}>
      <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
        <IsDesktopContext.Provider value={isDesktop}>
          <div id={"app"}>
            <CommonSvgDefs />
            <Header />
            <div className="o-Page__Container">
              <main role="main" className="o-Page__Main">
                <CommonBreadcrumb />
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
            <div id="modal-portal" />
          </div>
        </IsDesktopContext.Provider>
      </NavigationContext.Provider>
    </ApolloProvider>
  );
}

export default MsdFrontApp;
