import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import client from "../../../../graphql/client";
import {
  FreeContentEntity,
  GetFreeContentByIdDocument,
  GetFreeContentByIdQuery,
  GetFreeContentsPathsDocument,
  GetFreeContentsPathsQuery,
  GetFreeContentsPathsTotalDocument,
  GetFreeContentsPathsTotalQuery,
} from "../../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../../lib/utilities";
import EditoDynamicBlock from "../../../../components/Edito/EditoDynamicBlock";
import CommonBreadcrumb from "../../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import { isEditoBlock } from "../../../../lib/edito-content";
import EditoHeading from "../../../../components/Edito/EditoHeading/EditoHeading";

interface Params extends ParsedUrlQuery {
  freeContentId: string;
}

interface IFreeContentPageProps {
  freeContentData: FreeContentEntity | null | undefined;
}

export default function FreeContentPage({
  freeContentData,
}: IFreeContentPageProps) {
  /* Static Data */
  const freeContentSubServiceId =
    freeContentData?.attributes?.freeContentSubService?.data?.id;
  const freeContentSubServiceName =
    freeContentData?.attributes?.freeContentSubService?.data?.attributes?.name;
  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: `${freeContentSubServiceName}`,
      slug: `/contenu-libre/${freeContentSubServiceId}`,
    },
  ];
  if (freeContentData?.attributes?.title) {
    breadcrumbPages.push({ label: freeContentData.attributes.title, slug: "" });
  }
  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <section className="c-FreeContentPage">
        {freeContentData?.attributes?.title && (
          <EditoHeading
            title={freeContentData.attributes.title}
            tags={freeContentData.attributes.tags?.data}
            image={freeContentData?.attributes?.image?.data?.attributes}
          />
        )}
        {freeContentData?.attributes?.blocks &&
          freeContentData.attributes.blocks.length > 0 && (
            <div className="c-FreeContentPage__Blocks">
              {freeContentData.attributes.blocks.map((block, index) => {
                if (block && isEditoBlock(block)) {
                  return (
                    <EditoDynamicBlock
                      key={index}
                      type={block.__typename}
                      data={block}
                    />
                  );
                }
              })}
            </div>
          )}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<
  IFreeContentPageProps,
  Params
> = async ({ params }) => {
  const freeContentId = params?.freeContentId;
  const { data } = await client.query<GetFreeContentByIdQuery>({
    query: GetFreeContentByIdDocument,
    variables: { freeContentId },
  });
  const freeContentData = data.freeContent?.data;
  return {
    props: {
      freeContentData,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data: totalData } =
    await client.query<GetFreeContentsPathsTotalQuery>({
      query: GetFreeContentsPathsTotalDocument,
      variables: { contractId },
    });
  const { data } = await client.query<GetFreeContentsPathsQuery>({
    query: GetFreeContentsPathsDocument,
    variables: {
      contractId,
      total: totalData.freeContents?.meta.pagination.total,
    },
  });

  const freeContents = data.freeContents?.data.filter(removeNulls) ?? [];

  const paths = freeContents
    .map((freeContentData) => {
      if (freeContentData.id) {
        return {
          params: {
            freeContentId: freeContentData.id,
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
