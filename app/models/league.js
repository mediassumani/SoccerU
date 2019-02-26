const mongoose = require("mongoose")
const Schema = mongoose.Schema


const LeagueSchema = new Schema({

  name: {type: String},
  numberOfTeams: {type: Number},
  location: {type: String},
  //teams: [ {type: Schema.Types.ObjectId, ref: "Team"}]
})

module.exports = mongoose.model("League", LeagueSchema)
