import React, { useEffect, useState } from "react";
import {
  GetNewsAndEventsByContractIdQueryVariables,
  useGetNewsAndEventsByContractIdLazyQuery,
} from "../../graphql/codegen/generated-types";
import CommonBreadcrumb from "../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import DesktopTopRightAngle from "public/images/desktop_page_top-right-angle.svg";
import MobileTopRightAngle from "public/images/mobile_page_top-right-angle.svg";
import CommonCardBlock from "../../components/Common/CommonCardBlock/CommonCardBlock";
import CommonPagination from "../../components/Common/CommonPagination/CommonPagination";
import { removeNulls } from "../../lib/utilities";
import CommonLoader from "../../components/Common/CommonLoader/CommonLoader";
import "./actualites-evenements-page.scss";

export default function ActualitesEvenementsPage() {
  /* Static Data */
  const pagesUrl = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Actualités et événements",
    },
  ];
  const titleContent = "Actualités et événements";
  const defaultHref = `/actualites-evenements`;
  /* Local Data */
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();

  const defaultRowsPerPage = 9;
  const defaultPage = 1;
  const defaultQueryVariables: GetNewsAndEventsByContractIdQueryVariables = {
    contractId: `${contractId}`,
    pagination: { page: defaultPage, pageSize: defaultRowsPerPage },
  };
  const [
    getNewsAndEventsByContractId,
    { data: newsAndEventsData, loading, error },
  ] = useGetNewsAndEventsByContractIdLazyQuery({
    variables: defaultQueryVariables,
  });

  const [currentPagination, setCurrentPagination] = useState({
    page: defaultPage,
    rowsPerPage: defaultRowsPerPage,
  });

  useEffect(() => {
    getNewsAndEventsByContractId({
      variables: {
        ...defaultQueryVariables,
        pagination: {
          page: currentPagination.page,
          pageSize: defaultRowsPerPage,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPagination]);

  const newsAndEvents = newsAndEventsData?.news?.data.filter(removeNulls) ?? [];
  const rowCount = newsAndEventsData?.news?.meta.pagination.total;

  return (
    <div className="c-ActualitesEvenementsPage">
      <CommonBreadcrumb pages={pagesUrl} />
      <div className="c-ActualitesEvenementsPage__SvgContainer">
        <DesktopTopRightAngle className="c-ActualitesEvenementsPage__Svg_desktop" />
        <MobileTopRightAngle className="c-ActualitesEvenementsPage__Svg_mobile" />
      </div>
      <h1 className="c-ActualitesEvenementsPage__Title">{titleContent}</h1>
      <div className="c-ActualitesEvenementsPage__Content">
        <div className="c-ActualitesEvenementsPage__CardNewsAndEvents">
          <CommonLoader isLoading={loading} errors={[error]}>
            {newsAndEvents &&
              newsAndEvents.map((news) => {
                if (
                  news.id &&
                  news.attributes?.title &&
                  news.attributes.shortDescription
                ) {
                  return (
                    <CommonCardBlock
                      key={news.id}
                      title={news.attributes.title}
                      tagLabels={news.attributes.tags?.data}
                      image={news.attributes.image?.data?.attributes}
                      date={news.attributes.publishedDate}
                      shortDescription={news.attributes.shortDescription}
                      href={`${defaultHref}/${news.id}`}
                    />
                  );
                }
              })}
          </CommonLoader>
        </div>
        <CommonPagination
          noRowsPerPage
          currentPage={currentPagination.page}
          rowCount={rowCount ?? 0}
          onChangePage={(currentPage) => {
            if (currentPage !== currentPagination.page) {
              setCurrentPagination({
                ...currentPagination,
                page: currentPage,
              });
            }
          }}
          rowsPerPage={defaultRowsPerPage}
        />
      </div>
    </div>
  );
}
