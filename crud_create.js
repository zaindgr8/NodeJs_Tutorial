const fs=require("fs")
const path=require("path")

const dirPath=path.join(__dirname, "crud")
const filePath=path.join(dirPath, "hello.txt")

fs.writeFileSync(filePath, "Testing hello bro")
