const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");

router.get("/", homeController.getHome);

router.post("/", homeController.addFeedback);

module.exports = router;
