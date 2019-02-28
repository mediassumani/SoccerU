const express= require("express")
const router  = express.Router()
const Comment = require("../../../models/comment")


// ENDPOINT TO CREATE A COMMENT
router.post("/api/v1/leagues/:leagueID/teams/:teamID/comments/", function(req, res){
    
})

// ENDPOINT TO GET ALL COMMENTS OF A TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID/comments", function(req, res){
    
})

// ENDPOINT TO GET A SINGLE COMMENT OF A TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){
    
})

//ENDPOINT TO UPDATE A COMMENT
router.put("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){
    
})

//ENDPOINT TO DELETE A COMMENT
router.delete("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){
    
})


module.exports = router