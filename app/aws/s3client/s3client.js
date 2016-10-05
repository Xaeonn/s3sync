//
// S3 Client
// Sam Boles
// October 2016
//
//
//

var AWS = require('aws-sdk');

var S3Client = function(region) {
  AWS.config.region = region;
  s3 = new AWS.S3();
  // TODO: Move the following to a config file so they can be configured without
  // needing to dig into the code
  this.delimiter = '/';
  this.MaxKeys = 100;
};

// Requests a list of the buckets on the current AWS account
// Takes a callback function as a argument that will be called with the response
// from S3
S3Client.prototype.ListBuckets = function (callback) {
  this.s3.listBuckets(function(err, data) {
    if (err) {
      console.debug('Error:', err);
      // TODO: Decide what to return to handle the failure
    }
    else {
      console.debug(data);
      callback(data);
    }
  });
};

// Get a list of the files in a bucket
// Takes the name of the bucket, a prefix value for the keys to list, a
// continuation marker, and a callback function that will be called with an
// array of objects representing the files in the bucket
// This is primarily an internal function to be called by other helper functions
S3Client.prototype.listFiles = function(bucket, prefix, marker, callback) {
  // Set the paramaters for the query
  var params = {
    Bucket: bucket,
    Delimiter: this.delimiter,
    Marker: marker,
    MaxKeys: this.MaxKeys,
    Prefix: prefix
  };

  // Make the actual request
  this.s3.listObjectsV2(params, function(err, data) {
    if (err) {
      console.debug(err, err.stack);
    }
    else {
      callback(data);
    }
  });
};

// Lists the files in a bucket
// Takes the bucket to list the files from and a callback
S3Client.prototype.ListFiles = function (bucket, callback) {
  this.listFiles(bucket, '', null, callback);
};

// Lists a next page of files if the number was greater than the max keys
// Takes the bucket to list the files from, the continuation marker returned by
// the previous request, and a callback
S3Client.prototype.ListFilesNext = function (bucket, marker, callback) {
  this.listFiles(bucket, '', marker, callback);
};

// Lists the files in a bucket starting with a given prefix
// Takes the bucket, the prefix, and a callback
S3Client.prototype.ListDirectoryFiles = function (bucket, prefix, callback) {
  this.listFiles(bucket, prefix, null, callback);
};

// Lists a next page of files if the number was greater than the max keys
// Takes the bucket to list the files from, the prefix, the continuation marker
// returned by the previous request, and a callback
S3Client.prototype.ListDirectoryFilesNext = function (bucket, prefix, marker,
                                                      callback) {
  this.listFiles(bucket, prefix, marker, callback);
};

// Uploads a file to a bucket
// Takes the bucket name, a file descriptor to upload, and the key to give it in
// the bucket
S3Client.prototype.UploadFile = function(bucket, file, key, acl='private') {
  // Define
  var params = {
    Bucket: bucket,
    Key: key,
    ACL: acl,
    Body: file
  };

  // Send the upload request
  var UploadManager = s3.upload(params, function(err, data) {
    // TODO: Decide if I should take a callback paramater in the UploadFile
    // function and use it here to let the caller know it's completed or rely on
    // polling the UploadManager.
    // Considering adding an active upload object to the S3Client to track all
    // ongoing uploads
    console.log(err, data);
  });
};

// Uploads a file to a bucket and makes it public
// Takes the bucket name, a file descriptor to upload, and the key to give it in
// the bucket
S3Client.prototype.UploadPublicFile = function(bucket, file, key) {
  this.UploadFile(bucket, file, key, acl='public-read');
};

// Download the file corrasponding to a key from a bucket
// Takes the bucket name, key of the file and a callback function that will be
// passed the file data to handle
S3Client.prototype.DownloadFile = function(bucket, key, callback) {
  // Set the paramaters
  var params = {
    Bucket: bucket,
    Key: key,
    // IfModifiedSince: new Date()
  };

  // Request the object
  s3.getObject(params, function(err, data) {
    if (err) {
      console.debug(err, err.stack);
    } else {
      callback(data);
    }
  });
};

module.exports = S3Client;
