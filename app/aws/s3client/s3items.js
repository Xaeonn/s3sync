/**
 * @file Contains the S3Items object that allowing for easy pagination and a
 * layer of isolation between the AWS.Response object and software using the
 * S3Client.
 *
 * @version 0.1
 * @author Sam Boles
 * @copyright 2016
 *
 */

/**
 * S3Client module for interacting with Amazon's Simple Storage Service (S3)
 * @memberof module:aws/s3client
 */

/**
* Provides a abstraction for a list of items in an s3 bucket
* @constructor
* @param {AWS~Response} data
*/
var S3Items = function(data) {
  this.directory = data.Prefix;
  this.files = data.Contents;
  this.folders = data.CommonPrefixes;
  this.bucket = data.Bucket;
  this.lastPage = data.IsTruncated;
  if (!this.lastPage){
    this.continuationToken = data.ContinuationToken;
  }
};

/**
* Runs a function on each file in the response
* @param {function} handle - function to handle each item
*/
S3Items.prototype.mapFiles = function(handle) {
  for (var k in this.files) {
    handle(this.files[k]);
  }
};

/**
* Runs a function on each folder in the response
* @param {function} handle - function to handle each item
*/
S3Items.prototype.mapFolders = function(handle) {
  for (var k in this.folders) {
    handle(this.folders[k]);
  }
};
