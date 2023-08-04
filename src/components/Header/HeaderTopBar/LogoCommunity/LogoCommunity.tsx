import React from "react";
import Image from "next/image";
import Link from "next/link";
import { makePublicAssetPath } from "../../../../lib/utilities";
import { useContract } from "../../../../hooks/useContract";

export default function LogoCommunity() {
  /*Local Data */
  const { contract } = useContract();
  const logoCommunity = contract?.attributes?.logo?.data?.attributes;
  const ariaLabel = `${contract.attributes?.clientName}, retour à l'accueil`;

  return (
    <>
      {logoCommunity && (
        <Link
          className="c-LogoCommunity"
          href={"/"}
          data-testid="logo-community"
        >
          <Image
            src={makePublicAssetPath(logoCommunity.url)}
            alt={logoCommunity.alternativeText ?? "Retour à l'accueil"}
            width={160}
            height={56}
            aria-label={ariaLabel}
            priority
          />
        </Link>
      )}
    </>
  );
}
