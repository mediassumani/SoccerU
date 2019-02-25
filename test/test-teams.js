const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../app/server")
const should = chai.should()
const assert = chai.assert
const Team = require("../app/models/team")
const League = require("../app/models/league")


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

  // Delete data from Database after testing
  after(() => {
    League.deleteMany({ name: "EPL"}).exec( (error, leagues) => {
      //leagues.remove()
    })
    Team.deleteMany({ name: "Barcelona"}).exec( (error, teams) => {
      //teams.remove()
    })
  })

  // TEST ROUTE : GET ALL LEAGUES
  it('should return all the teams from the DB on /api/v1/leagues/:leagueID/teams GET', (done) => {
    let league = new League(dummyLeague)
    chai.request(server)
      .get(`/api/v1/leagues/${league._id}/teams`)
      .end( (err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })

  // TEST ROUTE : GET A SINGLE LEAGUE
  it('should return one team from the DB on /api/v1/leagues/:leagueID/teams/:teamID GET', (done) => {
    let league = new League(dummyLeague)
    let team = new Team(dummyTeam)
    league.save( (error, savedLeague) => {
      team.save( (error, savedTeam) => {
        chai.request(server)
          .get(`/api/v1/leagues/${savedLeague._id}/teams/${savedTeam._id}`)
          .end( (err, res) => {

            // Test Assertions and Assumptions
            res.should.have.status(200)
            // res.body.should.have.property('name')
            // assert.typeOf(res.body.numberOfTeams, 'Number')
            // assert.typeOf(res.body.name, 'string')
            done()
          })
      })
    })
  })
})
