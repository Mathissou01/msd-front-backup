import React from "react";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../Common/CommonButton/CommonButton";
import TopContentCard from "./TopContentCard/TopContentCard";
import "./top-content-block.scss";
import { TopContentBlockEntity } from "../../../graphql/codegen/generated-types";

interface ITopContentBlock {
  data: TopContentBlockEntity;
}
export default function TopContentBlock({ data }: ITopContentBlock) {
  /* Static Data */
  const defaultImage = "/images/images-temp/newsDesktop.jpg";
  const defaultImageMobile = "/images/images-temp/newsMobile.png";
  /* Local Data */
  const titleContent = data?.attributes?.titleContent || "";
  const contentTopNews =
    data?.attributes?.topContent?.data?.attributes?.news?.data?.attributes;
  const titleNews = contentTopNews?.title || "";
  const descriptionNews = contentTopNews?.description || "";
  const tags = contentTopNews?.tags?.data || [];
  const date = contentTopNews?.publishedAt;

  const labelButton = "Voir plus d’actualités et d’événements";
  return (
    <section className="c-TopContentBlock">
      <CommonBlockHeading titleContent={titleContent} isAlignLeft={true} />
      <TopContentCard
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
      <CommonButton label={labelButton} style="primary" />
    </section>
  );
}
