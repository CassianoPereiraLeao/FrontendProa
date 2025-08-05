import { Router } from "express";
import Customers from "./app/Controllers/CustomersController"
const routes = new Router();

routes.get("/customer", Customers.index);
routes.get("/customer/:id", Customers.show);
routes.post("/customer", Customers.create);
routes.put("/customer/:id", Customers.update);
routes.delete("/customer/:id", Customers.delete);

export default routes;
