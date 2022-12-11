import database from "../../database";

const retrieveProductCategory_idService = async (id) => {
    const queryResponse = await database.query(
        `SELECT
            products.name, products.price, categories.name category
        FROM
            products
        JOIN
            categories ON products.category_id = categories.id
        WHERE
            products.category_id = $1;
        `,
        [id]
    )
    
    const returnedData = queryResponse.rows
    
    return returnedData
}

export default retrieveProductCategory_idService