import React from "react";
import ArrowDown from "public/images/pictos/arrow_bold.svg";
import "./header-link-profile.scss";

export default function HeaderLinkProfile() {
  return (
    <div className="c-HeaderLinkProfile">
      <span>Particulier</span>
      <ArrowDown />
    </div>
  );
}
