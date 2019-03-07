const jwt = require("jsonwebtoken")
const express = require("express")
const router = express.Router()
const User = require("../../models/user")


// ENDPOINT TO TO RENDER THE SIGN UP FORM
router.get("/sign-up", function(req, res){
  res.status(200).render("sign-up")
})

// ENDPOINT TO SIGN UP THE USER
router.post("/sign-up", function(request, response){
  
  const user = new User(request.body)
  user.save()
    .then( (savedUser) => {
      const token = jwt.sign({ _id: savedUser._id, email: savedUser.email, username: savedUser.username }, process.env.JWT_SECRET, {
        expiresIn: "60 days"
      });

      console.log(savedUser);
      
      response.cookie("SUToken", token, {maxAge: 900000})
      response.status(200).redirect(`/dashboard/${user.username}`)
    }).catch( (error) => {
      response.status(400).json({ "error" : error})
    })
})


// ENDPOINT TO TO RENDER THE SIGN IN FORM
router.get("/sign-in", function(req,res){
  res.status(200).render("sign-in")
})

// ENDPOINT TO SING IN THE USER
router.post('/sign-in', (req, res) => {

  const userEmail = req.body.email;
  const userPassword = req.body.password;

  User.findOne({ email: userEmail })
    .then((user) => {
      // send an authorized code if wrong credentials provided
      if (!user) {
        res.sendStatus(401)
      } else {
        // send an authorized code if password does not match
        user.comparePassword(userPassword, (err, isMatch) => {
          if (!isMatch) {
            console.log("no match");
            
            return res.sendStatus(401)
          } else {

            // create token and send it as cookie          
            const token = jwt.sign({ _id: user._id, email: user.email, username: user.username }, process.env.JWT_SECRET, { expiresIn: '60 days' })
            res.cookie('SUToken', token, { maxAge: 900000 })
            res.status(200).redirect(`/dashboard/${user.username}`)
          }
        })
      }
    }).catch((error) => {
      console.log(error);
      
      return res.sendStatus(401)
    });
});


// ENDPOINT TO SIGN OUT THE USER
router.get('/sign-out', (req, res) => {
  // clear all our token and redirect to API documentation page
  res.clearCookie('SUToken');
  res.status(200).redirect("/sign-up")
});


module.exports = router
