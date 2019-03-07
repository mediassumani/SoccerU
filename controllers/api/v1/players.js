const express = require("express")
      cors = require("cors")
      router = express.Router()
      Team = require("../../../models/team")
      Player = require("../../../models/player")

// ENDPOINT TO GET TEAM ROSTER
router.get("/api/v1/leagues/:leagueID/teams/:teamID/players", cors(), function(req, res){

  const key = req.apiKey
  if(helper.isValideAPIKey(key)){

    Team.findById(req.params.teamID)
    .populate("players")
    .then( team => {

      const players = team.players
      res.status(200).json(players)
    }).catch( error => {
      res.status(400).send({ error: error })
    })
   } else {
      res.status(401).send("Aunthenticated") 
  }
})

// ENPOINT TO GET A SPECIFIC PLAYER
router.get("/api/v1/leagues/:leagueID/teams/:teamID/players/:playerID", cors(), function(req, res){

  const key = req.apiKey
  if(helper.isValideAPIKey(key)){
    
    Player.findById(req.params.playerID)
    .then( player => {
      res.status(200).json(player)
    }).catch( error => {
      res.status(400).send({ error: error })
    })
  } else {
    res.status(401).send("Aunthenticated") 
  }
})


module.exports = router
