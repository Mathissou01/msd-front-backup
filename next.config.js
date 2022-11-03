const path = require("path");

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
    config.module.rules.push({
      test: /\.svg$/,
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
    });
    return config;
  },
};

module.exports = nextConfig;
