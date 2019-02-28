// EXPORT NEEDED MODULES AND ROUTES

require("./database/soccerU-db")
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
      auth = require("./controllers/api/v1/auth")
      leagues = require("./controllers/api/v1/leagues")
      teams = require("./controllers/api/v1/teams")
      players = require("./controllers/api/v1/players")
      comments = require("./controllers/api/v1/comments")
      

// SET MIDDLEWARE
app.use(bodyParser.json())
app.use(expressValidator())
app.use(cookieParser())
app.use(auth)
app.use(leagues)
app.use(teams)
app.use(players)
app.use(comments)

// SERVER BOOT UP
app.listen(port)
module.exports = app
