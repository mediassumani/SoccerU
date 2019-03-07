<img src= "../assets/soccerULogo.png" width = 150 height = 150></img>
# SoccerU

### Overview
SoccerU is an authenticated and free online REST API that serves real data for soccer teams. It is great for programmers who are learning how to consume data from a REST API. It is built with Node.js, Express.js, and MongoDB.


### Authentification
SoccerU only allows authenticated and authorized users to make requests.
* <a href="https://socceru-api.herokuapp.com/sign-up">Create an account</a>
* Get the your UNIQUE generated token
* When making a request pass the token in the header.


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

#### Examples 

##### JQuery
``` javascript
    $.ajax({
   url : myurl,
   headers: {
        'Authorization' : YOUR_AUTH_TOKEN
   });
```

##### Swift
``` swift
    var request = URLRequest(url: url)
    request.setValue("\(YOUR_AUTH_TOKEN)", forHTTPHeaderField: "Authorization")
```

##### Rails
``` ruby
    request.set_header("Token", YOUR_AUTH_TOKEN)
```

##### Go
``` go
   req.Header.Set("Authorization", YOUR_AUTH_TOKEN)
```

NOTE : Only 1 league, 2 teams, and 2 players are available at the momment.
```
   GET /leagues/:leagueID/teams Get data for a specific team

   [
    {
        "players": [
            "5c7737c073ee4aeff38e3364",
            "5c7737c073ee4aeff38e3365",
            "5c7737c073ee4aeff38e3366"
        ],
        "comments": [
            "5c79e436663abd3d54a37bb1"
        ],
        "_id": "5c772380d4a6086a5776c4bb",
        "name": "Chelsea FC",
        "coach": "Maurizio Sarri",
        "stadium": "Stamford Bridge",
        "loaction": "London",
        "league": "5c77221cd4a6086a5776c4ba",
        "__v": 1
    },
    {
        "players": [],
        "comments": [],
        "_id": "5c772380d4a6086a5776c4bc",
        "name": "Manchester United",
        "coach": "ole gunnar solskjaer",
        "stadium": "Old Traford",
        "location": "Manchester",
        "league": "5c77221cd4a6086a5776c4ba"
    }
]
```

### Engineer(s)

* <a href="https://github.com/MediBoss">Medi Assumani</a> - Backend Engineer

### Project Built With

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Handlebars](https://handlebarsjs.com/)
* [JWT](https://jwt.io/introduction/)
* [Mocha](https://mochajs.org/)


## License

This project is licenced under the Apache 2.0 License - see the <a href="https://github.com/MediBoss/SoccerU/blob/master/LICENSE">LICENSE</a> file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* My Backend instructor - <a href="https://github.com/droxey">Dani </a>
* Inspiration
* Stack overflow
