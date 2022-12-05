import client from "../graphql/client";
import {
  GetQuizAndTipsBlockDocument,
  GetQuizAndTipsBlockQuery,
  QuizAndTipsBlockEntity,
} from "../graphql/codegen/generated-types";
import useScreenWidth from "../lib/useScreenWidth";
import WelcomeBlock from "../components/Blocks/WelcomeBlock/WelcomeBlock";
import QuizAndTipsBlock from "../components/Blocks/QuizAndTipsBlock/QuizAndTipsBlock";
import "./home-page.scss";
import { extractQuizAndTipsBlock } from "../lib/graphql-data";

interface IHomePageProps {
  quizAndTipsBlock: QuizAndTipsBlockEntity;
}

export default function HomePage({ quizAndTipsBlock }: IHomePageProps) {
  /* StaticProps data */
  // TODO: should I also check if the relevant service is Active to display the block?
  const displayQuizAndTipsBlock = quizAndTipsBlock?.attributes?.displayBlock;
  /* Local Data */
  const { isDesktop } = useScreenWidth();

  // TODO: temporary styling to show structure of page in mobile/desktop, remove later
  return (
    <>
      <WelcomeBlock />
      <section
        className="o-Page__Section"
        style={{
          minHeight: isDesktop ? "357px" : "397px",
          backgroundColor: "#fff",
        }}
      >
        (Search)
      </section>
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
  const { data } = await client.query<GetQuizAndTipsBlockQuery>({
    query: GetQuizAndTipsBlockDocument,
    variables: { contractId },
  });
  const quizAndTipsBlock = extractQuizAndTipsBlock(data);

  return {
    props: {
      quizAndTipsBlock,
    }, // will be passed to the page component as props
  };
}
