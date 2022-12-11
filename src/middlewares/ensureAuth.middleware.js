import "dotenv/config"

const ensureAuthMiddleware = (request, response, next) => {
    request.user = {
        id: decoded.sub
    }

    return next()
}

export default ensureAuthMiddleware