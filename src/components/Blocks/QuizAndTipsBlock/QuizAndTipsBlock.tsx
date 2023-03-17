import { QuizAndTipsBlockEntity } from "../../../graphql/codegen/generated-types";
import TipsMobile from "public/images/mobile_astuces-section_bottom-right-angle.svg";
import TipsDesktop from "public/images/desktop_astuces-section_bottom-right-angle.svg";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import TipCard from "./TipCard/TipCard";
import "./quiz-and-tips-block.scss";

interface IQuizAndTipsBlockProps {
  data: QuizAndTipsBlockEntity;
}

export default function QuizAndTipsBlock({ data }: IQuizAndTipsBlockProps) {
  /* Static Data */
  const labels = {
    knowMore: "En savoir plus",
  };

  /* Local Data */
  const titleContent = data.attributes?.titleContent ?? "";
  const quiz = data.attributes?.quiz?.data ?? null;
  const tips = data.attributes?.tips?.data ?? [];
  const hasQuiz = !!quiz;
  const hasTips = !!tips && tips.length > 0;

  return (
    <>
      {(hasQuiz || hasTips) && (
        <section className="c-QuizAndTipsBlock">
          <CommonBlockHeading titleContent={titleContent} />
          {/* // TODO: only display tips version for now, add quiz only and quiz+tips version later */}
          {/*{hasQuiz && <div />}*/}
          {hasTips && (
            <div className="c-QuizAndTipsBlock__Tips">
              {tips?.map((tip, index) => {
                if (tip.attributes?.shortDescription) {
                  return (
                    <TipCard
                      key={`tip_${tip.id}_${index}`}
                      tags={tip.attributes.tags?.data}
                      content={tip.attributes.shortDescription}
                      linkLabel={tip.attributes.link ?? labels.knowMore}
                      pictoUrl={
                        tip.attributes.image.data?.attributes?.url ?? null
                      }
                    />
                  );
                }
              })}
              <div className="c-QuizAndTipsBlock__SvgContainer">
                <TipsDesktop className="c-QuizAndTipsBlock__Svg_desktop" />
                <TipsMobile className="c-QuizAndTipsBlock__Svg_mobile" />
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
