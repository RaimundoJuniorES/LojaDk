const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const ClientController = require("./controllers/ClientController");
const SaleController = require("./controllers/SaleController");

//Rotas Cliente
routes.get("/clients", ClientController.index);
routes.get("/client/:id", ClientController.show);
routes.post("/client", ClientController.store);
routes.put("/client/:id", ClientController.update);
routes.delete("/client/:id", ClientController.destroy);

//Rotas Venda
routes.get("/sales", SaleController.index);
routes.get("/sale/:id", SaleController.show);
routes.post("/sale/:id", SaleController.store);
routes.put("/sale/:id", SaleController.update);
routes.delete("/sale/:id", SaleController.destroy);

routes.put("/sale/:id", SaleController.pay);

//Rotas Produto
routes.get("/products", ProductController.index);
routes.get("/product/:id", ProductController.show);
routes.post("/product", ProductController.store);
routes.put("/product/:id", ProductController.update);
routes.delete("/product/:id", ProductController.destroy)

module.exports = routes;