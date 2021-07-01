const express = require("express");
const router = express.Router();
const Products = require("../model/what");

router.get("/", (req, res, next) => {
  res.render("main", {
    pageTitle: "so",
  });
});
router.post("/add-value", (req, res, next) => {
  const product = new Products(req.body.title);
  product.save();
  res.redirect("/");
});

router.get("/user", (req, res, next) => {
  res.render("user", {
    pageTitle: "",
  });
});

module.exports = router;
