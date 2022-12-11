import { errorHandler } from "../errors";
import createCategoryService from "../services/categories/createCategories.service";
import deleteCategoryService from "../services/categories/deleteCategories.service";
import listCategoriesService from "../services/categories/listCategories.service";
import retrieveCategoryService from "../services/categories/retrieveCategories.service";
import updateCategoryService from "../services/categories/updateCategories.service";

const createCategoryController = async (request, response) => {
    const data = await createCategoryService(request.validatedBody)
    return response.status(201).json(data)
}

const listCategoriesController = async (request, response) => {
    const data = await listCategoriesService(request.query)
    return response.status(200).json(data)
}

const retrieveCategoryController = async  (request, response) => {
    const data = await retrieveCategoryService(request.params.id)
    return response.status(200).json(data)
}

const deleteCategoryController = async (request, response) => {
    const data = await deleteCategoryService(request.params.id)
    return response.status(204).json(data)
}

const updateCategoryController = async (request, response) => {
    const id = request.params.id
    const userData = request.body
    const data = await updateCategoryService(id, userData)
    return response.status(200).json(data)
}

export { createCategoryController, listCategoriesController, retrieveCategoryController, deleteCategoryController, updateCategoryController }