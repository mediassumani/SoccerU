// EXPORT NEEDED MODULES AND ROUTES

require('dotenv').config()
const express = require("express")
      mongoose = require("mongoose")
      bodyParser = require("body-parser")
      expressValidator = require('express-validator')
      cookieParser = require("cookie-parser")
      jwt = require("jsonwebtoken")
      http = require("http")
      app = express()
      port = process.env.DEV_PORT || 3000
      teams = require("./controllers/api/v1/teams")


// SET MIDDLEWARE
app.use(bodyParser.json())
app.use(expressValidator())
app.use(cookieParser())
app.use(teams)

// SERVER BOOT UP
app.listen(port)
module.exports = app
