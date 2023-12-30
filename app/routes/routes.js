const express = require("express");

const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");

const router = express.Router();

router.route("/admin", adminRoutes);
router.route("/", userRoutes);

module.exports = router;
