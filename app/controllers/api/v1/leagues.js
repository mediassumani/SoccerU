const express = require("express")
      router = express.Router()
      League = require("../../../models/league")

// ENDPOINT TO ALL LEAGUES AVAILABLE
router.get("/api/v1/leagues", function(req, res){
  League.find({})
    .then( (leagues) => {
      res.send(leagues)
    })
})

// ENPOINT TO GET A SPECIFIC LEAGUE
router.get("/api/v1/leagues/:leagueID", function(req, res){
  League.find({ _id: req.params.leagueID })
    .then( (league) => {
      res.send(league)
    })
})


module.exports = router
