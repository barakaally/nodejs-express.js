const keys = require("./keys");
const Router = require("./routes/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();


app.use(bodyParser.json(), cors());

Router.addRoutes(app);

app.listen(keys.PORT, () => {
    console.log(`server started on port  ${keys.PORT}`);
});
