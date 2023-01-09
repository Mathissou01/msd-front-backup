import React from "react";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../Common/CommonButton/CommonButton";
import {
  GetNewestTopContentsQuery,
  TopContentBlockEntity,
} from "../../../graphql/codegen/generated-types";
import CommonTopContentCard from "../../Common/CommonTopContentCard/CommonTopContentCard";
import "./top-content-block.scss";
import CommonCardBlock from "../../Common/CommonCardBlock/CommonCardBlock";

interface ITopContentBlock {
  data: TopContentBlockEntity;
  newestTopcontents: GetNewestTopContentsQuery;
}
export default function TopContentBlock({
  data,
  newestTopcontents,
}: ITopContentBlock) {
  /* Static Data */
  const defaultImage = "/images/images-temp/newsDesktop.jpg";
  const defaultImageMobile = "/images/images-temp/newsMobile.png";
  /* Local Data */
  const titleContent = data?.attributes?.titleContent || "";
  const contentTopNews =
    data?.attributes?.topContent?.data?.attributes?.news?.data?.attributes;
  const titleNews = contentTopNews?.title || "";
  const descriptionNews = contentTopNews?.shortDescription || "";
  const tags = contentTopNews?.tags?.data || [];
  const date = contentTopNews?.publishedAt;
  const threeTopContents = newestTopcontents?.getNewestTopContents;
  // TODO: temporarily static data, replace with real tags later
  const tagLabels = ["collecte", "dechets"];
  const labelButton = "Voir plus d’actualités et d’événements";
  return (
    <section className="c-TopContentBlock">
      <CommonBlockHeading titleContent={titleContent} isAlignLeft={true} />
      <CommonTopContentCard
        title={titleNews}
        description={descriptionNews}
        imageUrlDesktop={
          contentTopNews?.image?.data?.attributes?.url ?? defaultImage
        }
        imageUrlMobile={
          contentTopNews?.image?.data?.attributes?.url ?? defaultImageMobile
        }
        tags={tags}
        date={date}
      />
      <div className="c-TopContentBlock__RowCardsBlock">
        {threeTopContents?.map((topContent, index) => (
          <CommonCardBlock
            key={index}
            tagLabels={tagLabels}
            title={topContent?.title ?? ""}
            description={topContent?.shortDescription}
            date={topContent?.publishedAt}
            imageUrl={defaultImageMobile}
            href="/"
          />
        ))}
      </div>
      <CommonButton label={labelButton} style="primary" />
    </section>
  );
}
