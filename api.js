const http= require("http")
const data= require("./data")

http.createServer((req, resp)=>{
    resp.writeHead(200, {"Type-Content":"application/JSON"})
    // resp.write(JSON.stringify({name:"Zain Baloch", email:"zangbang360@gmail.com"}))
    resp.write(JSON.stringify(data)); resp.end()
}).listen(5500)