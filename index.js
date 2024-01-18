const http = require("http");

http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.write(
      JSON.stringify({
        email: "hey@gmail.com",
        name: "Zain Ul Abideen Baloch",
      })
    );
    resp.end();
  })
  .listen(4300);
