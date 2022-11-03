import DOMPurify from "isomorphic-dompurify";
import { GetStaticProps } from "next";
import Header from "../../components/Header/Header";
import client from "../../graphql/client";
import { GetPageBySlug, GetPages } from "src/graphql/queries/pages.graphql";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useQuery } from "@apollo/client";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type PageProps = {
  pages?: any;
};

export default function Page({ pages }: PageProps) {
  const router = useRouter();
  const { slug } = router.query as IParams;
  if (typeof window !== "undefined" && !slug) {
    router.replace("/");
  }
  const {
    data: pageData,
    loading,
    error,
  } = useQuery(GetPageBySlug, {
    variables: { slug: slug, publicationState: "PREVIEW" },
    skip: !slug,
  });
  const page = pageData?.pages.data[0] ?? null;

  if (error) {
    console.error("error", error);
    return null;
  }

  return (
    <>
      <Header pages={pages} isPreview={true} />
      <div className="o-Page__Content">
        {loading ? (
          <p>Loading...</p>
        ) : page ? (
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
        ) : (
          <p>No results.</p>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: pagesData } = await client.query({ query: GetPages });

  return {
    props: {
      pages: pagesData.pages.data ?? null,
    },
    revalidate: 1,
  };
};
