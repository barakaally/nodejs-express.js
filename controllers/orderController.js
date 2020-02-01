
const HTTP_STATUS_CODE = require("../enums/httpStatusCode");
const db = require("../database/fakedb")
const request = require('express').request;
const response = require('express').response;
class OrderController {
    /**
     * 
     * @param {request} req 
     * @param {response} res 
     */
    static getOrders(req, res) {

        const user = db.customers.find(x => x.id == req.params.id);
        if (user) {
            return res.send(user.orders);
        }

        res.status(HTTP_STATUS_CODE.nocontent).send();

    }

}

module.exports = OrderController;