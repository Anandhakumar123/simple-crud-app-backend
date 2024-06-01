const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);

//http://localhost:3000/api/product/665a84248949a639e84e7df2     <--req example
router.get("/:id", getProduct); //get single product

//http://localhost:3000/api/products     <--req example
router.post("/", createProduct);

//http://localhost:3000/api/product/665a84248949a639e84e7df2    <--req example
router.put("/:id", updateProduct);

//http://localhost:3000/api/product/665a84248949a639e84e7df2    <--req example
router.delete("/:id", deleteProduct);

module.exports = router;
