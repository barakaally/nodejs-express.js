
const HTTP_STATUS_CODE = require("../enums/httpStatusCode");
const db = require("../database/fakedb")

class UserController {

    static getUsers(req, res) {
        res.send(db.customers);
    }

}

module.exports = UserController;