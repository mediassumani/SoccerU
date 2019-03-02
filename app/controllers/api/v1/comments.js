const express= require("express")
const router  = express.Router()
const Comment = require("../../../models/comment")
const Team = require("../../../models/team")


// ENDPOINT TO CREATE A COMMENT
router.post("/api/v1/leagues/:leagueID/teams/:teamID/comments/new", function(req, res){
   
    const comment = new Comment(req.body)
    comment.author = null
    comment.save().then( (savedComment) =>{
        Team.findById(req.params.teamID)
            .then( (team) => {

                // Adds the created comment to the targeted team
                team.comments.unshift(savedComment)
                return res.status(200).json(savedComment)
            }).catch( (error) => {
                res.json({error: "Unable to find the team wit that id"})
            })
    }).catch( (error) => {
        return res.status(400).send(error)
    })
})

// ENDPOINT TO GET ALL COMMENTS OF A TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID/comments", function(req, res){
    Team.findById(req.params.teamID)
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
            return res.status(200).json(comment)
        }).catch( (error) => {
            return res.status(400).send(error)
        })
})

//ENDPOINT TO UPDATE A COMMENT
router.put("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){
    
    const comment = req.body
    Comment.findByIdAndUpdate(req.params.commentID, comment)
        .then( (updatedComment) => {
            return res.status(200).json(updatedComment)
        }).catch( (error) => {
            return res.status(400).send(error)
        })
})

//ENDPOINT TO DELETE A COMMENT
router.delete("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){
    
    Comment.findByIdAndDelete(req.params.commentID)
        .then( (deletedComment) => {
            return res.status(200).send({ message: "Comment deleted" })
        }).catch( (error) => {
            return res.status(400).send(error)
        })
})


module.exports = router