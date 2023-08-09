import React from "react";
import Image from "next/image";
import { makePublicAssetPath } from "../../../../lib/utilities";
import "./header-link-selector.scss";

export default function HeaderLinkSelector() {
  /* Static Data */
  const refreshhArrowIcon = {
    source: "/images/pictos/button_refresh_arrows.svg",
    alternativeText: "Changer de ville",
    ariaLabel: "Changer de ville",
  };

  return (
    <div className="c-HeaderLinkSelector">
      <span>Montauban</span>
      <Image
        src={makePublicAssetPath(refreshhArrowIcon.source)}
        alt={refreshhArrowIcon.alternativeText}
        aria-label={refreshhArrowIcon.ariaLabel}
        width={24}
        height={24}
      />
    </div>
  );
}
