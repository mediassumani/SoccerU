const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  email: { type: String, unique: true, required: true },
  username: { type: String, required: true},
  password: { type: String, required: true },
  apiKey: { type: String}
})

UserSchema.pre("save", function(next){

  // SET THE DATE THE ACCOUNT WAS CREATED
  var now = new Date()
  this.updatedAt = now
  if (!this.createdAt){
    this.createdAt = now
  }

  // GENERATE A NEW API KEY FOR THE USER 
  this.apiKey = jwt.sign({}, process.env.CRYPTO_SECRET, { expiresIn: "60 days" })

  // ENCRYPT PASSWORD
  var user = this
  if(!user.isModified("password")){
    return next()
  }

  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(user.password, salt, function(err, hash){
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function(password, done){
  bcrypt.compare(password, this.password, function(err, isMatch){
    done(err, isMatch)
  })
}

module.exports = mongoose.model("User", UserSchema)
