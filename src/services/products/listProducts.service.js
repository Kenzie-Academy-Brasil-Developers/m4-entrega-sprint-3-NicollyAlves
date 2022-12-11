import database from "../../database";
import { listProductsReturnedData } from "../../schemas/products.schemas";

const listProductsService = async () => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            products;
        `
    )

    const returnedData = await listProductsReturnedData.validate(queryResponse.rows, {
        stripUnknown: true
    })

    return returnedData
}

export default listProductsService