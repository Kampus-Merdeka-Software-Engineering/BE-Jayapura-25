const express = require("express");
const router = express.Router();
const aboutUsController = require("../controller/about-us");

router.get("/", aboutUsController.getAboutUs);

module.exports = router;
