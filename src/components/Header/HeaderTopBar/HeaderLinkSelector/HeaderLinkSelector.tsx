import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useGetCitiesInformationsLazyQuery } from "../../../../graphql/codegen/generated-types";
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

  async function getFreemiumCityNameCallback() {
    if (
      typeof inseeCode === "string" &&
      !isNaN(Number(inseeCode)) &&
      inseeCode?.length === 5 &&
      contract.attributes?.isFreemium
    ) {
      try {
        const cityInformation = await getCitiesInformations({
          variables: {
            prehome: false,
            searchTerm: inseeCode,
          },
        });
        if (
          cityInformation.data?.getCitiesInformations &&
          cityInformation.data?.getCitiesInformations.length > 0
        ) {
          setFreemiumCityName(
            cityInformation.data?.getCitiesInformations[0]?.name ?? "",
          );
        }
      } catch (error) {
        setFreemiumCityName(undefined);
      }
    }
  }

  /* Local Data */
  const [showModal, setShowModal] = useState<boolean>(false);
  const { contract } = useContract();
  const router = useRouter();
  const { inseeCode } = router.query;
  const [getCitiesInformations] = useGetCitiesInformationsLazyQuery();
  const [freemiumCityName, setFreemiumCityName] = useState<string>();
  const getFreemiumCityName = useCallback(getFreemiumCityNameCallback, [
    contract.attributes?.isFreemium,
    getCitiesInformations,
    inseeCode,
  ]);

  useEffect(() => {
    if (inseeCode) {
      setFreemiumCityName(undefined);
      getFreemiumCityName();
    }
  }, [inseeCode, setFreemiumCityName, getFreemiumCityName]);

  return (
    <div className="c-HeaderLinkSelector">
      <button
        className="c-HeaderLinkSelector__Link"
        onClick={handleShowSelector}
      >
        <span>
          {!contract.attributes?.isFreemium
            ? contract.attributes?.clientName
            : freemiumCityName}
        </span>
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
