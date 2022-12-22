import React from "react";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import "./header-link-search.scss";

export default function HeaderLinkSearch() {
  return (
    <div className="c-HeaderLinkSearch">
      <input
        className="c-HeaderLinkSearch__Input"
        type="text"
        placeholder="Rechercher sur le site"
      />
      <CommonButton picto="search" style="tertiary" />
    </div>
  );
}
