const express = require("express")
      router = express.Router()
      League = require("../../../models/league")

// ENDPOINT TO ALL LEAGUES AVAILABLE
router.get("/api/v1/leagues", function(req, res){
  League.find({})
    .then( (leagues) => {
      res.send(leagues)
    }).catch( error => {
      res.status(400).send({ error: error })
    })
})

// ENPOINT TO GET A SPECIFIC LEAGUE
router.get("/api/v1/leagues/:leagueID", function(req, res){
  League.findById(req.params.leagueID)
    .then( (league) => {
      res.send(league)
    }).catch( error => {
      res.status(400).send({ error: error })
    })
})


module.exports = router
