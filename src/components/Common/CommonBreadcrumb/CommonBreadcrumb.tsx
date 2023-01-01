import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Breadcrumb from "public/images/pictos/breadcrumb-separator.svg";
import "./common-breadcrumb.scss";

export default function CommonBreadcrumb() {
  /* Local Data */
  const router = useRouter();
  const pathLevelsArray = router.pathname.split("/").slice(1);
  let progressivePath = "";
  const homePage = "/";
  /* Method */
  function handlePathgeneration() {
    return pathLevelsArray.map((path, index) => {
      progressivePath = `${progressivePath}/${path}`;

      return (
        <>
          {router.pathname !== "/" ? (
            <Breadcrumb data-testid="breadcrumb-separator" />
          ) : null}
          <Link
            key={path}
            className={
              pathLevelsArray.length - 1 > index
                ? "c-CommonBreadcrumb__Link c-CommonBreadcrumb__Link_underline"
                : "c-CommonBreadcrumb__Link"
            }
            href={`${progressivePath}`}
          >
            {path}
          </Link>
        </>
      );
    });
  }

  return (
    <nav className="c-CommonBreadcrumb">
      {router.pathname !== homePage ? (
        <Link
          className="c-CommonBreadcrumb__Link c-CommonBreadcrumb__Link_underline"
          href={homePage}
        >
          Accueil
        </Link>
      ) : null}
      {handlePathgeneration()}
    </nav>
  );
}
