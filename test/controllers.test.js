//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let request = require('supertest');
let expect = chai.expect;

chai.use(chaiHttp);

describe('GuessEmail', () => {

    describe('/get email address', () => {

        // beforeAll((done) => {
        //     server.verify()
        //       .then(server.finalize)
        //       .then(() => done());
        // });

        // afterAll((done) => {
        //     provider.verify()
        //       .then(provider.finalize)
        //       .then(() => done());
        // });


        it('it should return an email address', (done) => {

          request(server)
              .post('api/v1/get-email')
              .set('content-type', 'application/json')
              .send({FullName: 'tony soprano'})
              .send({Domain: '@linkedin.com'})
              .end((res) => {
                console.log(res);
                should.exist(res.body);
                    
                    // res.should.have.status(200);
                    // res.body.should.be.a('object');
                    // res.body.should.have.property('errors');
                done();
              });
        });
  
    });

});