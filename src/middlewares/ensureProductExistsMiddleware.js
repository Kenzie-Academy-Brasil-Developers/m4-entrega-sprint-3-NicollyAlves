import database from "../database";

const ensureProductExistsMiddleware = async (request, response, next) => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            products
        WHERE
            id = $1;
        `,
        [request.params.id]
    )

    const product = queryResponse.rows[0]

    if(!product) {
        return response.status(404).json({
            message: "Product not found!"
        })
    }

    return next()
}

export default ensureProductExistsMiddleware