import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { makePublicAssetPath } from "../../../lib/utilities";
import "./common-pagination.scss";

export interface ICommonPaginationProps {
  currentPage: number;
  rowCount: number;
  onChangePage: (page: number, totalRows: number) => void;
  onChangeRowsPerPage?: (
    currentRowsPerPage: number,
    currentPage: number,
  ) => void;
  noRowsPerPage?: boolean;
  rowsPerPage?: number;
  rowsPerPageOptions?: Array<number>;
  rowsPerPageText?: string;
}

export default function CommonPagination({
  currentPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage,
  noRowsPerPage,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 20, 50, 100],
  rowsPerPageText = "Entrées par page",
}: ICommonPaginationProps) {
  /* Static Data */
  const navigationArrowSrc = "/images/pictos/navigation-arrow.svg";
  const navigationArrowToSrc = "/images/pictos/navigation-arrow-to.svg";
  const alternativeText = {
    arrowToFirst: "Aller à la première page",
    arrowToLast: "Aller à la dernière page",
    arrowPrevious: "Aller à la page précédente",
    arrowNext: "Aller à la page suivante",
  };

  /* Local Data */
  const pageCount = Math.ceil(rowCount / rowsPerPage);
  const paginationClassNames = classNames("c-CommonPagination", {
    "c-CommonPagination_hasRowsPerPage": !noRowsPerPage,
  });
  const previousClassNames = classNames("c-CommonPagination__Backward", {
    "c-CommonPagination__Backward_disabled": currentPage === 1,
  });
  const nextClassNames = classNames("c-CommonPagination__Forward", {
    "c-CommonPagination__Forward_disabled": currentPage === pageCount,
  });

  return (
    <div className={paginationClassNames}>
      {!noRowsPerPage && (
        <div className="c-CommonPagination__RowsPerPage">
          <select
            className="c-CommonPagination__Select"
            name="rowsPerPage"
            id="rowsPerPage"
            defaultValue={rowsPerPage}
            onChange={(t) =>
              onChangeRowsPerPage &&
              onChangeRowsPerPage(parseInt(t.target.value), currentPage)
            }
          >
            {rowsPerPageOptions?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="c-CommonPagination__Label">{rowsPerPageText}</span>
        </div>
      )}
      <nav className="c-CommonPagination__Navigation">
        <div className={previousClassNames}>
          <button
            type="button"
            className="c-CommonPagination__Button"
            disabled={currentPage <= 1}
            onClick={() => onChangePage(1, rowCount)}
          >
            <Image
              className="c-CommonPagination__Button_reverse"
              src={makePublicAssetPath(navigationArrowToSrc)}
              alt={alternativeText.arrowToFirst}
              height={24}
              width={24}
            />
          </button>
          <button
            type="button"
            className="c-CommonPagination__Button"
            disabled={currentPage <= 1}
            onClick={() => onChangePage(currentPage - 1, rowCount)}
          >
            <Image
              className="c-CommonPagination__Button_reverse"
              src={makePublicAssetPath(navigationArrowSrc)}
              alt={alternativeText.arrowPrevious}
              height={24}
              width={24}
            />
          </button>
        </div>
        <div className="c-CommonPagination__Pages">
          {[...Array(pageCount)].map((e, i) => (
            <button
              key={i + 1}
              className={classNames("c-CommonPagination__Page", {
                "c-CommonPagination__Page_active": i + 1 === currentPage,
              })}
              onClick={() => onChangePage(i + 1, rowCount)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className={nextClassNames}>
          <button
            type="button"
            className="c-CommonPagination__Button"
            disabled={currentPage >= pageCount}
            onClick={() => onChangePage(currentPage + 1, rowCount)}
          >
            <Image
              src={makePublicAssetPath(navigationArrowSrc)}
              alt={alternativeText.arrowNext}
              height={24}
              width={24}
            />
          </button>
          <button
            type="button"
            className="c-CommonPagination__Button"
            disabled={currentPage >= pageCount}
            onClick={() => onChangePage(pageCount, rowCount)}
          >
            <Image
              src={makePublicAssetPath(navigationArrowToSrc)}
              alt={alternativeText.arrowToLast}
              height={24}
              width={24}
            />
          </button>
        </div>
      </nav>
    </div>
  );
}
