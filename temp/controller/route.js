const exp = require("express");
const route = exp.Router();
const Products = require("../module/add");

route.get("/", (req, res, next) => {
  res.render("main", {
    pageTitle: "firstPage",
  });
});
route.post("/addvalue", (req, res, next) => {
  const pro = new Products(req.body.title);
  pro.save();
  res.redirect("/addvalue");
});
route.get("/addvalue", (req, res, next) => {
  const prods = Products.fetchdata();
  res.render("add", {
    pageTitle: "add-value",
    prodsValue: prods,
  });
});

module.exports = route;
