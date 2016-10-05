//
// Sync Directory
// Sam Boles
// October 2016
//

var SyncDir = function (path, s3client, bucket, prefix) {
  this.directoryPath = path;
  this.bucket = bucket;
  this.s3Prefix = prefix;
  this.s3client = s3client;
};

SyncDir.prototype.init = function () {

};

SyncDir.prototype.sync = function () {

};

SyncDir.prototype.status = function () {

};

module.exports = SyncDir;
