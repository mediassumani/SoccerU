const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  email: { type: String, unique: true, required: true },
  username: { type: String, required: true},
  password: { type: String, required: true },
})

UserSchema.pre("save", function(next){
  var now = new Date()
  this.updatedAt = now
  if (!this.createdAt){
    this.createdAt = now
  }

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
