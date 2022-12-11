import database from "../../database";
import { productsReturnedData } from "../../schemas/products.schemas";

const deleteProductService = async (id) => {
    const queryResponse = await database.query(
        `DELETE FROM
            products
        WHERE
            products.id = $1;
        `,
        [id]
    )

    const returnedData = await productsReturnedData.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return returnedData
}

export default deleteProductService