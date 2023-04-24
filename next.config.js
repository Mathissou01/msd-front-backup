// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs-extra");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const {
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
  wasteGlass,
  wasteGreen,
  wastePaper,
  wasteOther, // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("./config/color-config");

function writeGlobalData(contract) {
  const globalData = {
    contract,
    colors: {
      "external-contrast-text": contrastText,
      "external-primary": primaryColor,
      "calculated-primary-dark": primaryColorDark,
      "calculated-primary-light": primaryColorLight,
      "external-secondary": secondaryColor,
      "calculated-secondary-dark": secondaryColorDark,
      "calculated-secondary-light": secondaryColorLight,
      "external-waste-household": wasteHousehold,
      "external-waste-selective": wasteSelective,
      "external-waste-bio": wasteBio,
      "external-waste-green": wasteGreen,
      "external-waste-glass": wasteGlass,
      "external-waste-paper": wastePaper,
      "external-waste-other": wasteOther,
    },
  };
  fs.writeFile("./config/global.json", JSON.stringify(globalData));
}

module.exports = async (phase) => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID.toString();
  if (!Number.parseInt(contractId)) throw "Error";

  if (process.env.NEXT_PUBLIC_MOCK === "true" || phase === "phase-test") {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const globalMockData = require("./__mocks__/globalMock.json");
    writeGlobalData(globalMockData.contract);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const GetGlobalDataQuery = require("./config/getGlobalData");
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
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
    })
      .then((res) => res.json())
      .then((result) => {
        writeGlobalData(result.data.contract.data);
      });
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
      $external-contrast-text: ${contrastText};
      $external-primary: ${primaryColor};
      $calculated-primary-dark: ${primaryColorDark};
      $calculated-primary-light: ${primaryColorLight};
      $external-secondary: ${secondaryColor};
      $calculated-secondary-dark: ${secondaryColorDark};
      $calculated-secondary-light: ${secondaryColorLight};
      $external-waste-household: ${wasteHousehold};
      $external-waste-selective: ${wasteSelective};
      $external-waste-bio: ${wasteBio};
      $external-waste-green: ${wasteGreen};
      $external-waste-glass: ${wasteGlass};
      $external-waste-paper: ${wastePaper};
      $external-waste-other: ${wasteOther};
      @use "src/styles/01-settings" as *;
      @use "src/styles/02-tools" as *;
    `,
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
