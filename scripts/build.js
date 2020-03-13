const Webpack = require("webpack");
const webpackConfigBuilder = require("./webpack.config-builder");

const run = configBuilderOptions => {
  const config = webpackConfigBuilder(configBuilderOptions);

  const compiler = Webpack(config);

  compiler.run((err, stats) => {
    console.log(stats.toString(config.stats));
  });
};

module.exports = run;
