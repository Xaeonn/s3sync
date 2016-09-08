//
// S3Client
// Sam Boles
// September 2016
//
// Sets up a client for S3 using the AWS SDK and provides methods for
// interacting with S3 buckets.
//

var S3Client = function (region) {
  // Load the AWS SDK for Node.js
  this.AWS = require('aws-sdk');
  // Set your region for requests.
  this.AWS.config.region = region;
  this.s3 = new this.AWS.S3();
};

S3Client.prototype.getBucketList = function (callback) {
  this.s3.listBuckets(function(err, data) {
    var buckets = [];
    if (err) { console.log("Error:", err); return null;}
    else {
      for (var index in data.Buckets) {
        var bucket = data.Buckets[index];
        buckets.push(bucket.Name);
      }
    }
    callback(buckets);
  });
};

// Requests a list of the objects in a s3 bucket wth the given prefix. It takes
// a callback function that it will call with a list of the objects
S3Client.prototype.getObjectList = function (bucket, prefix, callback) {
  var params = {
    Bucket: bucket, /* required */
    // Delimiter: 'STRING_VALUE',
    // EncodingType: 'url',
    // Marker: 'STRING_VALUE',
    // MaxKeys: 0,
    // Prefix: prefix
  };

  this.s3.listObjectsV2(params, function(err, data) {
    items = [];
    if (err) {console.log(err, err.stack);}
    else{
      console.log(data.Contents[0]);
      for(var k in data.Contents){
        items.push({name:data.Contents[k].Key});
      }
    }
    callback(items);
  });
};

// Usefull code
// fs.readdir('.', function(err, files){console.log(files);});

// Upload a file to a specified bucket with a given key
S3Client.prototype.uploadFile = function (bucket, key, filename) {
  stream = fs.readFileSync(filename);
  var params = {Bucket: bucket, Key: key, Body: stream};
  var options = {partSize: 10 * 1024 * 1024, queueSize: 1};
  this.s3.upload(params, options, function(err, data) {
    console.log(err, data);
  });
};

module.exports = S3Client;
