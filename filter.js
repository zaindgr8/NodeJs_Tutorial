const second = require("./second");

const arr = [1, 2, 3, 4, 3, 5];
const f = arr.filter((item) => {
  return item === 3;
});

console.log(f);
