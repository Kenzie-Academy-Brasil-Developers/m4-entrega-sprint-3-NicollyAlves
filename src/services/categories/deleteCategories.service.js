import database from "../../database";

const deleteCategoryService = async (id) => {
    await database.query(
        `DELETE FROM
            categories
        WHERE
            categories.id = $1;
        `,
        [id]
    )
    return {}
}

export default deleteCategoryService