 const http = require('http')
 
//  const data = 
const server = http.createServer((req, res) => {
    console.log("server started");
    res.setHeader("header","value of headerk")
    res.end();
})

server.listen(8080)