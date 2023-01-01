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
  EditoBlockEntity,
  GetEditoBlockQuery,
  GetEditoBlockDocument,
  GetTopContentBlockQuery,
  GetTopContentBlockDocument,
  TopContentBlockEntity,
  GetNewestTopContentsQuery,
  GetNewestTopContentsDocument,
} from "../graphql/codegen/generated-types";
import {
  extractRecyclingGuideBlock,
  extractQuizAndTipsBlock,
  remapServiceLinksDynamicZone,
  IRemappedServiceBlock,
  extractTopContentBlock,
  extractEditoBlock,
} from "../lib/graphql-data";
import { useIsDesktopContext } from "../hooks/useScreenWidth";
import WelcomeBlock from "../components/Blocks/WelcomeBlock/WelcomeBlock";
import RecyclingGuideBlock from "../components/Blocks/RecyclingGuideBlock/RecyclingGuideBlock";
import ServicesBlock from "../components/Blocks/ServicesBlock/ServicesBlock";
import QuizAndTipsBlock from "../components/Blocks/QuizAndTipsBlock/QuizAndTipsBlock";
import TopContentBlock from "../components/Blocks/TopContentBlock/TopContentBlock";
import EditoBlock from "../components/Blocks/EditoBlock/EditoBlock";

interface IHomePageProps {
  servicesData: GetServicesActiveQuery;
  recyclingGuideBlock: RecyclingGuideBlockEntity | null;
  servicesBlock: IRemappedServiceBlock;
  quizAndTipsBlock: QuizAndTipsBlockEntity | null;
  topContentBlock: TopContentBlockEntity | null;
  newestTopcontents: GetNewestTopContentsQuery;
  editoBlock: EditoBlockEntity | null;
}

export default function HomePage({
  servicesData,
  recyclingGuideBlock,
  servicesBlock,
  quizAndTipsBlock,
  topContentBlock,
  newestTopcontents,
  editoBlock,
}: IHomePageProps) {
  /* StaticProps data */
  const displayRecyclingGuideBlock =
    !!recyclingGuideBlock &&
    servicesData.recyclingGuideServices?.data[0]?.attributes?.isActivated;
  const displayServicesBlock = !!servicesBlock;
  const displayQuizAndTipsBlock =
    quizAndTipsBlock?.attributes?.displayBlock &&
    (servicesData.editorialServices?.data[0]?.attributes?.quizSubService?.data
      ?.attributes?.isActivated ||
      servicesData.editorialServices?.data[0]?.attributes?.tipSubService?.data
        ?.attributes?.isActivated);
  const displayEditoBlock = !!editoBlock;
  const displayTopContentBlock = !!topContentBlock;
  /* Local Data */
  const isDesktop = useIsDesktopContext();

  // TODO: temporary styling to show structure of page in mobile/desktop, remove later
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
          newestTopcontents={newestTopcontents}
        />
      )}
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "1205px" : "2285px" }}
      >
        (Headlines)
      </section>
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
  const servicesBlock = remapServiceLinksDynamicZone(servicesBlockData);

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

  const { data: newestTopcontents } =
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
      topContentBlock,
      newestTopcontents,
      editoBlock,
    },
  };
}
