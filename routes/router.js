const IndexController = require('../controllers/indexController');
const UserController = require('../controllers/userController');
const OrderController = require('../controllers/orderController');
const router = require('express').Router;

class Router {
    /**
    *  @param { router } router
    */
    static addRoutes(router) {
        /**
         * register routes here
         */

        router.get("/", UserController.getUsers);

        router.get("/orders/customer/:id", OrderController.getOrders);

        router.post("/login", IndexController.login);
        
    }

}

module.exports = Router;