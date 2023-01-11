import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
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
  function handlePathGeneration() {
    return pathLevelsArray.map((path, index) => {
      progressivePath = `${progressivePath}/${path}`;
      const CommonBreadcrumbLink = classNames("c-CommonBreadcrumb__Link", {
        "c-CommonBreadcrumb__Link_underline":
          pathLevelsArray.length - 1 > index,
      });

      return (
        <div key={path}>
          {router.pathname !== "/" ? (
            <Breadcrumb data-testid="breadcrumb-separator" />
          ) : null}
          <Link className={CommonBreadcrumbLink} href={`${progressivePath}`}>
            {path}
          </Link>
        </div>
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
      {handlePathGeneration()}
    </nav>
  );
}
