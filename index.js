const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require('morgan');
const server = express();

//Middleware
server.use(express.json()) // bodyParser
// server.use(express.urlencoded()) // used when we sends data from form

server.use(morgan('default'))
server.use(express.static('public'));
// server.use((req,res,next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(),req.get("User-Agent"));
//     next()
// })
const auth = (req, res, next) => {
  console.log(req.body);
  if (req.body.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// API - Endpoint = Route
server.get("/", auth, (req, res) => {
   res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/demo", (req, res) => {
  res.status(201).send("<b>20002</b>");
  // res.sendStatus(404)
  // res.send("<h1>helow server</h1>")
  //   res.sendFile("D:/Study/Node/index.html");
  // res.json(products)
});

server.listen(8080, () => {
  console.log("server started on port 8080");
});
