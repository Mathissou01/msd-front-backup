import React from "react";
import NavigationList from "../Navigation/NavigationList/NavigationList";
import MSDLogo from "../MSDLogo/MSDLogo";
import "./header-side-bar.scss";

export default function HeaderSideBar() {
  return (
    <nav className="c-HeaderSideBar" data-testid="side-bar" role="navigation">
      <NavigationList isDesktopMode />
      <MSDLogo />
    </nav>
  );
}
