const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Startpage"));
indexRouter.get("/{*splat}", (req, res) => res.send("404 Page not found"))

module.exports = bookRouter;