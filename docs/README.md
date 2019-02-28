<img src= "assets/soccerULogo.png" width = 150 height = 150></img>
# SoccerU

### Overview
SoccerU is an authenticated and free online REST API that serves real data for soccer teams. It is great for programmers who are learning how to consume data from a REST API. It is built with Node.js, Express.js, and MongoDB.

### Examples


### Authentification

### Endpoints

SoccerU follows a RESTFull Architecture. Below are the available endpoints.

### Base URL : https://socceru-api.herokuapp.com/

|       Verb          |      Endpoint        |      Description                           |
| -------------       |:--------------------:| ------------------------------------------:|
| GET                 | /leagues                       |Get all available leagues         |
| GET                 | /leagues/:leagueID             |Get data for a specific league    |
| GET                 | /leagues/:leagueID/teams       |Get all the teams available       |
| GET                 | /leagues/:leagueID/teams/:teamID|Get data for a specific team    |
| GET                 | /leagues/:leagueID/teams/:teamID/players|Get all a team's roster |
| GET                 | /leagues/:leagueID/teams/:teamID/players/:playerID|Get data for a specific player |
