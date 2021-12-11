const ApiError = require('../error/ApiError')

class UserController {
    // Регистрация
    async register(req, res) {

    }
    // Авторизация
    async login(req, res) {

    }
    // Проверка на авторизацию
    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()