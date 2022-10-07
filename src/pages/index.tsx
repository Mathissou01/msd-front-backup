import DOMPurify from "isomorphic-dompurify";
import { GetStaticProps } from "next";
import { fetchAPI, getPages } from "../lib/api";
import Header from "../components/header";
import pageStyles from "../styles/page.module.scss";

type HomeProps = {
  homePage?: any;
  pages?: any;
};

export default function Home({ homePage, pages }: HomeProps) {
  return (
    <>
      <Header pages={pages} />
      <main>
        <div className={pageStyles.page__content}>
          {homePage && (
            <>
              <h2>{homePage?.attributes.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(homePage?.attributes.content, {
                    FORCE_BODY: true,
                  }),
                }}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const homePage = await fetchAPI("/home");
  const pages = await getPages(context.preview);

  return {
    props: {
      homePage: homePage.data,
      pages: pages,
    },
    revalidate: 1,
  };
};
