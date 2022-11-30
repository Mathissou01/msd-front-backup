import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../graphql/client";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default MyApp;
