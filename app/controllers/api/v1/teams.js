const express = require("express")
      router = express.Router()
      League = require("../../../models/league")
      Team = require("../../../models/team")

// ENDPOINT TO GET ALL TEAMS
router.get("/api/v1/leagues/:leagueID/teams", function(req, res){
  League.findById(req.params.leagueID)
    .populate("teams")
    .then( (league) => {
      
      const teams = league.teams
      console.log(teams);
      res.json(teams)
    }).catch( (error) => {
      res.status(400).send(error)
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
