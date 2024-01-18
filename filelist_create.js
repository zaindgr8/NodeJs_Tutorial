//create multiple file in file folder

const fs = require("fs");
const path = require("path");

const myDir= path.join(__dirname, "file")

for(i=0; i<5;i++){
    fs.writeFileSync(myDir+`/file${i}.txt`, `this is testing file ${i}`)
}