import React, { useState } from "react";
import "./guide-tri.scss";
import WasteFamilyBlock from "../../../components/Guide-tri/WasteFamilyBlock";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import RecyclingGuideBlock from "../../../components/Blocks/RecyclingGuideBlock/RecyclingGuideBlock";
import client from "../../../graphql/client";
import {
  GetRecyclingGuideBlockDocument,
  GetRecyclingGuideBlockQuery,
  GetServicesActiveDocument,
  GetServicesActiveQuery,
  RecyclingGuideBlockEntity,
  SearchResult,
} from "../../../graphql/codegen/generated-types";
import { extractRecyclingGuideBlock } from "../../../lib/graphql-data";

interface IGuideTriProps {
  servicesData: GetServicesActiveQuery;
  recyclingGuideBlock: RecyclingGuideBlockEntity | null;
}

export default function ServiceGuideTriPage({
  servicesData,
  recyclingGuideBlock,
}: IGuideTriProps) {
  /* Local Data */
  const pagesUrl = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Guide du tri",
    },
  ];
  const displayRecyclingGuideBlock =
    !!recyclingGuideBlock &&
    servicesData.recyclingGuideServices?.data[0]?.attributes?.isActivated;

  const [recyclingGuideSearchData, setRecyclingGuideSearchData] = useState<
    SearchResult[] | null
  >(null);

  // SearchResult to parent with filter
  function updateRecyclingGuideSearchData(data: (SearchResult | null)[]) {
    const filteredData = data.filter((item) => item !== null) as SearchResult[];
    setRecyclingGuideSearchData(filteredData);
  }

  return (
    <div className="c-GuideTri">
      <div className="c-GuideTri__RecyclingGuide">
        <CommonBreadcrumb pages={pagesUrl} />
        {displayRecyclingGuideBlock && (
          <RecyclingGuideBlock
            data={recyclingGuideBlock}
            onUpdateRecyclingGuideSearchData={updateRecyclingGuideSearchData} // Set function to child component
          />
        )}
      </div>

      <div className="c-GuideTri__Block">
        <WasteFamilyBlock filteredData={recyclingGuideSearchData} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data: servicesData } = await client.query<GetServicesActiveQuery>({
    query: GetServicesActiveDocument,
    variables: { contractId },
  });

  const { data: recyclingGuideBlockData } =
    await client.query<GetRecyclingGuideBlockQuery>({
      query: GetRecyclingGuideBlockDocument,
      variables: { contractId },
    });

  const recyclingGuideBlock = extractRecyclingGuideBlock(
    recyclingGuideBlockData,
  );

  return {
    props: {
      servicesData,
      recyclingGuideBlock,
    },
  };
}
