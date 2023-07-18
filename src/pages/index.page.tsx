import { useState } from "react";
import client from "../graphql/client";
import {
  EditoBlockEntity,
  GetEditoBlockDocument,
  GetEditoBlockQuery,
  GetNewestTopContentsDocument,
  GetNewestTopContentsQuery,
  GetQuizAndTipsBlockDocument,
  GetQuizAndTipsBlockQuery,
  GetRecyclingGuideBlockDocument,
  GetRecyclingGuideBlockQuery,
  GetServicesActiveDocument,
  GetServicesActiveQuery,
  GetServicesBlockDocument,
  GetServicesBlockQuery,
  GetTopContentBlockDocument,
  GetTopContentBlockQuery,
  QuizAndTipsBlockEntity,
  RecyclingGuideBlockEntity,
  TopContentBlockEntity,
} from "../graphql/codegen/generated-types";
import {
  extractEditoBlock,
  extractQuizAndTipsBlock,
  extractRecyclingGuideBlock,
  extractServicesBlock,
  extractTopContentBlock,
} from "../lib/graphql-data";
import { IServiceLink } from "../lib/service-links";
import WelcomeBlock from "../components/Blocks/WelcomeBlock/WelcomeBlock";
import ServicesBlock from "../components/Blocks/ServicesBlock/ServicesBlock";
import QuizAndTipsBlock from "../components/Blocks/QuizAndTipsBlock/QuizAndTipsBlock";
import TopContentBlock from "../components/Blocks/TopContentBlock/TopContentBlock";
import EditoBlock from "../components/Blocks/EditoBlock/EditoBlock";
import SearchEngineBlock from "../components/Blocks/SearchEngineBlock/SearchEngineBlock";
import { useRouter } from "next/router";
import Script from "next/script";

interface IHomePageProps {
  servicesData: GetServicesActiveQuery;
  recyclingGuideBlock: RecyclingGuideBlockEntity | null;
  servicesBlock: {
    titleContent: string | null;
    serviceLinks: Array<IServiceLink> | null;
  };
  quizAndTipsBlock: QuizAndTipsBlockEntity | null;
  editoBlock: EditoBlockEntity | null;
  topContentBlock: TopContentBlockEntity | null;
  newestTopContents: GetNewestTopContentsQuery;
  cookieBotCbid: string;
}

export default function HomePage({
  servicesData,
  recyclingGuideBlock,
  servicesBlock,
  quizAndTipsBlock,
  editoBlock,
  topContentBlock,
  newestTopContents,
  cookieBotCbid,
}: IHomePageProps) {
  /* StaticProps data */
  const displayRecyclingGuideBlock =
    !!recyclingGuideBlock &&
    servicesData.recyclingGuideServices?.data[0]?.attributes?.isActivated;
  const editorialServicesActivated =
    servicesData.editorialServices?.data[0]?.attributes?.eventSubService?.data
      ?.attributes?.isActivated ||
    servicesData.editorialServices?.data[0]?.attributes?.newsSubService?.data
      ?.attributes?.isActivated ||
    servicesData.editorialServices?.data[0]?.attributes?.tipSubService?.data
      ?.attributes?.isActivated ||
    servicesData.editorialServices?.data[0]?.attributes?.freeContentSubServices
      ?.data[0].attributes?.isActivated ||
    servicesData.editorialServices?.data[0]?.attributes?.quizSubService?.data
      ?.attributes?.isActivated;
  const displayServicesBlock =
    servicesBlock.titleContent && editorialServicesActivated;
  const displayQuizAndTipsBlock =
    quizAndTipsBlock?.attributes?.displayBlock &&
    (servicesData.editorialServices?.data[0]?.attributes?.quizSubService?.data
      ?.attributes?.isActivated ||
      servicesData.editorialServices?.data[0]?.attributes?.tipSubService?.data
        ?.attributes?.isActivated);
  const displayEditoBlock =
    !!editoBlock?.attributes?.displayBlock && editorialServicesActivated;
  const displayTopContentBlock =
    !!topContentBlock?.attributes?.displayBlock &&
    (servicesData.editorialServices?.data[0]?.attributes?.eventSubService?.data
      ?.attributes?.isActivated ||
      servicesData.editorialServices?.data[0]?.attributes?.newsSubService?.data
        ?.attributes?.isActivated);

  const scriptUrl = `https://consent.cookiebot.com/uc.js`;

  const router = useRouter();

  const [recyclingGuideSearchTerm, setRecyclingGuideSearchTerm] = useState("");

  function handleChangeRecyclingGuideSearchTerm(data: string) {
    setRecyclingGuideSearchTerm(data);
  }

  function onRecyclingGuideSubmit() {
    router.push({
      pathname: "/service/guide-tri",
      query: { search: recyclingGuideSearchTerm },
    });
  }

  return (
    <>
      <Script
        data-blockingmode="auto"
        data-cbid={cookieBotCbid}
        id="Cookiebot"
        src={scriptUrl}
        type="text/javascript"
      ></Script>
      <WelcomeBlock />
      {displayRecyclingGuideBlock && (
        <SearchEngineBlock
          searchTerm={recyclingGuideSearchTerm}
          title={recyclingGuideBlock.attributes?.titleContent}
          subtitle={recyclingGuideBlock.attributes?.subtitleContent}
          placeholder={
            recyclingGuideBlock.attributes?.recyclingGuideDisplayContent
          }
          minLengthSearch={3}
          onSearchTermChange={handleChangeRecyclingGuideSearchTerm}
          onSearchSubmit={onRecyclingGuideSubmit}
        />
      )}
      {displayServicesBlock && <ServicesBlock remappedData={servicesBlock} />}
      {displayTopContentBlock && (
        <TopContentBlock
          data={topContentBlock}
          newestTopContents={newestTopContents}
        />
      )}
      {displayQuizAndTipsBlock && <QuizAndTipsBlock data={quizAndTipsBlock} />}
      {displayEditoBlock && <EditoBlock data={editoBlock} />}
    </>
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

  const { data: servicesBlockData } = await client.query<GetServicesBlockQuery>(
    {
      query: GetServicesBlockDocument,
      variables: { contractId },
    },
  );

  const servicesBlock = extractServicesBlock(servicesBlockData);

  const { data: quizAndTipsBlockData } =
    await client.query<GetQuizAndTipsBlockQuery>({
      query: GetQuizAndTipsBlockDocument,
      variables: { contractId },
    });
  const quizAndTipsBlock = extractQuizAndTipsBlock(quizAndTipsBlockData);

  const { data: topContentBlockData } =
    await client.query<GetTopContentBlockQuery>({
      query: GetTopContentBlockDocument,
      variables: { contractId },
    });
  const topContentBlock = extractTopContentBlock(topContentBlockData);

  const { data: newestTopContents } =
    await client.query<GetNewestTopContentsQuery>({
      query: GetNewestTopContentsDocument,
      variables: { contractId },
    });

  const { data: editoBlockData } = await client.query<GetEditoBlockQuery>({
    query: GetEditoBlockDocument,
    variables: { contractId },
  });
  const editoBlock = extractEditoBlock(editoBlockData);
  const cookieBotCbid = process.env.COOKIE_BOT_CBID?.toString();
  return {
    props: {
      servicesData,
      recyclingGuideBlock,
      servicesBlock,
      quizAndTipsBlock,
      editoBlock,
      topContentBlock,
      newestTopContents,
      cookieBotCbid,
    },
  };
}
