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
      leagues = require("./controllers/api/v1/leagues")
      teams = require("./controllers/api/v1/teams")
      players = require("./controllers/api/v1/players")


// SET MIDDLEWARE
app.use(bodyParser.json())
app.use(expressValidator())
app.use(cookieParser())
app.use(leagues)
app.use(teams)
app.use(players)

// SERVER BOOT UP
app.listen(port)
module.exports = app
