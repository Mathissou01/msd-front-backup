import React from "react";
import {
  GetCookieByContractIdDocument,
  GetCookieByContractIdQuery,
} from "../../graphql/codegen/generated-types";
import client from "../../graphql/client";
import { isEditoBlock } from "../../lib/edito-content";
import { removeNulls } from "../../lib/utilities";
import LegalContentRenderer from "../../components/Edito/LegalContentRenderer/LegalContentRenderer";
import CommonMeta from "../../components/Common/CommonMeta/CommonMeta";

interface ICookiePageProps {
  cookieData: GetCookieByContractIdQuery;
}

export default function CookiePage({ cookieData }: ICookiePageProps) {
  /* Static Data */
  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
  ];

  const cookie =
    cookieData?.cookiesSubServices?.data[0]?.attributes?.cookies?.data[0];
  if (cookie?.attributes?.title) {
    breadcrumbPages.push({
      label: cookie.attributes.title,
      slug: "",
    });
  }
  return (
    <>
      <CommonMeta title={cookie?.attributes?.title ?? ""} />
      <LegalContentRenderer
        breadcrumbPages={breadcrumbPages}
        title={cookie?.attributes?.title ?? ""}
        legalContentBlocks={
          cookieData?.cookiesSubServices?.data[0]?.attributes?.cookies?.data[0]?.attributes?.blocks
            ?.map((block) => {
              if (block && isEditoBlock(block)) {
                return block;
              }
              return undefined;
            })
            .filter(removeNulls) ?? []
        }
      />
    </>
  );
}

export async function getStaticProps() {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data: cookieData } = await client.query<GetCookieByContractIdQuery>({
    query: GetCookieByContractIdDocument,
    variables: { contractId: contractId },
  });

  return {
    props: {
      cookieData,
    },
  };
}
