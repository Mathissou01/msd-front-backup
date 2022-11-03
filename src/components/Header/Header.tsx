import Head from "next/head";
import Link from "next/link";
import "./header.scss";

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
  isPreview?: boolean;
};

export default function Header({ pages, isPreview = false }: HeaderProps) {
  return (
    <>
      <Head>
        <title>MSD-FRONT</title>
        <meta name="description" content="wip" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      {isPreview && (
        <div className="c-Header__PreviewBar">
          <span>Preview Mode</span>
          <span>|</span>
          <Link
            href={`/`}
            prefetch={false}
            style={{ textDecoration: "underline" }}
          >
            Disable
          </Link>
        </div>
      )}
      <nav className="c-Header__Nav">
        <div className="c-Header__TopBar" data-testid={"top-bar"}>
          <Link href={"/"} style={{ fontWeight: "bold" }}>
            MSD FRONT
          </Link>
          {pages && (
            <>
              {pages?.map((page: Page) => {
                return (
                  <div key={page.id}>
                    <Link
                      href={`/page/${page.attributes.slug}`}
                      style={{ textTransform: "uppercase" }}
                    >
                      {page.attributes.title}
                    </Link>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="c-Header__LeftBar" data-testid={"left-bar"}>
          <Link href={`/agenda`} style={{ textTransform: "uppercase" }}>
            Agenda
          </Link>
          <div>MENU</div>
          <div>MENU</div>
          <div>MENU</div>
        </div>
      </nav>
    </>
  );
}
