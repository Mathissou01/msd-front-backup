import React from "react";
import Image from "next/image";
import "./header-link-search.scss";

export default function HeaderLinkSearch() {
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
          src="/images/pictos/search.svg"
          alt="Chercher"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
}
