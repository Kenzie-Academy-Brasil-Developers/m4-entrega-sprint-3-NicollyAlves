import * as yup from "yup"

const createCategoriesSchema = yup.object().shape({
    name: yup.string().required()
})

const categoriesReturnedData = yup.object().shape({
    id: yup.number(),
    name: yup.string()
})

const listCategoriesReturnedData = yup.array(categoriesReturnedData)

export { createCategoriesSchema, categoriesReturnedData, listCategoriesReturnedData }
