import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../../graphql/client";
import { ParsedUrlQuery } from "querystring";
import {
  GetTipByIdDocument,
  GetTipByIdQuery,
  GetTipsPathsDocument,
  GetTipsPathsQuery,
  GetTipsPathsTotalDocument,
  GetTipsPathsTotalQuery,
  TipEntity,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import { isEditoBlock } from "../../../lib/edito-content";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import EditoHeading from "../../../components/Edito/EditoHeading/EditoHeading";
import EditoDynamicBlock from "../../../components/Edito/EditoDynamicBlock";
import "./tip-page.scss";

interface Params extends ParsedUrlQuery {
  tipId: string;
}

export interface ITipPageProps {
  tipData: TipEntity | null | undefined;
}

export default function TipPage({ tipData }: ITipPageProps) {
  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Astuces",
      slug: "/astuces",
    },
  ];
  if (tipData?.attributes?.title) {
    breadcrumbPages.push({ label: tipData.attributes.title, slug: "" });
  }
  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <section className="c-TipPage">
        {tipData?.attributes?.title && (
          <EditoHeading
            title={tipData.attributes.title}
            tags={tipData.attributes.tags?.data}
            image={tipData?.attributes?.image?.data?.attributes}
          />
        )}
        {tipData?.attributes?.blocks &&
          tipData.attributes.blocks.length > 0 && (
            <div className="c-TipPage__Blocks">
              {tipData.attributes.blocks.map((block, index) => {
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

export const getStaticProps: GetStaticProps<ITipPageProps, Params> = async ({
  params,
}) => {
  const tipId = params?.tipId;
  const { data } = await client.query<GetTipByIdQuery>({
    query: GetTipByIdDocument,
    variables: { tipId },
    fetchPolicy: "cache-first",
  });
  const tipData = data.tip?.data;
  return {
    props: {
      tipData,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data: totalData } = await client.query<GetTipsPathsTotalQuery>({
    query: GetTipsPathsTotalDocument,
    variables: { contractId },
  });
  const { data } = await client.query<GetTipsPathsQuery>({
    query: GetTipsPathsDocument,
    variables: { contractId, total: totalData.tips?.meta.pagination.total },
  });

  const tips = data.tips?.data.filter(removeNulls) ?? [];
  const paths = tips
    .map((tipData) => {
      if (tipData.id) {
        return {
          params: {
            tipId: tipData.id,
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
