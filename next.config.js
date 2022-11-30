// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const {
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
  wasteOther,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("./color-config");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  sassOptions: {
    // Trick to load scss variable values from .env, load local variable declaration first
    // Calculate dark/light values of color with chroma.js (using CIELAB calculations)
    // then override values with .env, then make settings globally available
    additionalData: `
      @use "src/styles/01-settings/settings.external" as *;
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

module.exports = nextConfig;
