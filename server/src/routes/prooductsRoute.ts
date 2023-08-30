import express from "express";
import productsControllers from "../controllers/productsControllers";

const routerProducts = express.Router();

routerProducts.route("/")
  .get(productsControllers.getProducts);

export default routerProducts;
