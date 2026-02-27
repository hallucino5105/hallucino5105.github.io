/** @type {import('next').NextConfig} */

const path = require("path");
const appConfig = require("./config");

const urlPrefix = appConfig.serve.publicPath;

const nextConfig = {
  // 重複読み込みチェックのため2回コンポーネントが読み込まれる
  reactStrictMode: true,

  // 左下のデバッグボタンを無効化
  devIndicators: false,

  trailingSlash: true,
  basePath: urlPrefix,
  assetPrefix: urlPrefix !== "" ? urlPrefix : "/",

  images: {
    unoptimized: false,
    disableStaticImages: false,
  },

  webpack: function (config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "yaml-loader",
    });

    //config.module.rules.push({
    //  test: /\.svg$/,
    //  use: [
    //    {
    //      loader: "@svgr/webpack",
    //      options: {
    //        svgo: false,
    //      },
    //    },
    //  ],
    //});

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  //experimental: {
  //  esmExternals: "loose",
  //},
};

if (process.env.DEV_ENV === "export") {
  nextConfig.output = "export";
  nextConfig.distDir = path.join("./out", urlPrefix);
  nextConfig.images = { ...nextConfig.images, unoptimized: true };
}

if (process.env.TURBOPACK === "1") {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    turbo: {
      rules: {
        "*.yaml": ["yaml-loader"],
        "*.yml": ["yaml-loader"],
        "*.svg": ["@svgr/webpack"],
      },
    },
  };
}

module.exports = nextConfig;

