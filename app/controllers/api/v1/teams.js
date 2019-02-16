const express = require("express")
      router = express.Router()

// ENDPOINT TO GET ALL TEAMS
router.get("/api/v1/leagues/:leagueID/teams", function(req, res){
  console.log("getting all teams");
})

// ENPOINT TO GET ONE SPECIFIC TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID", function(req, res){
  console.log("getting a specific team");
})


module.exports = router
