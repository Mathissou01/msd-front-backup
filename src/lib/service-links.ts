import { removeNulls } from "./utilities";
import {
  ComponentLinksFrees,
  ContractMenuServiceLinksDynamicZone,
} from "../graphql/codegen/generated-types";
import { ENavigationPages } from "../hooks/useNavigation";

export interface IPicto {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface IServiceLink {
  type?: string;
  id: string;
  name: string;
  generatedSlug: string;
  externalLink?: string;
  isDisplayed: boolean;
  picto?: IPicto | null;
}

export function isLinksComponent<T extends ContractMenuServiceLinksDynamicZone>(
  // eslint-disable-next-line
  serviceLink: any,
  typename: string,
): serviceLink is T {
  return (
    "id" in serviceLink &&
    "__typename" in serviceLink &&
    serviceLink.__typename === typename
  );
}

// eslint-disable-next-line
export function isServiceLink(link: any): link is IServiceLink {
  return "name" in link && "isDisplayed" in link;
}

export interface IPartialServiceLink {
  __typename: string;
  name?: string | null;
}

export function remapServiceLinksDynamicZone(
  serviceLinks: Array<Partial<IPartialServiceLink> | null>,
): Array<IServiceLink> | null {
  return (
    serviceLinks
      ?.map((link) => {
        if (link) {
          const type = link.__typename;

          let generatedSlug = "";
          if (type && type in ENavigationPages) {
            generatedSlug +=
              Object.values(ENavigationPages)[
                Object.keys(ENavigationPages).indexOf(type)
              ];
          }

          let freeContentSubServiceId = null;
          if (
            link &&
            isLinksComponent<ComponentLinksFrees>(
              link,
              "ComponentLinksFrees",
            ) &&
            link.freeContents?.data[0].id
          ) {
            freeContentSubServiceId = link.freeContents?.data[0].id ?? null;
            generatedSlug += `/${freeContentSubServiceId}`;
          }

          if (type && isServiceLink(link)) {
            return {
              type,
              id: link.id,
              name: link?.name,
              ...(link?.externalLink && { externalLink: link?.externalLink }),
              isDisplayed: link?.isDisplayed,
              picto: link?.picto,
              generatedSlug,
            };
          }
        }
      })
      .filter(removeNulls) ?? null
  );
}
