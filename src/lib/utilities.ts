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

export function downloadFile(blobData: Blob, fileName: string) {
  const anchorElement = document.createElement("a");

  document.body.appendChild(anchorElement);

  anchorElement.style.display = "none";

  const url = window.URL.createObjectURL(blobData);

  anchorElement.href = url;
  anchorElement.download = fileName;
  anchorElement.click();

  window.URL.revokeObjectURL(url);
}

function modifySVGDimensions(
  svgData: string,
  newWidth: number,
  newHeight: number,
) {
  // Create a temporary HTML element to manipulate the SVG data
  const tempElement = document.createElement("div");
  tempElement.innerHTML = svgData;

  // Find the SVG element and modify the width and height attributes
  const svgElement = tempElement.querySelector("svg");
  if (svgElement) {
    svgElement.setAttribute("width", newWidth.toString());
    svgElement.setAttribute("height", newHeight.toString());
  }

  // Return the modified SVG data as a string
  return tempElement.innerHTML;
}

export async function getPNGUrlFromSVGUrl(svgUrl: string) {
  return new Promise<string>((resolve, reject) => {
    fetch(svgUrl)
      .then((response) => response.text())
      .then((svgData) => {
        const parser = new DOMParser();

        // Parse the SVG data string into an SVG document
        const svgDoc = parser.parseFromString(svgData, "image/svg+xml");

        // Get the root SVG element from the document
        const svgElement = svgDoc.documentElement;

        // Retrieve the width and height attributes
        const svgWidth = svgElement.getAttribute("width");
        const svgHeight = svgElement.getAttribute("height");

        // Create a canvas element
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // // Set canvas dimensions to match the SVG size
        if (svgWidth && svgHeight) {
          canvas.width = parseInt(svgWidth, 10);
          canvas.height = parseInt(svgHeight, 10);
        } else {
          canvas.width = 32;
          canvas.height = 32;
        }

        const finalSvgData =
          svgWidth && svgHeight
            ? svgData
            : modifySVGDimensions(svgData, 32, 32);

        // Render the SVG on the canvas
        const DOMURL = self.URL || self.webkitURL || self;
        const svgBlob = new Blob([finalSvgData], { type: "image/svg+xml" });
        const svgUrl = DOMURL.createObjectURL(svgBlob);
        const img = new Image();
        img.onload = () => {
          if (context) {
            context.drawImage(img, 0, 0);

            // Convert canvas to a Blob
            canvas.toBlob((blob) => {
              if (blob) {
                // Create a Blob URL for the PNG image
                const blobUrl = DOMURL.createObjectURL(blob);
                DOMURL.revokeObjectURL(svgUrl);
                resolve(blobUrl);
              } else {
                reject();
              }
            }, "image/png");
            img.remove();
          } else {
            reject();
          }
        };
        img.src = svgUrl;
      })
      .catch((error) => {
        reject(error);
      });
  });
}
