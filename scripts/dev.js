const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfigBuilder = require("./webpack.config-builder");

const run = configBuilderOptions => {
  const config = webpackConfigBuilder(configBuilderOptions);

  const devServerOptions = {
    ...config.devServer,
    stats: config.stats,
    hot: true,
  };
  WebpackDevServer.addDevServerEntrypoints(config, devServerOptions);

  const compiler = Webpack(config);
  const server = new WebpackDevServer(compiler, devServerOptions);

  server.listen(3000, "127.0.0.1", () => {
    console.log("Starting server on http://localhost:3000");
  });
};

module.exports = run;
