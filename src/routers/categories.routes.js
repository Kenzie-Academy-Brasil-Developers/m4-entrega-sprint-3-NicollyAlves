import { Router } from "express";
import { createCategoryController, deleteCategoryController, listCategoriesController, retrieveCategoryController, updateCategoryController } from "../controllers/categories.controllers";
import ensureCategoryExistsMiddleware from "../middlewares/ensureCategoryExists.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createCategoriesSchema } from "../schemas/categories.schemas";

const categoryRoutes = Router()

categoryRoutes.post("", ensureDataIsValidMiddleware(createCategoriesSchema), createCategoryController)
categoryRoutes.get("", listCategoriesController)
categoryRoutes.get("/:id", ensureCategoryExistsMiddleware, retrieveCategoryController)
categoryRoutes.delete("/:id", ensureCategoryExistsMiddleware, deleteCategoryController)
categoryRoutes.patch("/:id", ensureCategoryExistsMiddleware, updateCategoryController)

export default categoryRoutes