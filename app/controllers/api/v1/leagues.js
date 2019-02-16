const express = require("express")
      router = express.Router()

// ENDPOINT TO ALL LEAGUES AVAILABLE
router.get("/api/v1/leagues", function(req, res){
  console.log("getting a team's roster");
})

// ENPOINT TO GET A SPECIFIC LEAGUE
router.get("/api/v1/leagues/:leagueID", function(req, res){
  console.log("getting a specific player");
})


module.exports = router
