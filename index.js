const keys = require("./keys");
const router = require("./controllers/controller");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json(), cors());

router.addRoutes(app);

app.listen(keys.PORT, () => {
    console.log(`server started on port  ${keys.PORT}`);
});