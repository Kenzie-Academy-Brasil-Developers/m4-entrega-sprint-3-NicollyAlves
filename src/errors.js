
class AppError extends Error{
    statusCode
    constructor(message, statusCode){
        super()
        this.message = {message}
        this.statusCode = statusCode
    }
}

const errorHandler = (error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json(error.message)
    }

    return response.status(500).json({
        message: "Internal server error"
    })
}

export { AppError, errorHandler }