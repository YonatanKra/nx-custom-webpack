module.exports = (config, context) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
      ],
    },
  };
};
