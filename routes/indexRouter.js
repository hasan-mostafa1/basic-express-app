const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Hello, world!"));
indexRouter.get("/about", (req, res) => res.send("This is about page."));
indexRouter.get("/contact", (req, res) => res.send("Contact me!"));

module.exports = indexRouter;
