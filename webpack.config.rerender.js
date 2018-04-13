const path = require("path");

module.exports = {
  entry: path.join(__dirname, "main.rerender.js"),
  output: {
    path: __dirname,
    filename: "bundle.rerender.js"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.min.js"
    }
  }
};
