//
// Sync Directory
// Sam Boles
// October 2016
//

var fs = require('fs');

var SyncDir = function (path, s3Client, bucket, prefix) {
  this.path = path;
  this.bucket = bucket;
  this.s3Prefix = prefix;
  this.s3Client = s3Client;
};

SyncDir.prototype.init = function () {
  // TODO: Setup an fs.Watch on the directory and figure out the best way to run
  // the program in the backgroud when not opened in electron directly
};

SyncDir.prototype.sync = function () {
  this.uploadFiles();
};

//
SyncDir.prototype.status = function () {

};

// Go through files from the root sync directory and recursively call to sync
// subdirectories
SyncDir.prototype.uploadFiles = function(location='') {
  files = fs.readdirSync(this.path + location);
  console.debug(files);
  for (var k in files) {
    key = location + '/' + files[k];
    fullpath = this.path + key;
    console.debug(fullpath);
    stats = fs.statSync(fullpath);

    // If the key is a directory recursively call uploads
    if (stats.isDirectory()){
      this.uploadFiles(key);
    } else {
      this.uploadFile(fullpath, key);
    }
  }
};

// Read a file into a buffer then pass it to the S3Client to be uploaded
SyncDir.prototype.uploadFile = function(filepath, key) {
  file = fs.readFileSync(filepath);
  this.s3Client.UploadFile(this.bucket, file, this.s3Prefix + key);
};

module.exports = SyncDir;
