import React from "react";
import Link from "next/link";
import { ENavigationPages, useNavigation } from "../../../hooks/useNavigation";
import "./common-breadcrumb.scss";

export interface IBreadcrumbPage {
  label: string;
  slug?: string;
}

interface ICommonBreadcrumbProps {
  pages: Array<IBreadcrumbPage>;
}

export default function CommonBreadcrumb({ pages }: ICommonBreadcrumbProps) {
  /* External Data */
  const { setCurrentPage } = useNavigation();

  return (
    <nav className="c-CommonBreadcrumb" role="navigation">
      {pages.map((page, index) =>
        pages.length - 1 === index ? (
          <span className="c-CommonBreadcrumb__Link" key={index}>
            {page.label}
          </span>
        ) : (
          <Link
            key={index}
            className="c-CommonBreadcrumb__Link c-CommonBreadcrumb__Link_active"
            href={page.slug ?? "/"}
            onClick={() =>
              setCurrentPage(page.slug ?? ENavigationPages.HomeLink)
            }
          >
            {page.label}
          </Link>
        ),
      )}
    </nav>
  );
}
