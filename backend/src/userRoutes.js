const {Router} = require('express')
const routes = Router()
const authRouter = require('./middlewares/autentication')

//ROUTES FOR USERS
const UserController = require('./controllers/UsersController')
routes.post('/register', UserController.register)
routes.post('/login', UserController.login)
routes.get('/validate', authRouter ,UserController.validate)


module.exports =  routes
