const IndexController = require('../controllers/indexController');
const UserController = require('../controllers/userController');
const OrderController = require('../controllers/orderController');

const express = require('express');
const App = express();
class Router {
    /**
    *  @param { App } app
    */
    static addRoutes(app) {
        /**
         * register routes here
         */

        app.get("/", UserController.getUsers);

        app.get("/orders/customer/:id", OrderController.getOrders);

        app.post("/login", IndexController.login);

    }

}

module.exports = Router;