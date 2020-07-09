import express from "express";

import CompanyController from "./controllers/CompanyController";
import ProductsController from "./controllers/ProductsController";
import StoresControllers from "./controllers/StoresController";
import SessionController from "./controllers/SessionControler";

import verifyJWT from "./utils/jwt";

const routes = express.Router();

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

//ROTAS PARA 
// routes.get("/profile", ProfileCompanyController.index);

module.exports = routes;
