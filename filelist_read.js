//read each file of folder
const fs=require("fs")
const path=require("path")

const myDir= path.join(__dirname, "file")

fs.readdir(myDir, (error, file)=>{
    file.forEach((item)=>{
        console.log(item)
    })
})