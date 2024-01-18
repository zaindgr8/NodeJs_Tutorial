const fs=require("fs")
const path= require("path")

const dirPath= path.join(__dirname, "crud")
const filePath= path.join(dirPath, "saap.txt")

fs.unlinkSync(filePath)