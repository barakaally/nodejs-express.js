
class controller {
    /**
    *  @app { Express }
    */
    static addRoutes(app) {
    /**
     * @ register app routes here
     */
        app.get("/", (req, res) => {
            res.send({ welcome: `welcome page`});
        });

        app.get("/users", (req, res) => {
            res.send({ welcome: "users page" });
        });
    }

}

module.exports = controller;