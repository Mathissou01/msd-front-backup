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
  quizAndTipsBlock: Array<QuizAndTipsBlockEntity> | null;
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
  // TODO: Check if the condition work properly
  const displayQuizAndTipsBlock =
    quizAndTipsBlock &&
    Object.values(quizAndTipsBlock)[0]?.attributes?.displayBlock &&
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
  // ----------------------------------------------------------------
  /* TODO: compare the id of quizAndTipsBlock to the currentAUdienceId to get the right block */
  // const { currentAudience } = useCurrentUser();
  // const currentAudienceId = currentAudience.id;
  // //
  // // find the QuizAndTipsBlockEntity that matches the currentAudienceId
  // const findMatchingQuizAndTipsBlock = (): QuizAndTipsBlockEntity[] => {
  //   if (currentAudienceId && quizAndTipsBlock[currentAudienceId]) {
  //     return [quizAndTipsBlock[currentAudienceId]];
  //   }
  //   return [];
  // };
  //
  // const matchingQuizAndTipsBlock = findMatchingQuizAndTipsBlock();
  //----------------------------------------------------------------
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
      {/* TODO: Check the structure of quizAndTipsBlock to fit with the data props */}
      {/*{displayQuizAndTipsBlock && matchingQuizAndTipsBlock && (*/}
      {/*  <QuizAndTipsBlock data={quizAndTipsBlock} />*/}
      {/*)}*/}
      {displayQuizAndTipsBlock && (
        <QuizAndTipsBlock data={quizAndTipsBlock[0]} />
      )}
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

  //----------------------------------------------------------------
  // TODO: This function is working properly, just need to rename the const and maybe modify it if needed
  // Task : Here we get the id of all the audiences and pass it the to "GetQuizAndTipsBlockQuery" to generate all the pages
  // of the blocks. Like the block for the "Particuliers", "Professional",... It return an object of here 3 objects with the id of the audiences in it.
  // Now we just need to compare the currentAudience.id of the user that is stock in the local storage and compare it with the object to display the right block.
  // Everything commented at the top of the pages is already setup but need to be finish and clean.
  // const { data: audiencesData } = await client.query<GetAudiencesIdQuery>({
  //   query: GetAudiencesIdDocument,
  //   variables: { contractId },
  // });
  //
  // const audiencesArrayId =
  //   audiencesData?.contract?.data?.attributes?.audiences?.data;
  //
  // const audienceId = audiencesArrayId?.map((x) => {
  //   return x.id;
  // });
  //
  // const quizAndTipsBlock: Record<string, QuizAndTipsBlockEntity> = {};
  // // Async function to use await inside the loop
  // const fetchDataForAudienceId = async (id: string) => {
  //   const { data: quizAndTipsBlockData } =
  //     await client.query<GetQuizAndTipsBlockQuery>({
  //       query: GetQuizAndTipsBlockDocument,
  //       variables: { contractId, audienceId: id },
  //     });
  //   const quizAndTipsBlockExtracted =
  //     extractQuizAndTipsBlock(quizAndTipsBlockData);
  //   if (quizAndTipsBlockExtracted) {
  //     quizAndTipsBlock[id] = quizAndTipsBlockExtracted;
  //   }
  //
  // };
  //
  // // Use loop to ensure await works as expected
  // for (const id of audienceId || []) {
  //   await fetchDataForAudienceId(id || "");
  // }
  //-------------------------------------------------------------

  const { data: quizAndTipsBlockData } =
    await client.query<GetQuizAndTipsBlockQuery>({
      query: GetQuizAndTipsBlockDocument,
      variables: { contractId, audienceId: "1" },
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
