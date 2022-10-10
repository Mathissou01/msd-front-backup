import qs from "qs";
import Router from "next/router";

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {},
) {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`,
  )}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occurred please try again`);
  }
  return await response.json();
}

interface IFetchGraphQLParams {
  query: {};
  baseUrl?: string;
  variables?: {};
  urlParamsObject?: {};
  options?: {};
}

export async function fetchGraphQL(params: IFetchGraphQLParams) {
  const mergedOptions = {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: params.query,
      variables: params.variables,
    }),
    ...params.options,
  };

  const queryString = qs.stringify(params.urlParamsObject);
  const requestUrl = getStrapiURL(
    `/graphql${queryString ? `?${queryString}` : ""}`,
  );

  return await fetch(requestUrl, mergedOptions).then((response) => {
    if (!response.ok) {
      throw new Error(`An error occurred please try again`);
    }
    return response.json();
  });
}

export async function fetchGraphQLDynamic(params: IFetchGraphQLParams) {
  const mergedOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: params.query,
      variables: params.variables,
    }),
    ...params.options,
  };

  const queryString = qs.stringify(params.urlParamsObject);
  const requestUrl = `${
    params.baseUrl ?? process.env.NEXT_PUBLIC_BASE_URL ?? ""
  }/api/graphql${queryString ? `?${queryString}` : ""}`;

  console.log(queryString);
  console.log(mergedOptions);
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occurred please try again`);
  }
  return await response.json();
}

export async function getPages(preview: boolean | null = false) {
  const pagesData = await fetchAPI(
    `/pages${preview ? "?publicationState=preview" : ""}`,
  );

  if (pagesData === null || pagesData.data?.length === 0) {
    redirectToHome();
  }

  return pagesData.data;
}

export async function getPageBySlug(
  slug: string,
  preview: boolean | null = false,
) {
  if (!slug) {
    redirectToHome();
  }

  const pageData = await fetchAPI(
    `/pages?filters[slug][$eq]=${slug}${
      preview ? "&publicationState=preview" : ""
    }`,
  );

  if (pageData === null || pageData.data?.length === 0) {
    redirectToHome();
  }

  return pageData.data;
}

export function redirectToHome() {
  if (typeof window !== "undefined") {
    Router.replace("/", "/");
  }
}
