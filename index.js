const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require('morgan');
const exp = require("constants");
const server = express();

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'))


// API - Endpoint = Route
//Products
//Read GET/products
server.get("/products", (req, res) => {
   res.json(products);
});

//Read GET/products/:id
server.get("/products/:id", (req, res) => {
    const id = +req.params.id;
    const product = products.find(p=>p.id===id)
  res.json(product);
});

//Create POST/products
server.post("/products", (req, res) => {
    console.log(req.body)
    products.push(req.body)
  res.json(req.body);
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
