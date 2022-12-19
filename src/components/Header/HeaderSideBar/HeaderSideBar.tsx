import React from "react";
import NavigationList from "../Menus/NavigationList/NavigationList";
import MSDLogo from "../MSDLogo/MSDLogo";
import "./header-side-bar.scss";

export default function HeaderSideBar() {
  return (
    <nav className="c-HeaderSideBar" data-testid="side-bar">
      <NavigationList isDesktopMode />
      <MSDLogo />
    </nav>
  );
}
