import { Router } from "express";
import defaultRoutes from "./default.router.js";
import productsRoutes from "./products.router.js";

const router = (app) => {
  const apiRouter = Router();
  apiRouter.use("/", defaultRoutes);
  apiRouter.use("/products", productsRoutes);
  app.use("/api", apiRouter);
};

export default router;
