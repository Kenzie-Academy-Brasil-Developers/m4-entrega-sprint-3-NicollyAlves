import database from "../database";
import { AppError } from "../errors";

const ensureCategoryExistsMiddleware = async (request, response, next) => {
    try {
        const queryResponse = await database.query(
            `SELECT
                *
            FROM
                categories
            WHERE
                id = $1;
            `,
            [request.params.id]
        )
        console.log(queryResponse.rowCount);

        if(queryResponse.rowCount == 0){
            throw new AppError("category not found", 404)
        }

        } catch (error) {
            console.log(error);
            throw new AppError("category not found", 404)
        }

        return next()
    }


export default ensureCategoryExistsMiddleware