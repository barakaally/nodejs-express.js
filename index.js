const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json(), cors());
app.get('/', (req, res) => {
    return res.send({ message: "its work fine,welcome home" });
});

app.listen(9000, () => {
    console.log("server started on port 9000");
});