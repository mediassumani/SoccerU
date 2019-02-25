const express = require("express")
      router = express.Router()
      League = require("../../../models/league")
      Team = require("../../../models/team")

// ENDPOINT TO GET ALL TEAMS
router.get("/api/v1/leagues/:leagueID/teams", function(req, res){
  League.findById(req.params.leagueID)
    .then( (league) => {
      const teams = league.teams
      res.send(teams)
    }).catch( (error) => {
      res.status(400).send({ error: error })
    })
})

// ENPOINT TO GET ONE SPECIFIC TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID", function(req, res){
  Team.findById(req.params.teamID)
    .then( team => {
      res.send(team)
    }).catch( error => {
      res.status(400).send( { error: error })
    })
})


module.exports = router
