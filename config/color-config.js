// eslint-disable-next-line @typescript-eslint/no-var-requires
const chroma = require("chroma-js");

class ColorConfig {
  /* Externally loaded colors with fallback values, used to generate site palette */

  // Waste Colors
  wasteHousehold = process.env.NEXT_PUBLIC_COLOR_WASTE_HOUSEHOLD || "#6C757D";
  wasteSelective = process.env.NEXT_PUBLIC_COLOR_WASTE_SELECTIVE || "#FFC229";
  wasteBio = process.env.NEXT_PUBLIC_COLOR_WASTE_BIO || "#BD4602";
  wasteGreen = process.env.NEXT_PUBLIC_COLOR_GREEN || "#9BCD41";
  wasteGlass = process.env.NEXT_PUBLIC_COLOR_WASTE_GLASS || "#30A23D";
  wastePaper = process.env.NEXT_PUBLIC_COLOR_WASTE_PAPER || "#2068C7";
  wasteOther = process.env.NEXT_PUBLIC_COLOR_WASTE_OTHER || "#FFFFFF";

  // Accessible Contrast
  // Brand Colors
  primaryColor = null;
  primaryColorDark = null;
  primaryColorLight = null;
  secondaryColor = null;
  secondaryColorDark = null;
  secondaryColorLight = null;
  contrastText = null;

  constructor(primaryColorInput, secondaryColorInput, contrastTextInput) {
    /* Default values */
    const defaultPrimaryColor = "#9bcd41";
    const defaultSecondaryColor = "#ffc229";
    const defaultContrastText = "#030f40";
    this.primaryColor = primaryColorInput || defaultPrimaryColor;
    this.primaryColorDark = chroma(primaryColorInput).darken().hex();
    this.primaryColorLight = chroma(primaryColorInput).alpha(0.1).hex();
    this.secondaryColor = secondaryColorInput || defaultSecondaryColor;
    this.secondaryColorDark = chroma(secondaryColorInput).darken().hex();
    this.secondaryColorLight = chroma(secondaryColorInput).alpha(0.1).hex();
    this.contrastText = contrastTextInput || defaultContrastText;
  }

  getColors = () => {
    return {
      contrastText: this.contrastText,
      primaryColor: this.primaryColor,
      primaryColorDark: this.primaryColorDark,
      primaryColorLight: this.primaryColorLight,
      secondaryColor: this.secondaryColor,
      secondaryColorDark: this.secondaryColorDark,
      secondaryColorLight: this.secondaryColorLight,
      wasteHousehold: this.wasteHousehold,
      wasteSelective: this.wasteSelective,
      wasteBio: this.wasteBio,
      wasteGreen: this.wasteGreen,
      wasteGlass: this.wasteGlass,
      wastePaper: this.wastePaper,
      wasteOther: this.wasteOther,
    };
  };

  static Builder = class {
    primaryColor = null;
    primaryColorDark = null;
    primaryColorLight = null;
    secondaryColor = null;
    secondaryColorDark = null;
    secondaryColorLight = null;
    contrastText = null;

    setPrimaryColor(color) {
      this.primaryColor = color;
      return this;
    }

    setSecondaryColor(color) {
      this.secondaryColor = color;
      return this;
    }

    setContrastText(color) {
      this.contrastText = color;
      return this;
    }

    build() {
      return new ColorConfig(
        this.primaryColor,
        this.secondaryColor,
        this.contrastText,
      );
    }
  };
}

let colorsConfig = null;
const generateColors = (
  primaryColorInput,
  secondaryColorInput,
  contrastTextInput,
) => {
  if (!colorsConfig) {
    colorsConfig = new ColorConfig.Builder()
      .setPrimaryColor(primaryColorInput)
      .setSecondaryColor(secondaryColorInput)
      .setContrastText(contrastTextInput)
      .build();
  }
  return colorsConfig;
};
module.exports = {
  generateColors,
  colors: colorsConfig?.getColors(),
};
