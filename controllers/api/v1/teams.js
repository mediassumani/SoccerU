const express = require("express")
      cors = require("cors")
      router = express.Router()
      League = require("../../../models/league")
      Team = require("../../../models/team")
      helper = require("../../../helpers/validator")

// ENDPOINT TO GET ALL TEAMS
router.get("/api/v1/leagues/:leagueID/teams", cors(), function(req, res){

  const key = req.apiKey
  if(helper.isValideAPIKey(key)){

    League.findById(req.params.leagueID)
    .populate("teams")
    .then( (league) => {
      
      const teams = league.teams
      res.json(teams)
    }).catch( (error) => {
      res.status(400).send(error)
    })
  } else {
    res.status(401).send("Aunthenticated")
  }
})

// ENPOINT TO GET ONE SPECIFIC TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID", cors(), function(req, res){

  const key = req.apiKey
  if(helper.isValideAPIKey(key)){
    
    Team.findById(req.params.teamID)
    .then( (team) => {    
      res.status(200).json(team)
    }).catch( (error) => {
      res.status(400).send(error)
    })
  } else {
    res.status(401).send("Aunthenticated")
  }
})


module.exports = router
