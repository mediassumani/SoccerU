//------------------/
// The Comment Model  /
//------------------/

const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define the properties of a single comment object
const CommentSchema = new Schema({
    title: { type: String},
    body: { type: String},
    author: { type: Schema.Types.ObjectId, ref: "Comment"},
    team: { type: Schema.Types.ObjectId, ref: "Team"},
    createdAt: { type: Date},
    updatedAt: { type: Date}
})

CommentSchema.pre("save", (next) => {
    // Set the time and date the comment is created and updated
    const now = new Date()
    this.updatedAt = now
    if(!this.createdAt){
        this.createdAt = now
    }
    next()
})

module.exports = mongoose.model("Comment", CommentSchema)