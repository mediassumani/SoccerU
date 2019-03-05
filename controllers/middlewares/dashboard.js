const express = require("express")
const router = express.Router()
const User = require("../../models/user")

router.get("/dashboard/:username", function(req, res){
    
    const username = req.params.username
    User.findOne({ username: username })
        .then( (user) => {
            const token = user.apiKey
            res.status(200).render("dashboard", { user,  token })
        }).catch( (err) => {
            res.status(400).send(err)
        })
})


module.exports = router