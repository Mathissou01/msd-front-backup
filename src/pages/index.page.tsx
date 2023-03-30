import client from "../graphql/client";
import {
  RecyclingGuideBlockEntity,
  QuizAndTipsBlockEntity,
  GetServicesBlockQuery,
  GetServicesBlockDocument,
  GetServicesActiveDocument,
  GetServicesActiveQuery,
  GetQuizAndTipsBlockQuery,
  GetQuizAndTipsBlockDocument,
  GetRecyclingGuideBlockQuery,
  GetRecyclingGuideBlockDocument,
  GetTopContentBlockQuery,
  GetTopContentBlockDocument,
  TopContentBlockEntity,
  EditoBlockEntity,
  GetEditoBlockQuery,
  GetEditoBlockDocument,
  GetNewestTopContentsDocument,
  GetNewestTopContentsQuery,
} from "../graphql/codegen/generated-types";
import {
  extractRecyclingGuideBlock,
  extractQuizAndTipsBlock,
  extractTopContentBlock,
  extractEditoBlock,
  extractServicesBlock,
} from "../lib/graphql-data";
import { IServiceLink } from "../lib/service-links";
import WelcomeBlock from "../components/Blocks/WelcomeBlock/WelcomeBlock";
import RecyclingGuideBlock from "../components/Blocks/RecyclingGuideBlock/RecyclingGuideBlock";
import ServicesBlock from "../components/Blocks/ServicesBlock/ServicesBlock";
import QuizAndTipsBlock from "../components/Blocks/QuizAndTipsBlock/QuizAndTipsBlock";
import TopContentBlock from "../components/Blocks/TopContentBlock/TopContentBlock";
import EditoBlock from "../components/Blocks/EditoBlock/EditoBlock";

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
}

export default function HomePage({
  servicesData,
  recyclingGuideBlock,
  servicesBlock,
  quizAndTipsBlock,
  editoBlock,
  topContentBlock,
  newestTopContents,
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

  return (
    <>
      <WelcomeBlock />
      {displayRecyclingGuideBlock && (
        <RecyclingGuideBlock data={recyclingGuideBlock} />
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

  return {
    props: {
      servicesData,
      recyclingGuideBlock,
      servicesBlock,
      quizAndTipsBlock,
      editoBlock,
      topContentBlock,
      newestTopContents,
    },
  };
}
