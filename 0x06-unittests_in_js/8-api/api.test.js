const expect = require('chai').expect;
const request = require('request');

describe("Basic Integration Testing", function() {
  describe("GET /", function() {
    it("Test Index Page status", function(done) {
      const opts = {
        url: 'http://localhost:7865',
        method: 'GET',
      };
      request(opts, function(err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
