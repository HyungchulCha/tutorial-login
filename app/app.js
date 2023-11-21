// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
//   console.log(req.url);
//   if (req.url === "/") {
//     res.end("here root");
//   } else if (req.url === "/login") {
//     res.end("here login");
//   }
// });
// app.listen(3001, () => {
//   console.log("http server");
// });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);

module.exports = app;
