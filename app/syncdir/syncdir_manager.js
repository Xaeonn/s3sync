//
// SyncDir Manager
// Sam Boles
// October 2016
//

SyncDir = require('./SyncDir');
var fs = require('fs');

var SyncDirManager = function(s3Client) {
  this.s3Client = s3Client;
  this.dateFile = './data.json';
  // Try to read in existing syncs from file
  try {
    this.syncs = JSON.parse(fs.readFileSync(this.dataFile));
  } catch(err) {
    // if the read failed start without any syncs setup
    this.syncs = [];
  }
  this.SyncDirs = [];
  // Setup the SyncDir objects for each sync read in
  for (var k in this.syncs) {
    var sync = this.syncs[k];
    var sd = new SyncDir(sync.directory, s3Client, sync.bucket, sync.prefix);
    this.SyncDirs.push(sd);
  }
};

SyncDirManager.prototype.createSync = function(directory, bucket, prefix) {
  // setup the the SyncDir object and add it to the list of SyncDirs
  var sd = new SyncDir(directory, this.s3Client, bucket, prefix);
  this.SyncDirs.push(sd);

  // Add to the syncs object and write to disk for persistance
  var syncDetails = {
    type:'simple',
    directory:directory,
    bucket:bucket,
    prefix:prefix
  };
  this.syncs.push(syncDetails);
  this.updateStore();
};

SyncDirManager.prototype.updateStore = function() {
  fs.writeFileSync(this.dataFile, JSON.stringify(this.syncs));
};

module.exports = SyncDirManager;
