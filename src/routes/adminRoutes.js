const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController.js");

router.get("/", apiController.getAll);

module.exports = router;