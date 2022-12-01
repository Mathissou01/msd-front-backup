import Head from "next/head";
import { useState } from "react";
import useScreenWidth from "../../lib/useScreenWidth";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar";
import "./header.scss";

export default function Header() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const { isDesktop } = useScreenWidth();

  return (
    <>
      <Head>
        <title>MSD-FRONT</title>
        <meta name="description" content="wip" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <HeaderTopBar
        isMenuOpen={sidebarExpanded}
        isDesktopMode={isDesktop}
        handleClick={(e) => setSidebarExpanded(e)}
      />
      {isDesktop && <HeaderSideBar />}
      <div
        className={`c-Header__ContentCover ${
          sidebarExpanded && !isDesktop ? "c-Header__ContentCover_active" : ""
        }`}
        aria-hidden={true}
        data-testid="content-cover"
      />
    </>
  );
}
