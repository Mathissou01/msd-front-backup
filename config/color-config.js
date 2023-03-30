// eslint-disable-next-line @typescript-eslint/no-var-requires
const chroma = require("chroma-js");

/* Externally loaded colors with fallback values, used to generate site palette */
// Accessible Contrast
const contrastText = process.env.NEXT_PUBLIC_CONTRAST_TEXT || "#030f40";
// Brand Colors
const primaryColor = process.env.NEXT_PUBLIC_COLOR_BRAND_PRIMARY || "#9bcd41";
const primaryColorDark = chroma(primaryColor).darken().hex();
const primaryColorLight = chroma(primaryColor).alpha(0.1).hex();
const secondaryColor =
  process.env.NEXT_PUBLIC_COLOR_BRAND_SECONDARY ||
  process.env.NEXT_PUBLIC_COLOR_BRAND_PRIMARY ||
  "#ffc229";
const secondaryColorDark = chroma(secondaryColor).darken().hex();
const secondaryColorLight = chroma(secondaryColor).alpha(0.1).hex();

// Waste Colors
const wasteHousehold =
  process.env.NEXT_PUBLIC_COLOR_WASTE_HOUSEHOLD || "#6C757D";
const wasteSelective =
  process.env.NEXT_PUBLIC_COLOR_WASTE_SELECTIVE || "#FFC229";
const wasteBio = process.env.NEXT_PUBLIC_COLOR_WASTE_BIO || "#BD4602";
const wasteGreen = process.env.NEXT_PUBLIC_COLOR_GREEN || "#9BCD41";
const wasteGlass = process.env.NEXT_PUBLIC_COLOR_WASTE_GLASS || "#30A23D";
const wastePaper = process.env.NEXT_PUBLIC_COLOR_WASTE_PAPER || "#2068C7";
const wasteOther = process.env.NEXT_PUBLIC_COLOR_WASTE_OTHER || "#FFFFFF";

const colorConfig = {
  contrastText,
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  secondaryColor,
  secondaryColorDark,
  secondaryColorLight,
  wasteHousehold,
  wasteSelective,
  wasteBio,
  wasteGreen,
  wasteGlass,
  wastePaper,
  wasteOther,
};

module.exports = colorConfig;
