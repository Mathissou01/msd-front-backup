import DOMPurify from "isomorphic-dompurify";
import { GetStaticProps } from "next";
import client from "../graphql/client";
import { GetHome } from "src/graphql/queries/home.graphql";
import Header from "../components/Header/Header";
import "./home-page.scss";

import MySVG from "/public/hero-illu.svg";
import { GetPages } from "src/graphql/queries/pages.graphql"; // TODO: cleanup or separate page/component

type Page = {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
  };
};

type HomeProps = {
  homePage?: any;
  pages?: any;
};

export default function HomePage({ homePage, pages }: HomeProps) {
  return (
    <>
      <Header pages={pages} />
      <main>
        <div className="o-Page__Content">
          {homePage && (
            <>
              <h1 className="o-Page__Title u-TextCenter">
                {homePage?.attributes.title}
              </h1>
              <div>
                <p>{homePage?.attributes.content}</p>
              </div>
            </>
          )}
          <MySVG className="c-Home__Svg">
            <style jsx>
              {`
                .primary-color {
                  stroke: red;
                  fill: red;
                }
              `}
            </style>
          </MySVG>
          <h1 className="o-Page__Title u-TextCenter">Pages</h1>
          <ul className="c-Home__Pages">
            <>
              {pages?.map((page: Page) => {
                return (
                  <li key={page.id}>
                    <span>
                      Page n°{page.id}, titre: {page.attributes.title}
                    </span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(page?.attributes.content, {
                          FORCE_BODY: true,
                        }),
                      }}
                    />
                  </li>
                );
              })}
            </>
          </ul>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: homeData } = await client.query({ query: GetHome });
  const { data: pagesData } = await client.query({ query: GetPages });

  return {
    props: {
      homePage: homeData.home.data ?? null,
      pages: pagesData.pages.data ?? null,
    },
    revalidate: 1,
  };
};
