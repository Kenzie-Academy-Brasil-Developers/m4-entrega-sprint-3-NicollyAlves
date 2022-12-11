import "express-async-errors"
import express from "express"
import { errorHandler } from "./errors"
import categoryRoutes from "./routers/categories.routes"
import productsRoutes from "./routers/products.routes"

const app = express()

app.use(express.json())

app.use("/categories", categoryRoutes)
app.use("/products", productsRoutes)


app.use(errorHandler)

export default app
