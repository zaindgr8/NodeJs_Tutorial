const fs= require("fs")

const p=process.argv

if (p[2]=="add"){
    fs.writeFileSync(p[3], p[4])
}
else if(p[2]=="remove"){
    fs.unlinkSync(p[3])
}
else{
    console.log("Invalid")
}