import { useState } from "react";
import classNames from "classnames";
import Head from "next/head";
import { useIsDesktopContext } from "../../hooks/useScreenWidth";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar";
import { makePublicAssetPath } from "../../lib/utilities";
import "./header.scss";

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
