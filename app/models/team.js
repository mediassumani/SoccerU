const mongoose = require("mongoose")
const Schema = mongoose.Schema


const TeamSchema = new Schema({

  name: {type: String},
  coach: {type: String},
  stadium: {type: String},
  location: {type: String},
  league: { type: Schema.Types.ObjectId, ref: "League"},
  players: [{ type: Schema.Types.ObjectId, ref: "Player" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]

})

module.exports = mongoose.model("Team", TeamSchema)
