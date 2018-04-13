const Vue = require("vue");

function deepNest(content, times) {
  if (times === 0) {
    return content;
  } else {
    const next = `<span>${content}</span>`;
    return deepNest(next, --times);
  }
}

const items = [];
for (let i = 0; i < 100; i++) {
  items.push(i);
}

var Child = {
  template: deepNest("<span>{{item}}</span>", 100),
  props: ["item"]
};

console.time();
var app = new Vue({
  el: "#root",
  data: {
    items
  },
  components: {
    // <my-component> will only be available in parent's template
    "my-span": Child
  }
});
console.timeEnd();
