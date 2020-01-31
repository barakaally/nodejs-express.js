
const HTTP_STATUS_CODE = require("../enums/httpStatusCode");
const db = require("../database/fakedb")
const express = require('express');
const App = express();
class controller {
    /**
    *  @param { App } app
    */
    static addRoutes(app) {
        /**
         * register routes here
         */
        app.get("/", (req, res) => {
            res.send(db.customers);
        });

        app.get("/orders", (req, res) => {
            const corders = db.customers.find(x => x.id == req.query.customerid).orders;
            res.send(corders);
        });

        app.post("/login", (req, res) => {
            let user = db.customers.find(x => x.email == req.body.email && x.password == req.body.password);
            if (user) {
                user.password = null;
                return res.send(user);

            }
            const message = { error: "wrong username or email" };
            res.status(HTTP_STATUS_CODE.unauthorized).send(message);

        });

    }

}

module.exports = controller;