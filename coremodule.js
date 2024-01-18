const fs = require("node:fs");

fs.writeFileSync("coremodule.txt", "This is testing file!")

console.log("Directory Name", __filename)