// EXPORT NEEDED MODULES AND ROUTES

require('dotenv').config()
require("./database/soccerU-db")
require('heroku-self-ping')(process.env.APP_URL);
const express = require("express")
      mongoose = require("mongoose")
      bodyParser = require("body-parser")
      expressValidator = require('express-validator')
      methodOverride = require("method-override")
      exphbs = require("express-handlebars")
      cookieParser = require("cookie-parser")
      jwt = require("jsonwebtoken")
      http = require("http")
      app = express()
      port = process.env.PORT || 3000
      auth = require("./controllers/middlewares/auth")
      checkAuth = require("./controllers/middlewares/checkAuth")
      leagues = require("./controllers/api/v1/leagues")
      teams = require("./controllers/api/v1/teams")
      players = require("./controllers/api/v1/players")
      comments = require("./controllers/api/v1/comments")
      dashboard = require("./controllers/middlewares/dashboard")
      

// SET MIDDLEWARE
app.engine("handlebars", exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())
app.use(cookieParser())
app.use(checkAuth)
app.use(auth)
app.use(dashboard)
app.use(leagues)
app.use(teams)
app.use(players)
app.use(comments)

// SERVER BOOT UP
app.listen(port)
module.exports = app
