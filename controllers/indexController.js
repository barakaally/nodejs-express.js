
const HTTP_STATUS_CODE = require("../enums/httpStatusCode");
const db = require("../database/fakedb")

class IndexController {

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