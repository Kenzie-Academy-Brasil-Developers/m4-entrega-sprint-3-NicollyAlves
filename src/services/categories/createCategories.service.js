import database from "../../database";
import { AppError } from "../../errors";
import { categoriesReturnedData } from "../../schemas/categories.schemas";

const createCategoryService = async (categoryData) => {
    const searchCategory = await database.query(
        `SELECT 
            *
        FROM 
            categories
        WHERE 
            name = $1;
        `,
        [categoryData.name]
    )

    if(searchCategory.rowCount > 0){
        throw new AppError('category already exists', 400)
    }
    const queryResponse = await database.query(
        `INSERT INTO
            categories (name)
        VALUES 
            ($1)
        RETURNING *;
        `,
        [categoryData.name]
    )

    const returnedCategory = await categoriesReturnedData.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return returnedCategory
}

export default createCategoryService