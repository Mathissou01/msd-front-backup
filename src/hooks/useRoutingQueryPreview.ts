import { useRouter } from "next/router";
import { TPreviewTypes } from "../lib/preview";

export function useRoutingQueryPreview<T extends string | TPreviewTypes>(
  queryParam: string,
  validateQueryParam: (param: string) => boolean,
): T | undefined {
  const router = useRouter();
  const query = router.query[queryParam];
  if (query?.toString()) {
    if (!validateQueryParam(query.toString())) {
      void router.push("/404");
      return undefined;
    }
    return query?.toString() as T;
  } else if (typeof window === undefined) {
    void router.push("/404");
  }

  return undefined;
}
