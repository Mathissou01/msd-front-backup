import Head from "next/head";
import { useEffect, useState } from "react";
import useScreenWidth from "../../lib/useScreenWidth";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar";
import "./header.scss";

export default function Header() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const windowWidth = useScreenWidth();

  useEffect(() => {
    setIsDesktop(!!(windowWidth && windowWidth >= 1200));
  }, [windowWidth]);
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
          sidebarExpanded ? "c-Header__ContentCover_active" : ""
        }`}
        aria-hidden={true}
        data-testid="content-cover"
      />
    </>
  );
}
