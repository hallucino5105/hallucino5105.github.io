module.exports = {
  title: "hallucino5105",
  version: "0.0.0",

  serve: {
    publicPath: "",
    apiPath: "/api",
    apiSelfPath: "/api/self",

    web: {
      host: "localhost",
      port: 3900,
      protocol: "http",
    },
  },

  route: {
    app: {
      host: "0.0.0.0",
      port: "-1",
      protocol: "http",
    },
  },

  api: {
    debug: {
      enable: false,
    },
  },
};
