import React from "react";
import {
  GetConfidentialityByContractIdDocument,
  GetConfidentialityByContractIdQuery,
} from "../../graphql/codegen/generated-types";
import client from "../../graphql/client";
import { isEditoBlock } from "../../lib/edito-content";
import { removeNulls } from "../../lib/utilities";
import LegalContentRenderer from "../../components/Edito/LegalContentRenderer/LegalContentRenderer";

interface IConfidentialityPageProps {
  confidentialityData: GetConfidentialityByContractIdQuery;
}

export default function ConfidentialityPage({
  confidentialityData,
}: IConfidentialityPageProps) {
  /* Static Data */
  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
  ];

  const confidentiality =
    confidentialityData?.confidentialitySubServices?.data[0]?.attributes
      ?.confidentialities?.data[0];
  if (confidentiality?.attributes?.title) {
    breadcrumbPages.push({
      label: confidentiality.attributes.title,
      slug: "",
    });
  }
  return (
    <LegalContentRenderer
      breadcrumbPages={breadcrumbPages}
      title={confidentiality?.attributes?.title ?? ""}
      legalContentBlocks={
        confidentialityData?.confidentialitySubServices?.data[0]?.attributes?.confidentialities?.data[0]?.attributes?.blocks
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
  const { data: confidentialityData } =
    await client.query<GetConfidentialityByContractIdQuery>({
      query: GetConfidentialityByContractIdDocument,
      variables: { contractId: contractId, hasMobile: false },
    });

  return {
    props: {
      confidentialityData,
    },
  };
}
