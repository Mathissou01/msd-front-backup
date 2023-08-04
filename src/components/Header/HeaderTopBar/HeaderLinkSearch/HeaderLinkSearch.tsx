import React from "react";
import Image from "next/image";
import { makePublicAssetPath } from "../../../../lib/utilities";
import "./header-link-search.scss";

export default function HeaderLinkSearch() {
  /* Static Data */
  const searchIcon = {
    source: "/images/pictos/search.svg",
    alternativeText: "Lancer la recherche",
  };

  return (
    <div className="c-HeaderLinkSearch">
      <input
        className="c-HeaderLinkSearch__Input"
        type="text"
        placeholder="Rechercher sur le site"
        role="search"
        aria-label="Rechercher sur le site"
      />
      <button className="c-HeaderLinkSearch__Button">
        <Image
          src={makePublicAssetPath(searchIcon.source)}
          alt={searchIcon.alternativeText}
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
