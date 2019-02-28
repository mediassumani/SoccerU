const mongoose = require("mongoose")
const Schema = mongoose.Schema()

const CommentSchema = new Schema({
    title: { type: String},
    body: { type: String},
    author: { type: Schema.Type.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Comment", CommentSchema)