const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../server")
const should = chai.should()
const assert = chai.assert
const League = require("../models/league")


chai.use(chaiHttp)

// SET UP
const dummyLeague = {
  teams: [],
  name: "EPL",
  numberOfTeams: 20,
  location: "England, UK"
}

describe('Leagues', () => {

  // Delete data from Database after testing
  after(() => {
    League.deleteMany({ name: "EPL"}).exec( (error, leagues) => {
      //leagues.remove()
    })
  })

  // TEST ROUTE : GET ALL LEAGUES
  it('should return all the leagues from the DB on /api/v1/leagues GET', (done) => {
    chai.request(server)
      .get('/api/v1/leagues')
      .end( (err, res) => {

        res.should.have.status(200)
        res.body[0].should.have.property('name')
        res.body.should.be.a('array')
        done()
      })
  })

  // TEST ROUTE : GET A SINGLE LEAGUE
  it('should return one league from the DB on /api/v1/leagues/:leagueID GET', (done) => {
    let league = new League(dummyLeague)
    league.save( (error, data) => {
      chai.request(server)
        .get(`/api/v1/leagues/${data._id}`)
        .end( (err, res) => {

          // Test Assertions and Assumptions
          res.should.have.status(200)
          res.body.should.have.property('name')
          assert.typeOf(res.body.numberOfTeams, 'Number')
          assert.typeOf(res.body.name, 'string')
          done()
        })
    })
  })
})
