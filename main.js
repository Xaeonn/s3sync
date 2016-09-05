// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set your region for future requests.
AWS.config.region = 'eu-west-1';

var s3 = new AWS.S3();

s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    // console.log("Got something: ", data)
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
});
