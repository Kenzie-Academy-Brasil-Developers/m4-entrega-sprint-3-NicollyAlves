import database from "../../database"

const updateProductService = async (id, userData) => {

    delete userData["id"]

    let query = 'UPDATE products SET '
    const keys = Object.keys(userData)
    const values = Object.values(userData)

    keys.forEach((key, index) => {
        query += `${key} = \$${index+=1}, `
    })

    query = query.slice(0, -2)

    query += `WHERE id = \$${keys.length+1} RETURNING *;` 

    console.log(query)
    
    const queryResponse = await database.query(
        query,
        [...values, id]
    )
    return queryResponse.rows[0]
}

export default updateProductService