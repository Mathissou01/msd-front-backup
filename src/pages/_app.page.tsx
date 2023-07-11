import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import client from "../graphql/client";
import { ContractEntity } from "../graphql/codegen/generated-types";
import globalData from "../../config/global.json";
import { ENavigationPages, NavigationContext } from "../hooks/useNavigation";
import { ContractContext } from "../hooks/useContract";
import { UserProvider } from "../hooks/useCurrentUser";
import useScreenWidth, { IsDesktopContext } from "../hooks/useScreenWidth";
import CommonSvgDefs from "../components/Common/CommonSvgDefs/CommonSvgDefs";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/main.scss";

function MsdFrontApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { isDesktop } = useScreenWidth();
  const [currentPage, setCurrentPage] = useState<ENavigationPages | string>(
    router.route as ENavigationPages | string,
  );
  return (
    <ApolloProvider client={client}>
      <ContractContext.Provider
        value={{
          colors: globalData.colors,
          contract: globalData.contract as ContractEntity,
          contractId: `${Number.parseInt(globalData.contract.id)}`,
        }}
      >
        <UserProvider>
          <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
            <IsDesktopContext.Provider value={isDesktop}>
              <div id={"app"}>
                <Head>
                  <script
                    async
                    data-blockingmode="auto"
                    data-cbid="55b34c7d-edcf-48ab-9699-f43dc595ad2b"
                    id="Cookiebot"
                    src="https://consent.cookiebot.com/uc.js"
                    type="text/javascript"
                  ></script>
                  <script
                    async
                    id="CookieDeclaration"
                    src="https://consent.cookiebot.com/55b34c7d-edcf-48ab-9699-f43dc595ad2b/cd.js"
                    type="text/javascript"
                  ></script>
                </Head>
                <CommonSvgDefs />
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
          </NavigationContext.Provider>
        </UserProvider>
      </ContractContext.Provider>
    </ApolloProvider>
  );
}

export default MsdFrontApp;
