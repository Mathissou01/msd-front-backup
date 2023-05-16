import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import "./guide-tri-content.scss";
import { ParsedUrlQuery } from "querystring";
import {
  GetRecyclingWasteFormItemByIdDocument,
  GetRecyclingWasteFormItemByIdQuery,
  GetWasteFormsPathsDocument,
  GetWasteFormsPathsQuery,
  WasteFormEntity,
} from "../../../../graphql/codegen/generated-types";
import EditoDynamicBlock from "../../../../components/Edito/EditoDynamicBlock";
import client from "../../../../graphql/client";
import EditoHeading from "../../../../components/Edito/EditoHeading/EditoHeading";
import { isEditoBlock } from "../../../../lib/edito-content";
import { removeNulls } from "../../../../lib/utilities";
import CommonBreadcrumb from "../../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";

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
    breadcrumbPages.push({ label: guidetriData?.attributes?.name, slug: "" });
  }

  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <section className="c-GuideTriContent">
        {/*TODO : Header of wasteForm*/}
        {guidetriData?.attributes?.name && (
          <EditoHeading
            title={guidetriData.attributes.name}
            tags={guidetriData.attributes.tags?.data}
          />
        )}
        {guidetriData?.attributes?.contentBlock &&
          guidetriData.attributes.contentBlock.length > 0 && (
            <div className="c-GuideTriContent__Blocks">
              {guidetriData.attributes.contentBlock.map(
                (contentBlock, index) => {
                  if (contentBlock && isEditoBlock(contentBlock)) {
                    return (
                      <EditoDynamicBlock
                        key={index}
                        type={contentBlock.__typename}
                        data={contentBlock}
                      />
                    );
                  }
                },
              )}
            </div>
          )}
      </section>
    </>
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

  const { data } = await client.query<GetWasteFormsPathsQuery>({
    query: GetWasteFormsPathsDocument,
    variables: { contractId },
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
