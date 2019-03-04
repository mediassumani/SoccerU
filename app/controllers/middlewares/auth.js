const jwt = require("jsonwebtoken")
const express = require("express")
const router = express.Router()
const User = require("../../models/user")


// ENDPOINT TO TO RENDER THE SIGN UP FORM
router.get("/sign-up", function(req, res){
  res.render("sign-up")
})

// ENDPOINT TO SIGN IN THE USER
router.post("/sign-up", function(request, response){
  console.log(request.body);
  
  const user = new User(request.body)
  user.save()
    .then( (savedUser) => {
      const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET, {
        expiresIn: "60 days"
      });
      response.cookie("SUToken", token, {maxAge: 900000})
      response.status(200).render("dashboard")
    }).catch( (error) => {
      return response.status(400).send({ error: error})
    })
})


// ENDPOINT TO TO RENDER THE SIGN IN FORM
router.get("/sign-in", function(req,res){
  res.render("sign-in")
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
      return res.status(200).cookie('SUToken', token, { maxAge: 900000 }).render("dashboard")
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
