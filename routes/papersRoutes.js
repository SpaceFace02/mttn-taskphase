const express = require("express");
const papersController = require("../controllers/papersController");

const router = express.Router();

router.route("/").get(papersController.getAllPapers);

module.exports = router;
