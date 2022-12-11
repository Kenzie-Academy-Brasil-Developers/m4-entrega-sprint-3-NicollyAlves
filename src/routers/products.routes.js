import { Router } from "express";
import { createProductController, deleteProductController, listProductsController, retrieveProductCategory_idController, retrieveProductController, updateProductController } from "../controllers/products.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureProductCategory_idExistsMiddleware from "../middlewares/ensureProductCategory_id.middleware";
import ensureProductExistsMiddleware from "../middlewares/ensureProductExists.middleware";
import { createProductsSchema } from "../schemas/products.schemas";

const productsRoutes = Router()

productsRoutes.post("", ensureDataIsValidMiddleware(createProductsSchema), createProductController)
productsRoutes.get("", listProductsController)
productsRoutes.get("/:id", ensureProductExistsMiddleware, retrieveProductController)
productsRoutes.get("/category/:id", ensureProductCategory_idExistsMiddleware, retrieveProductCategory_idController)
productsRoutes.delete("/:id", ensureProductExistsMiddleware, deleteProductController)
productsRoutes.patch("/:id", ensureProductExistsMiddleware, updateProductController)

export default productsRoutes