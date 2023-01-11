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
  newestTopContents: GetNewestTopContentsQuery;
}
export default function TopContentBlock({
  data,
  newestTopContents,
}: ITopContentBlock) {
  /* Static Data */
  const defaultImage = "/images/images-temp/newsDesktop.jpg";
  const defaultImageMobile = "/images/images-temp/newsMobile.png";

  // TODO: temporarily static data, replace with real tags later
  const labelButton = "Voir plus d’actualités et d’événements";
  const defaultHref = "/";

  /* Local Data */
  const titleContent = data?.attributes?.titleContent ?? "";
  const hasTopContent = data.attributes?.hasTopContent;
  const displayLastThreeContents = data.attributes?.displayLastThreeContents;
  const contentTopNewsOrEvent =
    data?.attributes?.topContent?.data?.attributes?.news?.data?.attributes;
  const titleNews = contentTopNewsOrEvent?.title ?? "";
  const descriptionNews = contentTopNewsOrEvent?.shortDescription ?? "";
  const date = contentTopNewsOrEvent?.publishedAt ?? "";
  const threeTopContents = newestTopContents?.getNewestTopContents;

  return (
    <section className="c-TopContentBlock">
      <CommonBlockHeading titleContent={titleContent} isAlignLeft={true} />
      {hasTopContent && (
        <CommonTopContentCard
          title={titleNews}
          redirectUrl={defaultHref}
          description={descriptionNews}
          imageUrlDesktop={
            contentTopNewsOrEvent?.image?.data?.attributes?.url ?? defaultImage
          }
          imageUrlMobile={
            contentTopNewsOrEvent?.image?.data?.attributes?.url ??
            defaultImageMobile
          }
          date={date}
        />
      )}
      {displayLastThreeContents && (
        <div className="c-TopContentBlock__RowCardsBlock">
          {threeTopContents?.map((topContent, index) => (
            <CommonCardBlock
              key={index}
              title={topContent?.title ?? ""}
              description={topContent?.shortDescription}
              date={topContent?.publishedAt}
              imageUrl={defaultImageMobile}
              href={defaultHref}
            />
          ))}
        </div>
      )}
      <CommonButton label={labelButton} style="primary" />
    </section>
  );
}
