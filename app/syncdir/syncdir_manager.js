//
// SyncDir Manager
// Sam Boles
// October 2016
//

SyncDir = require('./SyncDir');
var fs = require('fs');

var SyncDirManager = function(s3Client) {
  this.s3Client = s3Client;
  this.dataFile = './data/syncs.json';
  this.configFile = './data/sync_config.json';
  // Try to read in existing syncs from file
  try {
    this.syncs = JSON.parse(fs.readFileSync(this.dataFile));
    this.config = JSON.parse(fs.readFileSync(this.configFile));
  } catch(err) {
    // if the read failed start without any syncs setup
    this.syncs = [];
    this.config = {IDCounter:1};
  }
  this.SyncDirs = [];

  // Setup the SyncDir objects for each sync read in
  for (var k in this.syncs) {
    var sync = this.syncs[k];
    var sd = new SyncDir(sync.directory, this.s3Client, sync.bucket,
                        sync.prefix, sync.id);
    this.SyncDirs.push(sd);
  }
};

SyncDirManager.prototype.createSync = function(directory, bucket, prefix) {
  // setup the the SyncDir object and add it to the list of SyncDirs
  var sd = new SyncDir(directory,
                      this.s3Client,
                      bucket,
                      prefix,
                      this.config.IDCounter);
  this.SyncDirs.push(sd);

  // Add to the syncs object and write to disk for persistance
  var syncDetails = {
    id:this.config.IDCounter,
    type:'simple',
    directory:directory,
    bucket:bucket,
    prefix:prefix
  };
  this.config.IDCounter++;
  this.syncs.push(syncDetails);
  this.updateStore();
  sd.sync();
};

SyncDirManager.prototype.updateStore = function() {
  fs.writeFileSync(this.dataFile, JSON.stringify(this.syncs));
  fs.writeFileSync(this.configFile, JSON.stringify(this.config));
};

SyncDirManager.prototype.runSync = function(id) {
  console.debug(id);
  sd = this.SyncDirs.find(x => x.ID === id);
  sd.sync();
};

module.exports = SyncDirManager;
