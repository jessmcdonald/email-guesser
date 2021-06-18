//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

chai.use(chaiHttp);

describe('GuessEmail', () => {

    describe('/get email address', () => {

        // test success if ref email in db
        it('it should return 200 and an email address string', (done) => {
          chai.request(server)
              .post('api/v1/get-email')
              .set('content-type', 'application/json')
              .send({FullName: 'tony soprano'})
              .send({Domain: '@linkedin.com'})
              .end((res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('string');
                  done();
              });
        });

        // test success if we have no ref email in db
        it('it should return 200 and a sorry message', (done) => {
          chai.request(server)
              .post('api/v1/get-email')
              .set('content-type', 'application/json')
              .send({FullName: 'michael scott'})
              .send({Domain: '@dundermifflin.com'})
              .end((res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('string');
                  res.body.should.equal("Sorry we can't guess the email format for that domain :(");
                  done();
              });
        });

        // test missing param
        it('it should return a 400 if requests is missing a param', (done) => {
          chai.request(server)
              .post('api/v1/get-email')
              .set('content-type', 'application/json')
              .send({FullName: 'dale cooper'})
              .end((res) => {
                res.should.have.status(400);
                res.message.should.be.a('string');
                res.message.should.equal('Missing param in request');
                done();
              });
        });

        // test wrongly formatted fullname param
        it('it should return a 400 if FullName param is wrong format', (done) => {
          chai.request(server)
              .post('api/v1/get-email')
              .set('content-type', 'application/json')
              .send({FullName: 'leslieknope'})
              .send({Domain: '@waffles.com'})
              .end((res) => {
                res.should.have.status(400);
                res.message.should.be.a('string');
                res.message.should.equal('FullName param has wrong format')
                done();
              });
        });


        // test wrongly formatted domain param
        it('it should return a 400 if Domain param is wrong format', (done) => {
            chai.request(server)
                .post('api/v1/get-email')
                .set('content-type', 'application/json')
                .send({FullName: 'colin robinson'})
                .send({Domain: '@dullcom'})
                .end((res) => {
                  res.should.have.status(400);
                  res.message.should.be.a('string');
                  res.message.should.equal('Domain param has wrong format')
                  done();
                });
          });
    });
});