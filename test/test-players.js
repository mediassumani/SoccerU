const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../app/server")
const should = chai.should()
const assert = chai.assert
const Team = require("../app/models/team")
const League = require("../app/models/league")
const Player = require("../app/models/player")

chai.use(chaiHttp)

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

describe('Teams', () => {

  before( () => {
    // Any set up before starting test
  })

  // Delete data from Database after testing
  after(() => {
    League.deleteMany({ name: "EPL"}).exec( (error, leagues) => {
      //leagues.remove()
    })
    Team.deleteMany({ name: "Barcelona"}).exec( (error, teams) => {
      //teams.remove()
    })

    Player.deleteMany({ name: "Medi" }).exec( (error, players) => {
      // players.remove()
    })
  })

  // TEST ROUTE : GET ALL PLAYERS OF A TEAM
  it('should return all the players of a team from the DB on /api/v1/leagues/:leagueID/teams/:teamID/players GET', (done) => {

    const league = new League(dummyLeague)
    league.save( (err, savedLeague) => {
      const team = new Team(dummyTeam)
      team.save( (err, savedTeam) => {
        chai.request(server)
        .get(`/api/v1/leagues/${savedLeague._id}/teams/${savedTeam._id}/players`)
        .end( (err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          done()
        })
      })
    })
  })

  // TEST ROUTE : GET A SINGLE PLAYER FROM A TEAM
  it('should return one player from a team on /api/v1/leagues/:leagueID/teams/:teamID/players/:playerID GET', (done) => {

    const league = new League(dummyLeague)
    league.save( (err, savedLeague) => {
      const team = new Team(dummyTeam)
      team.save( (err, savedTeam) => {
        const player = new Player(dummyPlayer)
        player.save( (err, savedPlayer) => {
             chai.request(server)
      .get(`/api/v1/leagues/${savedLeague._id}/teams/${savedTeam._id}/players/${savedPlayer._id}`)
      .end( (err, res) => {

        // Test Assertions and Assumptions
        res.should.have.status(200)
        res.body.should.have.property('name')
        res.body.should.have.property('age')
        res.body.should.have.property('nationality')
        assert.typeOf(res.body.name, 'string')
        assert.typeOf(res.body.age, 'Number')
        done()
        
      })
      })
    })
  })
})
})
