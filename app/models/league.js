const mongoose = require("mongoose")
const Schema = mongoose.Schema


const LeagueSchema = new Schema({

  name: {type: String, required: true},
  numberOfTeams: {type: Number},
  location: {type: String},
  // TODO: Add a team array property
  // TODO: Add more fields
})

module.exports = mongoose.model("League", LeagueSchema)
