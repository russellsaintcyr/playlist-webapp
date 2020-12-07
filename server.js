// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4200';
app.set('port', port);

// var mongoose = require("mongoose");
// var dbURI = process.env.MONGODB_URL;
// console.log(dbURI);
// if (dbURI === undefined) {
//   console.error('Mongoose failed to find MONGODB_URI environment variable.');
// } else {
//   console.log('Mongoose connecting to mongo at ' + dbURI);
//   mongoose.connect(dbURI);
// }
// exports.connected = false;
// mongoose.connection.on('connected', function () {
//   console.log('Mongoose connected to ' + dbURI);
//   exports.connected = true;
// });
// mongoose.connection.on('error',function (err) {
//   console.error('Mongoose connection error to ' + dbURI + ': ' + err);
// });
// mongoose.connection.on('disconnected', function () {
//   console.log('Mongoose disconnected from ' + dbURI);
// });
// process.on('SIGINT', function() {
//   mongoose.connection.close(function () {
//     console.log('Mongoose disconnected through app termination');
//     process.exit(0);
//   });
// });

app.post('/users/add', function (req, res, next) {
  const request = req.body;
  redisClient.hmset(request.id, [
    'firstName', request.firstName,
    'lastName', request.lastName,
    'emailId', request.emailId,
    'phoneNo', request.phoneNo
  ], function (err, reply) {
    if (err) {
      console.log(err);
    }
    console.log(reply);
    res.redirect('/');
  });
});

app.post('/users/search', function (req, res, next) {
  let id = req.body.id;
  redisClient.hgetall(id, function (err, obj) {
    if (!obj) {
      res.render('searchusers', {
        error: 'User does not exist'
      });
    } else {
      obj.id = id;
      res.render('details', {
        user: obj
      });
    }
  });
});

app.delete('/user/delete/:id', function (req, res, next) {
  redisClient.del(req.params.id);
  res.status(200).send({
    message: 'Success: ID deleted... ',
    IsSuccess: true,
    result: {}
  });
});
/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`webapp running on localhost:${port}`));
