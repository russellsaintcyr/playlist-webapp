const redisClient = require('redis').createClient(process.env.REDIS_URL);
console.log('Created Redis client');

redisClient.on('connect', function () {
  console.log('Redis connected');
});

redisClient.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

export default redisClient;
