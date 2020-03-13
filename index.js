const path = require("path");
const _dev = require("./scripts/dev");
const _build = require("./scripts/build");
const command = process.argv[2];

const defaultOptions = {
  /** source path */
  srcPath: path.join(__dirname, "src"),

  /** output path (Must be absolute) */
  outputAbsPath: path.resolve(__dirname, "dist"),

  /** name for js bundle */
  jsBundleName: "bundle.js",

  /** name for css bundle */
  cssBundleName: "styles.css",

  /** entry file (relative to srcPath) */
  entry: "index.js",

  /** index template used by HtmlWebPackPlugin (relative to srcPath) */
  indexTemplate: "index.html",

  /** path for files that should just get copied to output (relative to srcPath) */
  staticPath: "static",

  /** proxies: each item is an array of: [from, target] */
  proxies: [],

  /** extra options (not shown in flight.js) */

  /** context */
  context: path.dirname(require.main.filename),
};

const build = options => {
  process.env.NODE_ENV = "production";

  _build(options);
};

const dev = options => {
  process.env.NODE_ENV = "development";

  _dev(options);
};

const run = options => {
  const finalOptions = { ...defaultOptions, ...options };

  switch (command) {
    case "dev":
      dev(finalOptions);
      break;
    case "build":
      build(finalOptions);
      break;
  }
};

module.exports = run;
