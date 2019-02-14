# SoccerU

### Overview
SoccerU is an authenticated and free online REST API that serves real data for soccer teams. It is great for programmers who are learning how to consume data from a REST API. It is built with Node.js, Express.js, and MongoDB.

### Examples


### Authentification

### Endpoints

SoccerU follows a RESTFull Architecture.

|       Verb          |      Endpoint        |      Description                           |
| -------------       |:--------------------:| -------------------------------------------:|
| GET                 | /teams                         |Get all the teams available       |
| GET                 | /teams/:teamID                 |Get data about a specific team    |
| GET                 | /teams/:teamID/players         |Get all players of a specific team |
| GET                 | /teams/:teamID/players/:playerID|Get data about a specific player |
| GET                 | /teams/:teamID/players/:playerID/comments|Get comments about a specific player |
| POST                 | /teams/:teamID/comments        |Post comments about a team |
