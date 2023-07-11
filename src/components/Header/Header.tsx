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

  const cookieBotCbid = process.env.COOKIE_BOT_CBID;
  const scriptUrl = `https://consent.cookiebot.com/uc.js`;
  const scriptUrlCbId = scriptUrl + `?cbid=${cookieBotCbid}`;

  return (
    <>
      <Head>
        <title>MSD-FRONT</title>
        <meta name="description" content="wip" />
        <link rel="icon" href={makePublicAssetPath("/favicon.ico")} />
        <script
          async
          data-blockingmode="auto"
          data-cbid={cookieBotCbid}
          id="Cookiebot"
          src={scriptUrl}
          type="text/javascript"
        ></script>
        <script
          async
          id="CookieDeclaration"
          src={scriptUrlCbId}
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
