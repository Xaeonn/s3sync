//
// Static Website Sync Directory
// Sam Boles
// October 2016
//

SyncDir = require('./syncdir');

var StaticSiteSyncDir = function (path, s3client, bucket, prefix,
                                  cloudfrontClient, route53client) {
  SyncDir.call(this, path, s3client, bucket, prefix);
  this.cloudfrontClient = cloudfrontClient;
  this.route53client = route53client;
};

StaticSiteSyncDir.prototype.init = function () {

};

module.exports = StaticSiteSyncDir;
