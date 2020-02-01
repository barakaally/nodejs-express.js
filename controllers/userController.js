
const HTTP_STATUS_CODE = require("../enums/httpStatusCode");
const db = require("../database/fakedb")
const request = require('express').request;
const response = require('express').response;

class UserController {
    /**
    * 
    * @param {request} req 
    * @param {response} res 
    */
    static getUsers(req, res) {
        res.send(db.customers);

    }

}

module.exports = UserController;