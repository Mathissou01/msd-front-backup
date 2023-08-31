import { useState } from "react";
import classNames from "classnames";
import { useIsDesktopContext } from "../../hooks/useScreenWidth";
import CommonMeta from "../Common/CommonMeta/CommonMeta";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar";
import "./header.scss";

export default function Header() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const isDesktop = useIsDesktopContext();
  const coverClassNames = classNames("c-Header__ContentCover", {
    "c-Header__ContentCover_active": sidebarExpanded && !isDesktop,
  });

  return (
    <>
      <CommonMeta />
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
