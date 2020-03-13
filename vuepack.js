const path = require("path");
const run = require("@amrnn/vuepack");

const options = {
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
};

run(options);
