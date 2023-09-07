import Link from "next/link";
import React from "react";
import {
  ComponentLinksTopContent,
  EventEntity,
  GetNewestTopContentsQuery,
  NewEntity,
  TopContentBlockEntity,
} from "../../../graphql/codegen/generated-types";
import { EEditoTypeRoutes } from "../../../lib/edito-content";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import TopContentCard from "./TopContentCard/TopContentCard";
import CommonCardBlock from "../../Common/CommonCardBlock/CommonCardBlock";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./top-content-block.scss";
import { removeNulls } from "../../../lib/utilities";

interface NewEntityWithType extends NewEntity {
  type: keyof typeof EEditoTypeRoutes;
}

interface EventEntityWithType extends EventEntity {
  type: keyof typeof EEditoTypeRoutes;
}

interface ITopContentBlock {
  data: TopContentBlockEntity;
  newestTopContents?: GetNewestTopContentsQuery;
}

export default function TopContentBlock({
  data,
  newestTopContents,
}: ITopContentBlock) {
  /* Static Data */
  const labelButton = "Voir plus d’actualités et d’événements";
  const newsAndEventsSlug = "/actualites-evenements";

  /* Local Data */
  const hasTopContent = data.attributes?.hasTopContent;
  let contentTopNewsOrEvent: NewEntityWithType | EventEntityWithType | null =
    null;
  if (data.attributes?.topContent?.[0]) {
    const topContent: ComponentLinksTopContent = data.attributes
      .topContent[0] as ComponentLinksTopContent;
    contentTopNewsOrEvent = topContent?.new?.data
      ? {
          ...topContent.new.data,
          type: "new",
        }
      : topContent?.event?.data
      ? {
          ...topContent.event.data,
          type: "event",
        }
      : null;
  }
  const displayLastThreeContents = data.attributes?.displayLastThreeContents;
  const threeTopContents =
    newestTopContents?.getNewestTopContents?.filter(removeNulls) ?? [];

  return (
    <section className="c-TopContentBlock">
      {data.attributes?.titleContent && (
        <CommonBlockHeading
          titleContent={data.attributes?.titleContent}
          isAlignLeft={true}
        />
      )}
      <div className="c-TopContentBlock__Content">
        {hasTopContent &&
          contentTopNewsOrEvent &&
          contentTopNewsOrEvent.attributes?.title && (
            <TopContentCard
              title={contentTopNewsOrEvent.attributes?.title}
              shortDescription={
                contentTopNewsOrEvent.attributes?.shortDescription
              }
              tags={contentTopNewsOrEvent.attributes.tags?.data}
              date={contentTopNewsOrEvent.attributes?.publishedDate}
              image={contentTopNewsOrEvent?.attributes?.image?.data ?? null}
              href={`/${EEditoTypeRoutes[contentTopNewsOrEvent.type]}/${
                contentTopNewsOrEvent.id
              }`}
            />
          )}
        {displayLastThreeContents &&
          threeTopContents &&
          threeTopContents.length > 0 && (
            <div className="c-TopContentBlock__LastThreeContents">
              {threeTopContents.map((topContent, index) => {
                if (
                  topContent?.type &&
                  topContent?.originalId &&
                  topContent?.title &&
                  topContent.shortDescription
                ) {
                  return (
                    <CommonCardBlock
                      key={index}
                      title={topContent.title}
                      shortDescription={topContent.shortDescription}
                      tags={topContent?.tags
                        ?.map((tag) => {
                          if (tag?.name) {
                            return { attributes: { ...tag } };
                          }
                        })
                        .filter(removeNulls)}
                      date={topContent.publishedDate}
                      image={topContent?.image ?? null}
                      href={`/${EEditoTypeRoutes[topContent.type]}/${
                        topContent.originalId
                      }`}
                    />
                  );
                }
              })}
            </div>
          )}
      </div>
      <Link href={newsAndEventsSlug}>
        <CommonButton label={labelButton} style="primary" />
      </Link>
    </section>
  );
}
