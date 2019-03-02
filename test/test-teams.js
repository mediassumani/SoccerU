const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../app/server")
const should = chai.should()
const assert = chai.assert
const Team = require("../app/models/team")
const League = require("../app/models/league")
let league
let team
let leagueID
let teamID
chai.use(chaiHttp)

// SET UP
const dummyTeam = {
  players: [],
  name: "Barcelona",
  stadium: "Camp Nou",
  location: "Spain",
  league: "La Liga Santander",
  coach: "Some Guy"
}

const dummyLeague = {
  teams: [],
  name: "EPL",
  numberOfTeams: 20,
  location: "England, UK"
}

describe('Teams', () => {

  before( () => {
    league = new League(dummyLeague)
    team = new Team(dummyTeam)
    league.save( (err, savedLeague) => {
      //leagueID = savedLeague._id

      team.save( (err, savedTeam) => {
        //teamID = savedTeam._id
      }).catch( (err) => {
        console.log(err);
      })
    }).catch( (err) => {
      console.log(err);
    })
  })

  // Delete data from Database after testing
  after(() => {
    League.deleteMany({ name: "EPL"}).exec( (error, leagues) => {
      //leagues.remove()
    })
    Team.deleteMany({ name: "Barcelona"}).exec( (error, teams) => {
      //teams.remove()
    })
  })

  // TEST ROUTE : GET ALL TEAMS
  // it('should return all the teams from the DB on /api/v1/leagues/:leagueID/teams GET', (done) => {
  //   let league = new League(dummyLeague)
  //   league.save(( err, savedLeague) => {
  //     chai.request(server)
  //       .get(`/api/v1/leagues/${savedLeague._id}/teams`)
  //       .end( (err, res) => {
  //         res.should.have.status(200)
  //         res.body.should.be.a('array')
  //         done()
  //       })
  //   })
  // })

  // TEST ROUTE : GET A SINGLE TEAM
  // it('should return one team from the DB on /api/v1/leagues/:leagueID/teams/:teamID GET', (done) => {
  //   chai.request(server)
  //     .get(`/api/v1/leagues/${leagueID}/teams/${teamID}`)
  //     .end( (err, res) => {

  //       // Test Assertions and Assumptions
  //       res.should.have.status(200)
  //       res.body.should.have.property('name')
  //       res.body.should.have.property('coach')
  //       res.body.should.have.property('location')
  //       assert.typeOf(res.body.stadium, 'string')
  //       assert.typeOf(res.body.name, 'string')
  //       done()
  //     })
  // })
})
