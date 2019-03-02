const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app/server');
const should = chai.should();
const assert = chai.assert
const Comment = require('../app/models/comment');


chai.use(chaiHttp);

// SAMPLE data to test EDIT, UPDATE, DELETE ROUTES
let sampleComment = {
  "title": "The teammates",
  "body": "the teamstes are cherish kim she sucks because she mean as hell"
};

describe('Comments', () => {

    // MAKING SURE THE SAMPLE COMMENT OBJECT CREATED IS DELETED FROM THE DATABASE
  after(() => {
    Comment.deleteMany({title: 'The teammates'}).exec( (err, comments) => {
      comments.remove()
    })
  });

  // TEST ROUTE : INDEX
  it('should index ALL comments on /api/v1/leagues/:leagueID/teams/:teamdID/comments GET', (done) => {
    chai.request(server)
      .get('/api/v1/leagues/:leagueID/teams/:teamID/comments')
      .end( (err, res) => {
        res.should.have.status(200)
        done();
      });
  });

    // // TEST ROUTE : NEW
    // it('should display new form on /reviews/new GET', (done) => {
    //   chai.request(server)
    //     .get(`/reviews/new`)
    //     .end( (err, res) => {
    //       res.should.have.status(200);
    //       res.should.be.html;
    //       done();
    //     })
    // });

    // // TEST ROUTE : CREATE
    // it('should return a new created review post on /reviews POST', (done) => {
    //   chai.request(server)
    //     .post(`/reviews`)
    //     .end( (err, res) => {
    //       res.should.have.status(200);
    //       res.should.be.html;
    //       done();
    //     });
    // });

    // // TEST ROUTE : SHOW
    // it('should display  created /reviews/:id GET', (done) => {
    //   let review = new Review(sampleReview);
    //   review.save( (err, data) => {
    //     chai.request(server)
    //       .get(`/reviews/${data._id}`)
    //       .end( (err, res) => {
    //         res.should.have.status(200);
    //         res.should.be.html;
    //         done();
    //       });
    //   });
    // });

    // // TEST ROUTE : EDIT
    // it('should give the user the ability to edit a review /reviews/:id GET', (done) => {
    //   let review = new Review(sampleReview);
    //   review.save( (err, data) => {
    //     chai.request(server)
    //       .get(`/reviews/${data._id}/edit`)
    //       .end( (err, res) => {
    //         res.should.have.status(200);
    //         res.should.be.html;
    //         done();
    //       })
    //   })
    // })

    // // TEST ROUTE : UPDATE
    // it('should update the edited review /reviews/:id PUT', (done) => {
    //   let review = new Review(sampleReview);
    //   review.save( (err, data) => {
    //     chai.request(server)
    //       .put(`/reviews/${data._id}?_method=PUT`)
    //       .send({'title': 'updating title'})
    //       .end( (err, res) => {
    //         res.should.have.status(200);
    //         res.should.be.html;
    //         done();
    //       });
    //   });
    // });

    // // TEST ROUTE : DELETE
    // it('should delete the selected review /reviews/:id DELETE', (done) => {
    //   let review = new Review(sampleReview);
    //   review.save( (err, data) => {
    //     chai.request(server)
    //       .delete(`/reviews/${data._id}?_method=DELETE`)
    //       .end( (err, res) => {
    //         res.should.have.status(200);
    //         res.should.be.html;
    //         done();
    //       });
    //   });
    // });
});