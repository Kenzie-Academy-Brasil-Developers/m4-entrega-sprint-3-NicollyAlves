import database from "../../database";
import { listCategoriesReturnedData } from "../../schemas/categories.schemas";

const listCategoriesService = async () => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            categories;
        `
    )

    const returnedData = await listCategoriesReturnedData.validate(queryResponse.rows, {
        stripUnknown: true
    })

    return returnedData
}

export default listCategoriesService