import DOMPurify from "isomorphic-dompurify";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header/Header";
import client from "../../graphql/client";
import { GetPageBySlug, GetPages } from "src/graphql/queries/pages.graphql";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type PageProps = {
  page?: any;
  pages?: any;
};

export default function Page({ page, pages }: PageProps) {
  return (
    <>
      <Header pages={pages} />
      <div className="o-Page__Content">
        {!page && <div>Loading...</div>}
        {page && (
          <>
            <h1>{page?.attributes.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(page?.attributes.content, {
                  FORCE_BODY: true,
                }),
              }}
            />
          </>
        )}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: pagesData } = await client.query({ query: GetPages });

  const pagePaths = pagesData.pages.data.map((page: any) => {
    return { params: { slug: page?.attributes?.slug } };
  });

  return {
    paths: pagePaths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: pagesData } = await client.query({ query: GetPages });
  const { slug } = context.params as IParams;
  const { data: pageData } = await client.query({
    query: GetPageBySlug,
    variables: { slug: slug },
  });

  return {
    props: {
      pages: pagesData.pages.data ?? null,
      page: pageData.pages.data[0] ?? null,
    },
    revalidate: 1,
  };
};
