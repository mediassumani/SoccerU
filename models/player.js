const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PlayerSchema = new Schema({

  name: {type: String, required: true, trim: true},
  age: {type: Number, trim: true},
  nationality: {type: String, trim: true},
  team: { type: Schema.Types.ObjectId, ref: "Team"}
})

module.exports = mongoose.model("Player", PlayerSchema)
