import React from "react";
import Link from "next/link";
import "./common-breadcrumb.scss";

interface IBreadcrumbPage {
  label: string;
  slug?: string;
}
interface ICommonBreadcrumbProps {
  pages: Array<IBreadcrumbPage>;
}

export default function CommonBreadcrumb({ pages }: ICommonBreadcrumbProps) {
  return (
    <nav className="c-CommonBreadcrumb">
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
          >
            {page.label}
          </Link>
        ),
      )}
    </nav>
  );
}
