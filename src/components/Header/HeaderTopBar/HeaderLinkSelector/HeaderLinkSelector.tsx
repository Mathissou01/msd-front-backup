import React from "react";
import ButtonRefresh from "public/images/pictos/button_refresh_arrows.svg";
import "./header-link-selector.scss";

export default function HeaderLinkSelector() {
  return (
    <div className="c-HeaderLinkSelector">
      <span>Montauban</span>
      <ButtonRefresh />
    </div>
  );
}
