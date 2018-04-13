const Vue = require("vue");

console.time();
var app = new Vue({
  el: "#root",
  data: {
    items: ["foo", "bar", "baz"]
  }
});
console.timeEnd();
