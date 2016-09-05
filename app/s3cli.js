S3Client = function(region){
  // Load the AWS SDK for Node.js
  this.AWS = require('aws-sdk');
  // Set your region for requests.
  this.AWS.config.region = region;
  this.s3 = new this.AWS.S3();
  this.buckets = [];
  this.getBucketList();
}

S3Client.prototype.getBucketList = function () {
  var test;
  var cliObj = this;
  this.s3.listBuckets(function(err, data) {
    if (err) { console.log("Error:", err); return null;}
    else {
      for (var index in data.Buckets) {
        var bucket = data.Buckets[index];
        // console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
        cliObj.buckets.push(bucket.Name);
      }
    }
    page.render();
  });
};

S3Client.prototype.getObjectList = function (bucket) {
  var params = {
    Bucket: bucket, /* required */
    // Delimiter: 'STRING_VALUE',
    // EncodingType: 'url',
    // Marker: 'STRING_VALUE',
    // MaxKeys: 0,
    // Prefix: 'STRING_VALUE'
  };
  this.s3.listObjectsV2(params, function(err, data) {
    if (err) {console.log(err, err.stack);}
    else{
        for(k in data.Contents){
          console.log(data.Contents[k].Key);
        }
    }
  });
};

module.exports = S3Client;
