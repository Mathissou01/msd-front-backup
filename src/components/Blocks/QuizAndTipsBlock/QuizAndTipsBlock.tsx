import { QuizAndTipsBlockEntity } from "../../../graphql/codegen/generated-types";
import TipsBoy from "public/images/Tips-boy.svg";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import TipCard from "./TipCard/TipCard";
import "./quiz-and-tips-block.scss";

interface IQuizAndTipsBlockProps {
  data: QuizAndTipsBlockEntity;
}

export default function QuizAndTipsBlock({ data }: IQuizAndTipsBlockProps) {
  /* Static Data */
  const labels = {
    tag: "Astuce",
    knowMore: "En savoir plus",
  };

  /* Local Data */
  const blockTitle = data.attributes?.title ?? "";
  const quiz = data.attributes?.quiz?.data ?? null;
  const tips = data.attributes?.tips?.data ?? [];
  const hasQuiz = !!quiz;
  const hasTips = !!tips && tips.length > 0;

  return (
    <>
      {(hasQuiz || hasTips) && (
        <section className="c-QuizAndTipsBlock">
          <CommonBlockHeading blockTitle={blockTitle} />
          {/* // TODO: only display tips version for now, add quiz only and quiz+tips version later */}
          {/*{hasQuiz && <div />}*/}
          {hasTips && (
            <div className="c-QuizAndTipsBlock__Tips">
              {tips?.map((tip, index) => (
                <TipCard
                  key={`tip_${tip.id}_${index}`}
                  tagLabel={labels.tag}
                  content={tip.attributes?.title ?? ""}
                  linkLabel={labels.knowMore}
                  pictoUrl={tip.attributes?.link ?? null}
                />
              ))}
              <div className="c-QuizAndTipsBlock__TipsSvg">
                <TipsBoy />
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
