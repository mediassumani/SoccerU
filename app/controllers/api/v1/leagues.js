const express = require("express")
      router = express.Router()
      League = require("../../../models/league")
      User = require("../../../models/user")

// ENDPOINT TO ALL LEAGUES AVAILABLE
router.get("/api/v1/leagues", function(req, res){

  //const isValidRequest = req.validation
  //console.log("Is Request Valid : " + isValidRequest);
  console.log(req.validation);
  
  
  res.status(200)
  // League.find({})
  //   .then( (leagues) => {
  //     res.json(leagues)
  //   }).catch( error => {
  //     res.status(400).json({ error: error })
  //   })
})


// ENPOINT TO GET A SPECIFIC LEAGUE
router.get("/api/v1/leagues/:leagueID", function(req, res){
  League.findById(req.params.leagueID)
    .then( (league) => {
      res.json(league)
    }).catch( error => {
      res.status(400).json({ error: error })
    })
})


module.exports = router
