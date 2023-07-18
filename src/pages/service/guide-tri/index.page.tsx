import React, { useState } from "react";
import WasteFamilyBlock from "../../../components/Guide-tri/WasteFamilyBlock";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import MemoTriBlock from "../../../components/Guide-tri/MemoTriBlock/MemoTriBlock";
import RecyclingGuideBlock from "../../../components/Blocks/RecyclingGuideBlock/RecyclingGuideBlock";
import {
  GetMemoTriBlockByContractIdDocument,
  GetMemoTriBlockByContractIdQuery,
  GetRecyclingGuideBlockDocument,
  GetRecyclingGuideBlockQuery,
  GetServicesActiveDocument,
  GetServicesActiveQuery,
  RecyclingGuideBlockEntity,
  SearchResult,
} from "../../../graphql/codegen/generated-types";
import { extractRecyclingGuideBlock } from "../../../lib/graphql-data";
import client from "../../../graphql/client";
import "./guide-tri.scss";

interface IGuideTriProps {
  servicesData: GetServicesActiveQuery;
  MemoTriBlockData: GetMemoTriBlockByContractIdQuery;
  recyclingGuideBlock: RecyclingGuideBlockEntity | null;
}

export default function ServiceGuideTriPage({
  servicesData,
  MemoTriBlockData,
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
  /*  Dynamic Data */
  const memoData = MemoTriBlockData.recyclingGuideServices?.data[0];
  const memoFileData = memoData?.attributes?.memoFile?.data?.attributes;
  const memoImg = `/images/images-temp/image-memo-tri.png`;

  const displayRecyclingGuideBlock =
    !!recyclingGuideBlock &&
    servicesData.recyclingGuideServices?.data[0]?.attributes?.isActivated;
  const displayMemoBlock = memoData?.attributes?.memoFile?.data;

  const [recyclingGuideSearchData, setRecyclingGuideSearchData] = useState<
    SearchResult[] | null
  >(null);

  // SearchResult -> to parent with filter
  function updateRecyclingGuideSearchData(data: (SearchResult | null)[]) {
    const filteredData = data.filter((item) => item !== null) as SearchResult[];
    setRecyclingGuideSearchData(filteredData);
  }

  return (
    <div className="c-GuideTri">
      <CommonBreadcrumb pages={pagesUrl} />
      <div className="c-GuideTri__RecyclingGuide">
        {displayRecyclingGuideBlock && (
          <RecyclingGuideBlock
            data={recyclingGuideBlock}
            onUpdateRecyclingGuideSearchData={updateRecyclingGuideSearchData} // Set function to child component
          />
        )}
      </div>
      {displayRecyclingGuideBlock && displayMemoBlock && (
        <MemoTriBlock
          memoName={memoData.attributes?.memoName || ""}
          memoDesc={memoData?.attributes?.memoDesc || ""}
          memoImg={memoImg}
          memoFileName={memoFileData?.name || ""}
          memoFileUrl={memoFileData?.url || ""}
        />
      )}
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
    fetchPolicy: "cache-first",
  });

  const { data: recyclingGuideBlockData } =
    await client.query<GetRecyclingGuideBlockQuery>({
      query: GetRecyclingGuideBlockDocument,
      variables: { contractId },
      fetchPolicy: "cache-first",
    });

  const recyclingGuideBlock = extractRecyclingGuideBlock(
    recyclingGuideBlockData,
  );

  const { data: MemoTriBlockData } =
    await client.query<GetMemoTriBlockByContractIdQuery>({
      query: GetMemoTriBlockByContractIdDocument,
      variables: { contractId },
      fetchPolicy: "no-cache",
    });

  return {
    props: {
      servicesData,
      recyclingGuideBlock,
      MemoTriBlockData,
    },
  };
}
