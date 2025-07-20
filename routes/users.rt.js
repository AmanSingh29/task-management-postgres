const express = require("express");
const { createUser } = require("../controllers/users.ct");
const { asyncHandler } = require("../middlewares/asyncHandler.mw");
const sendResponse = require("../middlewares/sendResponse.mw");
const router = express.Router();

router.route("/").post(asyncHandler(createUser), sendResponse);

module.exports = router;
