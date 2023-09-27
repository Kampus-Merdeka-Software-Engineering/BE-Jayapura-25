const express = require("express");
const router = express.Router();
const checkUpController = require("../controller/check-up");

router.get("/", checkUpController.getCheckUpPage);
router.post("/", checkUpController.getFormTest);

module.exports = router;
