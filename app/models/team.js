const mongoose = require("mongoose")
const Schema = mongoose.Schema


const TeamSchema = new Schema({

  name: {type: String},
  coach: {type: String},
  stadium: {type: String},
  location: {type: String}
  // TODO: Add league attribute
  // TODO: Add a player array property
  // TODO: Add more fields
})

module.exports = mongoose.model("Team", TeamSchema)
