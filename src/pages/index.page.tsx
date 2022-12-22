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
} from "../graphql/codegen/generated-types";
import {
  extractRecyclingGuideBlock,
  extractQuizAndTipsBlock,
  remapServiceLinksDynamicZone,
  IRemappedServiceBlock,
} from "../lib/graphql-data";
import { useIsDesktopContext } from "../hooks/useScreenWidth";
import WelcomeBlock from "../components/Blocks/WelcomeBlock/WelcomeBlock";
import RecyclingGuideBlock from "../components/Blocks/RecyclingGuideBlock/RecyclingGuideBlock";
import ServicesBlock from "../components/Blocks/ServicesBlock/ServicesBlock";
import QuizAndTipsBlock from "../components/Blocks/QuizAndTipsBlock/QuizAndTipsBlock";

interface IHomePageProps {
  servicesData: GetServicesActiveQuery;
  recyclingGuideBlock: RecyclingGuideBlockEntity | null;
  servicesBlock: IRemappedServiceBlock;
  quizAndTipsBlock: QuizAndTipsBlockEntity | null;
}

export default function HomePage({
  servicesData,
  recyclingGuideBlock,
  servicesBlock,
  quizAndTipsBlock,
}: IHomePageProps) {
  /* StaticProps data */
  const displayRecyclingGuideBlock =
    !!recyclingGuideBlock &&
    servicesData.recyclingGuideServices?.data[0].attributes?.isActivated;
  const displayServicesBlock = !!servicesBlock;
  const displayQuizAndTipsBlock =
    quizAndTipsBlock?.attributes?.displayBlock &&
    (servicesData.editorialServices?.data[0].attributes?.quizSubService?.data
      ?.attributes?.isActivated ||
      servicesData.editorialServices?.data[0].attributes?.tipSubService?.data
        ?.attributes?.isActivated);

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
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "512px" : "auto" }}
      >
        (KeyMetric)
      </section>
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "1205px" : "2285px" }}
      >
        (Headlines)
      </section>
      {displayQuizAndTipsBlock && <QuizAndTipsBlock data={quizAndTipsBlock} />}
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "592px" : "1204px" }}
      >
        (Edito)
      </section>
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

  return {
    props: {
      servicesData,
      recyclingGuideBlock,
      servicesBlock,
      quizAndTipsBlock,
    },
  };
}
