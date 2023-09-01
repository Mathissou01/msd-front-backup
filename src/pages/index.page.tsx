import { useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import client from "../graphql/client";
import {
  EditoBlockEntity,
  GetAudiencesIdDocument,
  GetAudiencesIdQuery,
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
  GetWelcomeMessageBlockDocument,
  GetWelcomeMessageBlockQuery,
  QuizAndTipsBlockEntity,
  RecyclingGuideBlockEntity,
  TopContentBlockEntity,
  WelcomeMessageBlockEntity,
} from "../graphql/codegen/generated-types";
import {
  extractEditoBlock,
  extractQuizAndTipsBlock,
  extractRecyclingGuideBlock,
  extractServicesBlock,
  extractTopContentBlock,
  extractWelcomeMessageBlock,
} from "../lib/graphql-data";
import { IServiceLink } from "../lib/service-links";
import { useCurrentUser } from "../hooks/useCurrentUser";
import WelcomeBlock from "../components/Blocks/WelcomeBlock/WelcomeBlock";
import ServicesBlock from "../components/Blocks/ServicesBlock/ServicesBlock";
import QuizAndTipsBlock from "../components/Blocks/QuizAndTipsBlock/QuizAndTipsBlock";
import TopContentBlock from "../components/Blocks/TopContentBlock/TopContentBlock";
import EditoBlock from "../components/Blocks/EditoBlock/EditoBlock";
import SearchEngineBlock from "../components/Blocks/SearchEngineBlock/SearchEngineBlock";

interface IServicesBlock {
  titleContent: string | null;
  serviceLinks: Array<IServiceLink> | null;
  audience: string;
}

interface IHomePageProps {
  servicesData: GetServicesActiveQuery;
  welcomeMessageBlock: WelcomeMessageBlockEntity | null;
  recyclingGuideBlock: RecyclingGuideBlockEntity | null;
  servicesBlocks: Array<IServicesBlock>;
  quizAndTipsBlocks: Array<QuizAndTipsBlockEntity> | null;
  editoBlocks: Array<EditoBlockEntity> | null;
  topContentBlocks: Array<TopContentBlockEntity> | null;
  newestTopContentBlocks: Array<GetNewestTopContentsQuery> | null;
  cookieBotCbid: string;
}

export default function HomePage({
  servicesData,
  welcomeMessageBlock,
  recyclingGuideBlock,
  servicesBlocks,
  quizAndTipsBlocks,
  editoBlocks,
  topContentBlocks,
  newestTopContentBlocks,
  cookieBotCbid,
}: IHomePageProps) {
  /* Static Data */
  const scriptUrl = `https://consent.cookiebot.com/uc.js`;

  /* Methods */
  function handleChangeRecyclingGuideSearchTerm(data: string) {
    setRecyclingGuideSearchTerm(data);
  }

  function onRecyclingGuideSubmit() {
    router.push({
      pathname: "/service/guide-tri",
      query: { search: recyclingGuideSearchTerm },
    });
  }

  /* Local Data */
  const router = useRouter();
  const { currentAudience } = useCurrentUser();
  const currentAudienceId = +currentAudience.id;
  const [recyclingGuideSearchTerm, setRecyclingGuideSearchTerm] = useState("");

  /* StaticProps data */
  const displayWelcomeMessageBlock = welcomeMessageBlock?.attributes?.showBlock;
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
  const servicesBlock = servicesBlocks
    ? Object.values(servicesBlocks).filter(
        (servicesBlock: IServicesBlock) =>
          +servicesBlock.audience === currentAudienceId,
      )[0]
    : null;
  const displayServicesBlock =
    servicesBlock?.titleContent && editorialServicesActivated;
  const quizAndTipsBlock = quizAndTipsBlocks
    ? Object.values(quizAndTipsBlocks).filter((quizAndTipsBlock) =>
        quizAndTipsBlock.attributes?.audience?.data?.id
          ? +quizAndTipsBlock.attributes.audience.data.id === currentAudienceId
          : false,
      )[0]
    : null;
  const displayQuizAndTipsBlock =
    quizAndTipsBlock &&
    quizAndTipsBlock?.attributes?.displayBlock &&
    (servicesData.editorialServices?.data[0]?.attributes?.quizSubService?.data
      ?.attributes?.isActivated ||
      servicesData.editorialServices?.data[0]?.attributes?.tipSubService?.data
        ?.attributes?.isActivated);
  const editoBlock = editoBlocks
    ? Object.values(editoBlocks).filter((editoBlock) =>
        editoBlock.attributes?.audience?.data?.id
          ? +editoBlock.attributes.audience.data.id === currentAudienceId
          : false,
      )[0]
    : null;
  const displayEditoBlock =
    !!editoBlock?.attributes?.displayBlock && editorialServicesActivated;
  const topContentBlock = topContentBlocks
    ? Object.values(topContentBlocks).filter((topContentBlock) =>
        topContentBlock.attributes?.audience?.data?.id
          ? +topContentBlock.attributes.audience.data.id === currentAudienceId
          : false,
      )[0]
    : null;
  const displayTopContentBlock =
    !!topContentBlock?.attributes?.displayBlock &&
    (servicesData.editorialServices?.data[0]?.attributes?.eventSubService?.data
      ?.attributes?.isActivated ||
      servicesData.editorialServices?.data[0]?.attributes?.newsSubService?.data
        ?.attributes?.isActivated);

  return (
    <>
      <Script
        data-blockingmode="auto"
        data-cbid={cookieBotCbid}
        id="Cookiebot"
        src={scriptUrl}
        type="text/javascript"
      ></Script>
      {displayWelcomeMessageBlock && (
        <WelcomeBlock
          title={welcomeMessageBlock.attributes?.title ?? ""}
          subtitle={welcomeMessageBlock.attributes?.subtitle ?? ""}
        />
      )}
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
      {displayServicesBlock && servicesBlock && (
        <ServicesBlock remappedData={servicesBlock} />
      )}
      {displayTopContentBlock && topContentBlock && (
        <TopContentBlock
          data={topContentBlock}
          newestTopContents={
            newestTopContentBlocks
              ? newestTopContentBlocks[currentAudienceId]
              : undefined
          }
        />
      )}
      {displayQuizAndTipsBlock && quizAndTipsBlock && (
        <QuizAndTipsBlock data={quizAndTipsBlock} />
      )}
      {displayEditoBlock && editoBlock && <EditoBlock data={editoBlock} />}
    </>
  );
}

export async function getStaticProps() {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data: servicesData } = await client.query<GetServicesActiveQuery>({
    query: GetServicesActiveDocument,
    variables: { contractId },
  });

  const { data: welcomeMessageBlockData } =
    await client.query<GetWelcomeMessageBlockQuery>({
      query: GetWelcomeMessageBlockDocument,
      variables: { contractId },
    });
  const welcomeMessageBlock = extractWelcomeMessageBlock(
    welcomeMessageBlockData,
  );

  const { data: recyclingGuideBlockData } =
    await client.query<GetRecyclingGuideBlockQuery>({
      query: GetRecyclingGuideBlockDocument,
      variables: { contractId },
    });
  const recyclingGuideBlock = extractRecyclingGuideBlock(
    recyclingGuideBlockData,
  );

  const { data: audiencesData } = await client.query<GetAudiencesIdQuery>({
    query: GetAudiencesIdDocument,
    variables: { contractId },
  });
  const audiencesArrayId =
    audiencesData?.contract?.data?.attributes?.audiences?.data;

  const audienceIds =
    audiencesArrayId?.map((x) => {
      return x.id;
    }) ?? [];

  const servicesBlocks: Record<string, IServicesBlock> = {};
  const quizAndTipsBlocks: Record<string, QuizAndTipsBlockEntity> = {};
  const topContentBlocks: Record<string, TopContentBlockEntity> = {};
  const editoBlocks: Record<string, EditoBlockEntity> = {};
  const newestTopContentsBlocks: Record<string, GetNewestTopContentsQuery> = {};
  const fetchDataForAudienceId = async (id: string) => {
    const variables = { contractId, audienceId: id };
    const { data: servicesBlockData } =
      await client.query<GetServicesBlockQuery>({
        query: GetServicesBlockDocument,
        variables,
      });
    const servicesBlockExtracted = extractServicesBlock(servicesBlockData);
    if (servicesBlockExtracted) {
      servicesBlocks[id] = servicesBlockExtracted;
    }

    const { data: quizAndTipsBlockData } =
      await client.query<GetQuizAndTipsBlockQuery>({
        query: GetQuizAndTipsBlockDocument,
        variables,
      });
    const quizAndTipsBlockExtracted =
      extractQuizAndTipsBlock(quizAndTipsBlockData);
    if (quizAndTipsBlockExtracted) {
      quizAndTipsBlocks[id] = quizAndTipsBlockExtracted;
    }

    const { data: topContentBlockData } =
      await client.query<GetTopContentBlockQuery>({
        query: GetTopContentBlockDocument,
        variables,
      });
    const topContentBlockExtracted =
      extractTopContentBlock(topContentBlockData);
    if (topContentBlockExtracted) {
      topContentBlocks[id] = topContentBlockExtracted;
    }

    const { data: editoBlockData } = await client.query<GetEditoBlockQuery>({
      query: GetEditoBlockDocument,
      variables,
    });
    const editoBlockExtracted = extractEditoBlock(editoBlockData);
    if (editoBlockExtracted) {
      editoBlocks[id] = editoBlockExtracted;
    }

    const { data: newestTopContents } =
      await client.query<GetNewestTopContentsQuery>({
        query: GetNewestTopContentsDocument,
        variables,
      });

    newestTopContentsBlocks[id] = newestTopContents;
  };

  for (const id of audienceIds) {
    if (id) {
      await fetchDataForAudienceId(id);
    }
  }

  const cookieBotCbid = process.env.COOKIE_BOT_CBID?.toString();
  return {
    props: {
      servicesData,
      welcomeMessageBlock,
      recyclingGuideBlock,
      servicesBlocks,
      quizAndTipsBlocks,
      editoBlocks,
      topContentBlocks,
      newestTopContentsBlocks,
      cookieBotCbid,
    },
  };
}
