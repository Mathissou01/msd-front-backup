import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import client from "../graphql/client";
import { ContractEntity } from "../graphql/codegen/generated-types";
import _globalData from "../../config/global.json";
import { GlobalDataType } from "../../config/globalData.type";
import { ENavigationPages, NavigationContext } from "../hooks/useNavigation";
import { ContractContext } from "../hooks/useContract";
import { UserProvider } from "../hooks/useCurrentUser";
import useScreenWidth, { IsDesktopContext } from "../hooks/useScreenWidth";
import { GoogleMapsProvider } from "../hooks/geoLocation/GoogleMapsContext";
import CommonSvgDefs from "../components/Common/CommonSvgDefs/CommonSvgDefs";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/main.scss";

function MsdFrontApp({ Component, pageProps }: AppProps) {
  const globalData = _globalData as GlobalDataType;
  const router = useRouter();
  const { isDesktop } = useScreenWidth();
  const [currentPage, setCurrentPage] = useState<ENavigationPages | string>(
    router.route as ENavigationPages | string,
  );

  return (
    <>
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
                <GoogleMapsProvider>
                  <div id={"app"}>
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
                </GoogleMapsProvider>
              </IsDesktopContext.Provider>
            </NavigationContext.Provider>
          </UserProvider>
        </ContractContext.Provider>
      </ApolloProvider>
    </>
  );
}

export default MsdFrontApp;
