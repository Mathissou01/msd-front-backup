import React from "react";
import {
  GetCguByContractIdDocument,
  GetCguByContractIdQuery,
} from "../../graphql/codegen/generated-types";
import client from "../../graphql/client";
import { isEditoBlock } from "../../lib/edito-content";
import { removeNulls } from "../../lib/utilities";
import LegalContentRenderer from "../../components/Edito/LegalContentRenderer/LegalContentRenderer";

interface ICguPageProps {
  cguData: GetCguByContractIdQuery;
}

export default function CguPage({ cguData }: ICguPageProps) {
  /* Static Data */
  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
  ];

  const cgu = cguData?.cguSubServices?.data[0]?.attributes?.cgus?.data[0];
  if (cgu?.attributes?.title) {
    breadcrumbPages.push({
      label: cgu.attributes.title,
      slug: "",
    });
  }
  return (
    <LegalContentRenderer
      breadcrumbPages={breadcrumbPages}
      title={cgu?.attributes?.title ?? ""}
      legalContentBlocks={
        cguData?.cguSubServices?.data[0]?.attributes?.cgus?.data[0]?.attributes?.blocks
          ?.map((block) => {
            if (block && isEditoBlock(block)) {
              return block;
            }
            return undefined;
          })
          .filter(removeNulls) ?? []
      }
    />
  );
}

export async function getStaticProps() {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data: cguData } = await client.query<GetCguByContractIdQuery>({
    query: GetCguByContractIdDocument,
    variables: { contractId: contractId, hasMobile: false },
  });

  return {
    props: {
      cguData,
    },
  };
}
