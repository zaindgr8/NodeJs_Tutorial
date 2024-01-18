const fs=require("fs")
const path= require("path")

const dirPath=path.join(__dirname, "crud")
const filePath=path.join(dirPath, "supera.txt")

fs.rename(filePath, `${dirPath}/saap.txt`, (err, item)=>{
    console.log("Super Dooper")
})