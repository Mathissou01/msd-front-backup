import classNames from "classnames";
import Head from "next/head";
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
