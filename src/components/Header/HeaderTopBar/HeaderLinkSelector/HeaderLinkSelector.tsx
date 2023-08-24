import React, { useState } from "react";
import Image from "next/image";
import { makePublicAssetPath } from "../../../../lib/utilities";
import { useContract } from "../../../../hooks/useContract";
import ModalSelector from "./ModalSelector/ModalSelector";
import "./header-link-selector.scss";

export default function HeaderLinkSelector() {
  /* Static Data */
  const refreshhArrowIcon = {
    source: "/images/pictos/button_refresh_arrows.svg",
    alternativeText: "Changer de ville",
    ariaLabel: "Changer de ville",
  };

  /* Methods */
  function handleShowSelector() {
    setShowModal(true);
  }

  /* Local Data */
  const [showModal, setShowModal] = useState<boolean>(false);
  const { contract } = useContract();

  return (
    <div className="c-HeaderLinkSelector">
      <button
        className="c-HeaderLinkSelector__Link"
        onClick={handleShowSelector}
      >
        <span>{contract.attributes?.clientName}</span>
        <Image
          src={makePublicAssetPath(refreshhArrowIcon.source)}
          alt={refreshhArrowIcon.alternativeText}
          aria-label={refreshhArrowIcon.ariaLabel}
          width={24}
          height={24}
        />
      </button>
      {showModal && <ModalSelector handleClose={() => setShowModal(false)} />}
    </div>
  );
}
