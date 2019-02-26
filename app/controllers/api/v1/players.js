const express = require("express")
      router = express.Router()
      Team = require("../../../models/team")
      Player = require("../../../models/player")

// ENDPOINT TO GET TEAM ROSTER
router.get("/api/v1/leagues/:leagueID/teams/:teamID/players", function(req, res){
  Player.find()
    .then( players => {
      res.send(players)
    }).catch( error => {
      res.status(400).send({ error: error })
    })
})

// ENPOINT TO GET A SPECIFIC PLAYER
router.get("/api/v1/leagues/:leagueID/teams/:teamID/players/:playerID", function(req, res){
  Player.findById(req.params.playerID)
    .then( player => {
      res.send(player)
    }).catch( error => {
      res.status(400).send({ error: error })
    })
})


module.exports = router
