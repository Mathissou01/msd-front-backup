import classNames from "classnames";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { useIsDesktopContext } from "../../hooks/useScreenWidth";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar";
import "./header.scss";
import { makePublicAssetPath } from "../../lib/utilities";

export default function Header() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const isDesktop = useIsDesktopContext();
  const coverClassNames = classNames("c-Header__ContentCover", {
    "c-Header__ContentCover_active": sidebarExpanded && !isDesktop,
  });

  return (
    <>
      <Head>
        <title>MSD-FRONT</title>
        <meta name="description" content="wip" />
        <link rel="icon" href={makePublicAssetPath("/favicon.ico")} />
      </Head>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="55b34c7d-edcf-48ab-9699-f43dc595ad2b"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/55b34c7d-edcf-48ab-9699-f43dc595ad2b/cd.js"
        type="text/javascript"
        async
      ></Script>
      <HeaderTopBar
        isMenuOpen={sidebarExpanded}
        isDesktopMode={isDesktop}
        handleClick={(e) => setSidebarExpanded(e)}
      />
      {isDesktop && <HeaderSideBar />}
      <div
        className={coverClassNames}
        aria-hidden={true}
        data-testid="content-cover"
      />
    </>
  );
}
