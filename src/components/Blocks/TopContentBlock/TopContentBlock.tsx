import React from "react";
import {
  GetNewestTopContentsQuery,
  TopContentBlockEntity,
} from "../../../graphql/codegen/generated-types";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import TopContentCard from "./TopContentCard/TopContentCard";
import CommonCardBlock from "../../Common/CommonCardBlock/CommonCardBlock";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./top-content-block.scss";

interface ITopContentBlock {
  data: TopContentBlockEntity;
  newestTopContents: GetNewestTopContentsQuery;
}

export default function TopContentBlock({
  data,
  newestTopContents,
}: ITopContentBlock) {
  /* Static Data */
  // TODO: temporarily static data, replace with real tags later
  const labelButton = "Voir plus d’actualités et d’événements";
  const defaultHref = "/edito/edito";

  /* Local Data */
  const hasTopContent = data.attributes?.hasTopContent;
  const contentTopNewsOrEvent =
    data?.attributes?.topContent?.data?.attributes?.news?.data?.attributes;
  const displayLastThreeContents = data.attributes?.displayLastThreeContents;
  const threeTopContents = newestTopContents?.getNewestTopContents;
  return (
    <section className="c-TopContentBlock">
      {data.attributes?.titleContent && (
        <CommonBlockHeading
          titleContent={data.attributes?.titleContent}
          isAlignLeft={true}
        />
      )}
      <div className="c-TopContentBlock__Content">
        {hasTopContent && contentTopNewsOrEvent && (
          <TopContentCard
            title={contentTopNewsOrEvent.title}
            shortDescription={contentTopNewsOrEvent.shortDescription ?? ""}
            date={contentTopNewsOrEvent.publishedAt}
            image={contentTopNewsOrEvent?.image.data ?? null}
            href={defaultHref}
          />
        )}
        {displayLastThreeContents &&
          threeTopContents &&
          threeTopContents.length > 0 && (
            <div className="c-TopContentBlock__LastThreeContents">
              {threeTopContents?.map((topContent, index) => (
                <CommonCardBlock
                  key={index}
                  title={topContent?.title ?? ""}
                  shortDescription={topContent?.shortDescription ?? ""}
                  date={topContent?.publishedAt}
                  image={topContent?.image ?? null}
                  href={defaultHref}
                />
              ))}
            </div>
          )}
      </div>
      <CommonButton label={labelButton} style="primary" />
    </section>
  );
}
