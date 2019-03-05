const jwt = require("jsonwebtoken")
const express = require("express")
const router = express.Router()
const User = require("../../models/user")


// ENDPOINT TO TO RENDER THE SIGN UP FORM
router.get("/sign-up", function(req, res){
  res.render("sign-up")
})

// ENDPOINT TO SIGN UP THE USER
router.post("/sign-up", function(request, response){
  
  const user = new User(request.body)
  user.save()
    .then( (savedUser) => {
      const token = jwt.sign({ _id: savedUser._id, email: savedUser.email, username: savedUser.username }, process.env.JWT_SECRET, {
        expiresIn: "60 days"
      });

      response.cookie("SUToken", token, {maxAge: 900000})
      response.status(200).redirect(`/dashboard/${user.username}`)
    }).catch( (error) => {
      response.status(400).json({ "error" : error})
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
        res.status(401).send({ message: 'email or password is incorect' }).redirect("/sign-in")
      }

      user.comparePassword(password, (err, isMatch) => {
        if(!isMatch) {
          console.log('is no match');
          
          res.status(401).send({ message: 'email or password is incorect' }).redirect("/sign-in")
        } else {
          console.log("is match baby");
          
          // create token and redirect to dahsboard page
          const token = jwt.sign({ _id: user._id, email: savedUser.email, username: savedUser.username }, process.env.JWT_SECRET, { expiresIn: '60 days' })

          res.cookie('SUToken', token, { maxAge: 900000 })
          response.status(200).redirect(`/dashboard/${user.email}`)
        }
      }).catch( (err) => {
        res.send(err)
      })
    }).catch((error) => {
      return res.send(401).send(error)
    });
});


// ENDPOINT TO SIGN OUT THE USER
router.delete('/sign-out', (req, res) => {
  // clear all our token and redirect to API documentation page
  res.clearCookie('SUToken');
  res.status(200).redirect("/https://mediboss.github.io/SoccerU/#/")
});


module.exports = router
