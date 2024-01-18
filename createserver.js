const http = require("http");

// http
//   .createServer((req, resp) => {
//     resp.write("This is response 123");
//     resp.end();
//   })
//   .listen(4500);

function dataControl(req, resp){
    resp.write("This is via dataControl")
    resp.end()
}

http.createServer(dataControl).listen(4500)
