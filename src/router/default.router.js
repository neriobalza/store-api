import { Router } from "express";

const router = Router();

export const apiInfo = {
  apiName: "Store Api",
  description: "",
  author: "Nerio Balza",
  personalWebsite: "https://neriobalza.com",
  respository: "https://github.com/neriobalza/store-api",
  apiDocumentation: "https://github.com/neriobalza/store-api/README.md",
};

router.get("/", (req, res) => {
  res.json({
    info: apiInfo,
    endpoints: {
      getProducts: "https://storeapi.neriobalza.com/products?limit=10&offset=0",
      getProudctById: "https://storeapi.neriobalza.com/products/id",
    },
  });
});

export default router;
