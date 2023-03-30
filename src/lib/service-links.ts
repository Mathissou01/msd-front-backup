import { normalizeStringPath, removeNulls } from "./utilities";

export interface IPicto {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface IServiceLink {
  type?: string;
  id?: string;
  name: string;
  externalLink?: string;
  isDisplayed: boolean;
  picto?: IPicto | null;
  generatedSlug?: string;
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
  serviceLinks: Array<Partial<IPartialServiceLink> | null> | null,
): Array<IServiceLink> | null {
  return (
    serviceLinks
      ?.map((link) => {
        if (link) {
          const type = link.__typename;
          let generatedSlug = "/";
          if (type === "ComponentLinksFrees" && link.name) {
            generatedSlug = normalizeStringPath(link.name);
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
