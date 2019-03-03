const jwt = require("jsonwebtoken")
const express = require("express")
const router = express.Router()
const User = require("../../models/user")

router.post("/sign-up", function(request, response){
  
  const user = new User(request.body)
  user.save()
    .then( (savedUser) => {
      const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET, {
        expiresIn: "60 days"
      });
      response.cookie("SUToken", token, {maxAge: 900000})
      response.status(200).json(savedUser)
    }).catch( (error) => {
      return response.status(400).send({ error: error})
    })
})

// ENDPOINT TO SIGN IN THE USER
router.post('/sign-in', (req, res) => {

  const userEmail = req.body.email;
  const userPassword = req.body.password;

  User.findOne({ email: userEmail })
    .then((user) => {
      if (!user) {
        res.status(401).send({ message: 'email or password is incorect' })
      }

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '60 days' })
      res.status(200).cookie('SUToken', token, { maxAge: 900000 }).json(user)
    }).catch((error) => {
      return res.send(401).send(error)
    });
});


// ENDPOINT TO SIGN OUT THE USER
router.delete('/sign-out', (req, res) => {
  res.clearCookie('SUToken');
  // TODO : REDIRECT THE USER SOMEWHERE
});


module.exports = router
