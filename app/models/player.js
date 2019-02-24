const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PlayerSchema = new Schema({

  name: {type: String},
  age: {type: Int},
  nationality: {type: String},
  team: { type: Schema.Types.ObjectId, ref: "Team"}

  // TODO: Add more fields
})

module.exports = mongoose.model("Player", PlayerSchema)
