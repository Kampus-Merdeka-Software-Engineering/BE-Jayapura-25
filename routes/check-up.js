const express = require("express");
const router = express.Router();
const checkUpController = require("../controller/check-up");

router.get("/", checkUpController.getCheckUpPage);

module.exports = router;
