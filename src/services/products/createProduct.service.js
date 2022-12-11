import database from "../../database";
import { productsReturnedData } from "../../schemas/products.schemas";

const createProductService = async (productData) => {

    const queryResponse = await database.query(
        `INSERT INTO
            products(name, price, category_id)
        VALUES
            ($1, $2, $3)
        RETURNING *;
        `,
        [productData.name, productData.price, productData.category_id]
    )
    
    const returnedProduct = await productsReturnedData.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return returnedProduct
}

export default createProductService