const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const all = require("./routers/routes");
const port = 5000;
const host = "127.0.0.1";

express.json();
express.urlencoded({ extended: true });

app.set("view engine", "ejs");
app.set("views", "view");

app.use(all);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found!!!!" });
});

const server = http.createServer(app);
server.listen(port || process.env.PORTlcoa, host);
