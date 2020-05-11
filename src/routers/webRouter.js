const express = require("express");
const webRouter = express.Router();
webRouter
  .get("/team", (req, res) => {
    res.render("team", {
      layout: "hero",
      PageTitle: "team"
    });
  })
  .get("/about", (req, res) => {
    res.render("aboutus", {
      layout: "hero",
      PageTitle: "about"
    });
  })
  .get("/tournament", (req, res) => {
    res.render("tournament", {
      layout: "hero",
      PageTitle: "tournament"
    });
  })
  .get("/contact", (req, res) => {
    res.render("contact", {
      layout: "hero",
      PageTitle: "contact"
    });
  });
module.exports = webRouter;
