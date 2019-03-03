const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app/server');
const should = chai.should();
const assert = chai.assert
const Comment = require('../app/models/comment');
const Team = require("../app/models/team")
const League = require("../app/models/league")

chai.use(chaiHttp);

// SAMPLE data to test EDIT, UPDATE, DELETE ROUTES
const dummyComment = {
  "title": "The teammates",
  "body": "the teamstes are cherish kim she sucks because she mean as hell"
}

// SET UP
const dummyTeam = {
  players: [],
  name: "Barcelona",
  stadium: "Camp Nou",
  location: "Spain",
  coach: "Some Guy"
}

const dummyLeague = {
  teams: [],
  name: "EPL",
  numberOfTeams: 20,
  location: "England, UK"
}

const dummyPlayer = {
  name: "Medi",
  age: 19,
  nationality: "Congolese"
}
  

describe('Comments', () => {

    // before( () => {
    //     league = new League(dummyLeague)
    //     team = new Team(dummyTeam)
    // })


    // MAKING SURE THE SAMPLE COMMENT OBJECT CREATED IS DELETED FROM THE DATABASE
    after(() => {
        Comment.deleteMany({title: 'The teammates'}).exec( (err, comments) => {
        //comments.remove()
        })

        League.deleteMany({ name: "EPL"}).exec( (error, leagues) => {
          //leagues.remove()
        })
        Team.deleteMany({ name: "Barcelona"}).exec( (error, teams) => {
          //teams.remove()
        })
    
        Player.deleteMany({ name: "Medi" }).exec( (error, players) => {
          // players.remove()
        })
    });

  // TEST ROUTE : INDEX ALL COMMENTS
  it('should index ALL comments on /api/v1/leagues/:leagueID/teams/:teamdID/comments GET', (done) => {
    
    const league = new League(dummyLeague)
    league.save( (err, savedLeague) => {
      const team = new Team(dummyTeam)
      team.save( (err, savedTeam) => {

        chai.request(server)
        .get(`/api/v1/leagues/${savedLeague._id}/teams/${savedTeam._id}/comments`)
        .end( (err, res) => {
  
          // Test Assertions and Assumptions
          res.should.have.status(200)
          res.body.should.be.a('array')
          done()
        })
      })
    })
  })


    // // TEST ROUTE : CREATE
    it('should return a new created review post on /api/v1/leagues/:leagueID/teams/:teamID/comments/new POST', (done) => {

      const league = new League(dummyLeague)
      league.save( (err, savedLeague) => {
        const team = new Team(dummyTeam)
        team.save( (err, savedTeam) => {
  
          chai.request(server)
            .post(`/api/v1/leagues/${savedLeague._id}/teams/${savedTeam._id}/comments/new`)
            .end( (err, res) => {
              res.should.have.status(200)
              done()
            })
        })
      })
    })

    // // TEST ROUTE : SHOW ONE COMMENT
    it('should display the created comment on /api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID GET', (done) => {
      
      const league = new League(dummyLeague)
      league.save( (err, savedLeague) => {
        const team = new Team(dummyTeam)
        team.save( (err, savedTeam) => {
          const comment = new Comment(dummyComment)
          comment.save( (err, savedComment) => {
            chai.request(server)
            .get(`/api/v1/leagues/${savedLeague._id}/teams/${savedTeam._id}/comments/${savedComment._id}`)
            .end( (err, res) => {
              res.should.have.status(200)
              res.body.should.have.property('title')
              res.body.should.have.property('body')
              assert.typeOf(res.body.title, 'string')
              assert.typeOf(res.body.body, 'string')
              done()
            })
          })
        })
      })
    })

    // TEST ROUTE : UPDATE ONE COMMENT
    it('should update a comment /reviews/:id GET', (done) => {
      
      const league = new League(dummyLeague)
      league.save( (err, savedLeague) => {
        const team = new Team(dummyTeam)
        team.save( (err, savedTeam) => {
          const comment = new Comment(dummyComment)
          comment.save( (err, savedComment) => {
            chai.request(server)
            .put(`/api/v1/leagues/${savedLeague._id}/teams/${savedTeam._id}/comments/${savedComment._id}`)
            .end( (err, res) => {
              res.should.have.status(200)
              res.body.should.have.property('title')
              res.body.should.have.property('body')
              assert.typeOf(res.body.title, 'string')
              assert.typeOf(res.body.body, 'string')
              done()
            })
          })
        })
      })
    })

    // TEST ROUTE : DELETE ONE COMMENT
    it('should delete the selected comment on ("/api/v1/leagues/:leagueID/teams/:teamID/comments/:commentID DELETE', (done) => {
        
      const league = new League(dummyLeague)
      league.save( (err, savedLeague) => {
        const team = new Team(dummyTeam)
        team.save( (err, savedTeam) => {
          const comment = new Comment(dummyComment)
          comment.save( (err, savedComment) => {
            chai.request(server)
            .delete(`/api/v1/leagues/${savedLeague._id}/teams/${savedTeam._id}/comments/${savedComment._id}`)
            .end( (err, res) => {
              res.should.have.status(200)
              done()
            })
          })
        })
      })
    })
})