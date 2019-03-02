const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../app/server")
const should = chai.should()
const assert = chai.assert
const Team = require("../app/models/team")
const League = require("../app/models/league")
const Player = require("../app/models/player")
let league
let team
let player
let leagueID
let teamID
let playerID
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

const dummyPlayer = {
  name: "Medi",
  age: 19,
  nationality: "Congolese"
}

describe('Teams', () => {

  before( () => {
    league = new League(dummyLeague)
    team = new Team(dummyTeam)
    player = new Player(dummyPlayer)
    // league.save( (err, savedLeague) => {
    //   leagueID = savedLeague._id
    // })

    // team.save( (err, savedTeam) => {
    //   teamID = savedTeam._id
    // })

    // player.save( (err, savedPlayer) => {
    //   playerID = savedPlayer._id
    // })
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
  // it('should return all the players of a team from the DB on /api/v1/leagues/:leagueID/teams/:teamID/players GET', (done) => {
  //   chai.request(server)
  //     .get(`/api/v1/leagues/${leagueID}/teams/${teamID}/players`)
  //     .end( (err, res) => {
  //       res.should.have.status(200)
  //       res.body.should.be.a('array')
  //       done()
  //     })
  // })

  // TEST ROUTE : GET A SINGLE PLAYER FROM A TEAM
  // it('should return one player from a team on /api/v1/leagues/:leagueID/teams/:teamID/players/:playerID GET', (done) => {
  //   chai.request(server)
  //     .get(`/api/v1/leagues/${leagueID}/teams/${teamID}/players/${playerID}`)
  //     .end( (err, res) => {

  //       // Test Assertions and Assumptions
  //       res.should.have.status(200)
  //       res.body.should.have.property('name')
  //       res.body.should.have.property('age')
  //       res.body.should.have.property('nationality')
  //       assert.typeOf(res.body.name, 'string')
  //       assert.typeOf(res.body.age, 'Number')
  //       done()
  //     })
  // })
})
