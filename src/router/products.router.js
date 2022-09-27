import { Router } from "express";
import PorductService from "../services/product.service.js";

const router = Router();
const service = new PorductService();

router.get("/", (req, res) => {
  const products = service.find();
  res.json({
    result: products,
  });
});

// Create new product
router.post("/", (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    message: "Created",
    result: newProduct,
  });
});

router.get("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const product = products.find((pObject) => pObject.id === parseInt(id));

//   if (product) {
//     res.json({
//       info: {},
//       result: product,
//     });
//   } else {
//     res.status(404).json({
//       info: {
//         message: "Product not found",
//       },
//       result: null,
//     });
//   }
// });

export default router;
