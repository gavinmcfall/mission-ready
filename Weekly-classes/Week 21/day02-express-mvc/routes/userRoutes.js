const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api/users", userController.getAllUsers);
router.get("/api/users/:name", userController.getUserByName);
module.exports = router;
