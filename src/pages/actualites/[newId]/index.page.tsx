import { GetStaticProps, GetStaticPaths } from "next";
import client from "../../../graphql/client";
import { ParsedUrlQuery } from "querystring";
import {
  GetNewByIdDocument,
  GetNewByIdQuery,
  GetNewsPathsDocument,
  GetNewsPathsQuery,
  NewEntity,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import { isEditoBlock } from "../../../lib/edito-content";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import EditoHeading from "../../../components/Edito/EditoHeading/EditoHeading";
import EditoDynamicBlock from "../../../components/Edito/EditoDynamicBlock";
import "./actualites-new-page.scss";

interface Params extends ParsedUrlQuery {
  newId: string;
}

interface IActualitesNewPageProps {
  newData: NewEntity | null | undefined;
}

export default function ActualitesNewPage({
  newData,
}: IActualitesNewPageProps) {
  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Actualités et événements",
      slug: "/actualites-evenements",
    },
  ];
  if (newData?.attributes?.title) {
    breadcrumbPages.push({ label: newData.attributes.title, slug: "" });
  }

  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <section className="c-ActualitesNewPage">
        {newData?.attributes?.title && (
          <EditoHeading
            title={newData.attributes.title}
            tags={newData.attributes.tags?.data}
            image={newData?.attributes?.image?.data?.attributes}
          />
        )}
        {newData?.attributes?.blocks &&
          newData.attributes.blocks.length > 0 && (
            <div className="c-ActualitesNewPage__Blocks">
              {newData.attributes.blocks.map((block, index) => {
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
  IActualitesNewPageProps,
  Params
> = async ({ params }) => {
  const newId = params?.newId;
  const { data } = await client.query<GetNewByIdQuery>({
    query: GetNewByIdDocument,
    variables: { newId },
  });
  const newData = data.new?.data;
  return {
    props: {
      newData,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data } = await client.query<GetNewsPathsQuery>({
    query: GetNewsPathsDocument,
    variables: { contractId },
  });

  const news = data.news?.data.filter(removeNulls) ?? [];
  const paths = news
    .map((newData) => {
      if (newData.id) {
        return {
          params: {
            newId: newData.id,
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
