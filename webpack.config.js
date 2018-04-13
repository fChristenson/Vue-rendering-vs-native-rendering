const path = require("path");

module.exports = {
  entry: path.join(__dirname, "main.js"),
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.min.js"
    }
  }
};
