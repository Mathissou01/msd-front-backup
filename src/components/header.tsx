import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.scss";

type Page = {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
  };
};

type HeaderProps = {
  pages: Array<Page>;
};

export default function Header({ pages }: HeaderProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>MSD-FRONT</title>
        <meta name="description" content="wip" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <nav>
        {router.isPreview && (
          <div className={styles.header__previewBar}>
            <p>Preview Mode</p>
            <p>|</p>
            <Link
              href={`/api/clear-preview-mode-cookies?slug=${encodeURIComponent(
                router.asPath,
              )}`}
              prefetch={false}
            >
              <a style={{ textDecoration: "underline" }}>Disable</a>
            </Link>
          </div>
        )}
        <div className={styles.header__topBar}>
          <Link href={"/"}>
            <a style={{ fontWeight: "bold" }}>MSD FRONT</a>
          </Link>
          {pages && (
            <>
              {pages?.map((page: Page) => {
                return (
                  <div key={page.id}>
                    <Link href={`/page/${page.attributes.slug}`}>
                      <a style={{ textTransform: "uppercase" }}>
                        {page.attributes.title}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className={styles.header__leftBar}>
          <Link href={`/agenda`}>
            <a style={{ textTransform: "uppercase" }}>Agenda</a>
          </Link>
          <div>MENU</div>
          <div>MENU</div>
          <div>MENU</div>
        </div>
      </nav>
    </>
  );
}
