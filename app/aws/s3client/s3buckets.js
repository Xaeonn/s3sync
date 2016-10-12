//
//  S3Items
//  Sam Boles
//  October 2016
//

/**
 * S3Client module for interacting with Amazon's Simple Storage Service (S3)
 * @memberof module:aws/s3client
 */

/**
* Provides a abstraction for a list of s3 buckets
* @constructor
* @param {AWS~Response} data
*/
var S3Buckets = function(data) {
  this.buckets = [];
  for (var k in data.Buckets) {
    this.buckets.push(data.Buckets[k].Name);
  }
};

/**
* Runs a function on each bucket in the response
* @param {function} handle - function to handle each item
*/
S3Buckets.prototype.map = function(handle) {
  for (var k in this.buckets) {
    handle(this.buckets[k]);
  }
};
