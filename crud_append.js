const fs=require("fs")
const path=require("path")

const dirPath=path.join(__dirname, "crud")
const filePath=path.join(dirPath, "hey.txt")

fs.appendFile(filePath, "Another Apend", (err, item)=>{
  console.log("Mubarak ho")
})