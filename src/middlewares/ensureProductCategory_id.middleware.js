import database from "../database";
import { AppError } from "../errors";

const ensureProductCategory_idExistsMiddleware = async (request, response, next) => {
    try {
        const queryResponse = await database.query(
            `SELECT
                *
            FROM
                products
            WHERE
                category_id = $1;
            `,
            [request.params.id]
        )
        const product = queryResponse.rows[0]

        if(!product) {
            throw new AppError("product not found", 404)
        }
    } catch (error) {
        throw new AppError("product not found", 404)
    }

    return next()
}

export default ensureProductCategory_idExistsMiddleware