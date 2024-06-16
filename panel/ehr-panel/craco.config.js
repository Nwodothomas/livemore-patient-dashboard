// craco.config.js

module.exports = {
    webpack: {
      alias: {},
      plugins: [],
      configure: (webpackConfig, { env, paths }) => {
        return webpackConfig;
      },
    },
    devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
      return devServerConfig;
    },
    jest: {
      configure: (jestConfig, { env, paths, resolve, rootDir }) => {
        return jestConfig;
      },
    },
  };  