const express = require("express");
const { createUser } = require("../controllers/users.ct");
const { asyncHandler } = require("../middlewares/asyncHandler.mw");
const router = express.Router();

router.route("/").post(asyncHandler(createUser));

module.exports = router;
