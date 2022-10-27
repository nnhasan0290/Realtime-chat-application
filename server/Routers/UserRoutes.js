const express = require('express')
const router = express.Router()
const {registerUser} = require("./../Controllers/userControllers.js")

router.route("/register").post(registerUser)


module.exports = router;