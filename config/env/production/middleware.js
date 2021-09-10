module.exports = {
  settings: {
    logger: {
      level: "info",
      exposeInContext: true,
      requests: true,
    },
    cache: {
      enabled: false,
      enableEtagSupport: true,
      models: [
        {
          model: "global",
          singleType: true,
        },
        "page",
      ],
    },
  },
};
