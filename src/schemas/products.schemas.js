import * as yup from "yup"

const createProductsSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().positive().required(),
    category_id: yup.number().positive().required()
})

const productsReturnedData = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    price: yup.number(),
    category_id: yup.number(),
})


const listProductsReturnedData = yup.array(productsReturnedData)

export { createProductsSchema, productsReturnedData, listProductsReturnedData }