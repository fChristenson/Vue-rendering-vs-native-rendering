const path = require("path");

module.exports = {
  entry: path.join(__dirname, "main.rerender-nested.js"),
  output: {
    path: __dirname,
    filename: "bundle.rerender-nested.js"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.min.js"
    }
  }
};
