
const express = require('express');
const App = express();
class controller {
    /**
    *  @param { App } app
    */
    static addRoutes(app) {
        /**
         * @ register app routes here
         */
        app.get("/", (req, res) => {
            res.send({ welcome: `welcome page` });
        });

        app.get("/users", (req, res) => {
            res.send({ welcome: "users page" });
        });

    }

}

module.exports = controller;