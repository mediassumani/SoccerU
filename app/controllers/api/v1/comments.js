const express= require("express")
const router  = express.Router()
const Comment = require("../../../models/comment")
const Team = require("../../../models/team")


// ENDPOINT TO CREATE A COMMENT
router.post("/api/v1/leagues/:leagueID/teams/:teamID/comments/new", function(req, res){
   
    const key = req.apiKey
    if(helper.isValideAPIKey(key)){

        const comment = new Comment(req.body)
        comment.author = null
        Team.findById(req.params.teamID)
            .then( (team) => {
                comment.team = team._id
                comment.save().then( (savedComment) =>{
                    team.comments.unshift(savedComment)
                    team.save()
                    res.status(200).json(savedComment)
                }).catch( (error) => {
                    return res.status(400).send(error)
                })
            }).catch( (error) => {
                return res.status(400).send(error)
            })
    } else {
        res.status(401).send("Aunthenticated")
    }
})

// ENDPOINT TO GET ALL COMMENTS OF A TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID/comments", function(req, res){

    const key = req.apiKey
    if(helper.isValideAPIKey(key)){

        Team.findById(req.params.teamID)
        .populate('comments')
        .then( (team) => {
            const comments = team.comments
            return res.status(200).json(comments)
        }).catch( (error) => {
            res.status(400).send(error)
        })
    } else {
        res.status(401).send("Aunthenticated")
    }
})

// ENDPOINT TO GET A SINGLE COMMENT OF A TEAM
router.get("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){

    const key = req.apiKey
    if(helper.isValideAPIKey(key)){

        Comment.findById(req.params.commentID)
        .then( (comment) => {
            return res.status(200).json(comment)
        }).catch( (error) => {
            return res.status(400).send(error)
        })
    } else {
        res.status(401).send("Aunthenticated")
    }
})

//ENDPOINT TO UPDATE A COMMENT
router.put("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){

    const key = req.apiKey
    if(helper.isValideAPIKey(key)){

        const comment = req.body
        Comment.findByIdAndUpdate(req.params.commentID, comment)
            .then( (updatedComment) => {
                return res.status(200).json(updatedComment)
            }).catch( (error) => {
                return res.status(400).send(error)
            })
    } else {
        res.status(401).send("Aunthenticated")
    }
})

//ENDPOINT TO DELETE A COMMENT
router.delete("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID", function(req, res){
    
    const key = req.apiKey
    if(helper.isValideAPIKey(key)){
        Comment.findByIdAndDelete(req.params.commentID)
        .then( (deletedComment) => {
            return res.status(200).send({ message: "Comment deleted" })
        }).catch( (error) => {
            return res.status(400).send(error)
        })
    } else {
        res.status(401).send("Aunthenticated")
    }
})


module.exports = router