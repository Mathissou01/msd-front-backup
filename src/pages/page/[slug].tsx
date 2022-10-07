import DOMPurify from "isomorphic-dompurify";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchAPI, getPageBySlug, getPages } from "../../lib/api";
import Header from "../../components/header";
import styles from "../../styles/page.module.scss";

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
      <div className={styles.page__content}>
        {!page && <div>Loading...</div>}
        {page && (
          <>
            <h2>{page?.attributes.title}</h2>
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
  const pages = await fetchAPI(`/pages`);
  const pagePaths = pages.data.map((page: any) => {
    return { params: { slug: page?.attributes?.slug } };
  });

  return {
    paths: pagePaths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const pages = await getPages(context.preview);
  const page = await getPageBySlug(slug, context.preview);

  return {
    props: {
      pages: pages,
      page: page[0] ?? null,
    },
    revalidate: 1,
  };
};
