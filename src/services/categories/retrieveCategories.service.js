import database from "../../database";
import { categoriesReturnedData } from "../../schemas/categories.schemas";

const retrieveCategoryService = async (id) => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            categories.id = $1;
        `,
        [id]
    )

    const returnedData = await categoriesReturnedData.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return returnedData
}

export default retrieveCategoryService