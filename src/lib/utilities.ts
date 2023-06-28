export function makePublicAssetPath(path: string) {
  return process.env.NODE_ENV === "production" &&
    !!process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH}/${path}`
    : path;
}

export const removeNulls = <S>(
  value: S | undefined | Record<string, never>,
): value is Exclude<S, null> =>
  value != null && Object.keys(value).length !== 0;

export function isAbsoluteOrRelativeUrl(url: string) {
  const regex = new RegExp(
    "^((http|https)\\/\\/(www\\.)?[a-zA-Z0-9\\-]+\\.[a-zA-Z]{2,})|((\\/)?\\S\\s?)+$",
  );
  return regex.test(url);
}

export function normalizeStringPath(str: string): string {
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replaceAll(" ", "-")
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z-])/g, "")
    .toLowerCase();
}

export function handleDateFrenchFormat(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("fr", options);
}
