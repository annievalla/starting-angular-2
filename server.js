const express     = require("express");
const compression = require("compression");

process.on("uncaughtException", console.error);

const app  = express();
const port = 3011;

app.use(compression());

app.use(express.static(__dirname + "/"));
app.listen(port);
console.log("Server listening on port " + port);