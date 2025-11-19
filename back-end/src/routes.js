const express = require("express");
const CompanyController = require("./controllers/CompanyController");
const ProductsController = require("./controllers/ProductsController");
const StoresControllers = require("./controllers/StoresController");
const SessionController = require("./controllers/SessionControler");
const verifyJWT =  require("./utils/jwt");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

routes.post("/sessions/login", SessionController.login);
routes.post("/sessions/logout", SessionController.logout);

routes.get("/companys", CompanyController.index);
routes.post("/companys", CompanyController.store);
routes.put("/companys/:id", verifyJWT, CompanyController.update);
routes.delete("/companys/:id", verifyJWT, CompanyController.delete);

routes.post("/products", verifyJWT, ProductsController.store);
routes.get("/products", ProductsController.index);
routes.put("/products/:id", verifyJWT, ProductsController.update);
routes.delete("/products/:id", verifyJWT, ProductsController.delete);

routes.post("/stores", verifyJWT, StoresControllers.store);
routes.get("/stores", StoresControllers.index);
routes.get("/stores/:id", StoresControllers.getById);
routes.put("/stores/:id", verifyJWT, StoresControllers.update);
routes.delete("/stores/:id", verifyJWT, StoresControllers.delete);

module.exports = routes;
