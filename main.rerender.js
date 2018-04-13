const Vue = require("vue");

const items = [];
for (let i = 0; i < 100; i++) {
  items.push(i);
}

console.time();
var app = new Vue({
  el: "#root",
  data: {
    items
  }
});
console.timeEnd();
