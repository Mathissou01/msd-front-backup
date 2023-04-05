import { GetServerSideProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect, useState } from "react";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonCardBlock from "../../../components/Common/CommonCardBlock/CommonCardBlock";
import CommonLoader from "../../../components/Common/CommonLoader/CommonLoader";
import CommonPagination from "../../../components/Common/CommonPagination/CommonPagination";
import client from "../../../graphql/client";
import DesktopTopRightAngle from "public/images/desktop_page_top-right-angle.svg";
import MobileTopRightAngle from "public/images/mobile_page_top-right-angle.svg";
import {
  FreeContentSubServiceEntity,
  GetFreeContentsByFreeContentSubServiceIdQueryVariables,
  GetFreeContentSubServiceByIdDocument,
  GetFreeContentSubServiceByIdQuery,
  GetFreeContentSubServicesPathsDocument,
  GetFreeContentSubServicesPathsQuery,
  useGetFreeContentsByFreeContentSubServiceIdLazyQuery,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import "./contenu-libre.scss";

interface Params extends ParsedUrlQuery {
  freeContentSubServiceId: string;
}

interface IContenuLibrePageProps {
  freeContentSubServiceData: FreeContentSubServiceEntity | null | undefined;
}

export default function ContenuLibrePage({
  freeContentSubServiceData,
}: IContenuLibrePageProps) {
  /* Static Data */
  const pagesUrl = [
    {
      label: "Accueil",
      slug: "/",
    },
  ];

  const titleContent = freeContentSubServiceData?.attributes?.name;
  if (titleContent) {
    pagesUrl.push({ label: titleContent, slug: "" });
  }
  const defaultRowsPerPage = 9;
  const defaultPage = 1;
  const id = freeContentSubServiceData?.id;
  const defaultHref = `/contenu-libre/contenu`;

  const defaultQueryVariables: GetFreeContentsByFreeContentSubServiceIdQueryVariables =
    {
      pagination: { page: defaultPage, pageSize: defaultRowsPerPage },
      freeContentSubServiceId: `${id}`,
    };
  const [
    getNewsAndEventsByContractId,
    { data: freeContentsData, loading, error },
  ] = useGetFreeContentsByFreeContentSubServiceIdLazyQuery({
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

  const freeContents =
    freeContentsData?.freeContents?.data.filter(removeNulls) ?? [];
  const rowCount = freeContentsData?.freeContents?.meta.pagination.total;
  return (
    <div className="c-ContenuLibrePage">
      <CommonBreadcrumb pages={pagesUrl} />
      <div className="c-ContenuLibrePage__SvgContainer">
        <DesktopTopRightAngle className="c-ContenuLibrePage__Svg_desktop" />
        <MobileTopRightAngle className="c-ContenuLibrePage__Svg_mobile" />
      </div>
      <h1 className="c-ContenuLibrePage__Title">{titleContent}</h1>
      <div className="c-ContenuLibrePage__Content">
        <div className="c-ContenuLibrePage__CardNewsAndEvents">
          <CommonLoader isLoading={loading} errors={[error]}>
            {freeContents &&
              freeContents.map((freeContent) => {
                if (
                  freeContent.id &&
                  freeContent.attributes?.title &&
                  freeContent.attributes.shortDescription
                ) {
                  return (
                    <CommonCardBlock
                      key={freeContent.id}
                      title={freeContent.attributes.title}
                      tagLabels={freeContent.attributes.tags?.data}
                      image={freeContent.attributes.image?.data?.attributes}
                      date={freeContent.attributes.publishedDate}
                      shortDescription={freeContent.attributes.shortDescription}
                      href={`${defaultHref}/${freeContent.id}`}
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

export const getStaticProps: GetServerSideProps<
  IContenuLibrePageProps,
  Params
> = async ({ params }) => {
  const freeContentSubServiceId = params?.freeContentSubServiceId;

  const { data } = await client.query<GetFreeContentSubServiceByIdQuery>({
    query: GetFreeContentSubServiceByIdDocument,
    variables: { freeContentSubServiceId },
  });
  const freeContentSubServiceData = data.freeContentSubService?.data;
  return {
    props: {
      freeContentSubServiceData,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data } = await client.query<GetFreeContentSubServicesPathsQuery>({
    query: GetFreeContentSubServicesPathsDocument,
    variables: { contractId },
  });

  const freeContentSubServices =
    data.freeContentSubServices?.data.filter(removeNulls) ?? [];

  const paths = freeContentSubServices
    .map((freeContentSubServiceData) => {
      if (freeContentSubServiceData.id) {
        return {
          params: {
            freeContentSubServiceId: freeContentSubServiceData.id,
          },
        };
      }
    })
    .filter(removeNulls);
  return {
    paths,
    fallback: false,
  };
};
