import chroma from "chroma-js";

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

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isSubArrayInOrder(arr: string[], subArr: string[]) {
  if (subArr.length === 0) {
    return true;
  }

  let subIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === subArr[subIndex]) {
      subIndex++;

      if (subIndex === subArr.length) {
        return true;
      }
    } else {
      subIndex = 0;
    }
  }

  return false;
}

export function createDateFromString(dateString: string): Date | null {
  const [day, month, year] = dateString.split("/").map(Number);
  const adjustedYear = year >= 0 && year <= 99 ? 2000 + year : year;
  const date = new Date(adjustedYear, month - 1, day);

  return isNaN(date.getTime()) ? null : date;
}

export function makeLighterColor(color: string): string {
  return chroma(color).alpha(0.1).hex();
}
