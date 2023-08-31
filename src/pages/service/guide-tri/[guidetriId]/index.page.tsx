import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import {
  GetRecyclingWasteFormItemByIdDocument,
  GetRecyclingWasteFormItemByIdQuery,
  GetWasteFormsPathsDocument,
  GetWasteFormsPathsQuery,
  GetWasteFormsPathsTotalDocument,
  GetWasteFormsPathsTotalQuery,
  WasteFormEntity,
} from "../../../../graphql/codegen/generated-types";
import EditoDynamicBlock from "../../../../components/Edito/EditoDynamicBlock";
import client from "../../../../graphql/client";
import { isEditoBlock } from "../../../../lib/edito-content";
import { removeNulls } from "../../../../lib/utilities";
import CommonMeta from "../../../../components/Common/CommonMeta/CommonMeta";
import CommonBreadcrumb from "../../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import WasteHeading from "../../../../components/Guide-tri/WasteHeading/WasteHeading";
import "./guide-tri-content.scss";

interface IGuideTriPageProps {
  guidetriData: WasteFormEntity | null | undefined;
}

interface Params extends ParsedUrlQuery {
  guidetriId: string;
}

export default function ServiceGuideTriPage({
  guidetriData,
}: IGuideTriPageProps) {
  /* Local Data */
  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Guide du tri",
      slug: "/service/guide-tri/",
    },
  ];
  if (guidetriData?.attributes?.name) {
    breadcrumbPages.push({ label: guidetriData.attributes.name, slug: "" });
  }

  return (
    <section className="c-GuideTriContent">
      <CommonMeta title={guidetriData?.attributes?.name ?? ""} />
      <CommonBreadcrumb pages={breadcrumbPages} />
      {guidetriData?.attributes?.name && (
        <WasteHeading
          title={guidetriData.attributes.name}
          picto={guidetriData.attributes.picto}
          gestureText={guidetriData.attributes.recyclingGestureText}
          flowData={guidetriData.attributes.flow?.data ?? {}}
          collectItems={guidetriData.attributes.flow?.data?.attributes}
        />
      )}
      {guidetriData?.attributes?.contentBlock &&
        guidetriData.attributes.contentBlock.length > 0 && (
          <div className="c-GuideTriContent__Blocks">
            {guidetriData.attributes.contentBlock.map((contentBlock, index) => {
              if (contentBlock && isEditoBlock(contentBlock)) {
                return (
                  <EditoDynamicBlock
                    key={index}
                    type={contentBlock.__typename}
                    data={contentBlock}
                  />
                );
              }
            })}
          </div>
        )}
    </section>
  );
}

export const getStaticProps: GetStaticProps<
  IGuideTriPageProps,
  Params
> = async ({ params }) => {
  const wasteFormId = params?.guidetriId;

  const { data } = await client.query<GetRecyclingWasteFormItemByIdQuery>({
    query: GetRecyclingWasteFormItemByIdDocument,
    variables: { wasteFormId },
  });
  const guidetriData = data.wasteForm?.data;
  return {
    props: {
      guidetriData,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data: totalData } = await client.query<GetWasteFormsPathsTotalQuery>({
    query: GetWasteFormsPathsTotalDocument,
    variables: { contractId },
  });
  const { data } = await client.query<GetWasteFormsPathsQuery>({
    query: GetWasteFormsPathsDocument,
    variables: {
      contractId,
      total: totalData.wasteForms?.meta.pagination.total,
    },
  });

  const wasteForms = data.wasteForms?.data.filter(removeNulls) ?? [];
  const paths = wasteForms
    .map((guidetriData) => {
      if (guidetriData.id) {
        return {
          params: {
            guidetriId: guidetriData.id,
          },
        };
      }
    })
    .filter(removeNulls);
  return {
    paths,
    fallback: false,
  };
};
