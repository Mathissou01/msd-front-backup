import Link from "next/link";
import React from "react";
import {
  GetNewestTopContentsQuery,
  TopContentBlockEntity,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
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
  const labelButton = "Voir plus d’actualités et d’événements";
  const defaultHref = `/actualites-evenements`;
  /* Local Data */
  const hasTopContent = data.attributes?.hasTopContent;
  const contentTopNewsOrEvent =
    data?.attributes?.topContent?.data?.attributes?.news?.data;
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
                contentTopNewsOrEvent.attributes?.shortDescription ?? ""
              }
              tags={contentTopNewsOrEvent.attributes.tags?.data}
              date={contentTopNewsOrEvent.attributes?.publishedDate}
              image={contentTopNewsOrEvent?.attributes?.image?.data ?? null}
              href={`${defaultHref}/${contentTopNewsOrEvent.id}`}
            />
          )}
        {displayLastThreeContents &&
          threeTopContents &&
          threeTopContents.length > 0 && (
            <div className="c-TopContentBlock__LastThreeContents">
              {threeTopContents.map((topContent, index) => {
                if (
                  topContent?.originalId &&
                  topContent?.title &&
                  topContent.shortDescription
                ) {
                  return (
                    <CommonCardBlock
                      key={index}
                      title={topContent.title}
                      shortDescription={topContent.shortDescription}
                      date={topContent.publishedDate}
                      tagLabels={topContent.tags?.filter(removeNulls) ?? []}
                      image={topContent?.image ?? null}
                      href={`${defaultHref}/${topContent.originalId}`}
                    />
                  );
                }
              })}
            </div>
          )}
      </div>
      <Link href={defaultHref}>
        <CommonButton label={labelButton} style="primary" />
      </Link>
    </section>
  );
}
