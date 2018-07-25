// const request = require('supertest');
// const assert = require('assert');
// const app = require('../index');

// describe('returning timestamps and UTC time', () => {
//   it('returns pair given ISO date string', (done) => {
//     request(app)
//       .get('localhost:5000/api/timestamp/2016-11-20')
//       .end((err, response) => {
//         assert(response.body.unix === 1479600000000);
//         assert(response.body.utc === 'Sun, 20 Nov 2016 00:00:00 GMT');
//         done();
//       });
//   });

//   it('returns pair given a timestamp', (done) => {
//     request(app)
//       .get('localhost:5000/api/timestamp/818060400000')
//       .end((err, response) => {
//         assert(response.body.unix === 818060400000);
//         assert(response.body.utc === 'Mon, 04 Dec 1995 07:00:00 GMT');
//         done();
//       });
//   });

//   it('returns pair for current time given nothing', (done) => {
//     request(app)
//       .get('localhost:5000/api/timestamp/')
//       .end((err, response) => {
//         assert(typeof response.body.unix === 'number');
//         assert(
//           response.utc.match(
//             /[A-Z][a-z]{2},\s\d{2}\s[A-Z][a-z]{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\s[A-Z]{3}/,
//           ),
//         );
//         done();
//       });
//   });
// });
