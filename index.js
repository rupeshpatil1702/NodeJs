const express = require("express");
const server = express();
const morgan = require("morgan");

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'))
server.use('/',productRouter)


//MVC - model view controller


server.listen(8080, () => {
  console.log("server started on port 8080");
});
