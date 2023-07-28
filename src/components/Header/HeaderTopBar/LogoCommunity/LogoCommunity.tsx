import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useContract } from "../../../../hooks/useContract";

export default function LogoCommunity() {
  /*Local Data */
  const { contract } = useContract();
  const logoCommunity = contract?.attributes?.logo?.data?.attributes;

  return (
    <>
      {logoCommunity && (
        <Link
          className="c-LogoCommunity"
          href={"/"}
          data-testid="logo-community"
        >
          <Image
            src={logoCommunity.url}
            alt={logoCommunity.alternativeText ?? ""}
            width={"160"}
            height={"56"}
            priority
          />
        </Link>
      )}
    </>
  );
}
