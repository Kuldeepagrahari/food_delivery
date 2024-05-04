
const express = require("express");
const router = express.Router()
const app = express();
const authController = require("../../controllers/auth-controllers")

router.get("/",authController.home)

router.post("/register", authController.register)

router.route("/login").post(authController.login)
module.exports = router