import { Router } from "express";
import productController from "../controllers/product.controller";

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', productController.addProduct);

productRouter.get('/:id', productController.getProductById);
productRouter.put('/:id', productController.updateProductById);
productRouter.delete('/:id', productController.deleteProductById);

export default productRouter;
