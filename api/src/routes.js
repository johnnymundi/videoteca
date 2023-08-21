const express = require("express");
const VideoController = require("./controllers/VideoController");
const routes = express.Router();

routes.get("/", (req, res) => res.send("Hello World"));
routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);
module.exports = routes;
