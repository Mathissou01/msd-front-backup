import client from "../graphql/client";
import {
  RecyclingGuideBlockEntity,
  GetRecyclingGuideBlockByContractIdDocument,
  GetRecyclingGuideBlockByContractIdQuery,
  QuizAndTipsBlockEntity,
  GetQuizAndTipsBlockByContractIdDocument,
  GetQuizAndTipsBlockByContractIdQuery,
} from "../graphql/codegen/generated-types";
import {
  extractRecyclingGuideBlock,
  extractQuizAndTipsBlock,
} from "../lib/graphql-data";
import { useIsDesktopContext } from "../hooks/useScreenWidth";
import WelcomeBlock from "../components/Blocks/WelcomeBlock/WelcomeBlock";
import RecyclingGuideBlock from "../components/Blocks/RecyclingGuideBlock/RecyclingGuideBlock";
import QuizAndTipsBlock from "../components/Blocks/QuizAndTipsBlock/QuizAndTipsBlock";
import "./home-page.scss";

interface IHomePageProps {
  recyclingGuideBlock: RecyclingGuideBlockEntity;
  quizAndTipsBlock: QuizAndTipsBlockEntity;
}

export default function HomePage({
  recyclingGuideBlock,
  quizAndTipsBlock,
}: IHomePageProps) {
  /* StaticProps data */
  // TODO: check contract services to determine if blocks are displayed
  const displayRecyclingGuideBlock = !!recyclingGuideBlock;
  const displayQuizAndTipsBlock = quizAndTipsBlock?.attributes?.displayBlock;

  /* Local Data */
  const isDesktop = useIsDesktopContext();

  // TODO: temporary styling to show structure of page in mobile/desktop, remove later
  return (
    <>
      <WelcomeBlock />
      {displayRecyclingGuideBlock && (
        <RecyclingGuideBlock data={recyclingGuideBlock} />
      )}
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "447px" : "703px" }}
      >
        (Services)
      </section>
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "512px" : "881px" }}
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

  // TODO: get all services to check if enabled/disabled for the related blocks

  const { data: recyclingGuideBlockData } =
    await client.query<GetRecyclingGuideBlockByContractIdQuery>({
      query: GetRecyclingGuideBlockByContractIdDocument,
      variables: { contractId },
    });
  const { data: quizAndTipsBlockData } =
    await client.query<GetQuizAndTipsBlockByContractIdQuery>({
      query: GetQuizAndTipsBlockByContractIdDocument,
      variables: { contractId },
    });

  const recyclingGuideBlock = extractRecyclingGuideBlock(
    recyclingGuideBlockData,
  );
  const quizAndTipsBlock = extractQuizAndTipsBlock(quizAndTipsBlockData);

  return {
    props: {
      recyclingGuideBlock,
      quizAndTipsBlock,
    },
  };
}
