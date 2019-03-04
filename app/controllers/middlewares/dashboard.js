const jwt = require("jsonwebtoken")
const express = require("express")
const router = express.Router()
const User = require("../../models/user")

router.get("/dashboard", function(req, res){
    res.render("dasboard")
})


module.exports = router