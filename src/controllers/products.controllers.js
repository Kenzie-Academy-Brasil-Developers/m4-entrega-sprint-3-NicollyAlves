import { errorHandler } from "../errors"
import createProductService from "../services/products/createProduct.service"
import deleteProductService from "../services/products/deleteProducts.service"
import listProductsService from "../services/products/listProducts.service"
import retrieveProductCategory_idService from "../services/products/retrieveProductCategory_Id.service"
import retrieveProductService from "../services/products/retrieveProducts.service"
import updateProductService from "../services/products/updateProducts.service"

const createProductController = async (request, response) => {
    const data = await createProductService(request.validatedBody)
    return response.status(201).json(data)
}

const listProductsController = async (request, response) => {
    const data = await listProductsService(request.query)
    return response.status(200).json(data)
}

const retrieveProductController = async (request, response) => {
    const data = await retrieveProductService(request.params.id)
    return response.status(200).json(data)
}

const retrieveProductCategory_idController = async (request, response) => {
    const data = await retrieveProductCategory_idService(request.params.id)
    return response.status(200).json(data)       
}

const deleteProductController = async (request, response) => {
    const data = await deleteProductService(request.params.id)
    return response.status(204).json(data)
}

const updateProductController = async (request, response) => {
    const id = request.params.id
    const userData = request.body
    const data = await updateProductService(id, userData)
    return response.status(200).json(data)
}

export { createProductController, listProductsController, retrieveProductController, retrieveProductCategory_idController, deleteProductController, updateProductController }