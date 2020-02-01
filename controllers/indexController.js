
const HTTP_STATUS_CODE = require("../enums/httpStatusCode");
const db = require("../database/fakedb")
const request = require('express').request;
const response = require('express').response;

class IndexController {
    /**
     * 
     * @param {request} req 
     * @param {response} res 
     */
    static login(req, res) {
        let user = db.customers.find(x => x.email == req.body.email && x.password == req.body.password);
        if (user) {
            user.password = null;
            return res.send(user);

        }
        const message = { error: "wrong username or email" };
        res.status(HTTP_STATUS_CODE.unauthorized).send(message);
    }

}

module.exports = IndexController;