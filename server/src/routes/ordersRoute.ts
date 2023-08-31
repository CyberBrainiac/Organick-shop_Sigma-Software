import express from "express";
import ordersControllers from "../controllers/ordersControllers";

const routerOrders = express.Router();

routerOrders.route("/")
  .get(ordersControllers.getOrders)
  .post(ordersControllers.postOrders);
export default routerOrders;
