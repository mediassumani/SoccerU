<img src= "../assets/soccerULogo.png" width = 150 height = 150></img>
# SoccerU

### Overview
SoccerU is an authenticated and free online REST API that serves real data for soccer teams. It is great for programmers who are learning how to consume data from a REST API. It is built with Node.js, Express.js, and MongoDB.

### Examples


### Authentification

### Endpoints

SoccerU follows RESTFull and Resourcefull routing Architecture. Below are the available endpoints.

### Base URL : https://socceru-api.herokuapp.com/api/v1

|       Verb          |      Endpoint        |      Description                           |
| -------------       |:--------------------:| ------------------------------------------:|
| GET                 | /leagues                       |Get all available leagues         |
| GET                 | /leagues/:leagueID             |Get data for a specific league    |
| GET                 | /leagues/:leagueID/teams       |Get all the teams available       |
| GET                 | /leagues/:leagueID/teams/:teamID|Get data for a specific team    |
| GET                 | /leagues/:leagueID/teams/:teamID/players|Get all a team's roster |
| GET                 | /leagues/:leagueID/teams/:teamID/players/:playerID|Get data for a specific player |
| GET                 | /leagues/:leagueID/teams/:teamID/comments|Get all comments for a specific team |
| GET                 | /leagues/:leagueID/teams/:teamID/comments/:commentID|Get  a specific comment |
| POST                | /leagues/:leagueID/teams/:teamID/comments/new|Create a new comment for a specific team |
| PUT                 | /leagues/:leagueID/teams/:teamID/comments/:commentID|Update a comment for a specific team|
| DELETE              | /leagues/:leagueID/teams/:teamID/comments/:commentID|Remove a comment from a specific team |
