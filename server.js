const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const router = require("./modules/router/router");

app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => console.log(`Server started at ${PORT}.`));
