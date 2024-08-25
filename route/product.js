const express   =require('express')
const productRouter = express.Router();
const productController = require('../controller/product')
exports.productRouter
  .get("/products", productController.getAllProducts)
  .get("/products/:id", productController.getProduct)
  .post("/products", productController.createProduct)
  .put("/products/:id", productController.replaceProduct)
  .patch("/products/:id", productController.updateProduct)
  .delete("/products/:id", productController.deleteProduct);
