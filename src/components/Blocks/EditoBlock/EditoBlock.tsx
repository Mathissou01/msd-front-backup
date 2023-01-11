import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import "./edito-block.scss";
import {
  EditoBlockEntity,
  EditoContentEntity,
  TagEntity,
} from "../../../graphql/codegen/generated-types";
import TipCard from "../QuizAndTipsBlock/TipCard/TipCard";
import "../QuizAndTipsBlock/TipCard/tip-card.scss";
import CommonCardBlock from "../../Common/CommonCardBlock/CommonCardBlock";

interface IEditoBlockProps {
  data: EditoBlockEntity;
}

export default function EditoBlock({ data }: IEditoBlockProps) {
  /* Static Data */
  const defaultImage = "/images/images-temp/default_editoCard.svg";
  const labels = {
    tag: "Astuce",
    knowMore: "En savoir plus",
  };
  /* Local Data */
  const titleContent = data.attributes?.titleContent || "";
  const editoContents = data.attributes?.editoContents?.data || [];

  function handleTagLabel(tags: Array<TagEntity>) {
    const tagsLabel = tags?.map((tag) => tag.attributes?.name);
    return tagsLabel || [];
  }

  function renderCardType(
    editoContent: EditoContentEntity,
    typeBlock: string,
    index: number,
  ) {
    const contentAttributes = editoContent.attributes || [];
    const contentDataAttributes = Object.entries(contentAttributes).filter(
      (entry) => entry[0] === `${typeBlock}`,
    )[0][1].data?.attributes;
    if (contentDataAttributes && typeBlock !== "tip") {
      return (
        <CommonCardBlock
          key={`editoContent_${editoContent.id}_${index}`}
          tagLabels={
            handleTagLabel(contentDataAttributes?.tags?.data) as string[]
          }
          title={contentDataAttributes?.title}
          imageUrl={defaultImage}
          href={""}
        />
      );
    } else if (contentDataAttributes && typeBlock === "tip") {
      return (
        <div className="c-QuizAndTipsBlock__Tips">
          <TipCard
            tagLabel={labels.tag}
            content={contentDataAttributes.title || ""}
            linkLabel={labels.knowMore}
            pictoUrl={contentDataAttributes.link || null}
          />
        </div>
      );
    }
  }

  function handleContentsByType(editoContents: EditoContentEntity[]) {
    return editoContents?.map((editoContent, index) => {
      return ["news", "event", "freeContent", "quiz", "tip"].map(
        (typeBlock) => {
          return renderCardType(editoContent, typeBlock, index);
        },
      );
    });
  }

  return (
    <section className="c-EditoBlock">
      <CommonBlockHeading titleContent={titleContent} />
      {
        <div className="c-EditoBlock__Content">
          {handleContentsByType(editoContents)}
        </div>
      }
      <div className="c-EditoBlock__SvgContainer"></div>
    </section>
  );
}
