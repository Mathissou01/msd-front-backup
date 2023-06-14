import {
  EditoBlockEntity,
  QuizEntity,
  TipEntity,
  ComponentLinksEditoContent,
} from "../../../graphql/codegen/generated-types";
import {
  editoFields,
  EEditoTypeRoutes,
  isEditoType,
  TEditoTypes,
} from "../../../lib/edito-content";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonCardBlock from "../../Common/CommonCardBlock/CommonCardBlock";
import TipCard from "../QuizAndTipsBlock/TipCard/TipCard";
import "./edito-block.scss";

interface IEditoBlockProps {
  data: EditoBlockEntity;
}

export default function EditoBlock({ data }: IEditoBlockProps) {
  /* Static Data */
  const labels = {
    tag: "Astuce",
    knowMore: "En savoir plus",
  };
  /* Local Data */
  const titleContent = data.attributes?.titleContent ?? "";
  const editoContents = data.attributes?.editoContents ?? [];

  function renderCardType(
    content: TEditoTypes,
    typeBlock: keyof typeof EEditoTypeRoutes,
    index: number,
  ) {
    if (
      !isEditoType<TipEntity>(content, "TipEntity") &&
      typeBlock !== "tip" &&
      content.attributes?.title
    ) {
      return (
        <CommonCardBlock
          key={`editoContent_${content.id}_${index}`}
          title={content.attributes?.title}
          tags={content.attributes?.tags?.data}
          date={
            typeBlock === "event" ? content.attributes?.publishedDate : null
          }
          image={
            !isEditoType<QuizEntity>(content, "QuizEntity")
              ? content.attributes.image?.data?.attributes ?? null
              : null
          }
          href={
            typeBlock === "freeContent"
              ? `/${EEditoTypeRoutes[typeBlock]}/contenu/${content.id}`
              : `/${EEditoTypeRoutes[typeBlock]}/${content.id}`
          }
          isEventDisplay={typeBlock === "event"}
          isAlignTextCenter={typeBlock === "event"}
        />
      );
    } else if (
      isEditoType<TipEntity>(content, "TipEntity") &&
      typeBlock === "tip" &&
      content.id &&
      content.attributes?.shortDescription
    ) {
      return (
        <TipCard
          key={`editoContent_${content.id}_${index}`}
          href={`/${EEditoTypeRoutes.tip}/${content.id}`}
          tags={content.attributes.tags?.data}
          content={content.attributes.shortDescription}
          linkLabel={content.attributes.link ?? labels.knowMore}
          pictoUrl={content.attributes?.link ?? null}
        />
      );
    }
  }

  return (
    <section className="c-EditoBlock">
      <CommonBlockHeading titleContent={titleContent} isAlignLeft={true} />
      <div className="c-EditoBlock__Content">
        {editoContents?.map((editoContent, index) => {
          return editoFields.map((typeBlock) => {
            const content = (editoContent as ComponentLinksEditoContent)[
              typeBlock
            ]?.data;
            if (content) {
              return renderCardType(content, typeBlock, index);
            }
          });
        })}
      </div>
      <div className="c-EditoBlock__SvgContainer"></div>
    </section>
  );
}
