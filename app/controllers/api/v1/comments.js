const express= require("express")
const router  = express.Router()
const Comment = require("../../../models/comment")
const Team = require("../../../models/team")


// ENDPOINT TO CREATE A COMMENT
router.post("/api/v1/leagues/:leagueID/teams/:teamID/comments/", function(req, res){
   
    const comment = new Comment(req.params.body)
    comment.author = null
    comment.save().then( (comment) =>{
        // TODO : Push new comments on team's array
        return res.status(200).json(comment)
    })
})

// ENDPOINT TO GET ALL COMMENTS OF A TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID/comments", function(req, res){
    Team.findByID(req.params.teamID)
        .populate('comments')
        .then( (team) => {
            const comments = team.comments
            return res.status(200).json(comments)
        }).catch( (error) => {
            res.status(400).send(error)
        })
})

// ENDPOINT TO GET A SINGLE COMMENT OF A TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){
    Comment.findById(req.params.commentID)
        .then( (comment) => {
            res.status(200).json(comment)
        }).catch( (error) => {
            res.status(400).send(error)
        })
})

//ENDPOINT TO UPDATE A COMMENT
router.put("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){
    
    const comment = req.body
    Comment.findByIdAndUpdate(req.params.commentID, comment)
        .then( (updatedComment) => {
            res.status(200).json(updatedComment)
        }).catch( (error) => {
            res.status(400).send(error)
        })
})

//ENDPOINT TO DELETE A COMMENT
router.delete("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){
    
    Comment.findByIdAndDelete(req.params.commentID)
        .then( (deletedComment) => {
            res.status(200).send({ message: "Comment deleted" })
        }).catch( (error) => {
            res.status(400).send(error)
        })
})


module.exports = router