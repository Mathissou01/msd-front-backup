// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs-extra");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sass = require("sass");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const generateColors = require("./config/color-config").generateColors;

// Check if .env exist and if it missing important info
function validateEnvInfo() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

  if (!apiKey) {
    throw new Error(
      "La clé Google Maps API est manquante ou vide dans le fichier .env",
    );
  }

  if (apiKey.length < 35) {
    throw new Error(
      "La clé Google Maps API doit avoir au moins 35 caractères dans le fichier .env",
    );
  }
}

validateEnvInfo();

function writeGlobalData(contract, customColors) {
  let colorsObj = {
    "external-primary": customColors.primaryColor,
    "calculated-primary-dark": customColors.primaryColorDark,
    "calculated-primary-light": customColors.primaryColorLight,
    "external-secondary": customColors.secondaryColor,
    "calculated-secondary-dark": customColors.secondaryColorDark,
    "calculated-secondary-light": customColors.secondaryColorLight,
    "external-contrast-text": customColors.contrastText,
    "external-waste-household": customColors.wasteHousehold,
    "external-waste-selective": customColors.wasteSelective,
    "external-waste-bio": customColors.wasteBio,
    "external-waste-green": customColors.wasteGreen,
    "external-waste-glass": customColors.wasteGlass,
    "external-waste-paper": customColors.wastePaper,
    "external-waste-other": customColors.wasteOther,
  };

  // Check if undefined colors
  function checkColors(colorsObj, contract) {
    if (
      typeof colorsObj === "object" &&
      Object.values(colorsObj).includes(undefined)
    ) {
      return {
        contract,
        colors: customColors,
      };
    } else {
      return {
        contract,
        colors: colorsObj,
      };
    }
  }

  const globalData = checkColors(colorsObj, contract);
  fs.writeFile("./config/global.json", JSON.stringify(globalData));
}

let customColors = null;
module.exports = async (phase) => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID.toString();
  if (!Number.parseInt(contractId)) throw "Error";
  if (process.env.NEXT_PUBLIC_MOCK === "true" || phase === "phase-test") {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const globalMockData = require("./__mocks__/globalMock.json");

    customColors = globalMockData.colors;

    writeGlobalData(globalMockData.contract, globalMockData.colors);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const GetGlobalDataQuery = require("./config/getGlobalData");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GetGlobalDataQuery,
        variables: {
          contractId,
        },
      }),
    });

    const resultQuery = await response.json();

    const primaryColorInput =
      resultQuery.data.contract.data.attributes.contractCustomization.data
        .attributes.primaryColor;

    const secondaryColorInput =
      resultQuery.data.contract.data.attributes.contractCustomization.data
        .attributes.secondaryColor;

    const contrastTextInput =
      resultQuery.data.contract.data.attributes.contractCustomization.data
        .attributes.textContrast;

    const colorsConfig = generateColors(
      primaryColorInput,
      secondaryColorInput,
      contrastTextInput,
    );
    customColors = colorsConfig.getColors();
    writeGlobalData(resultQuery.data.contract.data, colorsConfig.getColors());
  }

  /** @type {import("next").NextConfig} */
  return {
    basePath:
      process.env.NODE_ENV === "production" &&
      !!process.env.NEXT_PUBLIC_BASE_PATH
        ? `/${process.env.NEXT_PUBLIC_BASE_PATH}`
        : undefined,
    assetPrefix:
      process.env.NODE_ENV === "production" &&
      !!process.env.NEXT_PUBLIC_BASE_PATH
        ? `/${process.env.NEXT_PUBLIC_BASE_PATH}/`
        : undefined,
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    images: {
      loader: "default",
      domains: ["localhost"],
      unoptimized: true,
    },
    env: {
      API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    pageExtensions: ["page.js", "page.jsx", "page.ts", "page.tsx"],
    sassOptions: {
      // Trick to load scss variable values from .env, load local variable declaration first
      // Calculate dark/light values of color with chroma.js (using CIELAB calculations)
      // then override values with .env, then make settings globally available
      additionalData: `
      @use "src/styles/01-settings/settings.external" as *;   
      $external-primary: ${customColors.primaryColor};
      $calculated-primary-dark: ${customColors.primaryColorDark};
      $calculated-primary-light: ${customColors.primaryColorLight};
      $external-secondary: ${customColors.secondaryColor};
      $calculated-secondary-dark: ${customColors.secondaryColorDark};
      $calculated-secondary-light: ${customColors.secondaryColorLight};
      $external-contrast-text: ${customColors.contrastText};
      $external-waste-household: ${customColors.wasteHousehold};
      $external-waste-selective: ${customColors.wasteSelective};
      $external-waste-bio: ${customColors.wasteBio};
      $external-waste-green: ${customColors.wasteGreen};
      $external-waste-glass: ${customColors.wasteGlass};
      $external-waste-paper: ${customColors.wastePaper};
      $external-waste-other: ${customColors.wasteOther};
      @use "src/styles/01-settings" as *;
      @use "src/styles/02-tools" as *;
    `,
      implementation: sass,
    },
    webpack(config) {
      // Enable topLevelAwait, ES2017 in tsconfig
      config.experiments = config.experiments || {};
      config.experiments.topLevelAwait = true;
      // Graphql
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "graphql-tag/loader",
          },
        ],
      });
      // Disable CSS Modules
      config.module.rules.forEach((rule) => {
        const { oneOf } = rule;
        if (oneOf) {
          oneOf.forEach((one) => {
            if (!`${one.issuer?.and}`.includes("_app")) return;
            one.issuer.and = [path.resolve(__dirname)];
          });
        }
      });
      // import SVGs as Components
      config.module.rules.push(
        {
          test: /\.svg$/i,
          type: "asset",
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: "prefixIds",
                      active: false,
                    },
                  ],
                },
              },
            },
          ],
        },
      );
      return config;
    },
  };
};
