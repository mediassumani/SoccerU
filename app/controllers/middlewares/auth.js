const jwt = require("jsonwebtoken")
const express = require("express")
const router = express.Router()
const User = require("../../../models/user")

router.get("/api/v1/signup", function(request, response){

  const user = new User(req.body)
  user.save()
    .then( (savedUser) => {
      const token = jwt.sign({ _id: savedUser._id }, 'shhhhhhared-secret', {
        expiresIn: "60 days"
      });
      response.cookie("SUToken", token, {maxAge: })
      response.send(user)
    })
    .catch( (error){
      return response.status(400).send({ error: error})
    })
})



module.exports = router
