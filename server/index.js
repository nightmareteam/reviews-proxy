require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');
var request = require('request')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/:game_id', express.static(path.resolve(__dirname, '..', 'public')));

// app.get('/reviews/:game_id', (req, res) => {
//   console.log('TRYING TO GET REVIEWS');

//   let options = {
//     url: `http://localhost:3005/reviews/${req.params.game_id}`,
//     json: true,
//     body: req.query
//   };

//   request(options, function(error, response, body) {
//     if (error) { console.error('Could not get reviews data', error); }
//     console.log('Type of reviews object is ' + typeof body);
//     res.send(body);
//   });
// });

app.get('/reviews/:game_id', (req, res) => {
  request(`http://localhost:3005/reviews/${req.params.game_id}`, function (error, response, body) {
    if(error) {console.log(error);}
    res.send(body);
  });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// // XIN'S APIS
// app.get('/games/:uid', (req, res) => {
//   // Make direct call to Xin's /games/:uid API
//   // Take response from Xin
//   // Serve response in 3000: response
//   request(`http://localhost:3002/games/${req.params.uid}`, function (error, response, body) {
//     if (error) { console.log(error); }
//     res.send(body);
//   });
// });


// app.get('/screenshots', (req, res) => {
//   request(`http://localhost:3002/screenshots`, function (error, response, body) {
//     if (error) { console.log(error); }
//     res.send(body);
//   });
// });

// app.get('/videos', (req, res) => {
//   request(`http://localhost:3002/videos`, function (error, response, body) {
//     if (error) { console.log(error); }
//     res.send(body);
//   });
// });


// // ERIC'S APIS
// app.get('/reviews', (req, res) => {
//   console.log('TRYING TO GET REVIEWS');
//   let options = {
//     url: 'http://localhost:3005/reviews',
//     json: true,
//     body: req.query
//   };

//   request(options, function(error, response, body) {
//     if (error) { console.error('Could not get reviews data', error); }
//     console.log('Type of reviews object is ' + typeof body);
//     res.send(body);
//   });
// });

// app.get('/recent', (req, res) => {
//   console.log('TRYING TO GET RECENT');
//   let options = {
//     url: 'http://localhost:3005/recent',
//     json: true,
//     body: req.query
//   };
  
//   request(options, function(error, response, body) {
//     if (error) { console.error('Could not get reviews data', error); }
//     console.log('Type of reviews object is ' + typeof body);
//     res.send(body);
//   });
// });

// app.post('/review/vote', (req, res) => {
//   const data = {
//     post_id: req.body.post_id,
//     helpfulness: req.body.helpfulness
//   };

//   const options = {
//     url: 'http://localhost:3005/review/vote',
//     method: 'POST',
//     json: true,
//     form: data
//   };

//   request(options , function(error, response, body) {
//     if (error) { console.error('Could not get reviews data', error); }
//     console.log('Type of reviews object is ' + typeof body);
//     res.send(body);
//   });
// });

// app.get('/reviews/filters', (req, res) => {
//   request('http://localhost:3005/reviews/filters', function(error, response, body) {
//     if (error) { console.error('Could not get languages', error); }
//     res.send(JSON.parse(body));
//   });
// });

// app.get('/reviews/comments', (req, res) => {
//   console.log('TRYING TO GET COMMENTS');
//   let options = {
//     url: 'http://localhost:3005/reviews/comments',
//     json: true,
//     body: req.query
//   };

//   request(options, function(error, response, body) {
//     if (error) { console.error('Could not get reviews data', error); }
//     console.log('Type of reviews object is ' + typeof body);
//     res.send(body);
//   });
// });

// app.post('/reviews/comment', (req, res) => {
//   const options = {
//     url: 'http://localhost:3005/reviews/comment',
//     method: 'POST',
//     json: true,
//     form: req.body.data
//   };

//   request(options , function(error, response, body) {
//     if (error) { console.error('Could not get reviews data', error); }
//     console.log('Type of reviews object is ' + typeof body);
//     res.send(body);
//   });
// });

// app.get('/graphOverall', (req, res) => {
//   request('http://localhost:3005/graphOverall', function(error, response, body) {
//     if (error) { console.error('Could not get graph data', error); }
//     res.send(JSON.parse(body));
//   });
// })

// app.get('/graphRecent', (req, res) => {
//   console.log('ROUTE TO ERIC');
//   request('http://localhost:3005/graphRecent', function(error, response, body) {
//     if (error) { console.error('Could not get graph data', error); }
//     res.send(JSON.parse(body));
//   });
// })
