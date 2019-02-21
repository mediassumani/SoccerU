const express = require("express")
      router = express.Router()
      Teams = require("../../../models/team")

// ENDPOINT TO GET ALL TEAMS
router.get("/api/v1/leagues/:leagueID/teams", function(req, res){
  Teams.find()
    .then( (teams) => {
      res.send(leagues)
    })
})

// ENPOINT TO GET ONE SPECIFIC TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID", function(req, res){
  League.find({ _id: req.params.teamID})
    .then( (team) => {
      res.send(team)
    })
})


module.exports = router
